import React from 'react';
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
        projectImage: '/static/images/projects/hailie-summary-image.png',
        subTitle: 'iOS and Android Mobile Applications',
        title: 'Reinventing treatment of respiritory issues',
        clientBrand: '/static/images/clients/colour/hailie.svg',
        clientName: 'Hailie',
        tags: ['design'],

    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/ba-summary-image.png',
        subTitle: 'Responsive Web Applicatiom',
        title: 'Ingetration with 1960s tech',
        clientBrand: '/static/images/clients/colour/ba.svg',
        clientName: 'British Airways',
        tags: ['API Development'],

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
                    <div className="flex-1 justify-content-start p-5">
                        <div className="offset-lg-3">
                            <h1 className="hero__title mb-4">We partner with the best consultancies on projects for the biggest brands</h1>
                            <ButtonPrimary>Work with us</ButtonPrimary>
                        </div>
                    </div>
                    <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                        <img src="/static/images/clients/partners.svg" alt="Blob Graphic" className="img-fluid"/>
                    </div>
                </div>
                <div className="hero__footer hidden-sm-down">
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
                    <div className="row">
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
                <div className="container-fluid col-lg-8 offset-md-2">
                    <h2 className="section__title">Services</h2>
                    <ul className="lined-list list-unstyled flex-row pl-5 mt-3">
                        <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'}  />
                        <ListItemUnderlined listItemText={'Mobile app development'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'Strategy'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'Responsive web apps'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'UX & UI Design'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'API Development'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'Prototyping'} listItemLink={'/'} />
                        <ListItemUnderlined listItemText={'Systems integration'} listItemLink={'/'} />
                    </ul>
                    <ButtonText buttonText={'Explore our services'} type={'button'} className="text-primary pl-5"/>
                </div>
            </div>

            <div className="container">
                {projects.map((p) => (
                  <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage} subTitle={p.subTitle}
                               title={p.title} clientBrand={p.clientBrand} clientName={p.clientName} className='mb-5'/>

                ))}
            </div>

            <Footer/>
        </Page>
      );
  };
};

export default PartnersPage;
