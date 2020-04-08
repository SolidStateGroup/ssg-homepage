import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectColourBlockSection
} from "../../components/ProjectDetailSectionItem";
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
                <Page title="Glenfiddich" canonical="projects/glenfiddich">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Glenfiddich'}/>
                            </React.Fragment>

                        }
                        projectTitle={'Glenfiddich Stag Racing - When Whisky Meets Hackathons'}
                        projectType={'Multiplayer AR racing game for mobile'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Mobile Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Unity,'}/>
                                <TextListItem listItemText={'Vuforia'}/>
                            </React.Fragment>
                        }
                        className="hero--glenfiddich"
                        projectImage={"/static/images/projects/glenfiddich/glenfiddich-1@2x.png"}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'00 / Overview'}
                                            description={'For William Grant & Sons hackathon, Hackadram, Solid State Group sent our very own team to come up with and build a solution for the brief:\n' +
                                            '\n' +
                                            '“How can we use technology to improve the customer experience in a retail environment that leads to greater engagement with our brands and therefore improved sales?”\n' +
                                            '\n' +
                                            'In the space of two days, our team developed a real-time, multiplayer, augmented reality ‘stag racing game’ which allows customers to turn a normal WGS whiskey bottle into an interactive game, instantly playable in any environment.'}/>
                    </div>


                    <ProjectFullImageSection
                        className={'panel--navy pt-5 pb-5'}
                        title={'Mobile APP UI Design'}
                        subTitle={'01 / Design'}
                        imageUrl={'/static/images/projects/glenfiddich/glenfiddich-phones@1x.png'}
                        imageAltText={'Mobile AR'}
                    />

                    <div className="container">
                        <ProjectTextSection subTitle={'01 / Challenge'}
                                            description={'William Grant And Sons is in the innovation business. They’re proud of their history, but are even keener on using the digital age to transform their business and lead the spirits industry from the front - that’s why they organised the hack in the first place. Their four briefs were all about engagement or innovations for the brands, we were confident this AR app was the innovative customer engagement channel they needed for the digital native of the future.\n' +
                                            '\n' +
                                            'Why? If the future of branded content follows the future of media, then there’s going to be a natural progression from newspaper adverts to tv adverts to youtube adverts to AR adverts, as brands situate their message alongside the organic content uploaded by Joe public.\n' +
                                            '\n' +
                                            'So we went straight to the possibilities afforded by AR, buoyed by our recent success with an AR app for Christmas cards. We thought carefully about the branding opportunities in the app, for the app to work as a great game it can’t be weighed down by noisy advertising. But rather, the game should be enriched by the fantastic stories and characters created by WGAS over its 130 year history.'}
                        />

                        <ProjectTextSection subTitle={'02 / Solution'}
                                            description={'We wanted to play to our strengths of fast MVPs, beautiful design, and a comprehensive commercial case for the technology.\n' +
                                            '\n' +
                                            'Like with our Christmas card AR app, we used Unity, the game engine, to power the app, and Vuforia as the platform.'}
                        />

                        <ProjectTextSection subTitle={'03 / Highlights'}
                                           description={'The biggest highlight of this proposition was that we built it entirely from scratch in the space of two days.\n' +
                                           '\n' +
                                           'What’s more we were able to garner the interest of the marketing director for Monkey Shoulder, a relatively young and vibrant brand in the William Grant &Sons family.'} />

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
