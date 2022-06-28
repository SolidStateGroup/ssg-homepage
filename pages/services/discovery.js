import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import { ListItemUnderlined, WideListItem } from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import { ButtonPrimary } from '../../components/base/forms/Button';
import ProjectItem from '../../components/ProjectItem';
import ServicesHero from '../../components/ServicesHero';
import CardBuildCosts from '../../components/CardBuildCosts';

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


const DiscoveryPage = class extends React.Component {
    static displayName = 'DiscoveryPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.servicesDiscovery);
    }

    render = () => {
        return (
            <Page title={Constants.titles.discovery} canonical="discovery">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero title="Discovery" text="Through a number of discovery workshops between your team and ours, we identify Issues and opportunities and use that information to prioritise the backlog into MVP and additional releases, produce timeline and cost estimates, create clickable prototypes and much more." />
                </div>


                <div className="section my-5">

                    <h6 className="title--project-section title--project-section--small text-grey mb0 text-center">What is a Discovery Stage?</h6>
                    <h3 className="text-center">Discovery Steps</h3>

                    <div className="container">

                        <section className="mt-5 mb-5">
                            <div className="col-md-5">
                                <h1>01</h1>
                                <p>Through a number of discovery workshops with your team and ours, we identify:</p>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <ul className="primary-bullet-list">
                                        <li>Stakeholders and existing business processes</li>
                                        <li>Issues and opportunities</li>
                                        <li>Business goals</li>
                                        <li>Success metrics</li>
                                        <li>Team members and communications channels</li>

                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="primary-bullet-list">
                                        <li>Any existing research and domain knowledge</li>
                                        <li>The market, target audience and personas</li>
                                        <li>Any competitor research / conduct research</li>
                                        <li>Assumptions and challenge them</li>
                                        <li>Any nonfunctional requirements</li>
                                    </ul>
                                </div>
                            </div>

                        </section>


                        <section className="pt-5">
                            <div className="col-md-5">
                                <h1>02</h1>
                                <p>We then use that information to to produce the following:</p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <ul className="primary-bullet-list">
                                        <li>Build preliminary product backlog</li>
                                        <li>Prioritise the backlog into MVP and additional releases</li>
                                        <li>Create a timeline and cost estimate for the roadmap</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="primary-bullet-list">
                                        <li>Create wireframes for the MVP</li>
                                        <li>Create clickable prototype from the wireframes to demonstrate the product</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>


                    <section className="mt-5 mb-5 pt-5">
                        <div className="container mt-5">
                            {/* <h6 className="title--project-section title--project-section--small text-grey mb0 text-center">What is a Discovery Stage?</h6> */}
                            <h3 className="text-center"><span className="text-primary">Why</span> do a Discovery Stage?</h3>

                            <h4 className="text-center mt-5"><span className="text-primary">Benefits</span> of Discovery</h4>

                            <div className="flex-row mt-5 align-items-stretch">
                                <div className="col-md-6">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-check-circle text-primary d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Reduce risks</h5>
                                        <p className="text-light mt-2">Reduce the risk of missing potential deadlines and exceeding budgets by researching all aspects of the project up front.</p>
                                    </CardBuildCosts>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-3">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-check-circle text-primary d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Establish roadmap</h5>
                                        <p className="text-light mt-2">Generate a full timeline of the project with deliverables and costs over multiple releases.</p>
                                    </CardBuildCosts>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-check-circle text-primary d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Build trust</h5>
                                        <p className="text-light mt-2">Regular communication and in-depth discussion / understanding around the product will establish a two-way trust.</p>
                                    </CardBuildCosts>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-check-circle text-primary d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Your business blueprint</h5>
                                        <p className="text-light mt-2">Once the discovery stage is complete you have a complete list of all requirements by release, the associated time and costs and a demo of how the product will look and feel. Perfect for raising money or testing with customers.</p>
                                    </CardBuildCosts>
                                </div>
                            </div>

                            <h4 className="text-center mt-5 pt-5"><span className="text-red">Dangers</span> of avoiding Discovery?</h4>

                            <div className="flex-row mt-5 align-items-stretch">
                                <div className="col-md-6">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-times-hexagon text-red d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Errors and failures</h5>
                                        <p className="text-light mt-2">Caused by the insufficient knowledge of requirements when implementing features.</p>
                                    </CardBuildCosts>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-3">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-times-hexagon text-red d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Discouraged investors</h5>
                                        <p className="text-light mt-2">With a vague roadmap and high level estimations of timelines and budgets.</p>
                                    </CardBuildCosts>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <CardBuildCosts className="height-100">
                                        <i className="fas fa-times-hexagon text-red d-inline"/>
                                        <h5 className="text-white d-inline pl-2">Scope creep</h5>
                                        <p className="text-light mt-2">By unearthing large new requirements during the build phase can cause nasty surprises and blow out budgets. This can cause stress to working relationships, projects to fail and investors to become frustrated.</p>
                                    </CardBuildCosts>
                                </div>
                            </div>


                        </div>


                    </section>


                </div>

                <div className="container">

                    <h3 className="text-center">Discovery <span className="text-primary">Deliverables</span></h3>

                    <ServiceItem
                      imageClassName="img__shadow"
                      serviceImage="/static/images/services/System-Architecture-Dark.png"
                      srcSet="/static/images/services/System-Architecture-Dark.png 1x, /static/images/services/System-Architecture-Dark@2x.png 2x"
                      className="flex-row-reverse"
                      subTitle="System requirements"
                      serviceDescription="We deliver a specification document that fully describes the project, its goals, features, suggested technology stack, and architecture overview, migration plans and release plans."
                    />

                    <ServiceItem
                      imageClassName="img__shadow"
                      srcSet="/static/images/services/product-roadmap.png 1x, /static/images/services/product-roadmap@2x.png 2x"
                      serviceImage="/static/images/services/product-roadmap.png"
                      subTitle="Product backlog and roadmap"
                      serviceDescription="A complete list of all user stories in the system prioritised into releases."
                    />

                    <ServiceItem
                      imageClassName="img__shadow"
                      serviceImage="/static/images/services/project-timeline.png"
                      srcSet="/static/images/services/project-timeline.png 1x, /static/images/services/project-timeline@2x.png 2x"
                      className="flex-row-reverse"
                      subTitle="Project Timelines and Estimates"
                      serviceDescription="An accurate estimate of how long the project will take to complete the MVP and the estimated cost broken down by release and by week."
                    />

                    <ServiceItem
                      imageClassName="img__shadow"
                      srcSet="/static/images/services/Wireframes.png 1x, /static/images/services/Wireframes@2x.png 2x"
                      serviceImage="/static/images/services/Wireframes.png"
                      subTitle="Wireframes for the MVP"
                      serviceDescription="A complete set of wireframes for the initial release of the product."
                    />

                    <ServiceItem
                      imageClassName="img__shadow"
                      serviceImage="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg"
                      srcSet="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg 1x, /static/images/projects/tone-and-sculpt/macbook-pro-on-table@2x.jpg 2x,"
                      className="flex-row-reverse"
                      subTitle="UX Prototype"
                      serviceDescription="Wireframe screens are linked together to create a clickable prototype so you can navigate through the application and get a feel for depth and usability."
                    />

                </div>

                <div className="panel panel--primary">
                    <div className="container">
                        <div className="flex-row">
                            <div className="col-md-2 text-center hidden-sm-down">
                                <img src="/static/images/svg-icons/partner-icon.svg" alt="partner icon"/>
                            </div>
                            <div className="col-md-6 px-md-5 px-0">
                                <h3 className="panel__title">Interested in working with us?</h3>
                                <p className="panel__text light">Are you a large enterprise looking for a technology partner or a
                                    consultancy looking for experienced, highly skilled developers to supplement your
                                    team.
                                </p>
                            </div>
                            <div className="col-md-4 px-md-2 px-0">
                                <dl className="panel__list">
                                    <dt className="light">Email our new business team</dt>
                                    <dd className="bold"><a className="text-white" href="mailto:matthew@solidstategroup.com" onClick={() => API.trackEvent({ category: 'Contact', event: 'view', label: 'partners_panel_mailto' })}>matthew@solidstategroup.com</a></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <ClientQuote
                  image="/static/images/projects/meownow/meownow-1@1x.png"
                  srcSet="/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x"
                  text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                  clientName="Laura Cannon" clientTitle="New Market & Strategies"
                />

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

export default DiscoveryPage;
