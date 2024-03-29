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

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/electron-trader/electron-trader-1@1x.png',
        srcSet: '/images/projects/electron-trader/electron-trader-1@1x.png 1x, /images/projects/electron-trader/electron-trader-1@2x.png 2x,',
        subTitle: 'Web Application',
        clientImage: '/images/clients/electron.png',
        href: '/projects/electron-trader',
        title: 'Tapping into the future of the electricity market',
        blobColour: '#5EABBA',
        tags: ['DESIGN'],
        projectType: ['UX design, ', 'UI design'],
        gaDataLabel: 'services-design-electron-trader',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        clientImage: '/images/clients/tone-and-sculpt.svg',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: 'project__image--short',
        blobColour: '#5CC2E1',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'services-design-tands',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/purely-capital/pc-summary-mac.png',
        srcSet: '/images/projects/purely-capital/pc-summary-mac.png 1x, /images/projects/purely-capital/pc-summary-mac@2x.png 2x,',
        subTitle: 'Responsive Web Application',
        clientImage: '/images/clients/purely-capital-dark@2x.png',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: '#D02D55',
        tags: ['DESIGN', 'WEB'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'services-design-purely',

    },
];


const DesignPage = class extends React.Component {
    static displayName = 'DesignPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.servicesDesign);
    }

    render = () => {
        return (
            <Page title={Constants.titles.design} canonical="design">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero title="UX & UI Design" text="We approach our design projects with passion and expertise born out of a desire to understand our customers and deliver value quickly. Great design solves problems, it's not just about aesthetics." />
                </div>
                <div className="container">
                    <ServiceItem
                      serviceImage="/images/services/ux-design.jpg"
                      srcSet="/images/services/ux-design.jpg 1x, /images/services/ux-design@2x.png 2x"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
                      serviceListItem={(
                          <React.Fragment>
                              <WideListItem
                                listItemText="User research"
                              />
                              <WideListItem
                                listItemText="Wireframing"
                              />
                              <WideListItem
                                listItemText="Prototyping"
                              />
                              <WideListItem
                                listItemText="User testing"
                              />
                          </React.Fragment>
)}
                      subTitle="UX Design"
                      listTitle="WHAT WE DO"
                      serviceDescription={'Building products that solve problems for your users is hard.  We apply years of experience and formalised techniques to provide data that drives the design process.  '
                                 + 'User experience has never been more important for digital products.'}
                    />

                    <div className="row mb-5">
                        <div className="col-md-6 text-center">
                            <img className="img-fluid img__shadow" src="/images/projects/tone-and-sculpt/My T & S - Plan active 2.png" srcSet="/images/projects/tone-and-sculpt/My T & S - Plan active 2.png 1x, /images/projects/tone-and-sculpt/My T & S - Plan active 2@2x.png 2x" />
                        </div>
                        <div className="col-md-6 text-center">
                            <img className="img-fluid img__shadow" src="/images/projects/tone-and-sculpt/Dashboard@1x.png" srcSet="/images/projects/tone-and-sculpt/Dashboard@1x.png 1x, /images/projects/tone-and-sculpt/Dashboard2x.png 2x" />
                        </div>
                    </div>

                    <ServiceItem
                      srcSet="/images/services/ui-components@1x.png 1x, /images/services/ui-components@2x.png 2x"
                      serviceImage="/images/services/ui-components@1x.png"
                      serviceListItem={(
                          <React.Fragment>
                              <WideListItem
                                listItemText="User interface design"
                                listItemLink="/"
                              />
                              <WideListItem
                                listItemText="Branding" listItemLink="/"
                              />
                              <WideListItem
                                listItemText="Mobile first" listItemLink="/"
                              />
                              <WideListItem
                                listItemText="High fidelity prototypes" listItemLink="/"
                              />
                          </React.Fragment>
)}
                      subTitle="UI Design"
                      listTitle="WHAT WE DO"
                      serviceDescription={'From our London office, we\'ve been working with corporations and startups for over 15 years, building intuitive user experiences with beautifully crafted user interfaces.\n'
                        + '\n'}
                    />

                    <ServiceItem
                      video="/images/projects/purely-capital/quote-confirmationv2.mov"
                      className="flex-row-reverse"
                      serviceListItem={(
                          <React.Fragment>
                              <WideListItem
                                listItemText="Motion prototypes"
                              />
                              <WideListItem
                                listItemText="Frontend Development"
                              />
                              <WideListItem
                                listItemText="CSS & Javascript Animation"
                              />
                          </React.Fragment>
)}
                      subTitle="Interaction Design"
                      listTitle="WHAT WE DO"
                      serviceDescription={'We specialise in UI/UX animation that not only looks great, but aids users by providing feedback, directing attention and showcasing the personality of your product.\n'
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

                {/* Resources section */}
                {/* <div className="section section--grey"> */}
                {/*    <h2 className="section__title--dark text-center">Resources</h2> */}
                {/*    <div className="offset-md-4 col-md-4 mt-4"> */}
                {/*        <p className="text-center">Download our resources and samples to get a better idea of our process and styleguide. */}
                {/*        </p> */}
                {/*    </div> */}
                {/*    <div className="flex-row justify-content-center mt-5 mb-5"> */}
                {/*        <ButtonDownload href="/static/downloads/SSG-design-process.pdf">SSG-Styleguide__FINAL-12345678.sketch</ButtonDownload> */}
                {/*        <ButtonDownload href="/static/downloads/SSG-design-process.pdf">ssg-process-deck.pdf</ButtonDownload> */}
                {/*        <ButtonDownload href="/static/downloads/SSG-design-process.pdf">pres.pdf</ButtonDownload> */}
                {/*    </div> */}
                {/* </div> */}

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Design case studies</h3>
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

export default DesignPage;
