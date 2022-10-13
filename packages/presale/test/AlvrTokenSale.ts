import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { utils } from 'ethers';
import { ethers } from 'hardhat';

import { Alvara, AlvrTokenSale } from '../typechain-types';
import { splitSignature } from '../utils/sign';

describe('Alvara Token contract', function () {
  let master: SignerWithAddress,
    treasury: SignerWithAddress,
    alice: SignerWithAddress;
  let preSaleContract: AlvrTokenSale;
  let alvaraToken: Alvara;

  before(async function () {
    [master, treasury, alice] = await ethers.getSigners();

    const _alvaraToken = await ethers.getContractFactory('Alvara');

    alvaraToken = await _alvaraToken.deploy();

    const _preSaleContract = await ethers.getContractFactory('AlvrTokenSale');

    preSaleContract = await _preSaleContract.deploy(
      alvaraToken.address,
      treasury.address,
      master.address,
    );

    await preSaleContract.connect(master).setOptionRange(0, 50, 500);
  });

  it('Should addVest', async function () {
    const vestAmount = 500;

    const nonce = await preSaleContract.nonce(alice.address);

    const message = utils.solidityPack(
      ['address', 'uint256', 'uint256'],
      [alice.address, vestAmount, nonce],
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const _ = await preSaleContract
      .connect(alice)
      .addVest(['500', '0', '0'], ['500', '0', '0'], v, r, s, {
        value: vestAmount,
      });
  });

  it('should Claim', async function () {
    // TODO
  });
});
