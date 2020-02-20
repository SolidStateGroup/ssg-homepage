import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Link from 'next/link';
import { ButtonPrimary, ButtonText } from '../components/base/forms/Button';
import BaLogo from '../components/ClientLogos/BaLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import HertzLogo from '../components/ClientLogos/HertzLogo';
import { ListItemUnderlined } from '../components/ListItem';
import FeaturedProjects from '../components/FeaturedProjects';

const HomePage = class extends React.Component {
  static displayName = 'HomePage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
        <Page title={Constants.titles.home} canonical="">
            <Header/>
            <Footer initialiseMap/>
        </Page>
      );
  };
};

export default HomePage;
