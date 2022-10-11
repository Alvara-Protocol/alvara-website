import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';

import { Alvara, AlvrTokenSale } from '../typechain-types';

describe('Alvara Token contract', function () {
  let master: SignerWithAddress, treasury: SignerWithAddress;
  let preSaleContract: AlvrTokenSale;
  let alvaraToken: Alvara;

  before(async function () {
    [master, treasury] = await ethers.getSigners();

    const _alvaraToken = await ethers.getContractFactory('Alvara');

    alvaraToken = await _alvaraToken.deploy();

    const _preSaleContract = await ethers.getContractFactory('AlvrTokenSale');

    preSaleContract = await _preSaleContract.deploy(
      alvaraToken.address,
      treasury.address,
      master.address,
    );
  });

  it('Should pass verify', async function () {
    console.log(preSaleContract.address);
  });
});
