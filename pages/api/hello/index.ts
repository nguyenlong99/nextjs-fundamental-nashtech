import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    res.status(200).json({ hello: 'world' });
  } catch (e) {
    console.error(e);
  }
}
