import { AlvrTokenSale, AlvrTokenSale__factory } from '@alvara/presale';
import { chain, useContract, useSigner } from 'wagmi';

import { provider } from '@/lib/web3/wagmi';

import { CHAIN_ID, contractAddress } from '@/config';

export default function usePresaleContract() {
  const { data: signer } = useSigner();
  const isSSR = typeof window === undefined ? true : false;

  const contract: AlvrTokenSale = useContract({
    addressOrName: contractAddress[CHAIN_ID],
    contractInterface: AlvrTokenSale__factory.createInterface(),
    signerOrProvider: isSSR ? provider({ chainId: chain.goerli.id }) : signer,
  });

  return contract;
}
