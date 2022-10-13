import { config } from 'dotenv';

config();

export const ChainId = {
  MAINNET: 1,
  GOERLI: 5,
};

export const NetworkConfig = {
  [ChainId.MAINNET]: {
    url: 'https://mainnet.infura.io/v3/',
    privateKey: process.env.PRIVATE_KEY || '',
  },
  [ChainId.GOERLI]: {
    url: 'https://goerli.infura.io/v3/',
    privateKey: process.env.PRIVATE_KEY || '',
  },
};

export const ETHERSCAN_API_KEY = '3HIYHZ6DD8RK6YEFMRVRTCESD1JF76BTFQ';
export const BSCSCAN_API_KEY = '4EVZ2AM6KKRRZTZPGRQ77B97SE75FUSCRA';
