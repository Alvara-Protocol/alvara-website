import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

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

    return { alvara, alvrTokenSale, master, treasury, alice };
  }

  it('should initialize properly', async function () {
    const { alvara, alvrTokenSale } = await loadFixture(deployContractFixture);

    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(alvara.address);
  });

  it('should claim tokens', async function () {
    const { alvara, alvrTokenSale, alice, master, treasury } =
      await loadFixture(deployContractFixture);

    const decimals = '000000000000000000';

    alvara.transfer(alice.address, '10000000' + decimals);
    expect(await alvara.balanceOf(alice.address)).to.be.eq(
      '10000000' + decimals,
    );
    expect(await alvara.balanceOf(master.address)).to.be.eq('0');

    alvara.connect(alice).transfer(alvrTokenSale.address, '10000' + decimals);
    await alvrTokenSale.claimAdmin(alvara.address);

    expect(await alvara.balanceOf(master.address)).to.be.eq('10000' + decimals);
    expect(await alvara.balanceOf(alice.address)).to.be.eq(
      '9990000' + decimals,
    );

    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(treasury.address);
    await expect(
      alvrTokenSale.connect(alice).setTreasuryWallet(alice.address),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setTreasuryWallet(alice.address);
    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(alice.address);
  });

  // it('Should addVest', async function () {
  //   const { alvrTokenSale, alice, master } = await loadFixture(
  //     deployContractFixture,
  //   );

  //   const nonce = await alvrTokenSale.nonce(alice.address);

  //   const amountsETH: BigNumberish[] = [300, 200000, 300000];
  //   const amountsAlvr = amountsETH.map((a) => a);
  //   const vestAmount = amountsETH.reduce(
  //     (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
  //     0,
  //   );
  //   const message = utils.solidityKeccak256(
  //     ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
  //     [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
  //   );

  //   const signature = await master.signMessage(utils.arrayify(message));

  //   const { v, r, s } = splitSignature(signature);

  //   const _ = await alvrTokenSale
  //     .connect(alice)
  //     .addVest(amountsETH, amountsAlvr, v, r, s, {
  //       value: vestAmount,
  //     });
  // });

  // it('should revert addVest with modified amounts', async function () {
  //   const { alvrTokenSale, alice, master } = await loadFixture(
  //     deployContractFixture,
  //   );

  //   const nonce = await alvrTokenSale.nonce(alice.address);

  //   const amountsETH: BigNumberish[] = [300, 200000, 300000];
  //   const amountsAlvr = amountsETH.map((a) => a);
  //   const vestAmount = amountsETH.reduce(
  //     (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
  //     0,
  //   );

  //   // Get signature of input data
  //   const message = utils.solidityKeccak256(
  //     ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
  //     [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
  //   );
  //   const signature = await master.signMessage(utils.arrayify(message));

  //   const { v, r, s } = splitSignature(signature);

  //   const modifiedAmounts = ['0', '200', '300'];

  //   const result = alvrTokenSale
  //     .connect(alice)
  //     .addVest(amountsETH, modifiedAmounts, v, r, s, {
  //       value: vestAmount,
  //     });

  //   await expect(result).to.be.revertedWith('Invalid signature');
  // });

  // it('Should claim amounts', async function () {
  //   const { alvrTokenSale, alice, master, alvara } = await loadFixture(
  //     deployContractFixture,
  //   );

  //   const nonce = await alvrTokenSale.nonce(alice.address);

  //   const amountsETH: BigNumberish[] = [500, 2000, 3000];
  //   const amountsAlvr = amountsETH.map((a) => a);
  //   const vestAmount = amountsETH.reduce(
  //     (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
  //     0,
  //   );

  //   // Get signature of input data
  //   const message = utils.solidityKeccak256(
  //     ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
  //     [alice.address, vestAmount, amountsETH, amountsAlvr, nonce],
  //   );

  //   const signature = await master.signMessage(utils.arrayify(message));

  //   const { v, r, s } = splitSignature(signature);

  //   const _ = await alvrTokenSale
  //     .connect(alice)
  //     .addVest(amountsETH, amountsAlvr, v, r, s, {
  //       value: vestAmount,
  //     });

  //   // Transfer Alvara token to sale contract
  //   await alvara.connect(master).transfer(alvrTokenSale.address, 5000000);

  //   // This must failed before admin set claimable
  //   const failedReq = alvrTokenSale.connect(alice).claim();
  //   await expect(failedReq).to.be.revertedWith('Not Claimable');

  //   await alvrTokenSale.connect(master).setClaimable();

  //   await time.increaseTo(1665672980250);

  //   const claimableAmount = await alvrTokenSale.unclaimed(alice.address);

  //   await alvrTokenSale.connect(alice).claim();

  //   const aliceBalance = await alvara.balanceOf(alice.address);

  //   expect(aliceBalance).to.be.eq(claimableAmount);
  // });
});
