import { NextApiRequest, NextApiResponse } from 'next';

import { fetchETHPrice } from '@/service';

export let ethPrice: number | undefined = undefined;

export async function updateEthBalance() {
  try {
    ethPrice = await fetchETHPrice();
  } catch (error: any) {
    ethPrice = 1313.63;
  }
}

let timer: NodeJS.Timeout;

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!ethPrice) {
      await updateEthBalance();
      if (timer === undefined) timer = setInterval(updateEthBalance, 20000);
      return res.status(200).json({ result: ethPrice });
    } else {
      return res.status(200).json({ result: ethPrice });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
