import { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../../project/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = admin.firestore();
    const ref = db.collection('clients').doc(req.query.target);
    ref.get()
        .then((d) => {
            const ref2 = db.collection('clients').doc(req.query.newTarget);
            ref2.set({
              ...d.data(),
              title: req.query.newTarget
            })
                .then(() => {
                    res.status(200).json({});
                });
        });
};
