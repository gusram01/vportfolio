import { NowRequest, NowResponse } from '@vercel/node';
import { data } from '../utils';

export default async (request: NowRequest, response: NowResponse) => {
  const today = new Date().toLocaleString();

  response.status(200).json({
    ok: true,
    data,
    date: today,
  });
};
