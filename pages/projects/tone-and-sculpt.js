import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from "../../components/Header";
import ProjectHeroPulse from "../../components/animation/ProjectHeroPulse";
import ProjectHero from "../../components/ProjectHero";
import ProjectDetailSectionItem from "../../components/ProjectDetailSectionItem";
import {WideListItem} from '../../components/ListItem';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (
            <Page title="Tone and Sculpt" canonical="projects/tone-and-sculpt">

                <ProjectHero className="hero--tone-and-sculpt"/>

                <ProjectDetailSectionItem title={'Prototyping'}
                                          description={'We work with you to iterate on the various creative deliverables until you achieve your vision.'}
                                          ProjectServiceListItem={
                                              <React.Fragment>
                                                  <WideListItem
                                                      listItemText={'User Interviews'}/>
                                                  <WideListItem
                                                      listItemText={'User Interviews'}/>
                                                  <WideListItem
                                                      listItemText={'User Interviews'}/>
                                                  <WideListItem
                                                      listItemText={'User Interviews'}/>
                                              </React.Fragment>}
                />

            </Page>
        );
    }
};

export default TheComponent;
