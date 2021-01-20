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
        API.trackPage(Constants.pages.projectChorus);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Chorus" canonical="projects/chorus">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Internal Project'}/>
                            </React.Fragment>

                        }
                        projectTitle={'Social marketing, made easy'}
                        projectType={'Find the relevant conversations for your small business on Twitter'}
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
                                <TextListItem listItemText={'AWS,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Webpack'}/>
                            </React.Fragment>
                        }
                        className="hero--chorus"
                        projectImage={"/static/images/projects/chorus/chorus-1@1x.png"}
                        srcSet={'/static/images/projects/chorus/chorus-1@1x.png 1x, /static/images/projects/chorus/chorus-1@2x.png 2x'}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Chorus was built to give marketeers, small businesses and startups the edge on trending conversations in their sector. With Chorus you can create campaigns and capture tweets from anyone talking about the subjects your business cares about, through #hashtags, keywords and @mentions.\n' +
                            '\n' +
                            'You can even automate the actions for those campaign results, and automatically retweet, like, and even reply (from your own saved responses).'}
                        />
                    </div>

                    <div className="container">

                        <ProjectDetailSectionItem
                            subTitle={'01 / Challenge'}
                            title={'Challenge'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/chorus/chorus-2@1x.png'}
                            srcSetImageOne={'/static/images/projects/chorus/chorus-2@1x.png 1x, /static/images/projects/chorus/chorus-2@2x.png 2x'}
                            description={'Twitter have incredibly strict rules around automation so we attempted to ensure that limits and rules were not broken in order to make the product scalable. We built our own rules into the automation settings aswell as the API to stay well clear of the limits that might cause problems to users.'}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'02 / Highlights'}
                            title={'Highlights'}
                            imageOne={'/static/images/projects/chorus/chorus-3@1x.png'}
                            srcSetImageOne={'/static/images/projects/chorus/chorus-3@1x.png 1x, /static/images/projects/chorus/chorus-3@2x.png 2x'}
                            description={'We started with a rudimentary version of the app and asked a group of people from different sectors to use it and feedback. We then took the feedback to build out the roadmap and subsequently the product itself, adding the requested features and improving the UX for areas that weren\'t well understood by the test group. The feedback on the idea was universally good and we got real validation on the idea from startups very soon after launch.'}
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

                    </div>
                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
