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
        API.trackPage(Constants.pages.projectSA);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.siteAssist} canonical="projects/site-assist">
                    <ProjectHero
                        clientImage="/static/images/clients/white/sa-wordmark-light.svg"
                        projectTitle={'Digitising the construction industry for a sustainable future'}
                        projectType={'Responsive Web Application & Mobile App'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'API Development,'}/>
                                <TextListItem listItemText={'Web Application,'}/>
                                <TextListItem listItemText={'Mobile App Development'}/>
                            </React.Fragment>
                        }
                        className="hero--site-assist"
                        projectImage={'/static/images/projects/site-assist/site-assist-1.png'}
                        srcSet={'/static/images/projects/site-assist/site-assist-1.png 1x, /static/images/projects/site-assist/site-assist-1.png 2x'}
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                                className="sectionOneAnimation"
                                subTitle="Overview"
                                description={'Solid State Group was approached by the founders of SiteAssist at the end of 2020. They were looking for a long-term technical partner to support them in developing their new product. \n' +
                                '\n' +
                                'They had first-hand experience of a huge gap in the construction industry and set about building a digital solution. SiteAssist was introduced and presented as a SaaS company targeting the construction industry by offering a versatile digital platform to large construction companies who have a need to digitise and streamline current processes on site. \n' +
                                '\n' +
                                'The SA team have many years experience in the construction industry and have experienced the need for modernisation, specifically in the processes that govern permitting and inspections on large construction sites. \n'}
                            />

                            <ProjectFullImageSection
                                className="sectionThreeAnimation"
                                imageUrl={'/static/images/projects/site-assist/site-assist-2@2x.png'}
                                srcSet={'/static/images/projects/site-assist/site-assist-2@2x.png 1x, /static/images/projects/site-assist/site-assist-2@2x.png 2x'}
                                imageAltText={'Dashboard UI'}
                            />


                            <ProjectDetailSectionItem
                              // title={'Users & Audience'}
                              subTitle={'Challenge'}
                              imageOne={'/static/images/projects/site-assist/site-assist-3.jpg'}
                              srcSetImageOne={'/static/images/projects/site-assist/site-assist-3.jpg 1x, /static/images/projects/site-assist/site-assist-3@2x.jpg 2x'}
                              description={'The construction industry is the least productive industry in the U.K as well as one of the most dangerous. The cost of work related injuries in construction is estimated to £1bn per year and workers on site spend on average 7 hours a month on paperwork. Furthermore the industry is also unique due to the amount of subcontractors working in parallel with various tasks. Communication and compliance is therefore crucial in order to deliver a project on time, on budget and in a safe manner.\n' +
                              '\n' +
                              'There are various digital platforms and mobile applications to digitise inspections as well as permits, yet these are often hard to use, badly implemented and not aimed at small and mid sized sub-contractors. Site Assist’s mission was to create a tool that covers key processes and that could be implemented to a minimum cost. \n'}
                              ProjectServiceListItem={
                                  <React.Fragment>
                                      <WideListItem
                                        listItemText={'UX Analysis'}/>
                                      <WideListItem
                                        listItemText={'User Journey Maps'}/>
                                  </React.Fragment>}
                            />

                            <ProjectDetailSectionItem
                              title={'UX Design'}
                              className="flex-row-reverse"
                              subTitle={'Solution'}
                              imageOne={'/static/images/projects/site-assist/site-assist-4.png'}
                              srcSetImageOne={'/static/images/projects/site-assist/site-assist-4.png 1x, /static/images/projects/site-assist/site-assist-4@2x.png 2x'}
                              description={'We worked with the founders to flesh out product requirements and build a backlog of features. The initial design phase consisted of competitor analysis, user research and wireframing for both the web and mobile applications. \n'}
                              ProjectServiceListItem={
                                  <React.Fragment>
                                      <WideListItem
                                        listItemText={'UX Analysis'}/>
                                      <WideListItem
                                        listItemText={'User Journey Maps'}/>
                                  </React.Fragment>}
                            />

                            <ProjectDetailSectionItem
                              title={'UI Design'}
                              subTitle={'Solution'}
                              imageOne={'/static/images/projects/site-assist/site-assist-5.jpg'}
                              srcSetImageOne={'/static/images/projects/site-assist/site-assist-5.jpg 1x, /static/images/projects/site-assist/site-assist-5@2x.jpg 2x'}
                              description={'Although the MVP was to focus solely on the Permit to Work feature, it was important for us to demonstrate the workflows for the end product so we were able to build new features in the future. We created a series of high fidelity prototypes for each user type on the platform. This laid the groundwork for us then being able to start developing the MVP. \n' +
                              '\n' +
                              'We created a web application using React and a mobile application with React Native. \n' +
                              '\n'}
                              ProjectServiceListItem={
                                  <React.Fragment>
                                      <WideListItem
                                        listItemText={'UX Analysis'}/>
                                      <WideListItem
                                        listItemText={'User Journey Maps'}/>
                                  </React.Fragment>}
                            />

                            <ProjectFullImageSection
                              imageUrl={'/static/images/projects/site-assist/site-assist-6.jpg'}
                              srcSet={'/static/images/projects/site-assist/site-assist-6.jpg 1x, /static/images/projects/site-assist/site-assist-6@2x.jpg 2x'}
                              imageAltText={'Dashboard UI'}
                              title={'Mobile UI Components'}
                              subTitle={'Solution'}
                            />


                            <ProjectTechSection
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




                            <ProjectTextSection
                                // className="sectionTwoAnimation"
                                subTitle="Outcome"
                                description={'The new SaaS solution was tested on a large client in the construction industry. The founders were happy with the product that went above and beyond the initial scope of the project. SSG is supporting Site Assist to develop new product features and transition to an in house team.'}
                            />
                        </div>

                        {/*<ProjectTextSection*/}
                        {/*    subTitle="01 / Challenge"*/}
                        {/*    title={'Identifying the problems\n'}*/}
                        {/*    description={'The Hero Navigator mobile and webs app suffered from a number of core issues:\n' +*/}
                        {/*    '\n' +*/}
                        {/*    '1. Undesirable look and feel. Hero’s existing apps lacked the feeling of quality that Hero wanted for their users: A high end slick interface for the wellbeing sector. \n' + '\n' +*/}
                        {/*    '2. Consistency. There were glaring UI inconsistencies across Hero’s digital properties such as conflicting fonts, palettes, UI components and navigation patterns.\n' + '\n' +*/}
                        {/*    '3. Hierarchy. The information architecture was cluttered and unorganized making it feel more complex than it needed to be. There were core features and unnecessary personalisation features that had very little value in reality. \n' + '\n' +*/}
                        {/*    '4. Bugs. The web app had not been built for scale and needed to be significantly refactored before we could progress the mobile app development. All the digital properties rely on a stable API so not having this stability is terminal for a company with this technology as its centrepiece. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'Our goal was to improve these aspects of Hero’s digital platforms without having to completely rebuild existing product features where possible.\n'*/}

                        {/*    }*/}
                        {/*/>*/}

                        {/*<ProjectFullImageSection*/}
                        {/*    className="sectionThreeAnimation"*/}
                        {/*    imageUrl={'/static/images/projects/hero/hero-mobile-app-flowchart.png'}*/}
                        {/*    srcSet={'/static/images/projects/hero/hero-mobile-app-flowchart.png 1x, /static/images/projects/hero/hero-mobile-app-flowchart@2x.png 2x'}*/}
                        {/*    imageAltText={'Dashboard UI'}*/}
                        {/*/>*/}


                        {/*<ProjectTextSection*/}
                        {/*    subTitle="02 / Solution"*/}
                        {/*    // title={'Identifying the problems\n'}*/}
                        {/*    description={'We kicked off with a super fast design sprint, reviewing all of Hero’s existing digital properties and used the findings to inform the design of the new mobile app. Once we’d implemented the new design for the mobile app, which was a high priority for the client, the redesign would be fed into their other digital properties including the Hero Navigator web platform.'*/}
                        {/*    }/>*/}



                        {/*<ProjectFullImageSection*/}
                        {/*    title={'Old mobile app'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageUrl={'/static/images/projects/hero/hero-old-mobile-app.jpg'}*/}
                        {/*    srcSet={'/static/images/projects/hero/hero-old-mobile-app.jpg 1x, /static/images/projects/hero/hero-old-mobile-app@2x.jpg 2x'}*/}
                        {/*    imageAltText={'Dashboard UI'}*/}
                        {/*/>*/}

                        {/*<ProjectDetailSectionItem*/}
                        {/*    title={'Sketching and Whiteboarding'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageOne={'/static/images/projects/hero/hero-sketch.jpg'}*/}
                        {/*    srcSetImageOne={'/static/images/projects/hero/hero-sketch.jpg 1x, /static/images/projects/hero/hero-sketch@2x.jpg 2x'}*/}
                        {/*    // imageTwo={'/static/images/services/ux-andy.jpg'}*/}
                        {/*    // srcSetImageTwo={'/static/images/services/ux-andy.jpg 1x, /static/images/services/ux-andy@2x.jpg 2x'}*/}
                        {/*    description={'We held several virtual whiteboarding sessions with key stakeholders in order to rapidly iterate on designs and address the issues we found within the existing mobile app.'}*/}
                        {/*    ProjectServiceListItem={*/}
                        {/*        <React.Fragment>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'Sketching'}/>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'Whiteboarding'}/>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'Rapid concept Ideation'}/>*/}
                        {/*        </React.Fragment>}*/}
                        {/*/>*/}

                        {/*<ProjectFullImageSection*/}
                        {/*    title={'Virtual Whiteboarding'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageUrl={'/static/images/projects/hero/hero-whiteboarding.jpg'}*/}
                        {/*    srcSet={'/static/images/projects/hero/hero-whiteboarding.jpg 1x, /static/images/projects/hero/hero-old-mobile-app@2x.jpg 2x'}*/}
                        {/*    imageAltText={'Dashboard UI'}*/}
                        {/*/>*/}


                        {/*<ProjectDetailSectionItem*/}
                        {/*    imageOneclassName="img__shadow"*/}
                        {/*    title={'Mobile Dashboard'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageOne={'/static/images/projects/hero/Dashboard.png'}*/}
                        {/*    srcSetImageOne={'/static/images/projects/hero/Dashboard.png 1x, /static/images/projects/hero/Dashboard@2x.png 2x'}*/}
                        {/*    // imageTwo={'/static/images/services/ux-andy.jpg'}*/}
                        {/*    // srcSetImageTwo={'/static/images/services/ux-andy.jpg 1x, /static/images/services/ux-andy@2x.jpg 2x'}*/}
                        {/*    description={'We redesigned the primary data visualisation on the dashboard to clearly indicate to users the component parts of holistic wellbeing and how they were progressing towards their daily goals. We also chose to revamp the IA and set about surfacing the most meaningful content to the user on the dashboard such as Current Challenges and Groups.'}*/}
                        {/*    ProjectServiceListItem={*/}
                        {/*        <React.Fragment>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'UX Design'}/>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'UI Design'}/>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'Clickable Prototype'}/>*/}
                        {/*            <WideListItem*/}
                        {/*                listItemText={'Interaction Design'}/>*/}
                        {/*        </React.Fragment>}*/}
                        {/*/>*/}


                        {/*<ProjectDetailSectionItem*/}
                        {/*    imageOneclassName="img__shadow"*/}
                        {/*    imageTwoclassName="img__shadow"*/}
                        {/*    className={'flex-row-reverse'}*/}
                        {/*    title={'HealthKit & Google Fit Integrations'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageOne={'/static/images/projects/hero/Onboarding - 2.png'}*/}
                        {/*    srcSetImageOne={'/static/images/projects/hero/Onboarding - 2.png 1x, /static/images/projects/hero/Onboarding - 2@2x.png 2x'}*/}
                        {/*    imageTwo={'/static/images/projects/hero/connections.png'}*/}
                        {/*    srcSetImageTwo={'/static/images/projects/hero/connections.png 1x, /static/images/projects/hero/connections@2x.png 2x'}*/}
                        {/*    description={'One of the biggest challenges with the project was integrations with the phone health data as well as integrations with other wearables via a 3rd party called Validic. Hero want people to take their health and wellbeing seriously and as a result, the platform allows you to connect all manner of smart devices to measure simple things like your steps, to very complex things like your glucose levels from medical devices.'}*/}
                        {/*/>*/}

                        {/*<ProjectDetailSectionItem*/}
                        {/*    imageOneclassName="img__shadow"*/}
                        {/*    title={'Web app redesign'}*/}
                        {/*    subTitle={'03 / UI Redesign'}*/}
                        {/*    imageOne={'/static/images/projects/hero/Dashboard-web.png'}*/}
                        {/*    srcSetImageOne={'/static/images/projects/hero/Dashboard-web.png 1x, /static/images/projects/hero/Dashboard@2x.png 2x'}*/}
                        {/*    description={'The old web app had some strange navigation patterns, such as a concept of quick modules in the top navigation for accessing certain pages quickly. This would get cluttered quite quickly as users added more modules, and would not scale well. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'We drastically simplified the navigation by adding a fixed side menu with all the core app areas listed accordingly. We then set about reskinning the existing web app based on the newly developed design system we had for the mobile app, to address the inconsistencies spanning Hero’s various digital platforms.  \n'}*/}
                        {/*/>*/}

                        {/*<ProjectDetailSectionItem*/}
                        {/*    imageOneclassName="img__shadow"*/}
                        {/*    className={'flex-row-reverse'}*/}
                        {/*    title={'Component based design approach'}*/}
                        {/*    subTitle={'04 / Development'}*/}
                        {/*    imageOne={'/static/images/projects/hero/storybook.png'}*/}
                        {/*    altImageOne={'Storybook'}*/}
                        {/*    srcSetImageOne={'/static/images/projects/hero/storybook.png 1x, /static/images/projects/hero/storybook@2x.png 2x'}*/}
                        {/*    description={'We used Sketch, Plant version control and Invision to build a high fidelity prototype that the client signed off, which was based on a new design system. We now needed to start implementing our design system and UI in actual software in order to build the application. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'We built out our entire design system as a component based library using React JS and Storybook, allowing us to build UI components in isolation so we could develop hard-to-reach states and edge cases before the rest of the frontend team got started on the integration stories. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'In our experience, the benefit of the component based approach reduces technical debt, allows for faster and higher-quality development and is a future-friendly foundation to build and iterate over for years to come.'}*/}
                        {/*/>*/}


                        {/*<ProjectTextSection*/}
                        {/*    subTitle="04 / Development"*/}
                        {/*    title={'API Improvements'}*/}
                        {/*    description={'The backend of the application, consisting of a REST API consumed by the mobile applications, was provided to us already partly written using the .NET framework. Our first goal was to review the existing code to determine the key points that needed improving / changing based on a number of factors:'*/}
                        {/*    }*/}
                        {/*    bulletedList={*/}
                        {/*        <React.Fragment>*/}
                        {/*            <li>the new functionality requested to meet the rehaul of the mobile application;*/}
                        {/*            </li>*/}
                        {/*            <li>the stability and scalability of the platform; and</li>*/}
                        {/*            <li>the development and deployment processes.</li>*/}
                        {/*        </React.Fragment>*/}
                        {/*    }*/}
                        {/*/>*/}

                        {/*<ProjectTextSection*/}
                        {/*    subTitle="04 / Development"*/}
                        {/*    description={'We began by updating the development and deployment processes to use Docker and Docker Compose which would make any changes needed to accommodate the other points above much easier. By using Docker, we were able to containerise the application and move the application to use AWS Elastic Beanstalk which gave us the ability to quickly deploy and scale the application at will. These deployments were subsequently scripted using Continuous Deployment to ensure that we could develop at speed without having to worry about manual deployments. We also integrated Docker Compose into the project to ensure that it would be easy for any new developers working on the project to create their development environment and begin delivering value to the project as soon as possible. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'The review of the code identified a number of areas that needed improving in order to improve the performance of the application. We were able to analyse areas of the application that had not been optimised, and hence would struggle at scale, and devise solutions to improve the performance of the application in these areas. In one example, we were able to bring a process that previously required >45s to run down to below 1s. \n' +*/}
                        {/*    '\n' +*/}
                        {/*    'Finally, with the above improvements in place, we were able to work with the mobile development team to add to and improve the functionality of the API to ensure that the new functionality designed for the application could be achieved.'*/}
                        {/*    } />*/}


                        {/*<ProjectTextSection*/}
                        {/*    subTitle="05 / Headlines"*/}
                        {/*    description={'We successfully released the new mobile app with a bespoke global fitness challenge that invited 40,000 users from Vodafone’s global teams to join and take part using their wearables or phone health data.\n' +*/}
                        {/*    '\n' +*/}
                        {/*    'We delivered two versatile, fully whitelablled web and mobile app products in 2 months.'*/}
                        {/*    }*/}
                        {/*/>*/}

                    </div>

                    <ProjectFullImageSection
                      className="panel panel--gradient-sa"
                      imageUrl={'/static/images/projects/site-assist/site-assist-7.png'}
                      srcSet={'/static/images/projects/site-assist/site-assist-7.png 1x, /static/images/projects/site-assist/site-assist-7@2x.png 2x'}
                      imageAltText={'Tone and Sculpt UI'}
                    />

                    <ProjectFullImageSection
                      imageUrl={'/static/images/projects/site-assist/site-assist-8.jpg'}
                      srcSet={'/static/images/projects/site-assist/site-assist-8.jpg 1x, /static/images/projects/site-assist/site-assist-8.jpg 2x'}
                      imageAltText={'Tone and Sculpt UI'}
                    />


                    <ClientQuote
                      image={'/static/images/projects/tone-and-sculpt/phone.png'}
                      srcSet="/static/images/projects/tone-and-sculpt/phone.png 1x, /static/images/projects/tone-and-sculpt/phone@2x.png 2x"
                      text={'We worked with SSG to completely rebuild our digital properties, API, CMS and a brand new mobile app for iOS and Android. The team were brilliant under significant time pressure and we felt like we were in expert hands from start to finish.'}
                      clientName={'Jack Bullimore'} clientTitle={'Co-Founder & CEO at Tone & Sculpt'}/>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
