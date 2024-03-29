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
        gaDataLabel: 'services-cloud-ba',
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
        gaDataLabel: 'services-cloud-hailie',
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
        gaDataLabel: 'services-cloud-hertz',
    },
];

const CloudInfraPage = class extends React.Component {
    static displayName = 'CloudInfraPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.serviceCloudInfra);
    }

    render = () => {
        return (
            <Page title={Constants.titles.cloudInfrastructure} canonical="cloud-infrastructure">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="Cloud Infrastructure" text="We utilise secure cloud environments for startups, scale ups and enterprise clients."
                    />
                </div>

                <div className="container">

                    <ServiceItem
                        serviceImage="/images/services/api-dev@1x.jpg"
                        srcSet="/images/services/api-dev@1x.jpg 1x, /images/services/api-dev@2x.jpg 2x,"
                        subTitle="Improving your IT infrastructure"
                        serviceDescription="Recent projects include developing a secure cloud environment for a fintech startup and implementing a secure system for encrypted patient results for a clinician dashboard.  We've been working with Amazon Web Services / Google Cloud Platform for nearly a decade and are accredited with technology partner status."
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

                    <div className="tech-partner flex-row pt-2 pb-5 justify-content-center">
                        <div className="flex-column col-lg-4">
                            <img src="/images/platforms/aws-partner.svg" alt="AWS Technology Partner" className="img-fluid"/>
                        </div>
                        <div className="flex-column col-lg-4">
                            <img src="/images/platforms/google-cp.png" alt="GCP Technology Partner" className="img-fluid"/>
                        </div>
                    </div>

                </div>

                <ClientQuote
                    image={'/images/projects/ba/ba-ipad.png'}
                    srcSet={'/images/projects/ba/ba-ipad.png 1x, /images/projects/ba/ba-ipad@2x.png 2x'}
                    text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                    clientName={'Managing Director'} clientTitle={'Operations at British Airways'}/>

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Cloud infrastructure case studies</h3>
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

                <Footer gaFooterLabel="services_cloud_footer_contact"/>
            </Page>
        );
    };
};

export default CloudInfraPage;
