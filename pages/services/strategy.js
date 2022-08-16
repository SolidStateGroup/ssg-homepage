import React from 'react';
import Link from 'next/link';
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
        gaDataLabel: 'services-strategy-tands',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/images/projects/meownow/meownow-1@1x.png',
        srcSet: '/images/projects/meownow/meownow-1@1x.png 1x, /images/projects/meownow/meownow-1@2x.png 2x,',
        clientImage: '/images/clients/meownow.svg',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: '#f7f7f7',
        tags: ['DESIGN', 'BRANDING', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Web Development, '],
        gaDataLabel: 'services-strategy-meownow',
    },
];


const StrategyPage = class extends React.Component {
    static displayName = 'StrategyPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.serviceStrategy);
    }

    render = () => {
        return (
            <Page title={Constants.titles.strategy} canonical="strategy">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero title="Strategy" text="Our management team has over 50 years combined experience in creating technical solutions to solve business problems. Whether it’s digital transformation, business process re-engineering, or a new product or service, our background in management consulting allows us to fully scope business requirements and translate them into technical solutions." />
                </div>
                <div className="container">

                    <ServiceItem
                      serviceImage="/images/services/web-development.jpg"
                      subTitle="Team construction"
                      serviceDescription="Alongside the correct technical solution, it’s also crucial to construct a functional project team to execute the project. We assess the strengths in the client team and plug any gaps with members of ours, from business analysts to product managers, delivery managers, data analysts and testers. We can also help hire and train additional members of your team when it comes time to expand your workforce."
                    />

                    <ServiceItem
                      className="flex-row-reverse"
                      serviceImage="/images/services/ssg-idea-validation-trans.png"
                      subTitle="Business validation"
                      serviceDescription="If you’re launching a new product or service, generating real data based on a lightweight prototype can help validate the product and market fit before spending significant capital. Our business validation services range from ad campaigns, low fidelity prototypes, increasing in fidelity all the way up to rapid application builds."
                    />

                    <ServiceItem
                      serviceImage="/images/projects/meownow/tails_cat-ads@1x.png"
                      subTitle="Test & Learn"
                      serviceDescription="Our test and learn services have helped startups and large enterprises to test the appetite for new products or propositions, the acceptance for pricing models and price points and the implementation of new features for existing products."
                    />
                </div>
                <ClientQuote
                  image="/images/projects/meownow/meownow-1@1x.png"
                  srcSet="/images/projects/meownow/meownow-1@1x.png 1x, /images/projects/meownow/meownow-1@2x.png 2x"
                  text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                  clientName="Laura Cannon" clientTitle="New Market & Strategies"
                />
                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Strategy case studies</h3>
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

                <Footer gaFooterLabel="services_strategy_footer_contact"/>
            </Page>
        );
    };
};

export default StrategyPage;
