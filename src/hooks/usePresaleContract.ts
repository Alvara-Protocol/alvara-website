import { AlvrTokenSale, AlvrTokenSale__factory } from '@alvara/presale';
import { useContract, useProvider } from 'wagmi';

import { CHAIN_ID, contractAddress } from '@/config';

export default function usePresaleContract() {
  const provider = useProvider();
  const contract: AlvrTokenSale = useContract({
    addressOrName: contractAddress[CHAIN_ID],
    contractInterface: AlvrTokenSale__factory.createInterface(),
    signerOrProvider: provider,
  });

  return contract;
}
