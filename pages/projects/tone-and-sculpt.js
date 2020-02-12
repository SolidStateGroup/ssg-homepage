import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from "../../components/ProjectHero";
import ProjectDetailSectionItem, {ProjectTechSection} from "../../components/ProjectDetailSectionItem";
import {WideListItem, TextListItem} from '../../components/ListItem';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (
            <Page title="Tone and Sculpt" canonical="projects/tone-and-sculpt">

                <ProjectHero
                    ProjectServiceListItem={
                        <React.Fragment>
                            <TextListItem listItemText={'Research,'} />
                            <TextListItem listItemText={'UX design,'} />
                            <TextListItem listItemText={'UI design,'} />
                            <TextListItem listItemText={'Mobile App Development,'} />
                            <TextListItem listItemText={'API Development'} />
                        </React.Fragment>
                    }
                    ProjectTechListItem={
                        <React.Fragment>
                            <TextListItem listItemText={'React Native,'} />
                            <TextListItem listItemText={'AWS,'} />
                            <TextListItem listItemText={'PostgreSQL,'} />
                            <TextListItem listItemText={'Django 2,'} />
                            <TextListItem listItemText={'Python'} />
                        </React.Fragment>
                    }
                    className="hero--tone-and-sculpt"
                    />


                    <div className="container">

                        <ProjectTextSection />

                        <ProjectDetailSectionItem
                            title={'UX Research'}
                            imageOne={'/static/images/services/ux-niall.jpg'}
                            imageTwo={'/static/images/services/ux-andy.jpg'}
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
                            imageOne={'/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg'}
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

                        <ProjectTextSection />


                    </div>


            </Page>
        );
    }
};

export default TheComponent;
