import React, { FunctionComponent } from 'react';
import Page from '../../components/Page'; // we need this to make JSX compile
import RNConversionSidebar from '../../components/RNConversionSidebar';
import { useStep } from '../../common/converstion-steps';
import { useRouterData } from '../../common/useData';
import CardBuildCosts from '../../components/CardBuildCosts';

type ComponentType = {}
const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    const { meta } = useRouterData();
    const months = 12 * meta?.years_roadmap;

    const projectedCosts = (meta?.android_monthly_cost * months) + (meta?.ios_monthly_cost * months);

    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">
            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>
                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main">
                        {/*<div className="flex-row flex-column rncc__main-container">*/}
                            <div className="offset-md-2 col-md-8">
                                <h1 className="text-light text-center pad-top-xl">Projected costs for your native apps</h1>
                                <p className="text-light text-center mb-4">Monthly costs over multiple codebases can really add up. They include:</p>

                                <CardBuildCosts>
                                    <ul className="text-light fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-times-hexagon text-red"></i></span>Cost of developers time over 2 separate teams
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-times-hexagon text-red"></i></span>Indirect costs for developers, training, desk space, power, perks
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-times-hexagon text-red"></i></span>Cost of testing multiple apps
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-times-hexagon text-red"></i></span>Cost of fixing bugs in separate apps
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-times-hexagon text-red"></i></span>Opportunity cost for extended time for releasing new features
                                        </li>
                                    </ul>
                                </CardBuildCosts>

                                <p className="text-light text-center mt-5 mb-0">Based only on the monthly maintenance costs for both iOS and Android, your projected total cost of the next 10 years is:</p>
                                <h2 className="hero__title--large hero__title--red text-center">{meta ? Utils.money(projectedCosts) : '...'}</h2>
                            </div>

                        {nav}
                        {/*</div>*/}
                    </main>
                </div>
            </div>
        </Page>
    );
};

export default TheComponent;
