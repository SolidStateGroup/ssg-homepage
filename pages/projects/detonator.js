import React, { Component } from 'react';
import propTypes from 'prop-types';
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
                <Page title={Constants.titles.detonator} canonical="projects/detonator">
                    <ProjectHero
                      clientImage="/images/projects/detonator/detonator-wordmark.png"
                      projectTitle="Re-introducing reading to a disengaged young audience"
                      projectType="Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="Interaction Design,"/>
                              <TextListItem listItemText="Product Management"/>
                              {/* <TextListItem listItemText="Mobile App Development"/> */}
                          </React.Fragment>
)}
                      className="hero--detonator"
                      projectImage="/images/projects/detonator/1.png"
                      srcSet="/images/projects/detonator/1.png 1x, /images/projects/detonator/1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'Detonator is a brave new concept to re-introduce reading to a disengaged young audience. \n'
                          + '\n'
                          + 'The Detonator interactive reader customises the reading experience based on what is being read and the current narrative. Short punchy stories, broken into easy to read chunks with atmospheric background noises, and sticky gamification make reading a far more immersive experience. Detonator users are incentivised to read more by a ranking system and earn rewards which can be equipped to personalise their profile.  \n'
                          + '\n'
                          + 'Detonator content is exclusive to the platform and is released periodically to subscribed users.\n'}
                        />


                    </div>

                    <ProjectFullImageSection
                      imageUrl="/images/projects/detonator/2.png"
                      srcSet="/images/projects/detonator/2.png 1x, /images/projects/detonator/2@2x.png 2x"
                      imageAltText="Dashboard UI"
                    />

                    <div className="container">


                        <ProjectDetailSectionItem
                              // title={'Users & Audience'}
                          subTitle="Challenge"
                          imageOne="/images/projects/detonator/Kick-Ass-Books-Presentation-2.jpg"
                          srcSetImageOne="/images/projects/detonator/Kick-Ass-Books-Presentation-2.jpg 1x, /images/projects/detonator/Kick-Ass-Books-Presentation-2.jpg 2x"
                          description={'\n'
                          + 'The Detonator philosophy is to get kids reading again. The reading industry thinks they’ve lost 10-15 year olds to gaming and Tik Tok, so Detonator wanted to capitalise on this gap in the market to produce books and content for kids in that age group which would make reading feel as exciting as playing Fortnite.'}
