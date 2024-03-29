import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
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
        API.trackPage(Constants.pages.projectHailie);
    }

    render() {
        return (

            <React.Fragment>
                <Page title="Hailie" canonical="projects/hailie">
                    <ProjectHero
                        clientImage="/images/clients/white/hailie-white.svg"
                        projectTitle={'Reinventing treatment of respiritory issues'}
                        projectType={'Mobile & Web Application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Web Application Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                                <TextListItem listItemText={'Mobile Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Webpack'}/>
                            </React.Fragment>
                        }
                        className="hero--hailie"
                        projectImage={"/images/projects/hailie/hailie-phone@1x.png"}
                        srcSet={'/images/projects/hailie/hailie-phone@1x.png 1x, /images/projects/hailie/hailie-phone@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Overview'}
                            imageOne={'/images/projects/hailie/hailie-sensor.png'}
                            srcSetImageOne={'/images/projects/hailie/hailie-sensor.png 1x, /images/projects/hailie/hailie-sensor@2x.png 2x'}
                            description={'Our client had backend infrastructure and app developed over 4 years that couldn’t perform well at scale.\n' + '\n' +
                            'Building on our previous experience with Connected hardware, we built a mobile app and clinician dashboard which integrated with Adherium’s Bluetooth Smart Inhalers.\n' +
                            '\n' + 'Our quick turnaround had lead to us building and releasing the mobile and web portal to its first medical trial within 6 months. \n'}/>

                        <ProjectTextSection subTitle={'Challenge'}
                                            description={'Adherium’s current platform was built in a tech stack that didn’t perform well at scale. There were also major differences between the Native iOS and Android applications, each with differing releases and UI. Previous scalability and tech choices meant that the best course of action meant developing largely from scratch.\n' + '\n' + 'During the initial stages of development there was limited handover from an existing development team which meant that there was little to salvage.\n' + '\n' + 'Content had to be fully localised in order to accommodate one of their larger Spanish clients.\n' + '\n' + 'Proprietary BLE devices meant that we had to cater for complex scenarios and data flow.\n'}/>

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Solution'}
                            title={'Mobile App'}
                            imageOne={'/images/projects/hailie/hailie-phones-1@1x.png'}
                            srcSetImageOne={'/images/projects/hailie/hailie-phones-1@1x.png 1x, /images/projects/hailie/hailie-phones-1@2x.png 2x'}
                            description={'We developed a seamless onboarding experience, allowing users to easily pair their bluetooth inhaler sensors with the app.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'API Migration'}/>
                                    <WideListItem
                                        listItemText={'Bluetooth Smart Inhaler Integration'}/>
                                </React.Fragment>}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'Solution'}
                            title={'Web Portal'}
                            imageOne={'/images/projects/hailie/hailie-iMac@1x.png'}
                            srcSetImageOne={'/images/projects/hailie/hailie-iMac@1x.png 1x, /images/projects/hailie/hailie-iMac@2x.png 2x'}
                            description={'The web portal allows doctors to monitor their patients sensor usage, and prescribe medication and guidance where necessary.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Web Application Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                </React.Fragment>}

                        />

                        <ProjectFullVideoSection
                            videoLink={'https://storage.cloud.google.com/ssg-website-images/video/Hailie%204k.mov'}/>

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Overview'}
                            title={'Fluid onboarding'}
                            imageOne={'/images/projects/hailie/hailie-phones-2@1x.png'}
                            srcSetImageOne={'/images/projects/hailie/hailie-phones-2@1x.png 1x, /images/projects/hailie/hailie-phones-2@2x.png 2x'}
                            description={'We developed a seamless onboarding experience, allowing users to easily pair their bluetooth inhaler sensors with the app.'}/>

                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/react.svg' alt="react"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/java.svg' alt="java"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/docker.svg'
                                             alt="docker"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img alt="webpack" src='/images/tech-icons/dark/Webpack.svg'
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            className="flex-row-reverse"
                            description={'Using React Native we were able to communicate with the Bluetooth inhalers both with shared code across Android and iOS, reducing the differences between them.  \n' +
                            '\n' +
                            'Within 6 months we were on both the iOS App Store and Google Play Store in time for a medical trial.\n'}
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
