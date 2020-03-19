import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, {ProjectTechSection, ProjectFullImageSection} from '../../components/ProjectDetailSectionItem';
import {WideListItem, TextListItem} from '../../components/ListItem';
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
                <Page title="WFA" canonical="projects/wfa">
                    <ProjectHero
                        projectTitle={'Visualising data for effective marketing communications'}
                        projectType={'Mobile & Web Application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Mobile App Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                            </React.Fragment>
                        }
                        className="hero--wfa"
                        projectImage={"/static/images/projects/wfa/wfa-1.png"}
                    />

                    <div className="container">


                        <ProjectTextSection subTitle={'01 / Overview'}
                                            description={'A web app visualising dynamic charts by integrating with Typeform and Recharts, a composable charting library built on React components.'}/>

                        <ProjectTextSection subTitle={'02 / Challenge'}
                                            description={'WFA regularly send out questionnaires to their members to gather information. Once they receive the responses from their members they would spend hours manipulating the data into spreadsheets and creating charts to present to their members so they can determine how their performance compares to other member organisations. This process would mean that their members were waiting weeks before they saw any results from the data they provided.'}/>

                        <ProjectTextSection subTitle={'03 / Solution'}
                                            description={'A web app visualising dynamic charts by integrating with Typeform and Recharts, a composable charting library built on React components.'}/>
                    </div>

                    <ProjectFullImageSection
                        className={'panel--navy'}
                        title={'Visualising dynamic charts'}
                        subTitle={'03 / UI Design'}
                        imageUrl={'/static/images/projects/wfa/wfa-2.png'}
                        imageAltText={'WFA Dashboard'}
                    />

                    <div className="container">
                        <ProjectTechSection
                            description={'We integrated with Typeform and Recharts, a composable charting library built on React components.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Web App Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'UI Design'}/>
                                </React.Fragment>}
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