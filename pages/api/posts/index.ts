// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PostServerService from '@/lib/services/Server/PostServerService';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  title: string;
  subTitle: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any[]>) {
  try {
    const posts = await PostServerService.getPosts();
    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
  }
}
