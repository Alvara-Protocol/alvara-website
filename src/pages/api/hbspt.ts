import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { subscribeSchema } from '@/views/Presale/Subscribe';

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.HUBSPOT_FORM_ID;
const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

interface Response {
  success: boolean;
  error?: string;
}

export default async function hbspt(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const { error, value } = subscribeSchema.validate(req.body);

  if (error || !value) {
    return res.status(400).json({ success: false, error: error.message });
  }

  try {
    const fields = Array.from(Object.entries(value).values()).map(
      ([name, value]) => ({ name, value }),
    );
    await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/secure/submit/${PORTAL_ID}/${FORM_ID}`,
      { fields },
      { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } },
    );
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
    }

    return res.status(500).json({ success: false });
  }

  res.status(200).json({ success: true });
}
