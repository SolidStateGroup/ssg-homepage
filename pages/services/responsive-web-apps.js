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
        projectType: ['Web App Development, ', 'API Development ']
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
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Web App Development, ', 'API Development ']
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
        projectType: ['UI design, ', 'Web App Development, ', 'API Development ']
    },
];

const WebAppsPage = class extends React.Component {
    static displayName = 'WebAppsPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.mobileAppDevelopment} canonical="Mobile App Development">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                        <div className="flex-1 p-5">
                            <div className="container">
                                <h5 className="title--light mb-0">Our Services</h5>
                                <h1 className="hero__title mb-4">Responsive Web Applications</h1>
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">When we moved into our Old Street office, there were only
                                        a handful of tech startups in the neighbourhood. Fourteen years later, we’re
                                        still going strong, working with startups and corporations alike, swiftly
                                        creating and transforming systems that are built to last.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ServiceItem
                        serviceImage={'/static/images/services/iMac3@1x.jpg'}
                        srcSet={'/static/images/services/iMac3@1x.jpg 1x, /static/images/services/iMac3@2x.jpg 2x'}
                        subTitle={'Rapid application development'}
                        serviceDescription={'We build robust and reliable software that scales. We approach projects with a tight-knit team equipped with rapid application development tools to develop, test, and deliver your projects quickly and reliably.'}
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
                        />
                    ))}
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default WebAppsPage;
