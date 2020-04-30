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
                <Page title="Dugout FC" canonical="projects/dugout">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Dugout FC'}/>
                            </React.Fragment>

                        }
                        projectTitle={'Making fantasy football a reality'}
                        projectType={'Developing with React and React Native'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React,'}/>
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'AWS,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Webpack'}/>
                            </React.Fragment>
                        }
                        className="hero--dugout"
                        projectImage={"/static/images/projects/dugout/dugout-1@1x.png"}
                        srcSet={'/static/images/projects/dugout/dugout-1@1x.png 1x, /static/images/projects/dugout/dugout-1@2x.png 2x'}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Dugout FC hired us to build web and mobile apps for their brand new fantasy football game. It presented some incredibly complex problems, such as handling a real-time, turn-based team selection process and delivering live fantasy football scores – and it needed to work on multiple platforms.\n' +
                            '\n' +
                            'Our team chose to use Facebook’s React and React Native: the perfect tactical approach, which produced premier league results!'}
                        />
                    </div>

                    <ProjectFullImageSection
                        imageUrl={'/static/images/projects/dugout/draft-ui.jpg'}
                        imageAltText={'Draft UI'}
                    />

                    <div className="container">

                        <ProjectDetailSectionItem
                            subTitle={'01 / Challenge'}
                            title={'Challenge'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/dugout/dugout-2@1x.png'}
                            srcSetImageOne={'/static/images/projects/dugout/dugout-2@1x.png 1x, /static/images/projects/dugout/dugout-2@2x.png 2x'}
                            description={'Dugout FC wanted to create the ultimate cross-platform fantasy football experience: a second-screen app for their users to enjoy while watching the English Premier League on TV.\n' +
                            '\n' +
                            'It had to be an engaging, social experience that users would log into every day and stick with for the whole season.\n' +
                            '\n' +
                            'From the initial briefing, we only had 6 months until the start of the new season – so we had to work fast.'}
                        />


                        <ProjectDetailSectionItem
                            subTitle={'02 / Solution'}
                            title={'Solution'}
                            imageOne={'/static/images/projects/dugout/dugout-3@1x.png'}
                            srcSetImageOne={'/static/images/projects/dugout/dugout-3@1x.png 1x, /static/images/projects/dugout/dugout-3@2x.png 2x'}
                            description={'We focused on the web app initially, racing to complete it in time for the client’s vital pre-season marketing window in July.\n' +
                            '\n' +
                            'Then we followed up with mobile apps for iOS and Android, building both simultaneously.\n' +
                            '\n' +
                            'Because we chose React Native, we could use near-identical code for both platforms, reducing development time by almost half.'}
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
                                            description={'It was a huge challenge to build such a sophisticated platform in just 6 months, but the decision to use React and React Native proved to be the right call.\n' +
                                            '\n' +
                                            'Because we produced the web app in time for Dugout FC’s pre-season marketing window, they reached their goal of signing up 10,000 users for their first season. And the iOS and Android apps made sure they stuck around.'}
                        />

                    </div>

                    <ClientQuote
                        text={'“The guys at SSG were incredibly invested in the product and the build. Our product sees the majority of its traffic at the weekend when everyone is usually enjoying their free time, but the team spent their personal time ensuring the game was where it needed to be every weekend.”'}
                        clientName={'Andrew Mofatt'}
                        image={'/static/images/projects/dugout/dugout-1@1x.png'}
                        srcSet={'/static/images/projects/dugout/dugout-1@1x.png 1x, /static/images/projects/dugout/dugout-1@2x.png 2x'}
                        clientTitle={'Founder, Dugout FC'}/>
                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
