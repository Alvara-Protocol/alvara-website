import { chain } from 'wagmi';

export const contractAddress = {
  [chain.mainnet.id]: '0x00000',
  [chain.goerli.id]: '0x4415BBA8e96bBDc67CF32488d46F2C4D2bE02cb4',
};

export const tokenAddress = {
  [chain.mainnet.id]: '0x00000',
  [chain.goerli.id]: '0x61E63Eda892E416055eCa8AD29296e2E401064f7',
};

export const tokenPricesInUsd = [0.1, 0.075, 0.05];

export const CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID || `${chain.goerli.id}`,
);
