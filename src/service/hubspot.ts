import axios from 'axios';

const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

export const hbsptApi = axios.create({
  baseURL: 'https://api.hsforms.com/',
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
});
