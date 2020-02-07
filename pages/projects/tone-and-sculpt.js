import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from "../../components/Header";
import ProjectHeroPulse from "../../components/animation/ProjectHeroPulse";
import ProjectHero from "../../components/ProjectHero";

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

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="flex-row">
                                <div className="col-md-6 align-self-end">
                                    <img src="/static/images/services/ux-niall.jpg" alt="UX Design Whiteboard" className="img-fluid"/>
                                </div>
                                <div className="col-md-6">
                                    <img src="/static/images/services/ux-andy.jpg" alt="UX Design Whiteboard" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
    2
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
};

export default TheComponent;
