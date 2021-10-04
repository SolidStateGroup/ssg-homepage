import { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';
import { Prospect } from '../../../common/useData';
import admin from '../../../project/admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = admin.firestore();
    const ref = db.collection('clients').doc(req.query.target);
    const data:Prospect = {
        android_build_cost: 70000,
        android_monthly_cost: 15000,
        android_number_of_ratings: 4200,
        android_rating: 3.5,
        company: 'Fitness International, LLC',
        ios_build_cost: 70000,
        ios_monthly_cost: 15000,
        ios_number_of_ratings: 6000,
        ios_rating: 4,
        latest_release_date: moment().format('DD/MM/YYYY'),
        logo: 'https://st2.depositphotos.com/5271867/7754/v/950/depositphotos_77542188-stock-illustration-app-fitness-logo.jpg',
        release_date: moment().add(-18, 'months').format('DD/MM/YYYY'),
        releases_per_year: 5,
        years_roadmap: 10,
        title: '7 Fitness',
        insights: [
            {
                title: 'Users',
                text: '75% of your users are on iOS',
            },
            {
                title: 'Devices',
                text: 'Your Android devices are being neglected',
            },
        ],
        rebuild: [
            {
                name: 'Design',
                hours: 100,
                checked: true,
            },
            {
                name: 'UI Development',
                hours: 150,
                checked: true,
            },
            {
                name: 'Frontend Development',
                hours: 150,
                checked: true,
            },
        ],
    };
    ref.set(data)
        .then(() => {
            res.redirect(`/${req.query.target}/edit`);
        })
        .catch((e) => {
            res.status(200).json({ res: e });
        });
};
