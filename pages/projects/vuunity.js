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
        API.trackPage(Constants.pages.projectDetonator);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.vuunity} canonical="projects/vuunity">
                    <ProjectHero
                      clientImage="/images/projects/vuunity/vuunity-logo-white.svg"
                      projectTitle="View the concert your way"
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
                      className="hero--vuunity"
                      projectImage="/images/projects/vuunity/Vuunity-1.png"
                      srcSet="/images/projects/vuunity/Vuunity-1.png 1x, /images/projects/vuunity/Vuunity-1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'Vuunity is the app that gives you full access to interactive behind the scenes content from a truly unique perspective.\n'
                          + '\n'
                          + 'Go Behind-the-Scenes like never before. Search for your favourite artists and dive deep into their concerts with full access to before, during and after the show content.'}
                        />


                    </div>

                    <div className="container">
                        <ProjectFullImageSection
                          imageUrl="/images/projects/vuunity/vuunity-2.png"
                          srcSet="/images/projects/vuunity/vuunity-2.png 1x, /images/projects/vuunity/vuunity-2@2x.png 2x"
                          imageAltText="Dashboard UI"
                        />
                    </div>

                    <div className="container">


                        <ProjectDetailSectionItem
                          subTitle="Challenge"
                          imageOne="/images/projects/vuunity/Vunity-3.png"
                          srcSetImageOne="/images/projects/vuunity/Vunity-3.png 1x, /images/projects/vuunity/Vunity-3@2x.png 2x"
                          description={'This initial build was to discover and connect all the required services to be able to live stream multiple streams concurrently and gracefully switch between them on both web and mobile applications. Once built we would test the scalability of the application for future load.\n'
                          + '\n'
                          + 'During or after the initial proof of concept phase, we would kick off the branding for the application and also wireframe each and every page of the mobile and web apps, followed by high fidelity designs for those pages.'}
                        />

                        <ProjectDetailSectionItem
                          title="Proof of concept"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/vuunity/vuunity-4.png"
                          srcSetImageOne="/images/projects/vuunity/vuunity-4.png 1x, /images/projects/vuunity/vuunity-4@2x.png 2x"
                          description="We proposed building the core services of the platform on the Amazon Web Services Elemental Live Streaming services. This would allow us to test the most difficult parts of the platform in each area and would also give us the ability to run load testing of the architecture in order to ascertain running costs which will be essential to be able to plan a business model and therefore be able to raise capital for the project."
                        />

                        <ProjectDetailSectionItem
                        // title="Proof of concept"
                        // className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/images/projects/vuunity/vuunity-5.png"
                          srcSetImageOne="/images/projects/vuunity/vuunity-5.png 1x, /images/projects/vuunity/vuunity-5@2x.png 2x"
                          description={'The PoC would cover the following features:\n\n'
                        + '1. Allow multiple live input streams to be captured, stored and streamed out to multiple devices\n'
                        + '2. Create a basic React Native mobile application that can view available streams, play and switch between streams\n'
                        + '3. Create a website that can view available streams, play and switch between streams, and play multiple streams simultaneously\n'
                        + '4. Test the system with varying mobile devices and web browsers to test scalability, performance and running costs of the AWS architecture.\n'}
                        />

                        {/* <ProjectTextSection */}
                        {/*  className="flex-row-reverse" */}
                        {/*  // subTitle="Solution" */}
                        {/*  description={'The PoC would cover the following features:\n' +*/}
                        {/*  '- Allow multiple live input streams to be captured, stored and streamed out to multiple devices\n' +*/}
                        {/*  '- Create a basic React Native mobile application that can view available streams, play and switch between streams\n' +*/}
                        {/*  '- Create a website that can view available streams, play and switch between streams, and play multiple streams simultaneously\n' +*/}
                        {/*  '- Test the system with varying mobile devices and web browsers to test scalability, performance and running costs of the AWS architecture.\n'} */}
                        {/* /> */}


                        {/* <ProjectFullImageSection */}
                        {/* description="Once we were happy with our design direction, we started assembling a design system that we would use to build out the reader workflow and act as a base for the project UI going forward." */}
                        {/*  imageUrl="/images/projects/detonator/User-Interview.png" */}
                        {/*  srcSet="/images/projects/detonator/User-Interview.png 1x, /images/projects/detonator/User-Interview@2x.png 2x" */}
                        {/*  imageAltText="User Persona" */}
                        {/*  // title="User Research Synthesis" */}
                        {/* /> */}

                        <ProjectFullImageSection
                          imageUrl="/images/projects/vuunity/Vunity-6.png"
                          srcSet="/images/projects/vuunity/Vunity-6.png 1x, /images/projects/vuunity/Vunity-6@2x.png 2x"
                          imageAltText="User Persona"
                          title="Branding, wireframing and design"
                          subTitle="Solution"
                          description={'Whilst the proof of concept stage was underway, we kicked off the branding, wireframing and design stage for the project. We created wireframes for each and every page of the application on web and mobile platforms for the MVP. This would include identifying each user type (admin, artist, fan etc) and creating the screens for those users of the different devices.\n'
                          + '\n'
                          + 'We then designed the look and feel for all the pages in the wireframes using the brand identity previously created, as well as the interactions in the interface for all devices and touchpoints. The output from this stage was a clickable prototype that fully replicates the end user experience on web and mobile for the MVP release.\n'}
                        />

                        {/* <ProjectDetailSectionItem */}
                        {/*  title="Minimum Viable Product" */}
                        {/*  // className="flex-row-reverse" */}
                        {/*  subTitle="Solution" */}
                        {/*  imageOne="/images/projects/vuunity/vuunity-5.png" */}
                        {/*  srcSetImageOne="/images/projects/vuunity/vuunity-5.png 1x, /images/projects/vuunity/vuunity-5@2x.png 2x" */}
                        {/*  description={'Once the wireframing and design stage was complete we built on the proof of concept codebase to create the minimum viable product (MVP). This is the minimum set of features that could be built which would allow the platform to be sold as a product. \n' +*/}
                        {/*  '\n' +*/}
                        {/*  'We defined the MVP for this product to be the following features:\n' +*/}
                        {/*  '\n' +*/}
                        {/*  '- Artists will be able to create an account, upload content, create a concert, sell tickets for that concert, go live at the concert and stream the live event to their audience.\n' +*/}
                        {/*  '- Fans will be able to create an account, browse various artists, consume specific artist content, buy tickets to a concert, consume pre-recorded and live streamed content from the concert.\n' +*/}
                        {/*  '- Vunity administrators will be able to monitor the different users and manage the accounts. Administrate the various content and concerts. Administrate tickets and get basic statistics about the concert sales.\n'} */}
                        {/* /> */}

                        <ProjectTextSection
                          subTitle="Solution"
                          title="Minimum Viable Product"
                          description={'Once the wireframing and design stage was complete we built on the proof of concept codebase to create the minimum viable product (MVP). This is the minimum set of features that could be built which would allow the platform to be sold as a product. \n'
                        + '\n'
                        + 'We defined the MVP for this product to be the following features:\n'
                        }
                          bulletedList={(
                              <React.Fragment>
                                  <li>Artists will be able to create an account, upload content, create a concert, sell tickets for that concert, go live at the concert and stream the live event to their audience.
                                  </li>
                                  <li>Fans will be able to create an account, browse various artists, consume specific artist content, buy tickets to a concert, consume pre-recorded and live streamed content from the concert.</li>
                                  <li>Vunity administrators will be able to monitor the different users and manage the accounts. Administrate the various content and concerts. Administrate tickets and get basic statistics about the concert sales.</li>
                              </React.Fragment>
)}
                        />

                        <ProjectFullImageSection
                          imageUrl="/images/projects/vuunity/vuunity-7.png"
                          srcSet="/images/projects/vuunity/vuunity-7.png 1x, /images/projects/vuunity/vuunity-7@2x.png 2x"
                        />

                      <ProjectTechSection
                        techLogoItems={
                          <React.Fragment>
                            <div className="col-6 text-center">
                              <img alt="react" src='/images/tech-icons/dark/react.svg'
                                   className='img-responsive'/>
                            </div>
                            <div className="col-6 text-center">
                              <img alt="aws" src='/images/tech-icons/dark/aws.svg'
                                   className='img-responsive'/>
                            </div>
                            <div className="col-6 text-center mb-md-0 mb-4">
                              <img alt="mysql" src='/images/tech-icons/dark/react-native-logo.png' className='img-responsive'/>
                            </div>
                            <div className="col-6 text-center">

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
                          subTitle="Outcome"
                          title="Highlights"
                          description="Once the basic platform was live, we could then concentrate on the more interactive and advanced features. Some future features planned for the platform include:"
                          bulletedList={(
                              <React.Fragment>
                                  <li>Ecommerce stores for the artist in general, but also for the specific concert that the fan has bought the ticket to.
                                  </li>
                                  <li>An Artist fan wall made from content uploaded by the fans and approved by the artists team.</li>
                                  <li>Live concert chat allowing users to give feedback or chat with their friends whilst watching the concert. This could include a friends wall to be able to video chat together to enjoy the concert together.</li>
                                  <li>Interactive stage interactions allowing the user to interact with the concert from their mobile device.</li>
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
