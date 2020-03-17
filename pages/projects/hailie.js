import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {ProjectTechSection, ProjectTextSection} from "../../components/ProjectDetailSectionItem";
import ProjectNav from "../../components/ProjectNav";
import Footer from "../../components/Footer";

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (

            <React.Fragment>
                <Page title="Hailie" canonical="projects/hailie">
                    <ProjectHero
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
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'AWS,'}/>
                                <TextListItem listItemText={'PostgreSQL,'}/>
                                <TextListItem listItemText={'Django 2,'}/>
                                <TextListItem listItemText={'Python'}/>
                            </React.Fragment>
                        }
                        className="hero--hailie"
                        projectImage={"/static/images/projects/hailie/hailie-phone@1x.png"}
                    />

                    <div className="container">

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Overview'}
                            imageOne={'/static/images/projects/hailie/hailie-sensor.png'}
                            description={'Our client had backend infrastructure and app developed over 4 years that couldn’t perform well at scale.\n'+'\n'+
                            'Building on our previous experience with Connected hardware, we built a mobile app and clinician dashboard which integrated with Adherium’s Bluetooth Smart Inhalers.\n' +
                            '\n' + 'Our quick turnaround had lead to us building and releasing the mobile and web portal to its first medical trial within 6 months. \n'}/>

                        <ProjectTextSection subTitle={'Challenge'}
                                            description={'Adherium’s current platform was built in a tech stack that didn’t perform well at scale. There were also major differences between the Native iOS and Android applications, each with differing releases and UI. Previous scalability and tech choices meant that the best course of action meant developing largely from scratch.\n' + '\n' + 'During the initial stages of development there was limited handover from an existing development team which meant that there was little to salvage.\n' + '\n' + 'Content had to be fully localised in order to accommodate one of their larger Spanish clients.\n' + '\n' + 'Proprietary BLE devices meant that we had to cater for complex scenarios and data flow.\n'}/>

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Solution'}
                            title={'Mobile App'}
                            imageOne={'/static/images/projects/hailie/hailie-phones-1@1x.png'}
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
                            imageOne={'/static/images/projects/hailie/hailie-iMac@1x.png'}
                            description={'The web portal allows doctors to monitor their patients sensor usage, and prescribe medication and guidance where necessary.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Web Application Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                </React.Fragment>}

                        />


                        <div className="col-md-12 pr-0 pl-0">
                            <video width="100%" autoPlay={true} muted={true} loop={true}>
                                <source src="https://storage.cloud.google.com/ssg-website-images/video/Hailie%204k.mov"
                                        type="video/mp4" />
                            </video>
                        </div>

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            subTitle={'Overview'}
                            title={'Fluid onboarding'}
                            imageOne={'/static/images/projects/hailie/hailie-phones-2@1x.png'}
                            description={'We developed a seamless onboarding experience, allowing users to easily pair their bluetooth inhaler sensors with the app.'}/>


                        <ProjectTechSection
                            description={'Using React Native we were able to communicate with the Bluetooth inhalers both with shared code across Android and iOS, reducing the differences between them.  \n' +
                            '\n' +
                            'Within 6 months we were on both the iOS App Store and Google Play Store in time for a medical trial.\n'}
                        />
                    </div>

                    <div className="section section--grey">
                        <ProjectNav clientLogo={"/static/images/clients/purely-capital-dark.png"}
                                    projectLink={'/projects/purely-capital'}/>
                    </div>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
