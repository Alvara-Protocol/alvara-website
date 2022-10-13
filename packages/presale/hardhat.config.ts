import { HardhatUserConfig } from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';

import { BSCSCAN_API_KEY, ChainId, NetworkConfig } from './network.config';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    ethereum: {
      url: NetworkConfig[ChainId.MAINNET].url,
      chainId: ChainId.MAINNET,
      accounts: [NetworkConfig[ChainId.MAINNET].privateKey],
      timeout: 100000,
    },
    goerli: {
      url: NetworkConfig[ChainId.GOERLI].url,
      chainId: ChainId.GOERLI,
      accounts: [NetworkConfig[ChainId.GOERLI].privateKey],
      timeout: 100000,
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },
};

export default config;
