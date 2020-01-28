import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import { ButtonPrimary } from '../components/base/forms/Button';
import BaLogo from '../components/ClientLogos/BaLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import ProjectItem from '../components/ProjectItem';


const ServicesPage = class extends React.Component {
    static displayName = 'ServicesPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
          <Page title={Constants.titles.work} canonical="work">
              <Header/>
              <Footer/>
          </Page>
        );
    };
};

export default ServicesPage;
