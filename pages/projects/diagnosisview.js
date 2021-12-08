import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectTextSection
} from "../../components/ProjectDetailSectionItem";
import ProjectNav from "../../components/ProjectNav";
import Footer from "../../components/Footer";

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    componentDidMount() {
        API.trackPage(Constants.pages.projectPV);
    }

    render() {
        return (

            <React.Fragment>
                <Page title="DiagnosisView" canonical="projects/diagnosisview">
                    <ProjectHero
                        clientImage="/static/images/projects/diagnosisview/dv-brand.png"
                        projectTitle={'Providing advanced patient info for healthcare students and practitioners'}
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
                        ProjectTechListItem={
                          <React.Fragment>
                            <TextListItem listItemText={'React,'}/>
                            <TextListItem listItemText={'React Native,'}/>
                            <TextListItem listItemText={'Java,'}/>
                            <TextListItem listItemText={'Chargebee'}/>
                          </React.Fragment>
                        }
                        className="hero--patientview"
                        projectImage={"/static/images/projects/diagnosisview/1.png"}
                        srcSet={'/static/images/projects/diagnosisview/1.png 1x, /static/images/projects/diagnosisview/1@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Overview'}
                                            description={
                                                'DiagnosisView gives healthcare students and practitioners immediate access to selected reliable information on over 1,000 common diagnoses.\n' +
                                                '\n' +
                                                'The University of Edinburgh was designing a remote, part-time route to a medical degree and wanted a quick way to provide rapid, trusted information to their students. They quickly realised that this should also be useful to healthcare students and practitioners much more widely. \n' +
                                                '\n' +
                                                'After the success of the DiagnosisView mobile app developed in 2019, Solid State was asked to develop a web application that was fully integrated with the mobile app. \n'}/>

                        <ProjectFullImageSection
                            // title={'Patientview UI'}
                            // subTitle={'Overview'}
                            imageUrl={'/static/images/projects/diagnosisview/2.jpg'}
                            srcSet={'/static/images/projects/diagnosisview/2.jpg 1x, /static/images/projects/diagnosisview/2@2x.jpg 2x'}
                            imageAltText={'Patientview UI'}
                        />


                        <ProjectTextSection subTitle={'Challenge'}
                                            description={
                                                'Both the web and mobile apps needed to easily steer practitioners to trusted information, be easy and quick to use and most of all encourage a patient-centred approach. \n' + '\n' +
                                                'The web application needed to mirror the mobile app functionality whilst maintaining a consistent design language and from a technical perspective needed to be fast and reliable. \n'}/>


                        <ProjectDetailSectionItem
                            subTitle={'Solution'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/diagnosisview/1.png'}
                            srcSetImageOne={'/static/images/projects/diagnosisview/1.png 1x, /static/images/projects/diagnosisview/1@2x.png 2x'}
                            description={'We developed the mobile application using React Native. This allowed us to reuse a lot of logic when it came to developing the web application, which was built with React. \n' +
                            '\n' +
                            'The project is in ongoing development with The University of Edinburgh, with the roadmap including an improved API and mapping further resources.\n'}
                        />

                      <ProjectTechSection
                        techLogoItems={
                          <React.Fragment>
                            <div className="col-6 text-center">
                              <img alt="react" src='/static/images/tech-icons/dark/react.svg'
                                   className='img-responsive'/>
                            </div>
                            <div className="col-6 text-center">
                              <img alt=".net" src='/static/images/tech-icons/dark/java.svg'
                                   className='img-responsive'/>
                            </div>
                            <div className="col-6 text-center mb-md-0 mb-4">
                              <img alt="mysql" src='/static/images/tech-icons/dark/chargebee-logo-black.svg' className='img-responsive'/>
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

                    </div>
                  <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
