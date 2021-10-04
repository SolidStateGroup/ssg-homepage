import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const target = process.env.AUTH;
    if (req.body?.auth === target) {
        res.status(200).json({});
    } else {
        res.status(401).json({});
    }
};
