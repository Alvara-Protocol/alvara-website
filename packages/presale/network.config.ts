export const ChainId = {
  BSC_TEST: 97,
  BSC_MAIN: 56,
};

export const NetworkConfig = {
  [ChainId.BSC_TEST]: {
    url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    privateKey:
      '4bed6d19a130e83f753b6303afa6c2fdfe3cdd16031563b5a5cdac548b7e870a',
  },
  [ChainId.BSC_MAIN]: {
    url: 'https://bsc-dataseed2.binance.org/',
    privateKey:
      '4bed6d19a130e83f753b6303afa6c2fdfe3cdd16031563b5a5cdac548b7e870a',
  },
};

export const ETHERSCAN_API_KEY = '3HIYHZ6DD8RK6YEFMRVRTCESD1JF76BTFQ';
export const BSCSCAN_API_KEY = '4EVZ2AM6KKRRZTZPGRQ77B97SE75FUSCRA';
