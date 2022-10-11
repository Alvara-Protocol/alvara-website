import { ethers } from 'hardhat';

import { LOCK_CONTRACT_ADDRESS } from './config';

async function main() {
  const lockContract = await ethers.getContractAt(
    'LockContract',
    LOCK_CONTRACT_ADDRESS,
  );
  await lockContract.setEndTime(1663200000);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
