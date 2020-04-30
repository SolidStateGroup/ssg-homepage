import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import {TextListItem, WideListItem} from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectTechSection,
    ProjectTextSection,
    ProjectFullVideoSection
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
                <Page title="Imperial Hotels" canonical="projects/imperial-hotels">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Imperial Hotels'}/>
                            </React.Fragment>

                        }
                        projectTitle={'React Native mobile application with in depth integrations'}
                        projectType={'Mobile app for managing bookings, accessing hotel facilities and controlling the premium WiFi service.'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Greensock Animation Platform'}/>
                            </React.Fragment>
                        }
                        className="hero--imperial"
                        projectImage={"/static/images/projects/imperial/imperial-1@1x.png"}
                        srcSet={'/static/images/projects/imperial/imperial-1@1x.png 1x, /static/images/projects/imperial/imperial-1@2x.png 2x'}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Imperial Hotels are a successful hotel chain based in the heart of London. With a busy website already driving large amounts of business to their hotels, they wanted a mobile application to supplement the website and give their guests a better experience during their stay.\n' +
                            '\n' +
                            'The key requirement for the application was to make gaining access to the premium WiFi service as quick and pain free as possible, while also supporting opportunities for additional marketing.\n' +
                            '\n' +
                            'With our expertise in React Native and the benefits of developing in the framework, Solid State were drafted in to assist with the development of the mobile application and the necessary improvements to the backend.'}
                        />
                    </div>

                    <div className="container">

                        <ProjectDetailSectionItem
                            subTitle={'01 / Challenge'}
                            title={'Challenge'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/imperial/imperial-2@1x.png'}
                            srcSetImageOne={'/static/images/projects/imperial/imperial-2@1x.png 1x, /static/images/projects/imperial/imperial-2@2x.png 2x'}
                            description={'The biggest challenge was accessing and controlling the WiFi settings of mobile devices using React Native. This was done via a combination of accessing the local network hardware through the device’s network interface and also accessing multiple integrations to verify the device’s user and their booking details to prevent unauthorised access to the WiFi.\n' +
                            '\n' +
                            'A common misconception with React Native is comparing it to WebView based technologies such as PhoneGap which can often have technical and performance based limitations. Although React Native does a lot of the work upfront to developing native mobile apps, it is flexible enough for developers to integrate any native functionality may be required.\n' +
                            '\n' +
                            'To achieve the required functionality, our developers wrote their own bridging logic (written natively in Java - Android, Objective C - iOS) to access some of the native device functionality in JavaScript.\n' +
                            '\n'}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'02 / Solution'}
                            title={'Solution'}
                            imageOne={'/static/images/projects/imperial/imperial-1@1x.png'}
                            srcSetImageOne={'/static/images/projects/imperial/imperial-1@1x.png 1x, /static/images/projects/imperial/imperial-1@2x.png 2x'}
                            description={'Solid State’s agile approach allowed us to get the core features of the application developed as early as possible so that we could begin testing. We focused on the difficult functionality of controlling access to the WiFi settings first and put that into testing while the rest of the features were worked on. This allowed us to iterate on this functionality, raising possible issues as early as possible.\n' +
                            '\n' +
                            'As part of the solution, we also needed to interact with 3rd party APIs to verify the device users’ booking details and grant them access to the wifi. This interaction needed to be possible without having authenticated WiFi access, meaning more complications in the process, however, the solution was fairly simple and required whitelisting the relevant URLs with the Hotels’ network providers.'}
                        />

                    </div>

                    <div className="container">
                        <ProjectTechSection
                            subTitle={'05 / Development'}
                            className="flex-row-reverse"
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'UX Design'}/>
                                    <WideListItem
                                        listItemText={'UI Design'}/>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'API Development'}/>
                                </React.Fragment>}

                        />

                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Developed bespoke bridging software in Java and Swift to access low level device functionality. Contributed to the React Native community. Helped Imperial Hotels track more information about their ‘guest’ users who haven’t made the bookings themselves and therefore haven’t provided any details previously'}
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