//                           ProjectServiceListItem={(
//                               <React.Fragment>
//                                   <WideListItem
//                                     listItemText="UX Analysis"
//                                   />
//                                   <WideListItem
//                                     listItemText="User Journey Maps"
//                                   />
//                               </React.Fragment>
// )}
                        />

                        <ProjectDetailSectionItem
                          title="Design Discovery"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/detonator/Detonator-IA.png"
                          srcSetImageOne="/images/projects/detonator/Detonator-IA.png 1x, /images/projects/detonator/Detonator-IA@2x.png 2x"
                          description={'Over the period of 10 weeks we distilled the project goals, stakeholders, brand requirements and features for the detonator application into a comprehensive list of stories for the MVP.\n'
                        + '\n'
                        + 'We started with a discovery session to gather information about the structure of the business and a blueprint for the product we’re hoping to build. This allowed us to gain a greater understanding of the project goals and proposition values for our team.'}
                        />

                        <ProjectFullImageSection
                        // description="Once we were happy with our design direction, we started assembling a design system that we would use to build out the reader workflow and act as a base for the project UI going forward."
                          imageUrl="/images/projects/detonator/User-Interview.png"
                          srcSet="/images/projects/detonator/User-Interview.png 1x, /images/projects/detonator/User-Interview@2x.png 2x"
                          imageAltText="User Persona"
                          title="User Research Synthesis"
                        />

                        <ProjectFullImageSection
                          imageUrl="/images/projects/detonator/Persona.png"
                          srcSet="/images/projects/detonator/Persona.png 1x, /images/projects/detonator/Persona@2x.png 2x"
                          imageAltText="User Persona"
                          title="User Persona Creation"
                        />

                        {/* <ProjectFullImageSection */}
                        {/*  title="Mapping out the Information Architecture" */}
                        {/*  imageUrl="/images/projects/detonator/Detonator-IA-large.png" */}
                        {/*  srcSet="/images/projects/detonator/Detonator-IA-large.png 1x, /images/projects/detonator/Detonator-IA-large@2x.png 2x" */}
                        {/*  imageAltText="Detonator IA" */}
                        {/* /> */}

                        <ProjectDetailSectionItem
                          title="Designing the workflows"
                        // className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/detonator/Wireframes.png"
                          srcSetImageOne="/images/projects/detonator/Wireframes.png 1x, /images/projects/detonator/Wireframes@2x.png 2x"
                          description="We wireframed the entire application creating a clickable prototype of each page and user flow."
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

                        <div className="col-md-12 text-center">

                            <iframe
                              width="100%" height="650"
                              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdMgEG7DS6lG8lwYHhYF2u1%2FDetonator---Wireframes-v1%3Fpage-id%3D71%253A29622%26node-id%3D71%253A29624%26viewport%3D367%252C457%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D71%253A29624%26show-proto-sidebar%3D1"
                              allowFullScreen
                            />

                        </div>


                        <ProjectDetailSectionItem
                          title="High Fidelity Design"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/detonator/UI-Sketch.png"
                          srcSetImageOne="/images/projects/detonator/UI-Sketch.png, /images/projects/detonator/UI-Sketch@2x.png 2x"
                          description={'In order for the app to compete with other screen based distractions, Detonator wanted the UI to feel more like a videogame than a traditional e-reader. \n'
                        + '\n'
                        + 'We took inspiration from video game interfaces to produce an eye catching UI, with high fidelity animations and transitions to add character to the workflows.'}
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

                    </div>

                    <div className="container">
                        <ProjectFullImageSection
                          description="Once we were happy with our design direction, we started assembling a design system that we would use to build out the reader workflow and act as a base for the project UI going forward."
                          imageUrl="/images/projects/detonator/UI Design Iteration.png"
                          srcSet="/images/projects/detonator/UI Design Iteration.png 1x, /images/projects/detonator/UI Design Iteration@2x.png 2x"
                          imageAltText="Design System"
                          title="UI Design Iterations"
                        />
                        <ProjectFullImageSection
                          imageUrl="/images/projects/detonator/3.png"
                          srcSet="/images/projects/detonator/3.png 1x, /images/projects/detonator/3@2x.png 2x"
                          imageAltText="Design System"
                        />
                        <ProjectFullImageSection
                          description="Once we were happy with our design direction, we started assembling a design system that we would use to build out the reader workflow and act as a base for the project UI going forward."
                          imageUrl="/images/projects/detonator/Buttons.png"
                          srcSet="/images/projects/detonator/Buttons.png 1x, /images/projects/detonator/Buttons@2x.png 2x"
                          imageAltText="Design System"
                          title="Design System"
                        />
                    </div>

                    <div className="container">

                        <ProjectFullVideoSection
                          autoPlay={false} controls muted={false}
                          className="mb-5" title="High Fidelity Reader Workflow" videoLink="/images/projects/detonator/Noodle-Fuel-Demo-Audio-Balanced.mp4"
                        />

                        <ProjectPrototypeSection
                          title="Clickable Prototype" prototypeLink="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4ME4iMsJ2AmTKE7dm5HJC8%2FDetonator---UI-Design%3Fpage-id%3D428%253A5672%26node-id%3D472%253A9284%26viewport%3D286%252C48%252C1%26scaling%3Dscale-down%26starting-point-node-id%3D472%253A9284"
                        />

                        <ProjectDetailSectionItem
                          title="Usabilty Testing"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/detonator/User-Test.png"
                          srcSetImageOne="/images/projects/detonator/User-Test.png, /images/projects/detonator/User-Test@2x.png 2x"
                          description="We tested the prototype via a series of unmoderated usability tests and user interviews. We found that all users completed the goal we’d set for them and provided positive feedback with regards to the design of the app. Using these insights helped us to further refine our high fidelity prototype that Detonator could show to prospective investors."
                        />

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Highlights"
                          description={'As part of the discovery phase, we wireframed the entire application, creating a clickable prototype of each page and user flow and delivered a high fidelity prototype that demonstrated the core workflow of the reader journey for the mobile application to allow prospective investors and other interested parties to get a real feel for how the application looks, feels and sounds. We also provided a detailed breakdown of the stories and cost estimates for the initial phase of the application. \n'
                      + '\n'
                      + 'The founders are currently using our outputs from the discovery phase to seek funding to develop an MVP of the detonator mobile application.'}
                        />


                    </div>


                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
