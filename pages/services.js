import React from 'react';
import Link from 'next/link';
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
        API.trackPage(Constants.pages.services);
        gsap.timeline()
            .from('.hero__container .col-md-6', { duration: 0.5, delay: 0.25, y: 10, opacity: 0, ease: 'power1' })
            .from('.section--dark .container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' });
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
                                    <img src="/images/hero-blob-3.svg" alt="hero-blob" className="img-fluid"/>
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
                            <div className="col services-tech-icon text-center">
                                <ReactLogo className="client-logo--large"/>
                            </div>
                            <div className="col services-tech-icon text-center">
                                <NodeLogo className="client-logo--medium"/>
                            </div>
                            <div className="col services-tech-icon text-center">
                                <DockerLogo className="client-logo--medium"/>
                            </div>
                            <div className="col services-tech-icon text-center mb-md-0 mb-4">
                                <JavaLogo className="client-logo--small"/>
                            </div>
                            <div className="col services-tech-icon text-center">
                                <PostgresLogo className="client-logo--large"/>
                            </div>
                            <div className="col services-tech-icon text-center">
                                <AWSLogo className="client-logo--medium"/>
                            </div>
                            <div className="col services-tech-icon text-center">
                                <img src="/images/tech-icons/light/python.svg" className="img-fluid mt-md-0 mt-4"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section--no-padding">
                    <h2 className="section__title section__title--dark text-center mt-5">Our Services</h2>
                    <div className="container align-self-center">

                        <ServiceItem
                          serviceImage="/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg"
                          srcSet="/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg 1x, /images/projects/tone-and-sculpt/macbook-pro-on-table@2x.jpg 2x,"
                          className="flex-row-reverse"
                          imageClassName="img__shadow "
                          subTitle="Strategy"
                          serviceLink="/services/strategy"
                          gaServiceLabel="services_strategy"
                          serviceDescription="Our management team has over 50 years combined experience in creating technical solutions to solve business problems. Whether it’s digital transformation, business process re-engineering, or a new product or service, our background in management consulting allows us to fully scope business requirements and translate them into technical solutions."
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
                          serviceImage="/images/services/Wireframes.png"
                          srcSet="/images/services/Wireframes.png 1x, /images/services/Wireframes@2x.png 2x,"
                        // className="flex-row-reverse"
                          imageClassName="img__shadow "
                          subTitle="Discovery"
                          serviceLink="/services/discovery"
                          gaServiceLabel="services_strategy"
                          serviceDescription="Our discovery team consists of members of our senior staff from all disciplines including new business / business analysts, UX/UI design, development and project management.
