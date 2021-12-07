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
                      clientImage="/static/images/projects/mainstay/Mainstay-Logo.svg"
                      projectTitle="De-risking digital transformation"
                      projectType="Responsive Web Application"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design"/>
                          </React.Fragment>
)}
                      className="hero--mainstay"
                      projectImage="/static/images/projects/mainstay/Laptop-03.png"
                      srcSet="/static/images/projects/mainstay/Laptop-03.png 1x, /static/images/projects/mainstay/Laptop-03@2x.png 2x"
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                              className="sectionOneAnimation"
                              subTitle="00 / Overview"
                              description={'Global energy systems are being transformed by the need to reach Net Zero.\n'
                                + '\n'
                                + 'Today’s semi-analogue energy management tools are increasingly unable to realise cost and carbon efficiencies in complex systems comprising millions of distributed energy assets.\n'
                                + '\n'
                                + 'As certain regions experience rising network constraints and are forced to curtail, and therefore waste renewable generation, it is increasingly recognised that new solutions are needed to address these market inefficiencies. \n'
                                + '\n'
                                + 'The ElectronConnect platform aims to deliver immediate solutions for local network constraints, enabling the users of the platform themselves to design multiple, repeatable market solutions. \n'
                                + '\n'
                                + 'Ultimately, the technology will deliver global, system-wide market infrastructure offering opportunities for innovation and efficiency which are not available in the undigitised systems of today.\n'}
                            />

                            <ProjectTextSection
                              className="sectionTwoAnimation"
                              subTitle="01 / Challenge"
                              description="Following on from our previous work with Electron for the Trader platform (a ​​proof of concept local energy marketplace), which received awards for delivering an outstanding project in renewable energy, we were asked to help design the ElectronConnect product aimed at reorienting & digitising Global energy systems."
                            />
                        </div>

{/*                        <ProjectDetailSectionItem*/}
{/*                          description="We reviewed Electron’s initial requirements and wireframes for the product that they had put together and redesigned it from the ground up with UX best practices.*/}

{/*We distilled the requirements into tangible UX artefacts such as personas and a low fidelity clickable prototype for all user types.*/}
{/*"*/}
{/*                          // imageOneclassName="img__shadow"*/}
{/*                          title="UI Components"*/}
{/*                          imageOne="/static/images/projects/electron-connect/3.png"*/}
{/*                          srcSetImageOne="/static/images/projects/electron-connect/3.png 1x, /static/images/projects/electron-connect/3@2x.png 2x"*/}
{/*                          // imageTwo="/static/images/projects/electron-connect/4.png"*/}
{/*                          // srcSetImageTwo="/static/images/projects/electron-connect/4.png 1x, /static/images/projects/electron-connect/4@2x.png 2x"*/}
{/*                          ProjectServiceListItem={(*/}
{/*                              <React.Fragment>*/}
{/*                                <WideListItem*/}
{/*                                  listItemText="UX Design"*/}
{/*                                />*/}
{/*                                <WideListItem*/}
{/*                                  listItemText="Personas"*/}
{/*                                />*/}
{/*                                <WideListItem*/}
{/*                                  listItemText="User Journey Maps"*/}
{/*                                />*/}
{/*                                <WideListItem*/}
{/*                                  listItemText="Low Fidelity Prototype"*/}
{/*                                />*/}
{/*                              </React.Fragment>*/}
{/*                          )}*/}
{/*                        />*/}

                    </div>

                    <ProjectFullImageSection
                      title="UI Design"
                      subTitle="UI Design"
                      imageUrl="/static/images/projects/mainstay/2.jpg"
                      srcSet="/static/images/projects/mainstay/2.jpg 1x, /static/images/projects/mainstay/2@2x.jpg 2x"
                      imageAltText="Dashboard UI"
                    />

                  {/*<div className="container">*/}
                  {/*  <div className="col-md-12 text-center">*/}
                  {/*    <iframe src="https://marvelapp.com/prototype/5aj805h?emb=1&iosapp=false&frameless=false"*/}
                  {/*            width="100%" height="900" allowTransparency="true" frameBorder="0" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}


                  <div className="container sectionFourAnimation" id="sectionFourTrigger">


                    <ProjectDetailSectionItem
                      description="We built on the previous design system we created for Electron’s Trader platform, adding to the existing components and design language to lay the foundation for the first iteration of the product. "
                      // className="flex-row-reverse"
                      imageOneclassName="img__shadow"
                      title="Design System"
                      imageOne="/static/images/projects/mainstay/3.png"
                      srcSetImageOne="/static/images/projects/mainstay/3.png 1x, /static/images/projects/mainstay/3@2x.png 2x"
                      ProjectServiceListItem={(
                        <React.Fragment>
                          <WideListItem
                            listItemText="UI Design"
                          />
                          <WideListItem
                            listItemText="Design System"
                          />
                          <WideListItem
                            listItemText="Data Visualisation"
                          />
                          <WideListItem
                            listItemText="High Fidelity Clickable Prototype"
                          />
                        </React.Fragment>
                      )}
                    />







                        <ProjectTextSection
                          subTitle="02 / Solution"
                          description="Electron are currently developing the dashboard in house, so once we delivered the design we set up a Zeplin project to easily share our assets and versioned changes with Electron’s developers.


We produced a scalable design system and high fidelity prototype that Electron are currently using to build out the first version of ElectronConnect.
"
                        />


                        {/* <ProjectDetailSectionItem */}
                        {/*  subTitle="03 / Design" */}
                        {/*  title="Fonts & Colours" */}
                        {/*  className="flex-row-reverse" */}
                        {/*  imageOne="/static/images/projects/wazoku/wazoku-font.png" */}
                        {/*  description="Summary of the fonts and colours used in the User Interface design of the application" */}
                        {/* /> */}
                        {/* <ProjectColourBlockSection */}
                        {/*  imageOne="/static/images/projects/electronx/electronx_primary-colours.png" */}
                        {/*  imageTwo="/static/images/projects/electronx/electronx_secondary-colours.png" */}
                        {/* /> */}
                    </div>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
