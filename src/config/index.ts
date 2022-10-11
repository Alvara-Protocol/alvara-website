import { chain } from 'wagmi';

export const contractAddress = {
  [chain.mainnet.id]: '0x00000',
  [chain.ropsten.id]: '0x00000',
};

export const CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID || `${chain.ropsten.id}`,
);
