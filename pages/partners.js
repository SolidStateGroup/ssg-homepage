import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import { ButtonPrimary, ButtonText } from '../components/base/forms/Button';
import BaLogo from '../components/ClientLogos/BaLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import { ListItemUnderlined } from '../components/ListItem';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectItem from '../components/ProjectItem';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie/hailie-phone@1x.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: "#FF715A",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/british-airways',
        projectImage: '/static/images/projects/ba/ba-summary-ipad.png',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: "#3658B0",
        tags: ['API', "WEB"],
        projectType: ['Web App Development, ', 'API Development ']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/visa',
        projectImage: '/static/images/projects/visa/visa-1@1x.png',
        subTitle: 'Instant payment integration with NFC Ring',
        title: 'Cakewalk on the catwalk',
        blobColour: "#1a1e5a",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/unilever',
        projectImage: '/static/images/projects/unilever/unilever-1@1x.png',
        subTitle: 'Automated ecommerce via connected scales',
        title: 'Shopping that buys itself',
        blobColour: "#007DBB",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development ']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/static/images/projects/hertz/hertz-1@1x.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: "#FFD60D",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development ']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wfa',
        projectImage: '/static/images/projects/wfa/wfa-1.png',
        subTitle: 'Web Application',
        title: 'Visualising data for effective marketing communications',
        blobColour: "#ff003c",
        tags: ['API', "WEB"],
        projectType: ['UI design, ', 'Web App Development, ', 'API Development ']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/publicate',
        projectImage: '/static/images/projects/publicate/publicate-summary-ipad@1x.png',
        subTitle: 'Tablet & Web Application',
        title: 'Straightening out corporate documentation',
        blobColour: "#fe7101",
        tags: ['API', 'MOBILE', 'DESIGN', "WEB"],
        projectType: ['UX Design, ', 'UI design, ', 'Web App Development, ', 'API Development ']
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wazoku',
        projectImage: '/static/images/projects/wazoku/2.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Ideas happen anywhere, anytime',
        blobColour: "#173E5A",
        tags: ['DESIGN', 'MOBILE', "API"],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development ']
    },

];

const PartnersPage = class extends React.Component {
  static displayName = 'PartnersPage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
        <Page title={Constants.titles.home} canonical="">
            <div className="hero hero--three-quarters d-flex flex-column mx-0 p-4">
                <Header/>
                <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                    <div className="flex-1 justify-content-start pt-5 pb-5 pl-0 pr-0 pt-md-5">
                        <div className="offset-lg-3 offset-md-1">
                            <h1 className="hero__title mb-4">We partner with the best consultancies on projects for the biggest brands</h1>
                            <ButtonPrimary>Work with us</ButtonPrimary>
                        </div>
                    </div>
                    <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                        <img src="/static/images/clients/partners.svg" alt="Blob Graphic" className="img-fluid"/>
                    </div>
                </div>
                <div className="hero__footer hidden-md-down">
                    <div className="row">
                        <div className="col">
                            <div className="mouse">
                                <div className="scroller"/>
                            </div>
                            <div className="vertical-line"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel panel--primary">
                <div className="container">
                    <div className="flex-row">
                        <div className="col text-center hidden-sm-down">
                            <img src="/static/images/svg-icons/partner-icon.svg" alt="something"/>
                        </div>
                        <div className="col col-lg-6 px-md-5 px-0">
                            <h3 className="panel__title">Interested in working with us?</h3>
                            <p className="panel__text light">Are you a large enterprise looking for a technology partner or a
                                consultancy looking for experienced, highly skilled developers to supplement your
                                team.</p>
                        </div>
                        <div className="col px-md-2 px-0">
                            <dl className="panel__list">
                                <dt className="light">Call <span className="bold">Matthew</span> on</dt>
                                <dd className="bold">+44 (0)207 613 7222</dd>
                            </dl>
                            <dl className="panel__list">
                                <dt className="light">Email our new business team</dt>
                                <dd className="bold">matthew@solidstategroup.com</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container-fluid col-md-10">
                    <h2 className="section__title section__title--dark">Services</h2>
                    <ul className="lined-list list-unstyled flex-row pl-sm-5 pl-0 mt-3">
                        <ListItemUnderlined listItemText="UX & UI Design" listItemLink="/services/ux-design" />
                        <ListItemUnderlined listItemText="Mobile app development" listItemLink="/services/mobile-app-development" />
                        <ListItemUnderlined listItemText="Responsive web apps" listItemLink="/services/responsive-web-apps" />
                        <ListItemUnderlined listItemText="Branding" listItemLink="/services/branding" />
                        <ListItemUnderlined listItemText="Strategy" listItemLink="/services/strategy" />
                        <ListItemUnderlined listItemText="Prototyping" listItemLink="/services/ux-design" />
                        <ListItemUnderlined listItemText="API Development" listItemLink="/services/api-development" />
                        <ListItemUnderlined listItemText="Systems integration" listItemLink="/services/systems-integration" />
                    </ul>
                    <Link prefetch={false} href="/services">
                        <ButtonText buttonText="Explore our services" type="button" className="text-primary pl-sm-5 pl-0"/>
                    </Link>
                </div>
            </div>

            <div className="container">
                {projects.map((p) => (
                    <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage} subTitle={p.subTitle}
                                 title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}
                                 projectImageClass={p.projectImageClass}
                                 blobColour={p.blobColour}
                                 projectType={p.projectType}
                    />
                ))}
            </div>

            <Footer/>
        </Page>
      );
  };
};

export default PartnersPage;
