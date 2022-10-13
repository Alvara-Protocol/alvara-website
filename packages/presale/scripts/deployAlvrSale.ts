import { ethers } from 'hardhat';

async function deployAlvara() {
  const Alvara = await ethers.getContractFactory('Alvara');
  const alvara = await Alvara.deploy();

  await alvara.deployed();

  console.log(`Alvara deployed to ${alvara.address}`);
  return alvara;
}

async function main() {
  const [master, treasury] = await ethers.getSigners();
  const AlvrTokenSale = await ethers.getContractFactory('AlvrTokenSale');

  const alvara = await deployAlvara();

  const alvrTokenSale = await AlvrTokenSale.deploy(
    alvara.address,
    treasury.address,
    master.address,
  );

  await alvrTokenSale.deployed();

  console.log(`AlvrTokenSale deployed to ${alvrTokenSale.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
