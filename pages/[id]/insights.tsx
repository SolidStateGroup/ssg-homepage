import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Page from '../../components/Page'; // we need this to make JSX compile
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import RNConversionSidebar from '../../components/RNConversionSidebar';
import RNConversionNavItem from '../../components/RNConversionNavItem';
import StatSlider from '../../components/StatSlider';
import ButtonHexagonSidebar from '../../components/ButtonHexagonSidebar';
import ProjectBlobImage from '../../components/ProjectBlobImage';
import { ButtonTextBack } from '../../components/base/forms/Button';
import { converstionSteps, useStep } from '../../common/converstion-steps';
import { useRouterData } from '../../common/useData';
import Insight from '../../components/Insight';

type ComponentType = {}

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    const { data } = useRouterData();
    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>

                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main">
                        <h1 className="text-light text-center pad-top-large pad-bottom-md mt-md-0 mt-5">Insights</h1>
                        <div className="fade-in-step col-md-5 offset-md-3 insights">
                            {data?.insights?.map((insight, i) => (
                                <div key={i} className="mb-5">
                                    <Insight key={i} index={i + 1} insight={insight}/>
                                </div>
                            ))}
                        </div>


                        {nav}


                    </main>
                </div>
            </div>


        </Page>
    );
};

export default TheComponent;
