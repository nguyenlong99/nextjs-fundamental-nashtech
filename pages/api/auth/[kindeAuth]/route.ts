import { NextApiRequest, NextApiResponse } from 'next';
import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any[]>) {
  const endpoint = req.query.kindeAuth?.toString();
  return handleAuth(req, endpoint);
}
