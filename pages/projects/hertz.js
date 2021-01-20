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

    componentDidMount() {
        API.trackPage(Constants.pages.projectHertz);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Hertz" canonical="projects/hertz">
                    <ProjectHero
                        clientImage="/static/images/clients/black/hertz-black.svg"
                        projectTitle={'Feels on wheels'}
                        projectType={'Connected Car mobile application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Java'}/>
                            </React.Fragment>
                        }
                        className="hero--hertz"
                        projectImage={"/static/images/projects/hertz/hertz-1@1x.png"}
                        srcSet={'/static/images/projects/hertz/hertz-1@1x.png 1x, /static/images/projects/hertz/hertz-1@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Hertz wanted to figure out how they could make their customers’ lives better using Ford’s new AppLink technology. After asking hundreds of customers what they found most annoying about car rental, Hertz turned to SSG to create the solution.\n' +
                            '\n' +
                            'We already had experience of working with AppLink after taking part in a Ford hackathon in Berlin, so we were all set. After a number of brainstorming sessions, the concept for the Connected Car mobile app was born. We designed and developed the app itself in under six weeks, at which point it was exhibited at Mobile World Congress 2017 – to glowing praise.'}
                        />
                        <ProjectTextSection
                            subTitle="01 / Challenge"
                            description={'Hertz interviewed 200 customers across 12 sites over a period of months, gaining a vivid insight into the most common pain-points for people renting a car.\n' +
                            '\n' +
                            'Our challenge was to try and soothe those pains as well as to demonstrate Ford’s AppLink technology in a useful and innovative solution.'}
                        />

                    </div>

                    <ProjectFullImageSection
                        imageUrl={'/static/images/projects/hertz/hertz-full-width-image-1.jpg'}
                    />

                    <div className="container">

                        <ProjectTextSection
                            subTitle="02 / Solution"
                            description={'Many customers said they feel uncertain when driving a rental car for the first time.\n' +
                            '\n' +
                            'So we developed an iOS mobile app which uses AppLink to pull in the car’s data, displaying reassuring diagnostic information to give the driver peace of mind, so they can be absolutely sure that the car is in full working order.'}
                        />

                    </div>

                    <div className="container">

                        <ProjectDetailSectionItem
                            subTitle={'03 / Mobile App Design'}
                            title={'iOS mobile app'}
                            imageOne={'/static/images/projects/hertz/hertz-phones@1x.png'}
                            srcSetImageOne={'/static/images/projects/hertz/hertz-phones@1x.png 1x, /static/images/projects/hertz/hertz-phones@2x.png 2x'}
                            description={'Another common peeve is having to fill up the car with petrol just before returning it. So, on the last day of the rental, the app asks if the customer would like to buy fuel from Hertz at a discount – saving them the hassle of having to find a petrol station on their way back. If they prefer to fill up on the way, the app guides them to the petrol station nearest to the Hertz office.\n' +
                            '\n' +
                            'Of course, nobody wants to be fiddling with their phone while driving. So we made sure that our app integrated seamlessly with AppLink to display all this information on both the iOS device and on the touchscreen built into the Ford vehicle.'}
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
                            subTitle="04 / Highlights"
                            description={'Ford and Hertz liked the application so much that they exhibited it at Mobile World Congress to demonstrate the potential of AppLink and feedback was positive.'}
                        />

                    </div>

                    <div className="container">
                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/react.svg' alt="react"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/java.svg' alt="java"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/docker.svg'
                                             alt="docker"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img alt="webpack" src='/static/images/tech-icons/dark/Webpack.svg'
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            subTitle={'05 / Development'}
                            className="flex-row-reverse"
                            description={'In just six weeks, we had created an app that integrated with a brand new proprietary technology – and helped make renting a car that little bit less painful.'}
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
