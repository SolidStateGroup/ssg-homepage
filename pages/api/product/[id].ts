import { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';
import _data from '../../../common/utils/_data';
import { App, AppsFigures, AppsFiguresResponse, ExactProduct } from '../../../common/types';
import { Prospect } from '../../../common/useData';
import admin from '../../../project/admin';
import Format from '../../../common/utils/base/_format'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    _data.get(`https://explorer.appfigures.com/data/profiles/product/${req.query.id}`)
        .then((data:AppsFigures) => {
            const response:AppsFiguresResponse = {
                ios: null,
                android: null,
                developer: data.developer,
                icon: data.exact_products?.[0]?.icon,
                name: data.name,
            };


            Promise.all((data.exact_products.concat([{ id: req.query.id, store: data.storefront }])).map((exactProduct) => {
                return _data.get(`https://explorer.appfigures.com/data/profiles/product/${exactProduct.id}/details`)
                    .then((v:App) => {
                        let key;
                        if (exactProduct.store.includes('apple') || exactProduct.store.includes('ios')) {
                            key = 'ios';
                        }
                        if (exactProduct.store.includes('google') || exactProduct.store.includes('android')) {
                            key = 'android';
                        }
                        response[key || exactProduct.store] = v;
                    });
            })).then(() => {
                const androidRating = response.android?.rating?.stars || 0;
                const iosRating = response.ios?.rating?.stars || 0;
                const prospect:Prospect = {
                    android_build_cost: 70000,
                    android_monthly_cost: 15000,
                    android_number_of_ratings: response.android?.rating?.count || 0,
                    android_rating: androidRating,
                    company: response.developer,
                    ios_build_cost: 70000,
                    ios_monthly_cost: 15000,
                    ios_number_of_ratings: response.ios?.rating?.count || 0,
                    ios_rating: iosRating,
                    latest_release_date: moment(response.ios?.updated_date || response.android?.updated_date).format('DD/MM/YYYY'),
                    logo: response.icon,
                    release_date: moment(response.ios?.release_date || response.android?.release_date).format('DD/MM/YYYY'),
                    releases_per_year: 5,
                    years_roadmap: 10,
                    title: response.name,
                    insights: [
                        {
                            title: 'Rating',
                            text: iosRating > androidRating ? `Your iOS app is rated higher at ${iosRating} compared to Android with a rating of ${androidRating}` : `Your Android app is rated higher at ${androidRating} compared to Android with a rating of ${iosRating}}`,
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
                const db = admin.firestore();
                const name = Format.removeAccents(response.name);
                const ref = db.collection('clients').doc(name);

                ref.set(prospect)
                    .then(() => {
                        res.redirect(`/${name}/edit`);
                    })
                    .catch((e) => {
                        res.status(200).json({ res: 'error' });
                    });
            }).catch((e) => {
                res.status(500);
                res.json({ error: e });
            });
        })
        .catch((e) => {
            res.status(500);
            res.json({ error: e });
        });
};
