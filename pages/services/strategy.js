import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import {ListItemUnderlined, WideListItem} from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import {ButtonPrimary} from "../../components/base/forms/Button";
import ProjectItem from "../../components/ProjectItem";

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/phone.png',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: "project__image--short",
        blobColour: "#5CC2E1",
        tags: ['DESIGN', "MOBILE", "API"],

    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/static/images/projects/meownow/meownow-1@1x.png',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: "#f7f7f7",
        tags: ['DESIGN', 'BRANDING', 'WEB'],
    },
];


const StrategyPage = class extends React.Component {
    static displayName = 'StrategyPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.services} canonical="services">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                        <div className="flex-1 p-5">
                            <div className="container">
                                <h5 className="title--light mb-0">Our Services</h5>
                                <h1 className="hero__title mb-4">Strategy</h1>
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">Before we build anything, we help to identify the current biggest assumptions in your product or business, we can then help build tests to validate each assumption and finally frame any conclusions into actionable output.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <ServiceItem
                        serviceImage={'/static/images/services/ssg-idea-validation-trans.png'}
                        subTitle={'Business validation'}
                        listTitle={'WHAT WE DO'}
                        serviceDescription={'Our business validation services range from ad campaigns, low fidelity prototypes, increasing in fidelity all the way up to rapid application builds.' +
                        '\n'}/>

                    <ServiceItem
                        serviceImage={'/static/images/projects/meownow/tails_cat-ads@1x.png'}
                        className={'flex-row-reverse'}
                        subTitle={'Test & Learn'}
                        listTitle={'WHAT WE DO'}
                        serviceDescription={'Our test and learn services have helped startups and large enterprises to test the apetite for new products or propositions, the acceptance for pricing models and price points and the implementation of new features for existing products.'}/>
                </div>
                <ClientQuote
                    image={'/static/images/projects/meownow/meownow-1@1x.png'}
                    text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                    clientName={'Laura Cannon'} clientTitle={'New Market & Strategies'}/>
                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Strategy case studies</h3>
                    {projects.map((p) => (
                        <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}
                                     subTitle={p.subTitle}
                                     title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}
                                     projectImageClass={p.projectImageClass}
                                     blobColour={p.blobColour}
                        />
                    ))}
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default StrategyPage;
