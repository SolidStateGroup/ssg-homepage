import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switch from 'rc-switch';
import cx from 'classnames';
import Page from '../../components/Page'; // we need this to make JSX compile
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import RNConversionSidebar from '../../components/RNConversionSidebar';
import ProjectBlobImage from '../../components/ProjectBlobImage';
import { useStep } from '../../common/converstion-steps';
import CostPanel from '../../components/CostPanel';
import { useRouterData } from '../../common/useData';

type ComponentType = {}

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    const { meta, setMeta, totalDevelopmentHours, totalDevelopmentCost } = useRouterData();

    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>

                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main">
                        <div className="offset-md-3 col-md-6">
                            <h1 className="text-light text-center pad-top-large mt-md-0 mt-5 mb-0">Redevelopment cost estimate</h1>
                            <h2 className="hero__title--large hero__title--primary text-center">{Utils.money(totalDevelopmentCost)}</h2>
                            <p className="text-light text-center mt-5">The cost estimates below show high level figures to rewrite each feature of your apps in React Native. Use the toggles to customise the app to only the features you would need.</p>
                        </div>
                        <div className="container mt-5 mb-5">
                            <div className="pb-5">
                                <CostPanel title="React Native Rebuild" headerRight={<div className="tag tag--grey">{totalDevelopmentHours} Hours</div>}>
                                    {meta?.rebuild?.map((v, i) => (
                                        <div className={cx('flex-row', i !== meta.rebuild.length - 1 && 'mb-5')}>
                                            <div className="col-md-6">
                                                <span className="text-light">
                                                    {v.name}
                                                </span>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                                <div className="tag tag--transparent mr-5">
                                                    {v.hours} Hour{v.hours !== 0 ? 's' : ''}
                                                </div>
                                                <Switch
                                                  checked={v.checked} onChange={(v) => {
                                                      meta.rebuild[i].checked = v;
                                                      setMeta('rebuild', meta.rebuild);
                                                  }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </CostPanel>
                            </div>
                        </div>
                        {nav}
                    </main>
                </div>
            </div>


        </Page>
    );
};

export default TheComponent;
