import propTypes from 'prop-types';
import '../common/utils';
import '../components/base';
import './api';
import React from 'react';

global.propTypes = propTypes;

if (typeof window !== 'undefined') {
    require('../static/scripts/fullstory');
}

if (Project.freshChat && typeof window !== 'undefined') {
    function initFreshChat() {
        window.fcWidget && window.fcWidget.init(Project.freshChat);
    }
    function initialize(i, t) { let e; i.getElementById(t) ? initFreshChat() : ((e = i.createElement('script')).id = t, e.async = !0, e.src = 'https://wchat.freshchat.com/js/widget.js', e.onload = initFreshChat, i.head.appendChild(e)); } function initiateCall() { initialize(document, 'freshchat-js-sdk'); }window.addEventListener ? window.addEventListener('load', initiateCall, !1) : window.attachEvent('load', initiateCall, !1);
}
