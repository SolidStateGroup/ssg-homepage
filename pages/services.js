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
          <Page title={Constants.titles.services} canonical="services">
              <div className="hero hero--half d-flex flex-column mx-0 p-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                      <div className="flex-1 justify-content-start p-5">
                          <div className="offset-lg-3">
                              <h1 className="hero__title mb-4">Our Work</h1>
                              <p className="text-light">Take a look at the latest and greatest projects
                                  we’ve built here at Solid State Group.</p>
                          </div>
                      </div>
                      <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down"/>
                  </div>
              </div>
              <div className="container">
                  <ProjectItem ButtonComponent={ButtonPrimary} projectImage={'/static/images/projects/tands-summary-image.png'} subTitle="iOS and Android Mobile App" title="Rebooting female fitness for Tone and Sculpt"/>
                  <ProjectItem ButtonComponent={ButtonPrimary} projectImage={'/static/images/projects/pc-summary-image.png'} subTitle="Responsive Web Application" title="The future of film and media financing"/>
                  <ProjectItem ButtonComponent={ButtonPrimary} projectImage={'/static/images/projects/hailie-summary-image.png'} subTitle="iOS and Android Mobile App" title="Reinventing treatment of respiritory issues"/>
              </div>
              <Footer/>
          </Page>
      );
  };
};

export default ServicesPage;
