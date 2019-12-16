import propTypes from 'prop-types';
import '../common/utils';
import '../components/base';
import './api';
import '../styles/styles.scss';
import '../styles/fonts.css';
import React from 'react';

global.propTypes = propTypes;
// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (__DEV__ && typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'); whyDidYouRender(React);
}

if (typeof window !== 'undefined') {
    require('../static/scripts/fullstory');
}

if (Project.freshChat) {
    function initFreshChat() {
        window.fcWidget.init(Project.freshChat);
    }
    function initialize(i, t) { let e; i.getElementById(t) ? initFreshChat() : ((e = i.createElement('script')).id = t, e.async = !0, e.src = 'https://wchat.freshchat.com/js/widget.js', e.onload = initFreshChat, i.head.appendChild(e)); } function initiateCall() { initialize(document, 'freshchat-js-sdk'); }window.addEventListener ? window.addEventListener('load', initiateCall, !1) : window.attachEvent('load', initiateCall, !1);
}
