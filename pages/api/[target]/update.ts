import { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';
import { Prospect } from '../../../common/useData';
import admin from '../../../project/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = admin.firestore();
    const ref = db.collection('clients').doc(req.query.target);
    const target = process.env.AUTH;
    if (req.body?.auth !== target) {
        res.status(401).json({});
        return;
    }
    ref.set(req.body.data)
        .then(() => {
            res.status(200).json({ });
        })
        .catch((e) => {
            res.status(200).json({ res: e });
        });
};
