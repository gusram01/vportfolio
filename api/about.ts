import { NowRequest, NowResponse } from '@vercel/node';
import { connectDB } from '../utils';

export default async (request: NowRequest, response: NowResponse) => {
  const { db } = await connectDB();
  const today = new Date().toLocaleString();

  const data = await db.collection('users').find({}).toArray();

  response.status(200).json({
    ok: true,
    data,
    date: today,
  });
};
