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
        href: '/projects/glenfiddich',
        projectImage: '/static/images/projects/glenfiddich/glenfiddich-1@1x.png',
        srcSet: '/static/images/projects/glenfiddich/glenfiddich-1@1x.png 1x, /static/images/projects/glenfiddich/glenfiddich-1@2x.png 2x,',
        clientImage: '/static/images/clients/glenfiddich.svg',
        subTitle: 'Multiplayer AR racing game for mobile',
        title: 'Glenfiddich Stag Racing - When Whisky Meets Hackathons',
        blobColour: '#483c3c',
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, '],
        gaDataLabel: 'work-projects-glenfiddich',
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
        gaDataLabel: 'services-react-native-changeplease',
    },
];

const ARPage = class extends React.Component {
    static displayName = 'ARPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
          <Page title={Constants.titles.augmentedReality} canonical="augmented-reality">
              <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                      <div className="flex-1 p-5">
                          <div className="container">
                              <h5 className="title--light mb-0">Our Services</h5>
                              <h1 className="hero__title mb-4">Augmented Reality</h1>
                              <div className="col-lg-6 offset-lg-3">
                                  <p className="text-light">We develop real-time, multiplayer, augmented reality games and applications which are instantly playable in any environment.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">

                  <ServiceItem
                    serviceImage={'/static/images/projects/glenfiddich/glenfiddich-1@2x.png'}
                    subTitle={'Powerful content for your content marketing strategy'}
                    serviceDescription={'AR content can form powerful content for your content marketing strategy, it can broaden your brand presence before a buyer gets anywhere near your new leads inbox.'}/>

                  <ServiceItem
                    serviceImage={'/static/images/services/unity.jpg'}
                    imageClassName={'img__shadow '}
                    className={'flex-row-reverse'}
                    subTitle={'Built with Unity'}
                    serviceDescription={'We build our AR apps using Unity, an engine popularly used for games.'}/>



                  <ServiceItem
                      serviceImage={'/static/images/services/ar-1.jpg'}
                      imageClassName={'img__shadow '}
                      subTitle={'Move fast, change often'}
                      serviceDescription={'Before Christmas we conceptualised, built, and distributed a complete AR app in just three weeks. For us, our AR app grew out of our desire to test our abilities with a new technology, and design something above and beyond a bog-standard Christmas card.'}/>


              </div>

              <div className="container">
                  <h3 className="section__title--dark text-center mb-5 mt-5">Recent Augmented Reality projects</h3>
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
              <Footer gaFooterLabel="services_augmented-reality_footer_contact"/>
          </Page>
        );
    };
};

export default ARPage;
