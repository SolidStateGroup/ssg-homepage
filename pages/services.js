import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import ReactLogo from '../components/TechIcons/ReactLogo';
import NodeLogo from '../components/TechIcons/NodeLogo';
import DockerLogo from '../components/TechIcons/DockerLogo';
import JavaLogo from '../components/TechIcons/JavaLogo';
import PostgresLogo from '../components/TechIcons/PostgresLogo';
import AWSLogo from '../components/TechIcons/AWSLogo';
import { ListItemUnderlined } from '../components/ListItem';
import ServiceItem from '../components/ServiceItem';
import Card from '../components/Card';

const ServicesPage = class extends React.Component {
    static displayName = 'ServicesPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {

        gsap.timeline()
            .from('.hero__container .col-md-6', { duration: 0.5, delay: .25, y: 10, opacity: 0, ease: 'power1' })
            .from('.section--dark .container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })
    }

    render = () => {
        return (
            <Page title={Constants.titles.services} canonical="services">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 justify-content-start pt-5">
                                    <h5 className="title--light mb-0">Our Services</h5>
                                    <h1 className="hero__title mb-4">We build successful digital businesses</h1>
                                    <p className="text-light">When we moved into our Old Street office, there were only
                                        a handful of tech startups in the neighbourhood. Fifteen years later, we’re
                                        still going strong, working with startups and corporations alike, swiftly
                                        creating and transforming systems that are built to last.
                                    </p>
                                </div>
                                <div
                                  className="flex-1 align-items-center justify-content-center hero__blob-container hidden-sm-down"
                                >
                                    <img src="/static/images/hero-blob-2.svg" alt="hero-blob" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--dark">
                    <div className="container pr-5">
                        <h2 className="section__title--light">We <span
                          className="text-primary"
                        >design, develop, test,
                        </span> and <span className="text-primary">deliver</span> your projects quickly and reliably
                        </h2>
                        <p className="text-light">We work with a wide range of tools, with a focus on open source
                            technologies.
                        </p>
                    </div>
                    <div className="container">
                        <div className="flex-row mt-5 mb-5">
                            <div className="col-md-2 col-6 text-center">
                                <ReactLogo className="client-logo--large"/>
                            </div>
                            <div className="col-md-2 col-6 text-center">
                                <NodeLogo className="client-logo--medium"/>
                            </div>
                            <div className="col-md-2 col-6 text-center">
                                <DockerLogo className="client-logo--medium"/>
                            </div>
                            <div className="col-md-2 col-6 text-center mb-md-0 mb-4">
                                <JavaLogo className="client-logo--small"/>
                            </div>
                            <div className="col-md-2 col-6 text-center">
                                <PostgresLogo className="client-logo--large"/>
                            </div>
                            <div className="col-md-2 col-6 text-center">
                                <AWSLogo className="client-logo--medium"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section--no-padding">
                    <h2 className="section__title section__title--dark text-center mt-5">Our Services</h2>
                    <div className="container align-self-center">

                        <ServiceItem
                            serviceImage="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg"
                            srcSet="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg 1x, /static/images/projects/tone-and-sculpt/macbook-pro-on-table@2x.jpg 2x,"
                            className="flex-row-reverse"
                            imageClassName="img__shadow "
                            subTitle="Strategy"
                            serviceLink="/services/strategy"
                            serviceDescription="Before we build anything, we help to identify the current biggest assumptions in your product or business, we can then help build tests to validate each assumption and finally frame any conclusions into actionable output."
                            serviceListItem={(
                                <React.Fragment>
                                    <ListItemUnderlined
                                        listItemText="Tone & Sculpt"
                                        listItemLink="/projects/tone-and-sculpt"
                                    />
                                    <ListItemUnderlined
                                        listItemText="Meow Now"
                                        listItemLink="/projects/meownow"
                                    />
                                    <ListItemUnderlined
                                        listItemText="Dugout FC"
                                        listItemLink="/projects/dugout"
                                    />
                                </React.Fragment>
                            )}
                        />

                        <ServiceItem
                          srcSet="/static/images/services/ux-design.jpg 1x, /static/images/services/ux-design@2x.png 2x,"
                          imageClassName="img__shadow "
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Tone & Sculpt"
                                    listItemLink="/projects/tone-and-sculpt"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Purely Capital" listItemLink="/projects/purely-capital"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Wazoku Idea App" listItemLink="/projects/wazoku"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Unilever" listItemLink="/projects/unilever"
                                  />
                              </React.Fragment>
)}
                          subTitle="UX & UI Design"
                          serviceLink="/services/design"
                          serviceDescription={'We approach our design projects with passion and expertise born out of a desire to understand customers and deliver value quickly. Great design solves problems, it\'s not just about aesthetics.'}
                        />

                        <ServiceItem
                          serviceImage="/static/images/services/mobile-app-development.jpg"
                          srcSet="/static/images/services/mobile-app-development.jpg 1x, /static/images/services/mobile-app-development@2x.png 2x,"
                          imageClassName="img__shadow "
                          className="flex-row-reverse"
                          subTitle="Mobile App Development"
                          serviceLink="/services/mobile-app-development"
                          serviceDescription="A React Native app is a real mobile app. Unlike web app wrappers, React Native uses native platform libraries, creating a completely native experience for your users."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Tone & Sculpt"
                                    listItemLink="/projects/tone-and-sculpt"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Hailie"
                                    listItemLink="/projects/hailie"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Wazoku" listItemLink="/projects/wazoku"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Glenfiddich" listItemLink="/projects/glenfiddich"
                                  />
                              </React.Fragment>
)}
                        />

                        <ServiceItem
                          serviceImage="/static/images/services/web-development.jpg"
                          srcSet="/static/images/services/web-development.jpg 1x, /static/images/services/web-development@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          subTitle="Responsive Web Apps"
                          serviceLink="/services/responsive-web-apps"
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="British Airways"
                                    listItemLink="/projects/british-airways"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Purely Capital"
                                    listItemLink="/projects/purely-capital"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Publicate" listItemLink="/projects/publicate"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Dugout FC" listItemLink="/projects/dugout"
                                  />
                              </React.Fragment>
)}
                          serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}
                        />

                        <ServiceItem
                          serviceImage="/static/images/services/hertz@1x.jpg"
                          srcSet="/static/images/services/hertz@1x.jpg 1x, /static/images/services/hertz@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          className="flex-row-reverse"
                          subTitle="Systems Integration"
                          serviceLink="/services/systems-integration"
                          serviceDescription="We specialise in building secure, bespoke APIs and scalable integrations with legacy systems."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Hailie"
                                    listItemLink="/projects/hailie"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Hertz"
                                    listItemLink="/projects/hertz"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Unilever"
                                    listItemLink="/projects/Unilever"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Visa" listItemLink="/projects/visa"
                                  />
                              </React.Fragment>
)}
                        />

                        <ServiceItem
                          serviceImage="/static/images/services/api-dev@1x.jpg"
                          srcSet="/static/images/services/api-dev@1x.jpg 1x, /static/images/services/api-dev@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          subTitle="API Development"
                          serviceLink="/services/api-development"
                          serviceDescription="We specialise in building secure, bespoke APIs and scalable integrations with legacy systems."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Hailie"
                                    listItemLink="/projects/hailie"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Hertz"
                                    listItemLink="/projects/hertz"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Unilever"
                                    listItemLink="/projects/unilever"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Visa" listItemLink="/projects/visa"
                                  />
                              </React.Fragment>
)}
                        />

                        <ServiceItem
                          serviceImage="/static/images/projects/meownow/meownow_brand_board.png"
                          srcSet="/static/images/projects/meownow/meownow_brand_board.png 1x, /static/images/projects/meownow/meownow_brand_board@2x.png 2x,"
                          imageClassName="img__shadow "
                          subTitle="Branding"
                          serviceLink="/services/branding"
                          serviceDescription="We work with small and large businesses to deliver high quality brand guidelines and identities."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Meow Now"
                                    listItemLink="/projects/meownow"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Change Please"
                                    listItemLink="/projects/change-please"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Unilever"
                                    listItemLink="/projects/unilever"
                                  />
                              </React.Fragment>
)}
                        />

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
                        <h2 className="section__title--dark">We are <span className="text-primary">active</span> in the open source community
                        </h2>
                        <p>We work with a wide range of tools, with a focus on open source technologies.</p>
                        <div className="flex-row pt-5">
                            <div className="justify-content-center col-md-4 mb-md-0 mb-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/rio" cardTechnology="JavaScript"
                                  cardTechnologyStars="120" cardTechnologyForked="14"
                                  techColourClass="card__technology--yellow" cardTitle="rio"
                                />
                            </div>
                            <div className="justify-content-center col-md-4 mb-md-0 mb-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/bullet-train-aio"
                                  cardTechnology="JavaScript" cardTechnologyStars="0" cardTechnologyForked="1"
                                  techColourClass="card__technology--yellow" cardTitle="bullet-train-aio"
                                  cardText="Bullet Train All In One Project"
                                />
                            </div>
                            <div className="justify-content-center col-md-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/patientview" cardTechnology="Java"
                                  cardTechnologyStars="6" cardTechnologyForked="1"
                                  techColourClass="card__technology--brown" cardTitle="patientview"
                                  cardText={'PatientView shows patients\' latest test results plus information about their diagnosis and treatment.'}
                                />
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
