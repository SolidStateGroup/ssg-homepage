import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switch from 'rc-switch';
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
                        <h1 className="text-light text-center pad-top-large mt-md-0 mt-5">Development Costs</h1>
                        <h2 className="hero__title--large hero__title--primary text-center">{Utils.money(totalDevelopmentCost)}</h2>
                        <p className="text-light text-center">To port to React Native</p>
                        <div className="container mt-5 mb-5">
                            <CostPanel title="React Native Rebuild" headerRight={<div className="tag tag--grey">{totalDevelopmentHours}h</div>}>
                                {meta?.rebuild?.map((v, i) => (
                                    <Row className={i !== meta.rebuild.length - 1 && 'mb-5'}>
                                        <Flex className="text-light">
                                            {v.name}
                                        </Flex>
                                        <Row>
                                            <div className="tag tag--transparent mr-5">
                                                {v.hours} Hour{v.hours !== 0 ? 's' : ''}
                                            </div>
                                            <Switch
                                              checked={v.checked} onChange={(v) => {
                                                  meta.rebuild[i].checked = v;
                                                  setMeta('rebuild', meta.rebuild);
                                              }}
                                            />
                                        </Row>
                                    </Row>
                                ))}
                            </CostPanel>
                        </div>
                        {nav}
                    </main>
                </div>
            </div>


        </Page>
    );
};

export default TheComponent;
