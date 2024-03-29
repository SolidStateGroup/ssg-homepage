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
        projectImage: '/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        clientImage: '/images/clients/tone-and-sculpt.svg',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: 'project__image--short',
        blobColour: '#5CC2E1',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'services-mobile-app-tands',
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
        gaDataLabel: 'services-mobile-app-hailie',

    },
];

const MobileAppsPage = class extends React.Component {
    static displayName = 'MobileAppsPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.mobileAppDev);
    }

    render = () => {
        return (
            <Page title={Constants.titles.mobileAppDevelopment} canonical="mobile-app-development">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero
                      title="Mobile App Development" text="We use React Native to build amazing mobile apps. Why?
                                        React Native is a real mobile app. Unlike web app wrappers, React Native uses
                                        native platform libraries, creating a completely native experience for your
                                        users."
                    />
                </div>
                <div className="container">
                    <ServiceItem
                      serviceCTA
                      serviceImage="/images/services/react-native.png"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
                      subTitle="Buy one get one free on apps"
                      serviceDescription={'React allows us to build mobile apps for iOS and Android at the same time with a shared application logic. There\'s an added benefit of shared application code for web applications as well.'}
                    />

                    <ServiceItem
                      serviceCTA
                      serviceImage="/images/projects/tone-and-sculpt/t&s-phones.jpg"
                      subTitle="Ship fast, for less"
                      serviceDescription={'React Native allows us to build incredibly efficiently, so you can get to market in record time and the shared codebase could reduce the cost of your product build by 40%!\n'
                        + '\n'}
                    />
                </div>

                <ClientQuote
                  text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}
                  clientName="Joe Comiskey"
                  image="/images/projects/unilever/unilever-1@1x.png"
                  srcSet="/images/projects/unilever/unilever-1@1x.png 1x, /images/projects/unilever/unilever-1@2x.png 2x"
                  clientTitle="Head of eCommerce Capability, Innovation and Strategy, UK Unilever"
                />

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Built with React Native</h3>
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

                <div className="section section--grey">
                    <div className="container">
                        <h3 className="section__title--dark text-center mt-5">Open source contributions</h3>
                        <div className="col-lg-8 offset-lg-2">
                            <p className="text-center mt-4">Our team have been working with the React and React Native
                                community since the framework was first released and we still do every day. We
                                contribute to the improvement of existing components and libraries as well as creating
                                and open sourcing our own components for the wider community.
                            </p>
                        </div>
                        <div className="flex-row pt-5">
                            <div className="justify-content-center col-md-4 mb-md-0 mb-4" />
                            <div className="justify-content-center col-md-4 mb-md-0 mb-4">
                                <Card
                                  cardLink="https://github.com/SolidStateGroup/react-native-firebase-auth" cardTechnology="JavaScript"
                                  cardTechnologyStars="143" cardTechnologyForked="25"
                                  techColourClass="card__technology--yellow"
                                  cardTitle="React Native Firebase Auth"
                                  cardText="Simplified Firebase authentication for React Native projects with support for Facebook & Google login."
                                />
                            </div>
                            <div className="justify-content-center col-md-4" />
                        </div>

                    </div>
                </div>


                <Footer gaFooterLabel="services_mobile-app_footer_contact"/>
            </Page>
        );
    };
};

export default MobileAppsPage;
