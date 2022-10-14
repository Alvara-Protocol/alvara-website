import { ethers } from 'hardhat';

async function deployAlvara() {
  const Alvara = await ethers.getContractFactory('Alvara');
  const alvara = await Alvara.deploy();

  await alvara.deployed();

  console.log(`Alvara deployed to ${alvara.address}`);
  return alvara;
}

async function main() {
  const [master] = await ethers.getSigners();
  const AlvrTokenSale = await ethers.getContractFactory('AlvrTokenSale');

  // const alvara = await deployAlvara();

  const alvrTokenSale = await AlvrTokenSale.deploy(
    '0x61E63Eda892E416055eCa8AD29296e2E401064f7',
    '0xE30a87e4a5d8b3685D3151D4516213D72C427012',
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
