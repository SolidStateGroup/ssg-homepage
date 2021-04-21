import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import { ListItemUnderlined, WideListItem } from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import { ButtonPrimary } from '../../components/base/forms/Button';
import ProjectItem from '../../components/ProjectItem';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/hero/hero-1.png',
        srcSet: '/static/images/projects/hero/hero-1.png 1x, /static/images/projects/hero/hero-1@2x.png 2x,',
        clientImage: '/static/images/clients/hero-logo.png',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/hero-wellbeing',
        title: 'Connected Health, Made Simple',
        blobColour: '#15CBCE',
        tags: ['WEB', 'API', 'IOT', 'MOBILE', 'DESIGN'],
        projectType: ['UX design, UI design, API Development, Web Application, Hardware integrations, Mobile App Development'],
        gaDataLabel: 'work-projects-hero',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/static/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /static/images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        clientImage: '/static/images/clients/tone-and-sculpt.svg',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: 'project__image--short',
        blobColour: '#5CC2E1',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-ts',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/static/images/projects/meownow/meownow-1@1x.png',
        srcSet: '/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x,',
        clientImage: '/static/images/clients/meownow.svg',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: '#f7f7f7',
        tags: ['DESIGN', 'BRANDING', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Web Development'],
        gaDataLabel: 'work-projects-meow-now',
    },
];


const UserResearchPage = class extends React.Component {
    static displayName = 'UserResearchPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.servicesUserResearch);
    }

    render = () => {
        return (
            <Page title={Constants.titles.userResearch} canonical="user-research">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                        <div className="flex-1 p-5">
                            <div className="container">
                                <h5 className="title--light mb-0">Our Services</h5>
                                <h1 className="hero__title mb-4">User Research</h1>
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">
                                        We conduct detailed user research with rigour and detail that is flexible depending on your project and budget. Executing user research and usability testing results in a better user experience for your users and saves you time and money in the long run by identifying and fixing problems early.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section my-5">
                    <div className="container-fluid pl-md-0 pl-3 pr-0">
                        <div className="col-md-8 pl-0 offset-md-2">
                            <div className="flex-row">
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3"
                                        alt="Research"
                                    />
                                    <h5>Define the goals & objectives</h5>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/design-blob-icon.svg" className="mb-3"
                                        alt="Outline"
                                    />
                                    <h5>Outline your hypotheses</h5>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/development-blob-icon.svg" className="mb-3"
                                        alt="Tools"
                                    />
                                    <h5>Select the right tools</h5>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/identify-blob-icon.svg" className="mb-3"
                                        alt="Identify"
                                    />
                                    <h5>Identify the correct audience</h5>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/product-blob-icon.svg" className="mb-3"
                                        alt="Execute Research"
                                    />
                                    <h5>Execute the research</h5>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                        src="/static/images/svg-icons/analyse-blob-icon.svg" className="mb-3"
                                        alt="Analyse"
                                    />
                                    <h5>Analyse & create actions</h5>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src="/static/images/svg-icons/arrow-gradient-left-turn.svg"
                                    className="img-fluid img__full-width pl-5 pr-5 hidden-sm-down" alt="Cycle GFX"
                                />
                                <div className="text-center">
                                    <p className="mt-4 bold text-grey">We support you beyond MVP release and help you develop the product and achieve your business goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <ServiceItem
                      serviceImage="/static/images/services/user-interviews.png"
                      srcSet="/static/images/services/user-interviews.png 1x, /static/images/services/user-interviews@2x.png 2x"
                      className="flex-row-reverse"
                      subTitle="User interviews"
                      serviceDescription={'User Interviews are a foundational user-centered design method that provide raw, hands on experiences of using a product. User interviews allow us to define any legitimate problems with an existing product and help make sure that we are focussing on areas that add value for the end user.'}
                    />

                    <ServiceItem
                      srcSet="/static/images/services/user-research.png 1x, /static/images/services/user-research@2x.png 2x"
                      serviceImage="/static/images/services/user-research.png"
                      subTitle="Usability testing"
                      serviceDescription={'Usability testing results in a better user experience for your users and saves you time and money in the long run by identifying and fixing problems early.'}
                    />

                    <ServiceItem
                        serviceImage="/static/images/services/analysing-data.png"
                        srcSet="/static/images/services/analysing-data.png 1x, /static/images/services/analysing-data@2x.png 2x"
                        className="flex-row-reverse"
                        subTitle="Analysing data"
                        serviceDescription={'The research will provide data that can be iterated over for more detailed insights or provide actionable drivers for the design process. We use a number of qualitative and quantitative research methods to collate the correct data and present it to you.'}
                    />

                    <ServiceItem
                        srcSet="/static/images/services/insights.png 1x, /static/images/services/insights@2x.png 2x"
                        serviceImage="/static/images/services/insights.png"
                        subTitle="Insights"
                        serviceDescription={'Once we’ve completed the research we\'ll use the collated data to provide some insights and actions for your product.  These actions will serve to inform design decisions and indicate ways in which existing products could be improved.'}
                    />

                </div>

                <ClientQuote
                    image={'/static/images/projects/meownow/meownow-1@1x.png'}
                    srcSet={'/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x'}
                    text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                    clientName={'Laura Cannon'} clientTitle={'New Market & Strategies'}/>

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">User research case studies</h3>
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

                <Footer gaFooterLabel="services_design_footer_contact"/>
            </Page>
        );
    };
};

export default UserResearchPage;
