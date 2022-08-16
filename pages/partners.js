import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import { ButtonPrimary, ButtonText } from '../components/base/forms/Button';
import { ListItemUnderlined } from '../components/ListItem';
import ProjectItem from '../components/ProjectItem';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/ladbrokes/ladbrokes-1.png',
        srcSet: '/images/projects/ladbrokes/ladbrokes-1.png 1x, /images/projects/ladbrokes/ladbrokes-1@2x.png 2x,',
        clientImage: '/images/clients/ladbrokes.png',
        subTitle: 'Web Application',
        href: '/projects/ladbrokes-coral',
        title: 'Bringing the entire IT infrastructure within Ladbrokes Coral up to date',
        blobColour: '#084d8d',
        tags: ['WEB', 'API', 'IOT'],
        projectType: [ 'API Development, Web Application, Hardware integrations'],
        gaDataLabel: 'work-projects-ladbrokes',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/zopa/zopa-1.png',
        srcSet: '/images/projects/zopa/zopa-1.png 1x, /images/projects/zopa/zopa-1@2x.png 2x,',
        clientImage: '/images/clients/zopa.svg',
        subTitle: 'Mobile App',
        href: '/projects/zopa',
        title: 'New borrowing power service for a FeelGood Money platform',
        blobColour: '#00D9C5',
        tags: ['MOBILE', 'API'],
        projectType: [ 'API Development'],
        gaDataLabel: 'work-projects-zopa',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/racing-post/racing-post-1.png',
        srcSet: '/images/projects/racing-post/racing-post-1.png 1x, /images/projects/racing-post/racing-post-1@2x.png 2x,',
        clientImage: '/images/clients/racing-post.svg',
        subTitle: 'Responsive Website & Mobile App',
        href: '/projects/racing-post',
        title: 'New Serverless Data Platform for the home of horse racing news',
        blobColour: '#d11f25',
        tags: ['MOBILE', 'API', 'WEB'],
        projectType: [ 'API Development, ', 'Mobile App Development, ', 'Cloud Infrastructure Implementation'],
        gaDataLabel: 'work-projects-racing-post',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/images/projects/hailie/hailie-phone@1x.png',
        srcSet: '/images/projects/hailie/hailie-phone@1x.png 1x, /images/projects/hailie/hailie-phone@2x.png 2x,',
        clientImage: '/images/clients/hailie.svg',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: "#FF715A",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'partners-projects-hailie',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/british-airways',
        projectImage: '/images/projects/ba/ba-summary-ipad.png',
        srcSet: '/images/projects/ba/ba-summary-ipad.png 1x, /images/projects/ba/ba-summary-ipad@2x.png 2x,',
        clientImage: '/images/clients/british-airways.svg',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: "#3658B0",
        tags: ['API', "WEB"],
        projectType: ['Web App Development, ', 'API Development '],
        gaDataLabel: 'partners-projects-ba',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/unilever',
        projectImage: '/images/projects/unilever/unilever-1@1x.png',
        srcSet: '/images/projects/unilever/unilever-1@1x.png 1x, /images/projects/unilever/unilever-1@2x.png 2x,',
        clientImage: '/images/clients/unilever-colour.svg',
        subTitle: 'Automated ecommerce via connected scales',
        title: 'Shopping that buys itself',
        blobColour: "#007DBB",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'partners-projects-ul-scale',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/images/projects/hertz/hertz-1@1x.png',
        srcSet: '/images/projects/hertz/hertz-1@1x.png 1x, /images/projects/hertz/hertz-1@2x.png 2x,',
        clientImage: '/images/clients/hertz-colour.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: "#FFD60D",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'partners-projects-hertz',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/visa',
        projectImage: '/images/projects/visa/visa-1@1x.png',
        srcSet: '/images/projects/visa/visa-1@1x.png 1x, /images/projects/visa/visa-1@2x.png 2x,',
        clientImage: '/images/clients/visa-colour.svg',
        subTitle: 'Instant payment integration with NFC Ring',
        title: 'Cakewalk on the catwalk',
        blobColour: "#1a1e5a",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development'],
        gaDataLabel: 'partners-projects-visa',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wfa',
        projectImage: '/images/projects/wfa/wfa-1.png',
        srcSet: '/images/projects/wfa/wfa-1.png 1x, /images/projects/wfa/wfa-1@2x.png 2x,',
        clientImage: '/images/clients/wfa.svg',
        subTitle: 'Web Application',
        title: 'Visualising data for effective marketing communications',
        blobColour: "#ff003c",
        tags: ['API', "WEB"],
        projectType: ['UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'partners-projects-wfa',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wazoku',
        projectImage: '/images/projects/wazoku/2.png',
        srcSet: '/images/projects/wazoku/2.png 1x, /images/projects/wazoku/2@2x.png 2x,',
        clientImage: '/images/clients/wazoku.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Ideas happen anywhere, anytime',
        blobColour: "#173E5A",
        tags: ['DESIGN', 'MOBILE', "API"],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'partners-projects-wazoku',
    },
];

