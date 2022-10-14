import axios from 'axios';

interface ETHPriceResponse {
  ethereum: {
    usd: number;
  };
}

export const fetchETHPrice = async () => {
  const { data } = await axios.get<ETHPriceResponse>(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  );
  return data.ethereum.usd;
};
