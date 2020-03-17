import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, { ProjectTechSection } from '../../components/ProjectDetailSectionItem';
import { WideListItem, TextListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectStatItem from '../../components/ProjectStatItem';
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
                <Page title="Publicate" canonical="projects/publicate">
                    <ProjectHero
                        projectTitle={'Straightening out corporate documentation'}
                        projectType={'Tablet & Web Application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Tablet App Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                            </React.Fragment>
                        }
                        className="hero--publicate"
                        projectImage={"/static/images/projects/wfa/wfa-1.png"}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            title="The brief"
                            description={'The Publicate House team approached us to redesign and rebuild their app, which helps companies manage and distribute company documentation across their organisation and individual teams.  We would also be redesigning and building the app\'s document viewer which facilitated the use of the companies external interactive presentations.   \n\nThe new app needed to be responsive to mobile and tablet devices in both orientations, and could be branded and themed by each of Publicates corporate clients on the client side. The long term plan was also to release on both iOS and Android stores so it was a easy to choose React Native as our framework for the project.'}
                        />
                        <ProjectFullImageSection
                            className={'panel--gradient-blue'}
                            title={'Responsive UI'}
                            subTitle={'03 / UI Design'}
                            imageUrl={'/static/images/projects/publicate/ipad-p.png'}
                            imageAltText={'Responsive UI'}
                        />
                    </div>

                    <div className="panel panel--gradient-publicate">
                        <div className="container">
                            <img src="/static/images/projects/publicate/document-viewer-ipad.png" alt={'Publicate UI'} className="img-fluid"/>
                        </div>
                    </div>

                    <div className="container">
                        <ProjectTechSection
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
                    <div className="section section--grey">
                        <ProjectNav clientLogo={"/static/images/clients/purely-capital-dark.png"} projectLink={'/projects/purely-capital'}/>
                    </div>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
