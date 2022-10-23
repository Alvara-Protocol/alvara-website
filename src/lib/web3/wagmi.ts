import memoize from 'lodash/memoize';
import { chain, configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const CHAINS = [chain.mainnet, chain.goerli];
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY

export const { provider, chains } = configureChains(CHAINS, [
  alchemyProvider({ apiKey: ALCHEMY_API_KEY }),
  publicProvider(),
]);

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'Alvara',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
});

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
});

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
  ],
});

export const CHAIN_IDS = chains.map((c) => c.id);

export const isChainSupported = memoize((chainId: number) =>
  CHAIN_IDS.includes(chainId),
);

export const isChainTestnet = memoize(
  (chainId: number) => chains.find((c) => c.id === chainId)?.testnet,
);
