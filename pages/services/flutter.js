import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import {ListItemUnderlined, WideListItem} from '../../components/ListItem';
import ProjectItem from '../../components/ProjectItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import {ButtonPrimary} from "../../components/base/forms/Button";
import Card from "../../components/Card";

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/static/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /static/images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        clientImage: '/static/images/clients/tone-and-sculpt.svg',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: "project__image--short",
        blobColour: "#5CC2E1",
        tags: ['DESIGN', "MOBILE", "API"],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'services-flutter-tands',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie/hailie-phone@1x.png',
        srcSet: '/static/images/projects/hailie/hailie-phone@1x.png 1x, /static/images/projects/hailie/hailie-phone@2x.png 2x,',
        clientImage: '/static/images/clients/hailie.svg',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: "#FF715A",
        tags: ['DESIGN', 'MOBILE', "IOT"],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'services-flutter-hailie',

    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/change-please',
        projectImage: '/static/images/projects/change-please/Rotato-Snapshot@1x.png',
        srcSet: '/static/images/projects/change-please/Rotato-Snapshot@1x.png 1x, /static/images/projects/change-please/Rotato-Snapshot@2x.png 2x,',
        clientImage: '/static/images/clients/change-please.svg',
        subTitle: 'The lean, mean, face detecting, debt tracking machine',
        title: 'Changing the [face] of debt tracking',
        blobColour: "#908DF7",
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Mobile App Development'],
        gaDataLabel: 'services-flutter-changeplease',
    },
];

const FlutterPage = class extends React.Component {
    static displayName = 'FlutterPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.servicesFlutter);
    }

    render = () => {
        return (
          <Page title={Constants.titles.flutter} canonical="flutter">
              <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                      <div className="flex-1 p-5">
                          <div className="container">
                              <h5 className="title--light mb-0">Our Services</h5>
                              <h1 className="hero__title mb-4">Flutter</h1>
                              <div className="col-lg-6 offset-lg-3">
                                  <p className="text-light">Flutter is an exciting, cross platform development platform designed by Google. It allows for apps to be developed using a single code-base that can then run on both iOS and Android.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <ServiceItem
                    serviceImage={'/static/images/services/flutter.png'}
                    className={'flex-row'}
                    imageClassName={'img__shadow '}
                    subTitle={'Tried and trusted'}
                    serviceDescription={'It is used to develop applications for Android, iOS, Windows, Mac, Linux, Google Fuchsia and the web.'}/>
              </div>

              <div className="container">
                  <h3 className="section__title--dark text-center mb-5 mt-5">Recent Mobile Development projects</h3>
                  {projects.map((p) => (
                    <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}
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
              <Footer gaFooterLabel="services_flutter_footer_contact"/>
          </Page>
        );
    };
};

export default FlutterPage;
