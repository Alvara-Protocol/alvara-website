import axios from 'axios';
import Joi from 'joi';
import type { NextApiRequest, NextApiResponse } from 'next';

const PORTAL_ID = '23145464';
const FORM_ID = 'bd0baec0-1d38-4047-820a-5d2ad917c36c';
const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

interface Response {
  success: boolean;
  error?: string;
}

export interface SubmitProps {
  firstName: string;
  lastName: string;
  email: string;
  telegram: string;
}

const submitSchema = Joi.object<SubmitProps>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  telegram: Joi.string().required(),
});

export default async function hbspt(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const { error, value } = submitSchema.validate(req.body);

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
