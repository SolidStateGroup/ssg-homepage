import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectFullVideoSection,
    ProjectTextSection,
} from '../../components/ProjectDetailSectionItem';
import Footer from '../../components/Footer';
import ProjectNav from '../../components/ProjectNav';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';
    static propTypes = {
        children: propTypes.node,
    };

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.cap10} canonical="projects/electron-trader">
                    <ProjectHero
                      clientImage="/static/images/clients/Cap10-logotype-white.svg"
                      projectTitle="Flexible reporting for businesses"
                      projectType="Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Mobile App Development"/>
                          </React.Fragment>
)}
                      className="hero--cap10"
                      projectImage="/static/images/projects/cap10/1.png"
                      srcSet="/static/images/projects/cap10/1.png 1x, /static/images/projects/cap10/1@2x.png 2x"
                    />

                    <div className="container">
                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="00 / Overview"
                          description="Cap10 is a communication tool for businesses, which allows for the creation and fulfilment of reports from various actors within the business. The application is structured to mirror the hierarchy and the relevant governance within a business. The feature set available to each user acknowledges the different levels of security and permissions for said user."
                        />

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="01 / Challenge"
                          description="Communication and work management in any multi-faceted business can be complicated and inefficient. The aim of Cap10 is to create a flexible internal reporting system for businesses in different industries and verticals. Focussing purely on observation and reporting, Cap10 aims to create a logical and portable comms and governance system for internal teams in any business."
                        />

                        <ProjectDetailSectionItem
                          title="Branding"
                          subTitle="02 / Solution"
                          imageOne="/static/images/projects/cap10/styleguide.png"
                          srcSetImageOne="/static/images/projects/cap10/styleguide.png 1x, /static/images/projects/cap10/styleguide@2x.png 2x"
                          description={'We started by creating a number of branding routes for the client\'s consideration. They served to focus our ideas and eliminate visual concepts that were not desirable. From here we developed a new route based on client feedback and iterated on this until we had a final brand that the client was happy with.\n'}
                          ProjectServiceListItem={
                              <React.Fragment>
                                  <WideListItem
                                      listItemText={'Branding'}/>
                                  <WideListItem
                                      listItemText={'Style guide'}/>
                              </React.Fragment>}
                        />

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            title="UI Design"
                            subTitle="02 / Solution"
                            imageOne="/static/images/projects/cap10/mobile-1.png"
                            srcSetImageOne="/static/images/projects/cap10/mobile-1.png 1x, /static/images/projects/cap10/mobile-1@2x.png 2x"
                            description={'The UI design uses mostly pale, low chroma colours and subtle effects to create a form that appears like a solid material. These UI elements look solid and robust and fit in nicely with the themes of security and encryption that exists within the app. Gradients are employed to drive interest to specific UI elements of the design, such as primary buttons and data visualisations.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'UI Design'}/>
                                    <WideListItem
                                        listItemText={'Design System'}/>
                                    <WideListItem
                                        listItemText={'Clickable prototypes'}/>
                                    <WideListItem
                                        listItemText={'Interaction Design'}/>
                                </React.Fragment>}
                        />

                        <ProjectFullImageSection
                          imageUrl="/static/images/projects/cap10/mobile-2.jpg"
                          srcSet="/static/images/projects/cap10/mobile-2.jpg 1x, /static/images/projects/cap10/mobile-2@2x.jpg 2x"
                          imageAltText="Dashboard UI"
                        />

                        <ProjectFullVideoSection title={'Interaction Design'} videoLink={'/static/images/projects/cap10/rotato-1.mov'} />

                         <ProjectTechSection
                             subTitle={'03 / Development'}
                             description={'Something about security and the tech stack here.'}
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img alt="react" src='/static/images/tech-icons/dark/react.svg'
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img alt=".net" src='/static/images/tech-icons/dark/net.svg'
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img alt="mysql" src='/static/images/tech-icons/dark/MySQL.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img alt="aws" src='/static/images/tech-icons/dark/aws.svg'
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'API Development'}/>
                                </React.Fragment>}

                         />

                         {/*<ProjectTextSection*/}
                         {/*   subTitle="04 / Headlines"*/}
                         {/*   description={'We successfully released the new mobile app with a bespoke global fitness challenge that invited 40,000 users from Vodafone’s global teams to join and take part using their wearables or phone health data.\n' +*/}
                         {/*   '\n' +*/}
                         {/*   'We delivered two versatile, fully whitelablled web and mobile app products in 2 months.'*/}
                         {/*   }*/}
                         {/*/>*/}

                    </div>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
