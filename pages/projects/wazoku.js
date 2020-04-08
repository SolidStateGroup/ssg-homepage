import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {ProjectTechSection, ProjectColourBlockSection} from "../../components/ProjectDetailSectionItem";
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
                <Page title="Wazoku" canonical="projects/wazoku">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Wazoku'}/>
                            </React.Fragment>
                        }
                        projectTitle={'Ideas happen anywhere, anytime'}
                        projectType={'Mobile Application'}
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
                        className="hero--wazoku"
                        projectImage={"/static/images/projects/wazoku/2.png"}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Overview'}
                                            description={'A mobile application for the capture and innovation of ideas using Wazoku’s existing API platform.'}/>

                        <ProjectTextSection subTitle={'Challenge'}
                                            description={'The app needed to be as secure as possible for their clients meaning all data needed to be encrypted and various measures taken to prevent visibility of data or screenshots being taken. Most challenging of all was the app needed to work fully offline with automatic synchronisation occurring in the background when the device came back online.'}/>

                        <ProjectDetailSectionItem
                            subTitle={'Solution'}
                            title={'React Native'}
                            imageOne={'/static/images/projects/wazoku/wazoku-phones@1x.png'}
                            description={'Using React Native we built an app that was able to fully capture all of Wazoku’s requirements. Data encryption was achieved across all data including their custom SQLite databases. An offline queue solution was built that interlinked offline actions in such a way that any actions that depended on another one succeeding would be skipped if that action had failed for any particular reason while also generating an appropriate in-app notification.\n' +
                            '\n'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'UX Design'}/>
                                    <WideListItem
                                        listItemText={'UI Design'}/>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                </React.Fragment>}

                        />

                        <ProjectDetailSectionItem
                            subTitle={'Design'}
                            title={'Fonts & Colours'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/wazoku/wazoku-font.png'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
                        />


                        <ProjectColourBlockSection />

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
