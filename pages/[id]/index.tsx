import React, { FunctionComponent, useEffect, useState } from 'react'; // we need this to make JSX compile
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import StatSlider from '../../components/StatSlider';
import Page from '../../components/Page';
import useData, { useRouterData } from '../../common/useData';
import { useStep } from '../../common/converstion-steps';

type ComponentType = {}

const minMonthly = 2000;
const maxMonthly = 100000;

const minTotal = 20000;
const maxTotal = 2000000;
const monthlyStep = 100;
const totalStep = 10000;

const TheComponent: FunctionComponent<ComponentType> = () => {
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
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">
            <div className="rncc__bg pb-5">
                <Header className="navbar-container--transparent"/>
                <div className="container">
                    <h1 className="text-light mt-5 mb-0">
                      Your App
                    </h1>
                  (
                    { data
                    && (
                    <div className="fade-in">
                        <div className="row pl-3 mt-5 pb-5">
                            <div style={{ height: 237 }} className="col-md-3 pl-0">
                                {data && (
                                <img
                                  className="rncc__app-icon"
                                  src={data?.logo}
                                />
                                )}

                            </div>
                            <div className="col-md-9 pl-0 mb-2">
                                <h2 className="text-light">{data?.title}</h2>
                                <p className="text-light">{data?.company}</p>
                                <div className="row">
                                    <div className="col-md-7">

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
                                    <div className="col-md-5">
                                        <p className="text-light mb-0"><strong>First released:</strong> {data && moment(data?.release_date, 'dd/MM/YYYY').format('Do MMMM YYYY')}</p>
                                        <p className="text-light mb-0"><strong>Latest release:</strong> {data && moment(data?.latest_release_date, 'dd/MM/YYYY').format('Do MMMM YYYY')}</p>
                                        <p className="text-light"><strong>Average releases per year:</strong> 4.2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 pb-5">
                            <div className="col-md-5 mb-4 pl-0">
                                <CardBuildCosts
                                  className="card-build-costs__google" cardTitle={'Android Build Costs\n'
                          + '(Over 2 Years)'}
                                >
                                    <StatSlider
                                      subTitle="Development Costs"
                                      title={Utils.money(meta?.android_build_cost)}
                                      onChange={v => setMeta('android_build_cost', parseInt(v))}
                                      value={meta?.android_build_cost}
                                      min={minTotal}
                                      step={totalStep}
                                      max={maxTotal}
                                    />
                                    <StatSlider
                                      className="mt-4"
                                      subTitle="Monthly Maintenance Costs"
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
                                  className="card-build-costs__ios" cardTitle={'iOS Build Costs\n'
                          + '(Over 2 Years)'}
                                >
                                    <StatSlider
                                      subTitle="Development Costs"
                                      title={Utils.money(meta?.ios_build_cost)}
                                      onChange={v => setMeta('ios_build_cost', parseInt(v))}
                                      value={meta?.ios_build_cost}
                                      min={minTotal}
                                      step={totalStep}
                                      max={maxTotal}
                                    />
                                    <StatSlider
                                      className="mt-4"
                                      subTitle="Monthly Maintenance Costs"
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

                        <div className="col-md-4 offset-md-4 text-center mt-5 pb-5">
                            <p className="text-light mb-0">Based on the values above, since release your app has cost:</p>
                            <h1 className="hero__title text-light">{data && Utils.money(totalCost)}</h1>
                            <p className="text-light mb-0 text-small"><span className="text-primary"> *</span> Information based on our own estimates and research</p>
                            <Link href={`${id}/projected`}>
                                <ButtonPrimary className="mt-4">Next</ButtonPrimary>
                            </Link>
                        </div>


                    </div>
                    )
                  }
                    )

                </div>
            </div>

        </Page>
    );
};

export default TheComponent;
