import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (
            <Page title="Hailie" canonical="projects/hailie">
                <div className="hero hero--half d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                </div>
                <div>
                    Hi there!
                </div>
            </Page>
        );
    }
};

export default TheComponent;
