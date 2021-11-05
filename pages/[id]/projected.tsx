import React, { FunctionComponent } from 'react';
import Page from '../../components/Page'; // we need this to make JSX compile
import RNConversionSidebar from '../../components/RNConversionSidebar';
import { useStep } from '../../common/converstion-steps';
import { useRouterData } from '../../common/useData';

type ComponentType = {}
const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    const { meta } = useRouterData();
    const months = 12 * meta?.years_roadmap;

    const projectedCosts = (meta?.android_monthly_cost * months) + (meta?.ios_monthly_cost * months)

    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">
            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>
                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main">
                        <h1 className="text-light text-center pad-top-xl">Projected costs</h1>
                        <h2 className="hero__title--large hero__title--red text-center">{meta ? Utils.money(projectedCosts) : '...'}</h2>
                        <p className="text-light text-center">Total cost of ownership over the next <strong>{meta?.years_roadmap}</strong> year{meta?.years_roadmap !== 1 && 's'}</p>
                        {nav}
                    </main>
                </div>
            </div>
        </Page>
    );
};

export default TheComponent;
