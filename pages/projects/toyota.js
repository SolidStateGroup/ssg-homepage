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

    componentDidMount() {
        API.trackPage(Constants.pages.projectToyota);
    }

    render() {
        return (
          <React.Fragment>
              <Page title={Constants.titles.toyota} canonical="projects/toyota">
                  <ProjectHero
                    clientImage="/images/clients/white/toyota-white.svg"
                    projectTitle="Reducing the complexity of logistics and maintenance in the motor industry"
                    projectType="Mobile Application"
                    ProjectServiceListItem={(
                      <React.Fragment>
                          <TextListItem listItemText="Mobile Application Development,"/>
                          <TextListItem listItemText="Hardware integrations,"/>
                      </React.Fragment>
                    )}
                    className="hero--toyota"
                    projectImage="/images/projects/toyota/Toyota-YMS.png"
                    srcSet="/images/projects/toyota/Toyota-YMS.png 1x, /images/projects/toyota/Toyota-YMS.png 2x"
                  />
                  <div className="container">
                      <div>
                          <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Toyota approached us with a request to integrate a software solution with their physical systems and processes.\n'
                            + '\n'
                            + 'Their entire vehicle inventory needs regular servicing and maintenance, so the brief was to build a mobile app to facilitate their team in quickly identifying the vehicle that needs attention and record the work to be carried out. \n'
                            }
                          />
                        <ProjectDetailSectionItem
                          subTitle="01 / Challenge"
                          description={'The first significant challenge was to reverse engineer an existing piece of undocumented technology to understand how it worked, before we could start designing the new solution.\n'
                          + '\n'
                          + 'The process involved inspecting network traffic to build up a picture of the API and associated requests and then build these learnings into a set of requirements, and finally a React Native app.\n'
                          + '\n'
                          + 'The entire Toyota team used an older Android device so we had to ensure that we created a robust piece of forward thinking technology, whilst also respecting the limitations of legacy Android devices.\n'
                          }
                          imageOne="/images/projects/toyota/vin-scan.jpeg"
                          srcSetImageOne="/images/projects/toyota/vin-scan.jpeg 1x, /images/projects/toyota/vin-scan.jpeg 2x"
                        />
                      </div>
                      <div>
                          <ProjectTextSection
                            subTitle="02 / Solution"
                            description={'We began with the process of reverse engineering the existing system via API traffic and performance monitoring; and began to gradually understand the inner workings of the system, the requests and resultant payload.\n'
                          + '\n'
                          + 'By documenting each interaction with the API, we were able to produce a technical architecture document and set about designing the new solution using this as a blueprint.\n'
                          + '\n'
                          + 'Once we understood the API we were working with, we put together a simple IA prototype and roadmap proposal for external sign off.\n'
                          + '\n'
                          + 'During the development, our weekly sprints were focused around a single endpoint ensuring that we caught all scenarios associated with each feature before moving on to the next.\n' + '\n'
                            + '\n'
                            + 'One of the significant technical features was the VIN number reader which utilised the devices camera to quickly identify the vehicle and request all associated vehicle data for the Toyota operative.\n' + '\n'
                          + 'When the product was feature complete, we set about comprehensively testing with the same device that the Toyota operatives were using.\n'}
                        />
                      </div>

                  </div>
                  <ProjectFullImageSection
                    className="panel panel--toyota pt-5"
                    textClassName="col-md-6 offset-md-3"
                    title={'The new system was rolled out immediately and was in use in the factory lots for all operatives.'}
                    subTitle={'03 / The App'}
                    imageUrl={'/images/projects/toyota/scan-mockup.png'}
                    srcSet={'/images/projects/toyota/scan-mockup.png 1x, /images/projects/toyota/scan-mockup@2x.png 2x'}
                    imageAltText={'Toyota VIN Scanner'}
                  />

                  <div className="container">

                      <ProjectTechSection
                        subTitle="03/ Technology Used"
                        techLogoItems={(
                          <React.Fragment>
                              <div className="col-lg-6 col-6 pt-5 pt-lg-0 text-center">
                                  <img src="/images/tech-icons/dark/react.svg" className="img-responsive"/>
                              </div>
                              <div className="col-lg-6 col-6 pt-5 pt-lg-0 text-center">
                                  <img src="/images/tech-icons/dark/aws.svg" className="img-responsive"/>
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
