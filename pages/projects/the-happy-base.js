import React, { Component } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection, ProjectFullVideoSection,
    ProjectTechSection,
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

    componentDidMount() {
        API.trackPage(Constants.pages.projectDetonator);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.theHappyBase} canonical="projects/the-happy-base">
                    <ProjectHero
                      clientImage="/images/projects/the-happy-base/The-Happy-Base-wordmark-white.svg"
                      projectTitle="A 360 cuddle for mental and physical wellbeing"
                      projectType="Responsive Web Application & Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="Mobile Design,"/>
                              <TextListItem listItemText="Web Application Design,"/>
                              <TextListItem listItemText="Interaction Design"/>
                          </React.Fragment>
)}
                      className="hero--happy-base"
                      projectImage="/images/projects/the-happy-base/happy-base-1.png 1x"
                      srcSet="/images/projects/the-happy-base/happy-base-1.png 1x, /images/projects/the-happy-base/happy-base-1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'The Happy Base is all about happy children (and happy parents!). A 360 cuddle for their mental and physical wellbeing. \n'
                            + '\n'
                            + 'Children can access a rich library of bitesize activities which are divided into three elements; Movement, Mindset & Meditation. Used together, this fully integrated support will allow them to empower and activate their inner resources, building resilience and long-lasting happiness.\n'}
                        />


                    </div>

                    <ProjectFullImageSection
                      imageUrl="/images/projects/the-happy-base/happy-base-2.png 1x"
                      srcSet="/images/projects/the-happy-base/happy-base-2.png 1x, /images/projects/the-happy-base/happy-base-2@2x.png 2x"
                      imageAltText="Dashboard UI"
                    />

                    <div className="container">


                        <ProjectDetailSectionItem
                          subTitle="Challenge"
                          imageOne="/images/projects/the-happy-base/unsplash-1.png"
                          srcSetImageOne="/images/projects/the-happy-base/unsplash-1.png 1x, /images/projects/the-happy-base/unsplash-1@2x.png 2x"
                          description={'1 in 6 children and young people have a diagnosable mental health problem, and many continue to have these problems into adulthood. Although there are existing options available to help with Children\'s wellness, this is often done in isolation and doesn’t offer a way for schools, parents and children to measure how their child is doing. \n'
                            + '\n'
                            + 'The Happy Base objective is to establish itself as the first proactive 360 wellbeing resource, engaging children with gamification and motivating them with positive encouragement.'}
                        />

                        <ProjectDetailSectionItem
                          title="Competitor Analysis"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/the-happy-base/happy-base-3.png"
                          srcSetImageOne="/images/projects/the-happy-base/happy-base-3.png 1x, /images/projects/the-happy-base/happy-base-3@2x.png 2x"
                          description="We started our discovery process by reviewing any existing children’s wellness products on the market. We found there were quite a few products that focused on specific areas regarding mediation, sleep stories and movement videos, yet none offered the full package."
                        />

                        {/* <ProjectFullImageSection */}
                        {/*  title="Mapping out the Information Architecture" */}
                        {/*  imageUrl="/images/projects/detonator/Detonator-IA-large.png" */}
                        {/*  srcSet="/images/projects/detonator/Detonator-IA-large.png 1x, /images/projects/detonator/Detonator-IA-large@2x.png 2x" */}
                        {/*  imageAltText="Detonator IA" */}
                        {/* /> */}

                        <ProjectDetailSectionItem
                          title="Designing the workflows: Web App"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/the-happy-base/happy-base-4.png"
                          srcSetImageOne="/images/projects/the-happy-base/happy-base-4.png 1x, /images/projects/the-happy-base/happy-base-4@2x.png 2x"
                          description={'The web app had to take into account 3 user types:\n'
                            + '\n'
                            + 'Super User: Responsible for the creation of all entities on the Happy Base platform such as Schools, Activities and Key Stages.\n'
                            + '\n'
                            + 'School Administrators: have access to a dashboard that flags when students are not engaging and provides data visualizations around overall School Happiness.\n'
                            + '\n'
                            + 'Teachers: have access to a dashboard with recommended activities for their class and information around class activity.'}
                        />

                        <ProjectDetailSectionItem
                          title="Designing the workflows: Web App"
                        // className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/the-happy-base/happy-base-5.png"
                          srcSetImageOne="/images/projects/the-happy-base/happy-base-5.png 1x, /images/projects/the-happy-base/happy-base-5@2x.png 2x"
                          description={<>
                              {'The web app had to take into account 3 user types:\n\n'}
                              <strong>Super User:</strong> {'Responsible for the creation of all entities on the Happy Base platform such as Schools, Activities and Key Stages.\n\n'}
                              <strong>School Administrators:</strong> {'have access to a dashboard that flags when students are not engaging and provides data visualizations around overall School Happiness.\n\n'}
                              <strong>Teachers:</strong> {'have access to a dashboard with recommended activities for their class and information around class activity.'}
                        </>}
                        />

                        <ProjectDetailSectionItem
                          title="Designing the workflows: Consumer App"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/the-happy-base/happy-base-6.png"
                          srcSetImageOne="/images/projects/the-happy-base/happy-base-6.png 1x, /images/projects/the-happy-base/happy-base-6@2x.png 2x"
                          description={<>
                              {'The consumer app caters to two user types. One of these is the '}<strong>Parent,</strong> {'who actively monitors their children as they progress on their Happy Base journey.\n\n'}
                              <strong>Children</strong> {'can access a rich library of bitesize Movement, Mindset & Meditation activities. Used together, Happybase users will learn to harness their skills and powers, building resilience and long-lasting happiness.'}
                        </>}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX Analysis"
                                  />
                                  <WideListItem
                                    listItemText="Information Architecture"
                                  />
                                  <WideListItem
                                    listItemText="Wireframing"
                                  />
                                  <WideListItem
                                    listItemText="Low Fidelity Prototype"
                                  />
                              </React.Fragment>
                        )}
                        />

                        <ProjectFullImageSection
                          description="We ran a series of tests with potential users of the product to validate key decisions relating to the app and content look and feel. This helped us to narrow down on key concepts early and save time."
                          imageUrl="/images/projects/the-happy-base/happy-base-7.png"
                          srcSet="/images/projects/the-happy-base/happy-base-7.png 1x, /images/projects/the-happy-base/happy-base-7@2x.png 2x"
                          imageAltText="Concept Validation"
                          title="Concept Validation"
                        />

                        <ProjectFullImageSection
                          description="Over the course of a few days, we rapidly developed and iterated on an approachable, friendly user interface for the mobile application, with large buttons and graphical elements make it easy and intuitive for children to interact with."
                          imageUrl="/images/projects/the-happy-base/happy-base-8.png"
                          srcSet="/images/projects/the-happy-base/happy-base-8.png 1x, /images/projects/the-happy-base/happy-base-8@2x.png 2x"
                          imageAltText="Concept Validation"
                          title="UI Design iterations"
                        />

                        <ProjectDetailSectionItem
                          title="Encouraging users with an uplifting look and feel"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/the-happy-base/happy-base-9.png"
                          srcSetImageOne="/images/projects/the-happy-base/happy-base-9.png, /images/projects/the-happy-base/happy-base-9@2x.png 2x"
                          description={'Woodland characters have a strong presence in the app and are used to guide and encourage users to engage with the platform.\n' +
                            '\n' +
                            'We wanted to create a destination rather than just another wellness app, so we’ve concepted an environment that will reflect what the child is seeing out the window (or not… if it’s raining).  Happy base can adapt to be whatever the user needs any time, day or night.'}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UI Design"
                                  />
                                  <WideListItem
                                    listItemText="Design System"
                                  />
                                  <WideListItem
                                    listItemText="Interaction Design"
                                  />
                                  <WideListItem
                                    listItemText="High Fidelity Prototype"
                                  />
                              </React.Fragment>
                        )}
                        />

                      <ProjectDetailSectionItem
                        title="Design System"
                        subTitle="Solution"
                        imageOneclassName="img__shadow"
                        imageOne="/images/projects/the-happy-base/happy-base-11.png"
                        srcSetImageOne="/images/projects/the-happy-base/happy-base-11.png, /images/projects/the-happy-base/happy-base-11@2x.png 2x"
                        description={'For our proof of concept design language, we put together a micro design system for the elements that we needed to demonstrate the first iteration of the App UI.'}
                      />

                    </div>


                  <ProjectFullImageSection
                    className="panel panel--gradient-hb"
                    imageUrl="/images/projects/the-happy-base/happy-base-10.png"
                    srcSet="/images/projects/the-happy-base/happy-base-10.png 1x, /images/projects/the-happy-base/happy-base-10@2x.png 2x"
                  />


                    <div className="container">

                        {/*<ProjectFullVideoSection*/}
                        {/*  autoPlay={false} controls muted={false}*/}
                        {/*  className="mb-5" title="High Fidelity Prototype" videoLink="/images/projects/detonator/Noodle-Fuel-Demo-Audio-Balanced.mp4"*/}
                        {/*/>*/}

                        <ProjectPrototypeSection
                          title="High Fidelity Prototype" prototypeLink="https://www.figma.com/proto/W4lhFV65GmDSJV8Hu19iuZ/HappyBase---UI-Design?page-id=1461%3A15740&node-id=1461%3A19826&viewport=521%2C472%2C0.25&scaling=scale-down&starting-point-node-id=1461%3A19826"
                        />

                      {/*TODO*/}
                      {/*  <ProjectTextSection*/}
                      {/*    className="sectionOneAnimation"*/}
                      {/*    subTitle="Highlights"*/}
                      {/*    description={'As part of the discovery phase, we wireframed the entire application, creating a clickable prototype of each page and user flow and delivered a high fidelity prototype that demonstrated the core workflow of the reader journey for the mobile application to allow prospective investors and other interested parties to get a real feel for how the application looks, feels and sounds. We also provided a detailed breakdown of the stories and cost estimates for the initial phase of the application. \n'*/}
                      {/*+ '\n'*/}
                      {/*+ 'The founders are currently using our outputs from the discovery phase to seek funding to develop an MVP of the detonator mobile application.'}*/}
                      {/*  />*/}


                    </div>


                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
