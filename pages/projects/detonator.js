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
                <Page title={Constants.titles.detonator} canonical="projects/detonator">
                    <ProjectHero
                      clientImage="/static/images/projects/detonator/detonator-wordmark.png"
                      projectTitle="Re-introducing reading to a disengaged young audience"
                      projectType="Responsive Web Application & Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="Interaction Design,"/>
                              <TextListItem listItemText="Product Management"/>
                              {/*<TextListItem listItemText="Mobile App Development"/>*/}
                          </React.Fragment>
)}
//                       ProjectTechListItem={(
//                           <React.Fragment>
//                               <TextListItem listItemText="React,"/>
//                               <TextListItem listItemText="React Native,"/>
//                               <TextListItem listItemText="Spring,"/>
//                               <TextListItem listItemText="Terraform,"/>
//                               <TextListItem listItemText="AWS"/>
//                           </React.Fragment>
// )}
                      className="hero--detonator"
                      projectImage="/static/images/projects/detonator/1.png"
                      srcSet="/static/images/projects/detonator/1.png 1x, /static/images/projects/detonator/1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'Detonator is a brave new concept to re-introduce reading to a disengaged young audience. \n' +
                          '\n' +
                          'The Detonator interactive reader customises the reading experience based on what is being read and the current narrative. Short punchy stories, broken into easy to read chunks with atmospheric background noises, and sticky gamification make reading a far more immersive experience. Detonator users are incentivised to read more by a ranking system and earn rewards which can be equipped to personalise their profile.  \n' +
                          '\n' +
                          'Detonator content is exclusive to the platform and is released periodically to subscribed users.\n'}
                        />


                    </div>



                  <div className="container">






                    {/*<div className="col-md-12 text-center">*/}

                    {/*  <iframe width="100%" height="650"*/}
                    {/*          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4ME4iMsJ2AmTKE7dm5HJC8%2FDetonator---UI-Design%3Fpage-id%3D428%253A5672%26node-id%3D472%253A9284%26viewport%3D286%252C48%252C1%26scaling%3Dscale-down%26starting-point-node-id%3D472%253A9284"*/}
                    {/*          allowFullScreen></iframe>*/}

                    {/*</div>*/}


                  </div>

                    <ProjectFullImageSection
                      imageUrl="/static/images/projects/detonator/2.png"
                      srcSet="/static/images/projects/detonator/2.png 1x, /static/images/projects/detonator/2@2x.png 2x"
                      imageAltText="Dashboard UI"
                    />

                    <div className="container">


                        <ProjectDetailSectionItem
                              // title={'Users & Audience'}
                          subTitle="Challenge"
                          imageOne="/static/images/projects/site-assist/site-assist-3.jpg"
                          srcSetImageOne="/static/images/projects/site-assist/site-assist-3.jpg 1x, /static/images/projects/site-assist/site-assist-3@2x.jpg 2x"
                          description={'\n' +
                          'The Detonator philosophy is to get kids reading again. The reading industry thinks they’ve lost 10-15 year olds to gaming and Tik Tok, so Detonator wanted to capitalise on this gap in the market to produce books and content for kids in that age group which would make reading feel as exciting as playing Fortnite.'}
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
                          // title="UX Design"
                          className="flex-row-reverse"
                          subTitle="Solution"
                          imageOne="/static/images/projects/detonator/Detonator-IA.png"
                          srcSetImageOne="/static/images/projects/detonator/Detonator-IA.png 1x, /static/images/projects/detonator/Detonator-IA@2x.png 2x"
                          description={'Over the period of 10 weeks we distilled the project goals, stakeholders, brand requirements and features for the detonator application into a comprehensive list of stories for the MVP.\n' +
                          '\n' +
                          'We started with a discovery session to gather information about the structure of the business and a blueprint for the product we’re hoping to build. This allowed us to gain a greater understanding of the project goals and proposition values for our team.'}
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

{/*                        <ProjectDetailSectionItem*/}
{/*                          title="UI Design"*/}
{/*                          subTitle="Solution"*/}
{/*                          imageOne="/static/images/projects/site-assist/site-assist-5.jpg"*/}
{/*                          srcSetImageOne="/static/images/projects/site-assist/site-assist-5.jpg 1x, /static/images/projects/site-assist/site-assist-5@2x.jpg 2x"*/}
{/*                          description={'Although the MVP was to focus solely on the Permit to Work feature, it was important for us to demonstrate the workflows for the end product so we were able to build new features in the future. We created a series of high fidelity prototypes for each user type on the platform. This laid the groundwork for us then being able to start developing the MVP. \n'*/}
{/*                              + '\n'*/}
{/*                              + 'We created a web application using React and a mobile application with React Native. \n'*/}
{/*                              + '\n'}*/}
{/*                          ProjectServiceListItem={(*/}
{/*                              <React.Fragment>*/}
{/*                                  <WideListItem*/}
{/*                                    listItemText="UX Analysis"*/}
{/*                                  />*/}
{/*                                  <WideListItem*/}
{/*                                    listItemText="User Journey Maps"*/}
{/*                                  />*/}
{/*                              </React.Fragment>*/}
{/*)}*/}
{/*                        />*/}

                    </div>

                    {/*<ProjectFullImageSection*/}
                    {/*  imageUrl="/static/images/projects/site-assist/site-assist-6.jpg"*/}
                    {/*  srcSet="/static/images/projects/site-assist/site-assist-6.jpg 1x, /static/images/projects/site-assist/site-assist-6@2x.jpg 2x"*/}
                    {/*  imageAltText="Dashboard UI"*/}
                    {/*  title="Mobile UI Components"*/}
                    {/*  subTitle="Solution"*/}
                    {/*/>*/}

                  <ProjectFullImageSection
                    imageUrl="/static/images/projects/detonator/3.png"
                    srcSet="/static/images/projects/detonator/3.png 1x, /static/images/projects/detonator/3@2x.png 2x"
                    imageAltText="Dashboard UI"
                  />



                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