const PartnersPage = class extends React.Component {
  static displayName = 'PartnersPage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

    componentDidMount() {
        API.trackPage(Constants.pages.partners);
        gsap.timeline()
            .from('.hero__container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })
            .from('.panel--primary .container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })

    }

  render = () => {
      return (
          <Page title={Constants.titles.partners} canonical="partners">
              <div className="hero hero--three-quarters d-flex flex-column mx-0 p-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                      <div className="flex-1 justify-content-start pt-5 pb-5 pl-0 pr-0 pt-md-5">
                          <div className="offset-lg-3 offset-md-1">
                              <h1 className="hero__title mb-4">We partner with the best consultancies on projects for the biggest brands</h1>
                              <Link prefetch={false} href="/contact-form">
                                  <ButtonPrimary onClick={() => API.trackEvent({ category: 'Contact', event: 'view', label: 'partners_hero_contact' })}>Work with us</ButtonPrimary>
                              </Link>
                          </div>
                      </div>
                      <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                          <img src="/images/clients/partners.svg" alt="Blob Graphic" className="img-fluid"/>
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
                          <div className="col-md-2 text-center hidden-sm-down">
                              <img src="/images/svg-icons/partner-icon.svg" alt="partner icon"/>
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

              <div className="section">
                  <div className="container-fluid col-md-10">
                      <h2 className="section__title section__title--dark">Services</h2>
                      <ul className="lined-list list-unstyled flex-row pl-sm-5 pl-0 mt-3">
                          <ListItemUnderlined listItemText="UX & UI Design" listItemLink="/services/design" />
                          <ListItemUnderlined listItemText="Mobile App Development" listItemLink="/services/mobile-app-development" />
                          <ListItemUnderlined listItemText="Responsive Web Apps" listItemLink="/services/responsive-web-apps" />
                          <ListItemUnderlined listItemText="Branding" listItemLink="/services/branding" />
                          <ListItemUnderlined listItemText="Strategy" listItemLink="/services/strategy" />
                          <ListItemUnderlined listItemText="Prototyping" listItemLink="/services/design" />
                          <ListItemUnderlined listItemText="API Development" listItemLink="/services/api-development" />
                          <ListItemUnderlined listItemText="Systems Integration" listItemLink="/services/systems-integration" />
                      </ul>
                      <Link prefetch={false} href="/services">
                          <ButtonText buttonText="Explore our services" type="button" className="text-primary pl-sm-5 pl-0"/>
                      </Link>
                  </div>
              </div>

              <div className="container">
                  {projects.map((p, i) => (
                      <ProjectItem
                        key={i}
                        ButtonComponent={p.ButtonComponent} projectImage={p.projectImage} subTitle={p.subTitle}
                        title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}
                        projectImageClass={p.projectImageClass}
                        blobColour={p.blobColour}
                        projectType={p.projectType}
                        href={p.href}
                        srcSet={p.srcSet}
                        clientImage={p.clientImage}
                      />
                  ))}
              </div>

              <Footer/>
          </Page>
      );
  };
};

export default PartnersPage;
