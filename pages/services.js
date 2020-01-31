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
import {ListItemUnderlined} from '../components/ListItem';
import ServiceItem from '../components/ServiceItem';
import Card from '../components/Card';

const ServicesPage = class extends React.Component {
    static displayName = 'ServicesPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
          <Page title={Constants.titles.services} canonical="services">
              <div className="hero hero--three-quarters d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                      <div className="flex-1 justify-content-start p-5">
                          <div className="offset-lg-3">
                              <h5 className="title--light mb-0">Our Services</h5>
                              <h1 className="hero__title mb-4">We build successful digital businesses</h1>
                              <p className="text-light">When we moved into our Old Street office, there were only a handful of tech startups in the neighbourhood. Fifteen years later, we’re still going strong, working with startups and corporations alike, swiftly creating and transforming systems that are built to last.</p>
                          </div>
                      </div>
                      <div
                          className="flex-1 align-items-center justify-content-center hero__blob-container hidden-sm-down">
                          <img src="/static/images/hero-blob.svg" alt="hero-blob" className="img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="section section--dark">
                  <div className="offset-md-1 col-md-6">
                      <h2 className="section__title--light">We <span className="text-primary">design, develop, test,</span> and <span className="text-primary">deliver</span> your projects quickly and reliably</h2>
                      <p className="text-light">We work with a wide range of tools, with a focus on open source technologies.</p>
                  </div>
                  <div className="container">
                      <div className="flex-row mt-5 mb-5">
                          <div className="col-md-2 col-6 text-center">
                              <img src="/static/images/tech-icons/react.svg" alt="react" className="img-fluid"/>
                          </div>
                          <div className="col-md-2 col-6 text-center">
                              <img src="/static/images/tech-icons/node.svg" alt="node js" className="img-fluid"/>
                          </div>
                          <div className="col-md-2 col-6 text-center">
                              <img src="/static/images/tech-icons/docker.svg" alt="docker" className="img-fluid"/>
                          </div>
                          <div className="col-md-2 col-6 text-center mb-md-0 mb-4 mt-4">
                              <img src="/static/images/tech-icons/java.svg" alt="java" className="img-fluid"/>
                          </div>
                          <div className="col-md-2 col-6 text-center">
                              <img src="/static/images/tech-icons/postgres.svg" alt="postgres sql" className="img-fluid"/>
                          </div>
                          <div className="col-md-2 col-6 text-center">
                              <img src="/static/images/tech-icons/aws.svg" alt="amazon web services" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section--no-padding">
                  <h2 className="section__title section__title--dark text-center mt-5">Our Services</h2>
                  <div className="container-fluid align-self-center">
                      <ServiceItem
                          serviceListItem={<React.Fragment><ListItemUnderlined listItemText={'Tone & Sculpt'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Purely Capital'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Wazoku Idea App'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Unilever'} listItemLink={'/'}/></React.Fragment>}
                          subTitle={'UX Design'}
                          serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}/>
                      <ServiceItem serviceImage={'/static/images/services/web-development.jpg'}
                                   className="flex-row-reverse" subTitle={'Web Application Development'}
                                   serviceListItem={<React.Fragment><ListItemUnderlined listItemText={'Purely Capital'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Racing Post'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Ladbrokes Coral'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Publicate'} listItemLink={'/'}/></React.Fragment>}
                                   serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}/>
                      <ServiceItem serviceImage={'/static/images/services/mobile-app-development.jpg'}
                                   subTitle={'Mobile app development'}
                                   serviceDescription={'A React Native app is a real mobile app. Unlike web app wrappers, React Native uses native platform libraries, creating a completely native experience for your users.'}/>
                  </div>
              </div>


              <div className="section section--dark">
                  <div className="container">
                      <h6 className="text-primary mb-0 title--regular">15 years experience</h6>
                      <h2 className="section__title--light">Why us?</h2>
                      <div className="row pt-5 pl-0 pl-sm-5">
                          <div className="col-md-6">
                              <h4 className="text-white">We start small</h4>
                              <p className="text-white">Helping and even investing in startups</p>
                          </div>
                          <div className="col-md-6">
                              <h4 className="text-white">We work fast</h4>
                              <p className="text-white">Rapid prototyping with agile methodology
                              </p>
                          </div>
                          <div className="col-md-6">
                              <h4 className="text-white">We think big</h4>
                              <p className="text-white">Driving innovation for corporate clients</p>
                          </div>
                          <div className="col-md-6">
                              <h4 className="text-white">We stay true</h4>
                              <p className="text-white">Delivering projects transparently, end to end</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="section">
                  <div className="container">
                      <h2 className="section__title--dark">We <span className="text-primary">love</span> open source</h2>
                      <p>We work with a wide range of tools, with a focus on open source technologies.</p>
                      <div className="row pt-5">
                          <div className="col-md-4 mb-md-0 mb-4">
                              <Card cardTechnology={'JavaScript'} cardTechnologyStars={'120'} cardTechnologyForked={'14'} techColourClass={'card__technology--yellow'} cardTitle={'rio'}/>
                          </div>
                          <div className="col-md-4 mb-md-0 mb-4">
                              <Card cardTechnology={'JavaScript'} cardTechnologyStars={'0'} cardTechnologyForked={'1'} techColourClass={'card__technology--yellow'} cardTitle={'bullet-train-aio'} cardText={'Bullet Train All In One Project'}/>
                          </div>
                          <div className="col-md-4">
                              <Card cardTechnology={'Java'} cardTechnologyStars={'6'} cardTechnologyForked={'1'} techColourClass={'card__technology--brown'} cardTitle={'patientview'} cardText={'PatientView'}/>
                          </div>
                      </div>
                  </div>
              </div>





              <Footer/>
          </Page>
        );
    };
};

export default ServicesPage;
