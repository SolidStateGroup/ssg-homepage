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
        API.trackPage(Constants.pages.projectElectronTrader);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Mainstay Consulting" canonical="projects/mainstay">
                    <ProjectHero
                      clientImage="/images/projects/mainstay/Mainstay-Logo.svg"
                      projectTitle="De-risking digital transformation"
                      projectType="Responsive Web Application"
                      ProjectServiceListItem={
                        <React.Fragment>
                          <TextListItem listItemText={'UX design,'}/>
                          <TextListItem listItemText={'UI design,'}/>
                          <TextListItem listItemText={'API Development,'}/>
                          <TextListItem listItemText={'Web Application'}/>
                        </React.Fragment>
                      }
                      ProjectTechListItem={
                        <React.Fragment>
                          <TextListItem listItemText={'React,'}/>
                          <TextListItem listItemText={'Spring,'}/>
                          <TextListItem listItemText={'Terraform,'}/>
                          <TextListItem listItemText={'AWS'}/>
                        </React.Fragment>
                      }
                      className="hero--mainstay"
                      projectImage="/images/projects/mainstay/Laptop-03.png"
                      srcSet="/images/projects/mainstay/Laptop-03.png 1x, /images/projects/mainstay/Laptop-03@2x.png 2x"
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                              className="sectionOneAnimation"
                              subTitle="Overview"
                              description={'Mainstay Management Consulting is a specialist Technology and Business Transformation consultancy, providing high quality, outcome based Professional Delivery Services to both private and public sector organisations. \n'
                              + '\n'
                              + 'They needed help with creating a bespoke web app that would help calculate risk associated with prospective digital transformation projects and provide a summary in the form of data visualisations and bespoke reports.\n'}
                            />

                            <ProjectTextSection
                              className="sectionTwoAnimation"
                              subTitle="Challenge"
                              description="Mainstay wanted to create a web tool that could carry out a project “health check” assessment that would capture key project information and act as a “learning tool”. They needed it to scale for different project sizes and to be adaptable for the varying stages in a project’s lifecycle. "
                            />
                        </div>

                        {/*                        <ProjectDetailSectionItem */}
                        {/*                          description="We reviewed Electron’s initial requirements and wireframes for the product that they had put together and redesigned it from the ground up with UX best practices. */}

                        {/* We distilled the requirements into tangible UX artefacts such as personas and a low fidelity clickable prototype for all user types. */}
                        {/* " */}
                        {/*                          // imageOneclassName="img__shadow" */}
                        {/*                          title="UI Components" */}
                        {/*                          imageOne="/images/projects/electron-connect/3.png" */}
                        {/*                          srcSetImageOne="/images/projects/electron-connect/3.png 1x, /images/projects/electron-connect/3@2x.png 2x" */}
                        {/*                          // imageTwo="/images/projects/electron-connect/4.png" */}
                        {/*                          // srcSetImageTwo="/images/projects/electron-connect/4.png 1x, /images/projects/electron-connect/4@2x.png 2x" */}
                        {/*                          ProjectServiceListItem={( */}
                        {/*                              <React.Fragment> */}
                        {/*                                <WideListItem */}
                        {/*                                  listItemText="UX Design" */}
                        {/*                                /> */}
                        {/*                                <WideListItem */}
                        {/*                                  listItemText="Personas" */}
                        {/*                                /> */}
                        {/*                                <WideListItem */}
                        {/*                                  listItemText="User Journey Maps" */}
                        {/*                                /> */}
                        {/*                                <WideListItem */}
                        {/*                                  listItemText="Low Fidelity Prototype" */}
                        {/*                                /> */}
                        {/*                              </React.Fragment> */}
                        {/*                          )} */}
                        {/*                        /> */}

                    </div>

                    <ProjectFullImageSection
                      imageUrl="/images/projects/mainstay/2.jpg"
                      srcSet="/images/projects/mainstay/2.jpg 1x, /images/projects/mainstay/2@2x.jpg 2x"
                      imageAltText="Dashboard UI"
                    />

                    {/* <div className="container"> */}
                    {/*  <div className="col-md-12 text-center"> */}
                    {/*    <iframe src="https://marvelapp.com/prototype/5aj805h?emb=1&iosapp=false&frameless=false" */}
                    {/*            width="100%" height="900" allowTransparency="true" frameBorder="0" /> */}
                    {/*  </div> */}
                    {/* </div> */}


                    <div className="container sectionFourAnimation" id="sectionFourTrigger">


                        <ProjectDetailSectionItem
                          description="Before development commenced both frontend and backend teams agreed on a data structure so UI components could be implemented in parallel with the backend with well-defined type specification. This allowed us to develop an adaptable library of UI components that would scale as the project progressed and provided a robust design system for the project to build on going forward."
                      // className="flex-row-reverse"
                          imageOneclassName="img__shadow"
                          subTitle="Solution"
                      // title="Design System"
                          imageOne="/images/projects/mainstay/3.png"
                          srcSetImageOne="/images/projects/mainstay/3.png 1x, /images/projects/mainstay/3@2x.png 2x"
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX & UI Design"
                                  />
                                  <WideListItem
                                    listItemText="Design System"
                                  />
                                  <WideListItem
                                    listItemText="Data Visualisation"
                                  />
                              </React.Fragment>
                      )}
                        />

                        <ProjectTechSection
                          description="We developed the project using a mono environment approach, a development process we have adopted at SSG that we believe encourages faster time to market for SaaS products and removes bottlenecks from engineering teams."
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
                                        alt=".net" src="/images/tech-icons/dark/spring.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center mb-md-0 mb-4">
                                      <img alt="mysql" src="/images/tech-icons/dark/terraform.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="aws" src="/images/tech-icons/dark/aws.svg"
                                        className="img-responsive"
                                      />
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
