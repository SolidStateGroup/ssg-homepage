import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
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
        API.trackPage(Constants.pages.projectHero);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.builtByBecky} canonical="projects/built-by-becky">
                    <ProjectHero
                      clientImage="/images/clients/white/built-by-becky-logo-white.png"
                      projectTitle="Helping women feel amazing at any age"
                      projectType="Web Application & Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Web Application,"/>
                              <TextListItem listItemText="Mobile App Development"/>
                          </React.Fragment>
                        )}
                      className="hero--built-by-becky"
                      projectImage="/images/projects/built-by-becky/1.png"
                      srcSet="/images/projects/built-by-becky/1.png 1x, /images/projects/built-by-becky/1@2x.png 2x"
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                              className="sectionOneAnimation"
                              subTitle="00 / Overview"
                              description={'Built by Becky is a community of women aimed at improving physical and mental health, all from the comfort of your own home.'
                                    + '\n\nBuilt by Becky came to SSG to develop a mobile and web application that would allow women to subscribe to access Becky\'s workout content.'}
                            />

                            <ProjectTextSection
                              className="sectionTwoAnimation"
                              subTitle="01 / Challenge"
                              description={
`Becky had a well-established following on Instagram, inspiring women with her workouts and postnatal fitness.

At this point, the business side was limited to a private Instagram group and a 1-page Wix website where people could purchase workouts. 

Solid State Group's challenge was to transform them into a digital business by creating a bespoke mobile application that would handle subscriptions for her content .`
                                }
                            />
                        </div>

                        <ProjectTextSection
                          subTitle="01 / Challenge"
                          title={'Identifying the problems\n'}
                          description={`Creating the health and fitness platform had a number of challenges:
${'\n'}
1. Establish a clear branding direction from the ground up, reaching a consensus on the specific approach and developing high-fidelity designs.

2. Define the method for content consumption and purchase, addressing the mix of short-form and long-form videos, along with various exercises based on repetitions and duration.

3. Establish a Workout Hierarchy, intending to transform videos into exercises, workouts, programs, and challenges. 

4. Specify the content entry process, emphasizing the need for flexibility in programs and workouts. Facilitate the reuse of existing exercises and equipment while allowing customization.

5. Create sufficient infrastructure for large surges of demand. Creating applications for large influencers requires being able to handle big bursts of traffic to the application.


                          `}
                        />

                        <ProjectTextSection
                          subTitle="02 / Solution"
                          description={`We started by kicking off a discovery phase, we had a strong understanding of health and fitness apps based on our previous projects but needed to understand the strengths and uniqueness of what Becky wanted in her application.

We listened to what the client wanted, and iterated on screen designs until we were comfortable how the application would look and function end-to-end. The discovery resulted in an agreed set of screen designs, technical requirements and project estimation.
${'\n'}
Once we had the requirements defined we identified the project milestones and what functionality was necessary for the initial release of the app.

We broke the work down into sprints and released application updates for the client to view progress which sometimes lead in new ideas and requirements.
                          `}
                        />

                        <ProjectDetailSectionItem
                          title="Users & Audience"
                          subTitle="02 / Solution"
                          imageOne="/images/projects/hero/My-Health-App-on-mobile.jpg"
                          srcSetImageOne="/images/projects/hero/My-Health-App-on-mobile.jpg 1x, /images/projects/hero/My-Health-App-on-mobile.jpg 2x"
                          description={'The app had two types of user, including organisation leaders who create challenges for their organisation. They also get access to real time data and insights to measure and further support the wellbeing of their staff. \n'
                                + '\n'
                                + 'The second user type was company individuals, who can track their health metrics, explore wellbeing tools and resources and set personalised goals.\n'
                                + '\n'
                                + 'All of Hero’s KPI’s and engagement with employees is driven by the app. These data insights help to support employee wellbeing with real measurable ROI so it was important to improve the overall user experience.\n'
                                + '\n'
                                + 'Once we’d established the different user types of the platform, we simplified the information architecture and user journeys by cutting out unnecessary pages from the IA and main navigation. \n'
                                + '\n'
                                + 'The app also needed to be versatile enough to allow it to be a custom platform for an organisation or on an individual basis. From a branded registration page through to having an entirely custom branded app. The solutions and products also had to be customisable to suit user requirements by removing modules that they don’t require or creating new modules just for them.'}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX Analysis"
                                  />
                                  <WideListItem
                                    listItemText="User Journey Maps"
                                  />
                              </React.Fragment>
                            )}
                        />

                        <ProjectFullImageSection
                          title="Old mobile app"
                          subTitle="03 / UI Redesign"
                          imageUrl="/images/projects/hero/hero-old-mobile-app.jpg"
                          srcSet="/images/projects/hero/hero-old-mobile-app.jpg 1x, /images/projects/hero/hero-old-mobile-app@2x.jpg 2x"
                          imageAltText="Dashboard UI"
                        />

                        <ProjectDetailSectionItem
                          title="Sketching and Whiteboarding"
                          subTitle="03 / UI Redesign"
                          imageOne="/images/projects/hero/hero-sketch.jpg"
                          srcSetImageOne="/images/projects/hero/hero-sketch.jpg 1x, /images/projects/hero/hero-sketch@2x.jpg 2x"
                            // imageTwo={'/images/services/ux-andy.jpg'}
                            // srcSetImageTwo={'/images/services/ux-andy.jpg 1x, /images/services/ux-andy@2x.jpg 2x'}
                          description="We held several virtual whiteboarding sessions with key stakeholders in order to rapidly iterate on designs and address the issues we found within the existing mobile app."
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="Sketching"
                                  />
                                  <WideListItem
                                    listItemText="Whiteboarding"
                                  />
                                  <WideListItem
                                    listItemText="Rapid concept Ideation"
                                  />
                              </React.Fragment>
                            )}
                        />

                        <ProjectFullImageSection
                          title="Virtual Whiteboarding"
                          subTitle="03 / UI Redesign"
                          imageUrl="/images/projects/hero/hero-whiteboarding.jpg"
                          srcSet="/images/projects/hero/hero-whiteboarding.jpg 1x, /images/projects/hero/hero-old-mobile-app@2x.jpg 2x"
                          imageAltText="Dashboard UI"
                        />


                        <ProjectDetailSectionItem
                          imageOneclassName="img__shadow"
                          title="Mobile Dashboard"
                          subTitle="03 / UI Redesign"
                          imageOne="/images/projects/hero/Dashboard.png"
                          srcSetImageOne="/images/projects/hero/Dashboard.png 1x, /images/projects/hero/Dashboard@2x.png 2x"
                            // imageTwo={'/images/services/ux-andy.jpg'}
                            // srcSetImageTwo={'/images/services/ux-andy.jpg 1x, /images/services/ux-andy@2x.jpg 2x'}
                          description="We redesigned the primary data visualisation on the dashboard to clearly indicate to users the component parts of holistic wellbeing and how they were progressing towards their daily goals. We also chose to revamp the IA and set about surfacing the most meaningful content to the user on the dashboard such as Current Challenges and Groups."
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX Design"
                                  />
                                  <WideListItem
                                    listItemText="UI Design"
                                  />
                                  <WideListItem
                                    listItemText="Clickable Prototype"
                                  />
                                  <WideListItem
                                    listItemText="Interaction Design"
                                  />
                              </React.Fragment>
                            )}
                        />


                        <ProjectDetailSectionItem
                          imageOneclassName="img__shadow"
                          imageTwoclassName="img__shadow"
                          className="flex-row-reverse"
                          title="HealthKit & Google Fit Integrations"
                          subTitle="03 / UI Redesign"
                          imageOne="/images/projects/hero/Onboarding - 2.png"
                          srcSetImageOne="/images/projects/hero/Onboarding - 2.png 1x, /images/projects/hero/Onboarding - 2@2x.png 2x"
                          imageTwo="/images/projects/hero/connections.png"
                          srcSetImageTwo="/images/projects/hero/connections.png 1x, /images/projects/hero/connections@2x.png 2x"
                          description="One of the biggest challenges with the project was integrations with the phone health data as well as integrations with other wearables via a 3rd party called Validic. Hero want people to take their health and wellbeing seriously and as a result, the platform allows you to connect all manner of smart devices to measure simple things like your steps, to very complex things like your glucose levels from medical devices."
                        />

                        <ProjectDetailSectionItem
                          imageOneclassName="img__shadow"
                          title="Web app redesign"
                          subTitle="03 / UI Redesign"
                          imageOne="/images/projects/hero/Dashboard-web.png"
                          srcSetImageOne="/images/projects/hero/Dashboard-web.png 1x, /images/projects/hero/Dashboard@2x.png 2x"
                          description={'The old web app had some strange navigation patterns, such as a concept of quick modules in the top navigation for accessing certain pages quickly. This would get cluttered quite quickly as users added more modules, and would not scale well. \n'
                                + '\n'
                                + 'We drastically simplified the navigation by adding a fixed side menu with all the core app areas listed accordingly. We then set about reskinning the existing web app based on the newly developed design system we had for the mobile app, to address the inconsistencies spanning Hero’s various digital platforms.  \n'}
                        />

                        <ProjectDetailSectionItem
                          imageOneclassName="img__shadow"
                          className="flex-row-reverse"
                          title="Component based design approach"
                          subTitle="04 / Development"
                          imageOne="/images/projects/hero/storybook.png"
                          altImageOne="Storybook"
                          srcSetImageOne="/images/projects/hero/storybook.png 1x, /images/projects/hero/storybook@2x.png 2x"
                          description={'We used Sketch, Plant version control and Invision to build a high fidelity prototype that the client signed off, which was based on a new design system. We now needed to start implementing our design system and UI in actual software in order to build the application. \n'
                                + '\n'
                                + 'We built out our entire design system as a component based library using React JS and Storybook, allowing us to build UI components in isolation so we could develop hard-to-reach states and edge cases before the rest of the frontend team got started on the integration stories. \n'
                                + '\n'
                                + 'In our experience, the benefit of the component based approach reduces technical debt, allows for faster and higher-quality development and is a future-friendly foundation to build and iterate over for years to come.'}
                        />


                        <ProjectTextSection
                          subTitle="04 / Development"
                          title="API Improvements"
                          description="The backend of the application, consisting of a REST API consumed by the mobile applications, was provided to us already partly written using the .NET framework. Our first goal was to review the existing code to determine the key points that needed improving / changing based on a number of factors:"
                          bulletedList={(
                              <React.Fragment>
                                  <li>the new functionality requested to meet the rehaul of the mobile application;
                                  </li>
                                  <li>the stability and scalability of the platform; and</li>
                                  <li>the development and deployment processes.</li>
                              </React.Fragment>
                            )}
                        />

                        <ProjectTextSection
                          subTitle="04 / Development"
                          description={'We began by updating the development and deployment processes to use Docker and Docker Compose which would make any changes needed to accommodate the other points above much easier. By using Docker, we were able to containerise the application and move the application to use AWS Elastic Beanstalk which gave us the ability to quickly deploy and scale the application at will. These deployments were subsequently scripted using Continuous Deployment to ensure that we could develop at speed without having to worry about manual deployments. We also integrated Docker Compose into the project to ensure that it would be easy for any new developers working on the project to create their development environment and begin delivering value to the project as soon as possible. \n'
                                + '\n'
                                + 'The review of the code identified a number of areas that needed improving in order to improve the performance of the application. We were able to analyse areas of the application that had not been optimised, and hence would struggle at scale, and devise solutions to improve the performance of the application in these areas. In one example, we were able to bring a process that previously required >45s to run down to below 1s. \n'
                                + '\n'
                                + 'Finally, with the above improvements in place, we were able to work with the mobile development team to add to and improve the functionality of the API to ensure that the new functionality designed for the application could be achieved.'
                            }
                        />


                        <ProjectTechSection
                          techLogoItems={(
                              <React.Fragment>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="react" src="/images/tech-icons/dark/react.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt=".net" src="/images/tech-icons/dark/net.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center mb-md-0 mb-4">
                                      <img
                                        alt="mysql" src="/images/tech-icons/dark/MySQL.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="aws" src="/images/tech-icons/dark/aws.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                              </React.Fragment>
                            )}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="Mobile Development"
                                  />
                                  <WideListItem
                                    listItemText="Backend Development"
                                  />
                                  <WideListItem
                                    listItemText="API Development"
                                  />
                              </React.Fragment>
                            )}

                        />

                        <ProjectTextSection
                          subTitle="05 / Headlines"
                          description={'We successfully released the new mobile app with a bespoke global fitness challenge that invited 40,000 users from Vodafone’s global teams to join and take part using their wearables or phone health data.\n'
                                + '\n'
                                + 'We delivered two versatile, fully whitelablled web and mobile app products in 2 months.'
                            }
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
