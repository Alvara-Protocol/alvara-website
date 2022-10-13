import { loadFixture, time } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { BigNumber, BigNumberish, utils } from 'ethers';
import { ethers } from 'hardhat';

import { splitSignature } from '../utils/sign';

describe('Alvara Token contract', function () {
  async function deployContractFixture() {
    const [master, treasury, alice] = await ethers.getSigners();

    const Alvara = await ethers.getContractFactory('Alvara');

    const alvara = await Alvara.deploy();

    const AlvrTokenSale = await ethers.getContractFactory('AlvrTokenSale');

    const alvrTokenSale = await AlvrTokenSale.deploy(
      alvara.address,
      treasury.address,
      master.address,
    );

    await alvrTokenSale.connect(master).setOptionRange(0, 50, 500);

    return { alvara, alvrTokenSale, master, treasury, alice };
  }

  it('Should addVest', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amountsETH: BigNumberish[] = [500, 200, 300];
    const amountsAlvr = amountsETH.map((a) => a);
    const vestAmount = amountsETH.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      0,
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const _ = await alvrTokenSale
      .connect(alice)
      .addVest(amountsETH, amountsAlvr, v, r, s, {
        value: vestAmount,
      });
  });

  it('should revert addVest with modified amounts', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amountsETH: BigNumberish[] = [500, 200, 300];
    const amountsAlvr = amountsETH.map((a) => a);
    const vestAmount = amountsETH.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      0,
    );

    // Get signature of input data
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const modifiedAmounts = ['0', '200', '300'];

    const result = alvrTokenSale
      .connect(alice)
      .addVest(amountsETH, modifiedAmounts, v, r, s, {
        value: vestAmount,
      });

    await expect(result).to.be.revertedWith('Invalid signature');
  });

  it('Should claim amounts', async function () {
    const { alvrTokenSale, alice, master, alvara } = await loadFixture(
      deployContractFixture,
    );

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amountsETH: BigNumberish[] = [500, 2000, 3000];
    const amountsAlvr = amountsETH.map((a) => a);
    const vestAmount = amountsETH.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      0,
    );

    // Get signature of input data
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const _ = await alvrTokenSale
      .connect(alice)
      .addVest(amountsETH, amountsAlvr, v, r, s, {
        value: vestAmount,
      });

    // Transfer Alvara token to sale contract
    await alvara.connect(master).transfer(alvrTokenSale.address, 5000000);

    // This must failed before admin set claimable
    const failedReq = alvrTokenSale.connect(alice).claim();
    await expect(failedReq).to.be.revertedWith('Not Claimable');

    await alvrTokenSale.connect(master).setClaimable();

    await time.increaseTo(1665672980250);

    const claimableAmount = await alvrTokenSale.unclaimed(alice.address);

    await alvrTokenSale.connect(alice).claim();

    const aliceBalance = await alvara.balanceOf(alice.address);

    expect(aliceBalance).to.be.eq(claimableAmount);
  });
});
