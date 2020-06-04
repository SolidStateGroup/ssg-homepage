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
        projectImage: '/static/images/projects/electron-trader/electron-trader-1@1x.png',
        srcSet: '/static/images/projects/electron-trader/electron-trader-1@1x.png 1x, /static/images/projects/electron-trader/electron-trader-1@2x.png 2x,',
        subTitle: 'Web Application',
        clientImage: '/static/images/clients/electron.png',
        href: '/projects/electron-trader',
        title: 'Tapping into the future of the electricity market',
        blobColour: '#5EABBA',
        tags: ['DESIGN'],
        projectType: ['UX design, ', 'UI design'],
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/static/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /static/images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        clientImage: '/static/images/clients/tone-and-sculpt.svg',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: 'project__image--short',
        blobColour: '#5CC2E1',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        srcSet: '/static/images/projects/purely-capital/pc-summary-mac.png 1x, /static/images/projects/purely-capital/pc-summary-mac@2x.png 2x,',
        subTitle: 'Responsive Web Application',
        clientImage: '/static/images/clients/purely-capital-dark@2x.png',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: '#D02D55',
        tags: ['DESIGN', 'WEB'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Web App Development, ', 'API Development '],

    },
];


const DesignPage = class extends React.Component {
    static displayName = 'DesignPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.design} canonical="design">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                        <div className="flex-1 p-5">
                            <div className="container">
                                <h5 className="title--light mb-0">Our Services</h5>
                                <h1 className="hero__title mb-4">UX & UI Design</h1>
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">
                                    We approach our design projects with passion and expertise born out of a desire to understand our customers and deliver value quickly. Great design solves problems, it's not just about aesthetics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ServiceItem
                      serviceImage="/static/images/services/ux-design.jpg"
                      srcSet="/static/images/services/ux-design.jpg 1x, /static/images/services/ux-design@2x.png 2x"
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

                    <ServiceItem
                      srcSet="/static/images/services/ui-components@1x.png 1x, /static/images/services/ui-components@2x.png 2x"
                      serviceImage="/static/images/services/ui-components@1x.png"
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
                      serviceImage="https://www.solidstategroup.com/images/services/onboarding-compressed-new.gif"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
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
                  image="/static/images/projects/tone-and-sculpt/phone.png"
                  srcSet="/static/images/projects/tone-and-sculpt/phone.png 1x, /static/images/projects/tone-and-sculpt/phone@2x.png 2x"
                  text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}
                  clientName="Krissy Cela" clientTitle="Founder - Tone and Sculpt"
                />

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
                        />
                    ))}
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default DesignPage;
