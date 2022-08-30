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
        projectImage: '/images/projects/ladbrokes/ladbrokes-1.png',
        srcSet: '/images/projects/ladbrokes/ladbrokes-1.png 1x, /images/projects/ladbrokes/ladbrokes-1@2x.png 2x,',
        clientImage: '/images/clients/ladbrokes.png',
        subTitle: 'Web Application',
        href: '/projects/ladbrokes-coral',
        title: 'Bringing the entire IT infrastructure within Ladbrokes Coral up to date',
        blobColour: '#084d8d',
        tags: ['WEB', 'API', 'IOT'],
        projectType: ['API Development, Web Application, Hardware integrations'],
        gaDataLabel: 'work-projects-ladbrokes',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/racing-post/racing-post-1.png',
        srcSet: '/images/projects/racing-post/racing-post-1.png 1x, /images/projects/racing-post/racing-post-1@2x.png 2x,',
        clientImage: '/images/clients/racing-post.svg',
        subTitle: 'Responsive Website & Mobile App',
        href: '/projects/racing-post',
        title: 'New Serverless Data Platform for the home of horse racing news',
        blobColour: '#d11f25',
        tags: ['MOBILE', 'API', 'WEB'],
        projectType: ['API Development, ', 'Mobile App Development, ', 'Cloud Infrastructure Implementation'],
        gaDataLabel: 'work-projects-racing-post',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/vuunity/Vuunity-1.png',
        srcSet: '/images/projects/vuunity/Vuunity-1.png 1x, /images/projects/vuunity/Vuunity-1@2x.png 2x,',
        clientImage: '/images/projects/vuunity/vuunity-logo-dark.svg',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/vuunity',
        title: 'View the concert your way',
        blobColour: '#02AEEE',
        tags: ['MOBILE', 'WEB', 'API'],
        projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
        gaDataLabel: 'work-projects-vuunity',
    },
];

const CloudImplementationPage = class extends React.Component {
    static displayName = 'CloudImplementationPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.cloudImplementation);
    }

    render = () => {
        return (
            <Page title={Constants.titles.cloudImplementation} canonical="cloud-implementation">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="Cloud Implementation" text="We have experience building a variety of infrastructure set ups from modern micro-services and serverless to legacy monolithe solutions. Using infrastructure as code best practices, we ensure your environment is secure, scalable and manageable. Our developers have training and qualifications with all the major cloud providers including AWS, GCP and Azure."
                    />
                </div>
                <div className="container">
                    <ServiceItem
                      serviceImage={'/images/services/System-Architecture-Dark.png'}
                      srcSet={'/images/services/System-Architecture-Dark.png 1x, /images/services/System-Architecture-Dark@2x.png 2x'}
                      subTitle={'Infrastructure as code'}
                      serviceDescription={'All our infrastructure is written using code, this allows us to be fast, scalable and reliable in the services we build. We primarily use terraform, although we also have experience with a variety of other frameworks.'}
                    />
                    <ServiceItem
                        serviceImage={'/images/services/api-dev@1x.jpg'}
                        srcSet={'/images/services/api-dev@1x.jpg 1x, /images/services/api-dev@2x.jpg 2x'}
                        subTitle={'Bespoke infrastructure solutions'}
                        className={'flex-row-reverse'}
                        serviceDescription={'Every application is different and should be treated as such when it comes to the infrastructure. We will take into account your companies needs in order to come up with the best solution. Whether that is the applications\' efficiency, cost or reliability, we will plan and build the best solution for you.'}
                    />
                    <ServiceItem
                      serviceImage={'/images/services/cloud-migration.jpg'}
                      srcSet={'/images/services/cloud-migration.jpg 1x, /images/services/cloud-migration@2x.png 2x'}
                      subTitle={'Cloud migration'}
                      serviceDescription={'Whether you have an on premise solution or are using an incompatible cloud platform for your application, we can help you migrate to the best cloud solution for your needs. Our developers and architects can help come up with the best migration strategy to allow your business become "cloud-first".'}
                    />
                    <ServiceItem
                      serviceImage={'/images/services/devops.jpg'}
                      srcSet={'/images/services/devops.jpg 1x, /images/services/devops@2x.jpg 2x'}
                      subTitle={'CI/CD and Devops'}
                      className={'flex-row-reverse'}
                      serviceDescription={'We believe in a ship fast approach to our development and do so by adding build and deployment pipelines to all our projects. Whether you need a bespoke CI/CD pipeline in an application like Jenkins or git platform based pipelines, our developers can help ensure your company can also follow a ship fast approach.'}
                    />

                </div>

                <ClientQuote
                    image={'/images/projects/ba/ba-ipad.png'}
                    srcSet={'/images/projects/ba/ba-ipad.png 1x, /images/projects/ba/ba-ipad@2x.png 2x'}
                    text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                    clientName={'Managing Director'} clientTitle={'Operations at British Airways'}/>


                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Cloud Implementation case studies</h3>
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

                <Footer gaFooterLabel="services_web-apps_footer_contact"/>
            </Page>
        );
    };
};

export default CloudImplementationPage;
