import { AlvrTokenSale, AlvrTokenSale__factory } from '@alvara/presale';
import { useContract, useProvider } from 'wagmi';

export default function usePresaleContract() {
  const provider = useProvider();
  const contract: AlvrTokenSale = useContract({
    addressOrName: '0x0000000',
    contractInterface: AlvrTokenSale__factory.createInterface(),
    signerOrProvider: provider,
  });

  return contract;
}
