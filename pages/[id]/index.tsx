import React, { FunctionComponent, useEffect, useState } from 'react'; // we need this to make JSX compile
import Page from '../../components/Page';
import Prospect from '../../components/Prospect';

type ComponentType = {}


const TheComponent: FunctionComponent<ComponentType> = () => {
    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">
            <Prospect/>

        </Page>
    );
};

export default TheComponent;
