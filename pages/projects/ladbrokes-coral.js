import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectFullImageSection,
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

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.ladbrokes} canonical="projects/racing-post">
                    <ProjectHero
                      clientImage="/static/images/clients/white/ladbrokes-white.png"
                      projectTitle="Bringing the entire IT infrastructure within Ladbrokes Coral up to date"
                      projectType="Web Application"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Web Application Development,"/>
                              <TextListItem listItemText="Hardware integrations"/>
                          </React.Fragment>
)}
                      className="hero--coral"
                      projectImage="/static/images/projects/ladbrokes/ladbrokes-1.png"
                      srcSet="/static/images/projects/ladbrokes/ladbrokes-1.png 1x, /static/images/projects/ladbrokes/ladbrokes-1@2x.png 2x"
                    />
                    <div className="container">
                        <div>
                            <ProjectTextSection
                              subTitle="00 / Overview"
                              description={'Ladbrokes Coral required a new EPOS system, that would improve the customer experience within their retail and online channels.\n'
                              + '\n'
                              + 'The existing platform was built nearly two decades ago, with data being transmitted once a day.\n'
                              + '\n'
                              + 'Solid State Group worked alongside key stakeholders to develop a new platform within the company and bring the entire IT infrastructure within Ladbrokes Coral up to date.\n'
                              }
                            />
                            <ProjectTextSection
                              subTitle="01 / Challenge"
                              description={'An existing EPOS system was being used throughout Ladbrokes Coral, which was built by a third party. Change requests were costly and time consuming.\n'
                              + '\n'
                              + 'The 16,000 employees, working across 3500 shops in the UK, had become accustomed to dealing with the outdated EPOS system. \n'
                              + '\n'
                              + 'The challenge was to maintain the existing functionality and shortcuts shop colleagues had become used to, whilst focusing on the customer experience, visibility of the company’s fiscal position, reducing potential fraud and improving the overall usability.\n'}
                            />
                        </div>
                        <div>
                            <ProjectDetailSectionItem
                              description={'Solid State began with a 12 week proof of concept phase, rapidly developing a functioning system.\n'
                              + '\n'
                              + 'Using an Agile methodology we presented weekly demos to key stakeholders to obtain feedback.\n'
                              + 'The weekly sprints were focused around a single piece of functionality to draw direct comparisons between the existing EPOS system and the new platform.\n' + '\n'
                              + 'After the proof of concept phase, we began an industrialisation phase. This involved scaling up the project and bringing internal development teams onboard.\n'}
                              subTitle="02/ Solution"
                              imageOne="/static/images/projects/ladbrokes/ladbrokes-2.png"
                              srcSetImageOne="/static/images/projects/ladbrokes/ladbrokes-2.png 1x, /static/images/projects/ladbrokes/ladbrokes-2@2x.png 2x"
                            />
                        </div>

                    </div>

                    <div className="container">
                        <ProjectTextSection
                          subTitle="02 / Solution"
                          description="The MVP solution was released to a small set of trial shops, where feedback was incorporated from both customers and shop colleagues to continually enhancing the experience."
                        />

                    </div>

                    <ProjectFullImageSection
                      title="The new EPOS system is now being rolled out across both the Coral and Ladbrokes brands processing thousands of bets per hour"
                      className="panel panel--ladbrokes pt-5"
                      textClassName="col-md-6 offset-md-3"
                      subTitle="02 / MVP solution"
                      imageUrl="/static/images/projects/ladbrokes/ladbrokes-3.png"
                      srcSet="/static/images/projects/ladbrokes/ladbrokes-3.png 1x, /static/images/ladbrokes/ladbrokes-3@2x.png 2x"
                      imageAltText="Ladbrokes Coral UI"
                    />


                    <div className="container">

                        <ProjectTechSection
                          subTitle="03/ Technology Used"
                          techLogoItems={(
                              <React.Fragment>
                                  <div className="col-lg-3 col-6 pt-5 pt-lg-0 text-center">
                                      <img src="/static/images/tech-icons/dark/react.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 pt-lg-0 text-center">
                                      <img src="/static/images/tech-icons/dark/aws.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 pt-lg-0 text-center mb-md-0 mb-4">
                                      <img src="/static/images/tech-icons/dark/java.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 pt-lg-0 text-center">
                                      <img src="/static/images/tech-icons/dark/spring.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 text-center">
                                      <img src="/static/images/tech-icons/dark/net.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 text-center">
                                      <img src="/static/images/tech-icons/dark/terraform.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 text-center">
                                      <img src="/static/images/tech-icons/dark/jenkins.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-lg-3 col-6 pt-5 text-center">
                                      <img src="/static/images/tech-icons/dark/elastic-search.svg" className="img-responsive"/>
                                  </div>
                              </React.Fragment>
)}
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
