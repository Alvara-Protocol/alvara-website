import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';

import { BSCSCAN_API_KEY, ChainId, NetworkConfig } from './network.config';

const config = {
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
    bsctest: {
      url: NetworkConfig[ChainId.BSC_TEST].url,
      chainId: ChainId.BSC_TEST,
      accounts: [NetworkConfig[ChainId.BSC_TEST].privateKey],
      timeout: 100000,
    },
    bscmain: {
      url: NetworkConfig[ChainId.BSC_MAIN].url,
      chainId: ChainId.BSC_MAIN,
      accounts: [NetworkConfig[ChainId.BSC_MAIN].privateKey],
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
