import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link'; // we need this to make JSX compile
import useData from '../common/useData';
import { useStep } from '../common/converstion-steps';
import Header from './Header';
import StarRatingListItem from './StartRatingListItem';
import CardBuildCosts from './CardBuildCosts';
import StatSlider from './StatSlider';

type ComponentType = {}

const minMonthly = 2000;
const maxMonthly = 100000;

const minTotal = 20000;
const maxTotal = 2000000;
const monthlyStep = 100;
const totalStep = 10000;
const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const r = useRouter();
    const id = r.query.id;
    const {
        data,
        setMeta,
        meta,
        totalCost,
    } = useData(id, () => r.replace('/404'));
    useStep();

    return (
        <div className="rncc__bg pb-5">
            <Header className="navbar-container--transparent"/>
            <div className="container">
                <h1 className="text-light mt-5 mb-0">
                  Your Native Apps
                </h1>
        (
                { data
        && (
        <div className="fade-in">
            <div className="row pb-5">
                <div className="col-md-2 pl-4 pr-md-5">
                    {data && (
                    <img
                      className="rncc__app-icon"
                      src={data?.logo}
                    />
                    )}

                </div>
                <div className="col-md-10 mb-2 pl-md-5">
                    <h2 className="text-light mb-0">{data?.title}</h2>
                    <p className="text-light">{data?.company}</p>
                    <div className="row">
                        <div className="col-md-6">

                            <StarRatingListItem
                              starRating={data?.ios_rating}
                              numberOfRatings={data?.ios_number_of_ratings}
                              className="mt-3"
                              ratingClassName="pl-3"
                              filled icon="fab fa-app-store-ios"
                            />

                            <StarRatingListItem
                              starRating={data?.android_rating}
                              numberOfRatings={data?.android_number_of_ratings}
                              className="mt-3"
                              ratingClassName="pl-3"
                              filled={false} icon="fab fa-google-play"
                            />

                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <p className="text-light mb-0 text-large"><strong>First released:</strong> {data && moment(data?.release_date, 'dd/MM/YYYY').format('Do MMMM YYYY')}</p>
                            <p className="text-light mb-0 text-large"><strong>Latest release:</strong> {data && moment(data?.latest_release_date, 'dd/MM/YYYY').format('Do MMMM YYYY')}</p>
                            <p className="text-light text-large"><strong>Average releases per year:</strong> 4.2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-5">
                <p className="text-light">Your app is actually two apps. One made for iPhones and ipads (iOS) and one made for Android phones and tablets. Creating and maintaining multiple apps is expensive, or at least it used to be until recently. Let us show you how you could save thousands by switching technologies to React Native and maintaining only one codebase.</p>
            </div>
            <div className="pb-4">
                <h5 className="text-light">Estimated cost of your Apps</h5>
                <p className="text-light">We've estimated the initial build and ongoing maintenance cost of your existing apps.  If this is incorrect, please adjust each value to reflect the real costs.</p>
            </div>
            <div className="row mt-3">
                <div className="col-md-5 mb-4 pl-0">
                    <CardBuildCosts
                      className="card-build-costs__google" cardTitle="Android Build Costs"
                    >
                        <StatSlider
                          subTitle="Initial build cost"
                          title={Utils.money(meta?.android_build_cost)}
                          onChange={v => setMeta('android_build_cost', parseInt(v))}
                          value={meta?.android_build_cost}
                          min={minTotal}
                          step={totalStep}
                          max={maxTotal}
                        />
                        <StatSlider
                          className="mt-4"
                          subTitle="Monthly development cost"
                          title={Utils.money(meta?.android_monthly_cost)}
                          onChange={v => setMeta('android_monthly_cost', parseInt(v))}
                          value={meta?.android_monthly_cost}
                          min={minMonthly}
                          step={monthlyStep}
                          max={maxMonthly}
                        />
                    </CardBuildCosts>
                </div>
                <div className="col-md-5 mb-4 offset-md-1">
                    <CardBuildCosts
                      className="card-build-costs__ios" cardTitle="iOS Build Costs"
                    >
                        <StatSlider
                          subTitle="Initial build cost"
                          title={Utils.money(meta?.ios_build_cost)}
                          onChange={v => setMeta('ios_build_cost', parseInt(v))}
                          value={meta?.ios_build_cost}
                          min={minTotal}
                          step={totalStep}
                          max={maxTotal}
                        />
                        <StatSlider
                          className="mt-4"
                          subTitle="Monthly development cost"
                          title={Utils.money(meta?.ios_monthly_cost)}
                          onChange={v => setMeta('ios_monthly_cost', parseInt(v))}
                          value={meta?.ios_monthly_cost}
                          min={minMonthly}
                          step={monthlyStep}
                          max={maxMonthly}
                        />
                    </CardBuildCosts>
                </div>
            </div>

            <div className="col-md-8 offset-md-2 text-center mt-5 pb-5">
                {/*<p className="text-light mb-0">Based on the values above, since release your native apps have cost:</p>*/}
                <h1 className="text-light text-center">Based on the values above, since release your native apps have cost:</h1>
                <h2 className="hero__title--large hero__title--red text-center">{data && Utils.money(totalCost)}</h2>
                <Link href={`${id}/projected`}>
                    <ButtonPrimary className="mt-4 btn-lg">Next</ButtonPrimary>
                </Link>
                <p className="text-light mt-3 text-small">Estimates based on data from Google Play and Apple Apps store. Data is stored securely and is not shared with any external parties.</p>
            </div>


        </div>
        )
        }
        )

            </div>
        </div>
    );
};

export default TheComponent;
