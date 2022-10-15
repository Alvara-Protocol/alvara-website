import { NextApiRequest, NextApiResponse } from 'next';

import { hbsptApi } from '@/service';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await hbsptApi.get('');
    res.status(200).json({ result });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
