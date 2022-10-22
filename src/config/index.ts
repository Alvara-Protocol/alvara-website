import { chain } from 'wagmi';

export const contractAddress = {
  [chain.mainnet.id]: '0x81d5Af2c2D2055C9Ae43AC1Ff60c442A4c39e0b4',
  [chain.goerli.id]: '0x69a18f76b6fd6E688B5eB59Fe1c0dd578a13D5b2',
};

export const tokenAddress = {
  [chain.mainnet.id]: '0x00000',
  [chain.goerli.id]: '0x61E63Eda892E416055eCa8AD29296e2E401064f7',
};

export const tokenPricesInUsd = [0.1, 0.075, 0.05];

export const CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID || `${chain.goerli.id}`,
);
