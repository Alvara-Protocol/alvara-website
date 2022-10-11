import { WagmiConfig } from 'wagmi';

import { client } from '@/lib/web3/wagmi';

export default function Providers({ children }: React.PropsWithChildren) {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}
