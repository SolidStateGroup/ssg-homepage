import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import { ListItemUnderlined, WideListItem } from '../../components/ListItem';
import ProjectItem from '../../components/ProjectItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import { ButtonPrimary } from '../../components/base/forms/Button';
import Card from '../../components/Card';
import ServicesHero from '../../components/ServicesHero';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/british-airways',
        projectImage: '/images/projects/ba/ba-summary-ipad.png',
        srcSet: '/images/projects/ba/ba-summary-ipad.png 1x, /images/projects/ba/ba-summary-ipad@2x.png 2x,',
        clientImage: '/images/clients/british-airways.svg',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: '#3658B0',
        tags: ['API', 'WEB'],
        projectType: ['Web App Development, ', 'API Development '],
        gaDataLabel: 'services-api-ba',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/images/projects/hailie/hailie-phone@1x.png',
        srcSet: '/images/projects/hailie/hailie-phone@1x.png 1x, /images/projects/hailie/hailie-phone@2x.png 2x,',
        clientImage: '/images/clients/hailie.svg',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: '#FF715A',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'services-api-hailie',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/images/projects/hertz/hertz-1@1x.png',
        srcSet: '/images/projects/hertz/hertz-1@1x.png 1x, /images/projects/hertz/hertz-1@2x.png 2x,',
        clientImage: '/images/clients/hertz-colour.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: '#FFD60D',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'services-api-hertz',
    },
];

const APIPage = class extends React.Component {
    static displayName = 'APIPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.serviceApiDev);
    }

    render = () => {
        return (
            <Page title={Constants.titles.apiDevelopment} canonical="api-development">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="API Development" text="From our London office, we've been working with
                                        corporations and startups for over 15 years, building secure, bespoke APIs and
                                        scalable integrations with legacy systems. We approach projects with an
                                        experienced team equipped with rapid application development tools to develop,
                                        test, and deliver bespoke software quickly."
                    />
                </div>

                <div className="container">

                    <ServiceItem
                      serviceImage="/images/services/api-dev@1x.jpg"
                      srcSet="/images/services/api-dev@1x.jpg 1x, /images/services/api-dev@2x.jpg 2x,"
                      subTitle="We build robust and reliable software that scales"
                      serviceDescription="Recent projects include updating the entire IT infrastructure for Ladbrokes Coral and developing a business-facing API of real-time airline data for British Airways."
                      serviceListItem={(
                          <React.Fragment>
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="API Development"
                                  />
                                  <WideListItem
                                    listItemText="Bespoke Software Development"
                                  />
                                  <WideListItem
                                    listItemText="Cloud Infrastructure"
                                  />
                                  <WideListItem
                                    listItemText="Web & mobile App Development"
                                  />
                              </React.Fragment>
                          </React.Fragment>
                      )}
                      listTitle="WHAT WE DO"
                    />

                    <ServiceItem
                      className="flex-row-reverse"
                      serviceImage="/images/services/iMac3@1x.jpg"
                      srcSet="/images/services/iMac3@1x.jpg 1x, /images/services/iMac3@2x.jpg 2x"
                      subTitle="Extensive range of trusted partners"
                      serviceDescription="We work with a number of partners with expertise in a wide range of technologies, verticals, and methodologies. Our team consists of highly experienced software engineers from all competencies, which allows us to scale our teams rapidly to fit the client demands."
                    />

                    <ServiceItem
                      serviceImage="/images/services/web-development.jpg"
                      srcSet="/images/services/web-development.jpg 1x, /images/services/web-development@2x.jpg 2x,"
                      subTitle="Technical specialists"
                      serviceDescription="We specialise in building secure, bespoke APIs and scalable integrations with legacy systems. As well as ground up builds for new endeavours for startups, scale-ups and large enterprise companies."
                    />


                </div>

                <ClientQuote
                  image="/images/projects/ba/ba-ipad.png"
                  srcSet="/images/projects/ba/ba-ipad.png 1x, /images/projects/ba/ba-ipad@2x.png 2x"
                  text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                  clientName="Managing Director" clientTitle="Operations at British Airways"
                />

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">API development case studies</h3>
                    {projects.map(p => (
                        <ProjectItem
                          ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}
                          subTitle={p.subTitle}
                          title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}
                          projectImageClass={p.projectImageClass}
                          blobColour={p.blobColour}
                          srcSet={p.srcSet}
                          projectType={p.projectType}
                          href={p.href}
                          clientImage={p.clientImage}
                          gaDataLabel={p.gaDataLabel}
                        />
                    ))}
                </div>

                <Footer gaFooterLabel="services_api_footer_contact"/>
            </Page>
        );
    };
};

export default APIPage;
