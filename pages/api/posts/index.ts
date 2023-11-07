// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  title: string;
  subTitle: string;
};

const data = [
  {
    id: '1',
    title: 'How To Raise An Empathetic Child In A World Devoid Of Kindness',
    subTitle: 'my first blog post',
  },
  {
    id: '2',
    title: 'My First Blog Post',
    subTitle: 'my first blog post',
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data);
}