Our senior team has more than 80 years combined experience in designing and launching products in various industries."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Tone & Sculpt"
                                    listItemLink="/projects/tone-and-sculpt"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Detonator"
                                    listItemLink="/projects/detonator"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Meow Now"
                                    listItemLink="/projects/meownow"
                                  />
                              </React.Fragment>
                        )}
                        />

                        <ServiceItem
                          className="flex-row-reverse"
                          srcSet="/images/services/user-research.png 1x, /images/services/user-research@2x.png 2x,"
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Tone & Sculpt"
                                    listItemLink="/projects/tone-and-sculpt"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Hero Wellbeing" listItemLink="/projects/hero-wellbeing"
                                  />
                                  <ListItemUnderlined
                                    listItemText="MeowNow" listItemLink="/projects/meownow"
                                  />
                              </React.Fragment>
                            )}
                          subTitle="User Research"
                          serviceLink="/services/user-research"
                          gaServiceLabel="services_userResearch"
                          serviceDescription="Executing user research and usability testing results in a better user experience for your users and saves you time and money in the long run by identifying and fixing problems early."
                        />


                        <ServiceItem
                          srcSet="/images/services/ux-design.jpg 1x, /images/services/ux-design@2x.png 2x,"
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
                          gaServiceLabel="services_design"
                          serviceDescription={'We approach our design projects with passion and expertise born out of a desire to understand customers and deliver value quickly. Great design solves problems, it\'s not just about aesthetics.'}
                        />

                        <ServiceItem
                          className="flex-row-reverse"
                          serviceImage="/images/services/mobile-app-development.jpg"
                          srcSet="/images/services/mobile-app-development.jpg 1x, /images/services/mobile-app-development@2x.png 2x,"
                          imageClassName="img__shadow "
                          subTitle="Mobile App Development"
                          serviceLink="/services/mobile-app-development"
                          gaServiceLabel="services_mobile"
                          serviceDescription={`${<a></a>
                          }Text`
                          + '\n'}
                          serviceDescription={<>
                              {'We use\n'} <Link prefetch={false} href="services/react-native">
                            React Native
                              </Link> {'to build amazing mobile apps. Why? React Native is a real mobile app. Unlike web app wrappers, React Native uses native platform libraries, creating a completely native experience for your users.\n'}
                          </>}
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
                          serviceImage="/images/services/web-development.jpg"
                          srcSet="/images/services/web-development.jpg 1x, /images/services/web-development@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          subTitle="Responsive Web Apps"
                          serviceLink="/services/responsive-web-apps"
                          gaServiceLabel="services_web"
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
                                    listItemText="Publicate" listItemLink="/projectsate"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Dugout FC" listItemLink="/projects/dugout"
                                  />
                              </React.Fragment>
)}
                          serviceDescription={'We build products that work on every device. Your users access your products on their mobile phones, tablets and desktop computers so it\'s important that your digital properties work well in every instance.'}
                        />

                        <ServiceItem
                          className="flex-row-reverse"
                          serviceImage="/images/services/api-dev@1x.jpg"
                          srcSet="/images/services/api-dev@1x.jpg 1x, /images/services/api-dev@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          subTitle="API Development"
                          serviceLink="/services/api-development"
                          gaServiceLabel="services_api"
                          serviceDescription="From our London office, we've been working with
                                        corporations and startups for over 15 years, building secure, bespoke APIs and
                                        scalable integrations with legacy systems. We approach projects with an
                                        experienced team equipped with rapid application development tools to develop,
                                        test, and deliver bespoke software quickly."
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
                          serviceImage="/images/services/System-Architecture-Dark.png"
                          srcSet="/images/services/System-Architecture-Dark.png 1x, /images/services/System-Architecture-Dark@2x.png 2x,"
                          imageClassName="img__shadow "
                          subTitle="Cloud Services"
                          serviceLink="/services/cloud-implementation"
                          gaServiceLabel="cloudServices_api"
                          serviceDescription="We have experience building a variety of infrastructure set ups from modern micro-services and serverless to legacy monolithe solutions. Using infrastructure as code best practices, we ensure your environment is secure, scalable and manageable. Our developers have training and qualifications with all the major cloud providers including AWS, GCP and Azure."
                          serviceListItem={(
                              <React.Fragment>
                                  <ListItemUnderlined
                                    listItemText="Ladbrokes Coral"
                                    listItemLink="/projects/ladbrokes-coral"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Racing Post"
                                    listItemLink="/projects/racing-post"
                                  />
                                  <ListItemUnderlined
                                    listItemText="Vuunity"
                                    listItemLink="/projects/vuunity"
                                  />
                              </React.Fragment>
                        )}
                        />

                        <ServiceItem
                          className="flex-row-reverse"
                          serviceImage="/images/services/hertz@1x.jpg"
                          srcSet="/images/services/hertz@1x.jpg 1x, /images/services/hertz@2x.jpg 2x,"
                          imageClassName="img__shadow "
                          subTitle="Systems Integration"
                          serviceLink="/services/systems-integration"
                          gaServiceLabel="services_sys-int"
                          serviceDescription="Our systems integration solutions are designed to perform well at scale, bringing together component subsystems into one business-critical system."
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
                          serviceImage="/images/projects/meownow/meownow_brand_board.png"
                          srcSet="/images/projects/meownow/meownow_brand_board.png 1x, /images/projects/meownow/meownow_brand_board@2x.png 2x,"
                          imageClassName="img__shadow "
                          subTitle="Branding"
                          serviceLink="/services/branding"
                          gaServiceLabel="services_branding"
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
                  </div>
                    <div className="container-fluid">
                        <div className="row pt-5">
                            <div className="col-lg-3 mb-lg-0 mb-4">
                                <Card
                                  cardLink="https://github.com/Flagsmith/flagsmith"
                                  cardTechnology="JavaScript" cardTechnologyStars="1.8k" cardTechnologyForked="129"
                                  techColourClass="card__technology--yellow" cardTitle="Flagsmith"
                                  cardText="Flagsmith allows you to manage feature flags and remote config across multiple projects & environments."
                                />
                            </div>
                            <div className="col-lg-3 mb-lg-0 mb-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/rio" cardTechnology="JavaScript"
                                  cardTechnologyStars="146" cardTechnologyForked="21"
                                  techColourClass="card__technology--yellow" cardTitle="RIO"
                                />
                            </div>
                            <div className="col-lg-3 mb-lg-0 mb-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/patientview" cardTechnology="Java"
                                  cardTechnologyStars="8" cardTechnologyForked="1"
                                  techColourClass="card__technology--brown" cardTitle="Patientview"
                                  cardText={'PatientView shows patients\' latest test results plus information about their diagnosis and treatment.'}
                                />
                            </div>
                            <div className="col-lg-3">
                                <Card
                                  cardLink="https://github.com/open-feature/python-sdk" cardTechnology="Python"
                                  cardTechnologyStars="3" cardTechnologyForked="3"
                                  techColourClass="card__technology--blue" cardTitle="OpenFeature"
                                  cardText={'OpenFeature is creating an open standard for feature flag management to support a robust feature flag ecosystem using cloud native technologies.'}
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
