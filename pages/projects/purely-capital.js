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
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Tone and Sculpt" canonical="projects/tone-and-sculpt">
                    <ProjectHero
                        projectTitle={'The future of media financing'}
                        projectType={'Web Application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Research,'}/>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Interaction Design,'}/>
                                <TextListItem listItemText={'Web Application Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
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
                        className="hero--purely-capital"
                        projectImage={"/static/images/projects/purely-capital/pc-summary-mac.png"}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Challenge'} description={'To create an engaging, interactive experience to what is a considerably sterile subject matter. Large forms are always daunting for users and product designers so creating a unique and exciting initial experience was paramount for \'selling\' this product to new visitors.\n' +
                        '\n'} />

                        <ProjectDetailSectionItem
                            title={'UX Research'}
                            imageOne={'/static/images/projects/purely-capital/purely_wireframes.png'}
                            description={'We work with you to iterate on the various creative deliverables until you achieve your vision.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'User Interviews'}/>
                                    <WideListItem
                                        listItemText={'UX Analysis'}/>
                                    <WideListItem
                                        listItemText={'User Journey Maps'}/>
                                    <WideListItem
                                        listItemText={'User Personas'}/>
                                </React.Fragment>}
                        />

                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            title={'Prototyping'}
                            imageOne={'/static/images/projects/purely-capital/purely_desktop-1.png'}
                            description={'We work with you to iterate on the various creative deliverables until you achieve your vision.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Wireframing'}/>
                                    <WideListItem
                                        listItemText={'Clickable Prototypes'}/>
                                    <WideListItem
                                        listItemText={'Motion Prototypes'}/>
                                    <WideListItem
                                        listItemText={'Interaction Design'}/>
                                </React.Fragment>}
                        />

                        <div className="section">
                            <img className="img-fluid" src="/static/images/projects/purely-capital/purely_phones.png" />
                        </div>

                        <ProjectTechSection
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'API Migration'}/>
                                    <WideListItem
                                        listItemText={'Relaunch'}/>
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
