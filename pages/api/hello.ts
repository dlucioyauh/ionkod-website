// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Olá, mundo!' });
};

export default handler;
