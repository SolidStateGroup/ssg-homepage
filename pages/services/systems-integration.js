import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import {ListItemUnderlined, WideListItem} from '../../components/ListItem';
import ProjectItem from '../../components/ProjectItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import {ButtonPrimary} from "../../components/base/forms/Button";
import Card from "../../components/Card";
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
        blobColour: "#3658B0",
        tags: ['API', "WEB"],
        projectType: ['Web App Development, ', 'API Development '],
        gaDataLabel: 'services-sys-int-ba',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/images/projects/hailie/hailie-phone@1x.png',
        srcSet: '/images/projects/hailie/hailie-phone@1x.png 1x, /images/projects/hailie/hailie-phone@2x.png 2x,',
        clientImage: '/images/clients/hailie.svg',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: "#FF715A",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'services-sys-int-hailie',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/images/projects/hertz/hertz-1@1x.png',
        srcSet: '/images/projects/hertz/hertz-1@1x.png 1x, /images/projects/hertz/hertz-1@2x.png 2x,',
        clientImage: '/images/clients/hertz-colour.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: "#FFD60D",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'services-sys-int-hertz',
    },
];

const SystemsPage = class extends React.Component {
    static displayName = 'SystemsPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.systemsIntegration);
    }

    render = () => {
        return (
            <Page title={Constants.titles.systemsIntegration} canonical="systems-integration">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="Systems Integration" text="Our systems integration solutions are designed to perform well at scale, bringing together component subsystems into one business-critical system."
                    />
                </div>


                <div className="container">
                    <ServiceItem
                        serviceImage="/images/services/hertz@1x.jpg"
                        srcSet="/images/services/hertz@1x.jpg 1x, /images/services/hertz@2x.jpg 2x,"

                        subTitle={'We build robust and reliable software that scales'}
                        serviceDescription={'Recent examples include connected hardware for a bespoke clinicians dashboard, vehicle data integrations and a connected car mobile application.'}
                        serviceListItem={
                            <React.Fragment>
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'API Development'}/>
                                    <WideListItem
                                        listItemText={'Bespoke Software Development'}/>
                                    <WideListItem
                                        listItemText={'Cloud Infrastructure'}/>
                                    <WideListItem
                                        listItemText={'Web & mobile App Development'}/>
                                </React.Fragment>
                            </React.Fragment>
                        }
                        listTitle={'WHAT WE DO'}
                    />

                </div>


                <ClientQuote
                    image={'/images/projects/ba/ba-ipad.png'}
                    srcSet={'/images/projects/ba/ba-ipad.png 1x, /images/projects/ba/ba-ipad@2x.png 2x'}
                    text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                    clientName={'Managing Director'} clientTitle={'Operations at British Airways'}/>

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Systems integration case studies</h3>
                    {projects.map((p) => (
                        <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}
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

                <Footer gaFooterLabel="services_sysint_footer_contact"/>
            </Page>
        );
    };
};

export default SystemsPage;
