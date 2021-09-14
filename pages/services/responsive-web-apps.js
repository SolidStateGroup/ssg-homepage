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
        projectImage: '/static/images/projects/ba/ba-summary-ipad.png',
        srcSet: '/static/images/projects/ba/ba-summary-ipad.png 1x, /static/images/projects/ba/ba-summary-ipad@2x.png 2x,',
        clientImage: '/static/images/clients/british-airways.svg',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: "#3658B0",
        tags: ['API', "WEB"],
        projectType: ['Web App Development, ', 'API Development '],
        gaDataLabel: 'services-web-apps-ba',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        srcSet: '/static/images/projects/purely-capital/pc-summary-mac.png 1x, /static/images/projects/purely-capital/pc-summary-mac@2x.png 2x,',
        clientImage: '/static/images/clients/purely-capital-dark@2x.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: "#D02D55",
        tags: ['DESIGN', "WEB"],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'services-web-apps-purely',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wfa',
        projectImage: '/static/images/projects/wfa/wfa-1.png',
        srcSet: '/static/images/projects/wfa/wfa-1.png 1x, /static/images/projects/wfa/wfa-1@2x.png 2x,',
        clientImage: '/static/images/clients/wfa.svg',
        subTitle: 'Web Application',
        title: 'Visualising data for effective marketing communications',
        blobColour: "#ff003c",
        tags: ['API', "WEB"],
        projectType: ['UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'services-web-apps-wfa',
    },
];

const WebAppsPage = class extends React.Component {
    static displayName = 'WebAppsPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.responsiveWebApps);
    }

    render = () => {
        return (
            <Page title={Constants.titles.responsiveWebApps} canonical="responsive-web-apps">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="Responsive Web Applications" text="We build products that work on every device. Your users access your products on their mobile phones, tablets and desktop computers so it's important that your digital properties work well in every instance."
                    />
                </div>
                <div className="container">
                    <ServiceItem
                      serviceImage={'/static/images/services/responsive-apps.png'}
                      srcSet={'/static/images/services/responsive-apps.png 1x, /static/images/services/responsive-apps@2x.png 2x'}
                      subTitle={'Responsive designs'}
                      serviceDescription={'We design your products with multiple devices in mind to reduce technical debt.  Depending on your requirements, it might be appropriate to adopt a strategy which prioritises the primary platform for your product.'}
                    />
                    <ServiceItem
                        serviceImage={'/static/images/services/iMac3@1x.jpg'}
                        srcSet={'/static/images/services/iMac3@1x.jpg 1x, /static/images/services/iMac3@2x.jpg 2x'}
                        subTitle={'Responsive application development'}
                        className={'flex-row-reverse'}
                        serviceDescription={'We utilise the best in class frameworks to ensure we build products that work for all users, on all devices.  With years of experience in our development team, we have adopted the best approaches for ground up builds as well as projects bringing legacy products to handheld devices.'}
                    />

                </div>

                <ClientQuote
                    image={'/static/images/projects/ba/ba-ipad.png'}
                    srcSet={'/static/images/projects/ba/ba-ipad.png 1x, /static/images/projects/ba/ba-ipad@2x.png 2x'}
                    text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                    clientName={'Managing Director'} clientTitle={'Operations at British Airways'}/>


                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Responsive web app case studies</h3>
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

export default WebAppsPage;
