import { AlvrTokenSale, AlvrTokenSale__factory } from '@alvara/presale';
import { useContract, useSigner } from 'wagmi';

import { CHAIN_ID, contractAddress } from '@/config';

export default function usePresaleContract() {
  const { data: signer } = useSigner();

  const contract: AlvrTokenSale = useContract({
    addressOrName: contractAddress[CHAIN_ID],
    contractInterface: AlvrTokenSale__factory.createInterface(),
    signerOrProvider: signer,
  });

  return contract;
}
