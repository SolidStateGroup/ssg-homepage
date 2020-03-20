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
        href: '/projects/meownow',
        projectImage: '/static/images/projects/meownow/meownow-1@1x.png',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: "#f7f7f7",
        tags: ['DESIGN', 'BRANDING', 'WEB'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/change-please',
        projectImage: '/static/images/projects/change-please/Rotato Snapshot@1x.png',
        subTitle: 'The lean, mean, face detecting, debt tracking machine',
        title: 'Changing the [face] of debt tracking',
        blobColour: "#908DF7",
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
    },
];


const BrandingPage = class extends React.Component {
    static displayName = 'BrandingPage';

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
                                <h1 className="hero__title mb-4">Branding</h1>
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">We work with small and large businesses to deliver high quality brand guidelines and identities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientQuote
                    image={'/static/images/projects/meownow/meownow-1@1x.png'}
                    text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                    clientName={'Laura Cannon'} clientTitle={'New Market & Strategies'}/>
                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Branding case studies</h3>
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

export default BrandingPage;
