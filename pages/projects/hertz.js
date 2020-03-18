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
                <Page title="Hertz" canonical="projects/hertz">
                    <ProjectHero
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
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Greensock Animation Platform'}/>
                            </React.Fragment>
                        }
                        className="hero--hertz"
                        projectImage={"/static/images/projects/hertz/hertz-1@1x.png"}
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
                            subTitle={'02 / Prototyping'}
                            title={'UI Design'}
                            imageOne={'/static/images/projects/hertz/hertz-phones@1x.png'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
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

                        <ProjectTextSection subTitle={'06 / Highlights'}
                                            description={'Unilever liked the idea so much that they funded further development and user testing of the solution after the hackathon.\n' +
                                            '\n' +
                                            'In a single weekend, we proved that rapid prototyping can produce brilliant, practical solutions for even the biggest corporations.'}/>

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
