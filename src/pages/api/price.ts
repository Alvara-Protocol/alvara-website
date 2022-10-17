import { NextApiRequest, NextApiResponse } from 'next';

import { fetchETHPrice } from '@/service';

let ethPrice: number | undefined = undefined;

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!ethPrice) {
      const result = await fetchETHPrice();
      setInterval(async () => {
        ethPrice = await fetchETHPrice();
      }, 2000);
      return res.status(200).json({ result });
    } else {
      return res.status(200).json({ result: ethPrice });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
