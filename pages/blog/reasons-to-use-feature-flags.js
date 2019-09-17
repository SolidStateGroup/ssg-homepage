/**
 * Created by niall on 27/11/2018.
 */
import React, { Component, PropTypes } from 'react';
import lazyframe from 'lazyframe';
import md from './markdown/7-reasons-for-devs-to-use-feature-flags-as-a-growth-hack.md';
import 'lazyframe/dist/lazyframe.css';
import HowToUseFeatureFlags from './HowToUseFeatureFlags';

const ReactMarkdown = require('react-markdown');

const ReasonsToUseFeatureFlags = class extends Component {
    static displayName = 'SevenReasons'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        lazyframe('.lazyframe');
    }

    render() {
        return (
            <div className="app-container blog-post col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">

                <ReactMarkdown className="markdown-content" source={md}/>

            </div>
        );
    }
};

ReasonsToUseFeatureFlags.propTypes = {};

export default ReasonsToUseFeatureFlags;
