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
                      projectTitle="Digitising the construction industry for a sustainable future"
                      projectType="Responsive Web Application & Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Web Application,"/>
                              <TextListItem listItemText="Mobile App Development"/>
                          </React.Fragment>
)}
                      ProjectTechListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="React,"/>
                              <TextListItem listItemText="React Native,"/>
                              <TextListItem listItemText="Spring,"/>
                              <TextListItem listItemText="Terraform,"/>
                              <TextListItem listItemText="AWS"/>
                          </React.Fragment>
)}
                      className="hero--site-assist"
                      projectImage="/static/images/projects/site-assist/sa-summary.png"
                      srcSet="/static/images/projects/site-assist/sa-summary.png 1x, /static/images/projects/site-assist/sa-summary@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'Site Assist were looking for a long-term technical partner to support them in developing their new product.  They had experienced a huge gap in the construction industry and set about building a digital solution.  \n'
                                + '\n'
                              + 'Site Assist had an idea for a SaaS product which targeted the construction industry by offering a versatile digital platform to large construction companies, needing to digitise and streamline their existing processes on site. \n'
                                + '\n'
                              + 'The Site Assist team have many years experience in the construction industry and understand the need for modernisation in all areas, this product specifically focuses on the processes that govern permitting and inspections on large construction sites. \n'}
                        />


                    </div>

                    <ProjectFullImageSection
                      imageUrl="/static/images/projects/site-assist/site-assist-2.jpg"
                      srcSet="/static/images/projects/site-assist/site-assist-2.jpg 1x, /static/images/projects/site-assist/site-assist-2@2x.jpg 2x"
                      imageAltText="Dashboard UI"
                    />

                    <div className="container">


                        <ProjectDetailSectionItem
                              // title={'Users & Audience'}
                          subTitle="Challenge"
                          imageOne="/static/images/projects/site-assist/site-assist-3.jpg"
                          srcSetImageOne="/static/images/projects/site-assist/site-assist-3.jpg 1x, /static/images/projects/site-assist/site-assist-3@2x.jpg 2x"
                          description={'The construction industry is the least productive industry in the U.K as well as one of the most dangerous. The cost of work related injuries in construction is estimated to £1bn per year and workers on site spend on average 7 hours a month on paperwork. Furthermore the industry is also unique due to the amount of subcontractors working in parallel with various tasks. Communication and compliance is therefore crucial in order to deliver a project on time, on budget and in a safe manner.\n'
                              + '\n'
                              + 'There are various digital platforms and mobile applications to digitise inspections as well as permits, yet these are often hard to use, badly implemented and not aimed at small and mid sized sub-contractors. Site Assist’s mission was to create a tool that covers key processes and that could be implemented to a minimum cost. \n'}
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

                        <ProjectDetailSectionItem
                          title="UX Design"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/static/images/projects/site-assist/site-assist-4.png"
                          srcSetImageOne="/static/images/projects/site-assist/site-assist-4.png 1x, /static/images/projects/site-assist/site-assist-4@2x.png 2x"
                          description={'We worked with the founders to flesh out product requirements and build a backlog of features. The initial design phase consisted of competitor analysis, user research and wireframing for both the web and mobile applications. \n'}
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

                        <ProjectDetailSectionItem
                          title="UI Design"
                          subTitle="Solution"
                          imageOne="/static/images/projects/site-assist/site-assist-5.jpg"
                          srcSetImageOne="/static/images/projects/site-assist/site-assist-5.jpg 1x, /static/images/projects/site-assist/site-assist-5@2x.jpg 2x"
                          description={'Although the MVP was to focus solely on the Permit to Work feature, it was important for us to demonstrate the workflows for the end product so we were able to build new features in the future. We created a series of high fidelity prototypes for each user type on the platform. This laid the groundwork for us then being able to start developing the MVP. \n'
                              + '\n'
                              + 'We created a web application using React and a mobile application with React Native. \n'
                              + '\n'}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX Analysis"
                                  />
                                  <WideListItem
                                    listItemText="User Journey Maps"
                                  />
                                <WideListItem
                                    listItemText="React Native development"
                                  />
                              </React.Fragment>
)}
                        />

                    </div>

                    <ProjectFullImageSection
                      imageUrl="/static/images/projects/site-assist/site-assist-6.jpg"
                      srcSet="/static/images/projects/site-assist/site-assist-6.jpg 1x, /static/images/projects/site-assist/site-assist-6@2x.jpg 2x"
                      imageAltText="Dashboard UI"
                      title="Mobile UI Components"
                      subTitle="Solution"
                    />


                    <div className="container">
                        <ProjectTechSection
                          description="We developed the project using a mono environment approach, a development process we have adopted at SSG that we believe encourages faster time to market for SaaS products and removes bottlenecks from engineering teams."
                          techLogoItems={(
                              <React.Fragment>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="react" src="/static/images/tech-icons/dark/react.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt=".net" src="/static/images/tech-icons/dark/spring.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center mb-md-0 mb-4">
                                      <img alt="mysql" src="/static/images/tech-icons/dark/terraform.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="aws" src="/static/images/tech-icons/dark/aws.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                              </React.Fragment>
                        )}
                        />

                        <ProjectTextSection
                                // className="sectionTwoAnimation"
                          subTitle="Outcome"
                          description="The new SaaS solution was tested on a large client in the construction industry. The founders were happy with the product that went above and beyond the initial scope of the project. SSG is supporting Site Assist to develop new product features and transition to an in house team."
                        />

                    </div>

                    <ProjectFullImageSection
                      className="panel panel--gradient-sa"
                      imageUrl="/static/images/projects/site-assist/site-assist-7.png"
                      srcSet="/static/images/projects/site-assist/site-assist-7.png 1x, /static/images/projects/site-assist/site-assist-7@2x.png 2x"
                      imageAltText="Tone and Sculpt UI"
                    />

                    <ProjectFullImageSection
                      imageUrl="/static/images/projects/site-assist/site-assist-8.jpg"
                      srcSet="/static/images/projects/site-assist/site-assist-8.jpg 1x, /static/images/projects/site-assist/site-assist-8.jpg 2x"
                      imageAltText="Tone and Sculpt UI"
                    />

                    <ClientQuote
                      image="/static/images/projects/site-assist/phone.png"
                      srcSet="/static/images/projects/site-assist/phone.png 1x, /static/images/projects/site-assist/phone@2x.png 2x"
                      text="It’s been an absolute pleasure working with SSG, it’s rare to find people as skilled and honest as the team who brought SiteAssist
 to life. I had a great time building SA with the guys and I’m a very happy customer."
                      clientName="Andrei Petric" clientTitle="Co-Founder & CTO at SiteAssist"
                    />

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
