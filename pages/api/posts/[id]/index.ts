// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PostServerService from '@/lib/services/Server/PostServerService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const post = await PostServerService.getPostById(req.query.id as string);
    res.status(200).json(post);
  } catch (e: any) {
    console.error(e);
    if (e.name === 'BSONError') return res.status(404).json({ message: 'Invalid id' });
    res.status(500).json({ message: 'System error' });
  }
}
