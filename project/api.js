/* istanbul ignore next */
import Router from 'next/router';
import cookie from 'cookie';
import cookies from 'js-cookie';
import Project from '../common/project';
import './libs';

import React from 'react';
global.React = React;
const API = {
    ajaxHandler(type, e) {
        return { type, error: e.message };
    },
    logout() {
        cookies.remove('token');
        Router.replace('/');
    },
    loggedIn() {
        Router.replace('/markup');
    },
    getStoredToken(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.token;
        }
        return cookies.get('t');
    },
    getAuth(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.auth;
        }
        return cookies.get('auth');
    },
    setAuth(v) {
        return cookies.set('auth', v);
    },
    getStoredLocale(req) {
        if (req) {
            // Attempt to get locale saved cookie
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            if (parsedCookies.locale) {
                return parsedCookies.locale;
            }
            // Attempt to retrieve local from Accept-Language headers
            if (req.headers && req.headers['accept-language']) {
                const parsedLocale = req.headers['accept-language'].split(',')[0];
                if (parsedLocale) {
                    return parsedLocale;
                }
            }
        }

        return Constants.defaultLocale;
    },
    setStoredLocale(v) {
        return cookies.set('locale', v);
    },
    setStoredToken(v) {
        return cookies.set('t', v, { path: '', domain: Project.cookieDomain });
    },
    trackEvent(data) {
        if (__DEV__) {
            // eslint-disable-next-line
            console.info('track', data);
        }

        if (Project.ga && typeof 'window' !== 'undefined') {
            if (!data) {
                // eslint-disable-next-line
                console.error('GA: Passed null event data');
                return;
            }
            if ((!data || !data.category || !data.event) && __DEV__) {
                // eslint-disable-next-line
                console.error('Invalid event provided', data);
            }
            gtag('event', data.event, {
                'event_category': data.category,
                'event_label': data.label,
            });
        }

        if (Project.mixpanel) {
            if (!data) {
                // eslint-disable-next-line
                console.error("MIXPANEL: Passed null event data")
            }
            if (!data || !data.category || !data.event) {
                // eslint-disable-next-line
                console.error("MIXPANEL: Invalid event provided", data);
            }
            mixpanel.track(data.event, {
                category: data.category,
            });
        }
    },
    trackPage(title) {
        if (Project.ga && typeof window !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: title,
                page_location: document.location.href,
                page_path: document.location.pathname,
            });
        }

        if (Project.mixpanel && typeof window !== 'undefined') {
            mixpanel.track('Page View', {
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }
    },
    alias(id) {
        if (Project.mixpanel && typeof window !== 'undefined') {
            mixpanel.alias(id);
        }
    },
    identify(id) {
        if (Project.mixpanel && typeof window !== 'undefined') {
            mixpanel.identify(id);
        }
    },
    register(email, firstName, lastName) {
        if (Project.mixpanel && typeof window !== 'undefined') {
            mixpanel.register({
                'Email': email,
                'First Name': firstName,
                'Last Name': lastName,
            });
        }
    },
    reset() {
        if (Project.mixpanel) {
            mixpanel.reset();
        }
    },
    log(namespace, ...args) {
        if (!Project.logs) {
            return;
        }
        if (Project.logs[namespace]) {
            // eslint-disable-next-line
            console.log.apply(this, [namespace, ...args]);
        }
    },
};

global.API = API;
export default API;
