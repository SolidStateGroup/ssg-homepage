/* istanbul ignore next */
import Router from 'next/router';
import cookie from 'cookie';
import cookies from 'js-cookie';

import Project from '../common/project';

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
        return cookies.set('t', v, { path: '', domain: '.bullet-train.io' });
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
            ga('send', {
                hitType: 'event',
                eventCategory: data.category,
                eventAction: data.event,
                eventLabel: data.label,
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
            ga('send', {
                hitType: 'pageview',
                title,
                location: document.location.href,
                page: document.location.pathname,
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
            return
        }
        if (Project.logs[namespace]) {
            console.log.apply(this, [namespace, ...args]);
        }
    },
};

global.API = API;
export default API;

// Analytics
if (Project.ga && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
        i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
    }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
    ga('create', Project.ga, 'auto');
}

if (Project.mixpanel && typeof window !== 'undefined') {
    (function (e, a) {
        if (!a.__SV) {
            let b = window; try {
                var c; let l; let i; const j = b.location; const
                    g = j.hash; c = function (a, b) { return (l = a.match(RegExp(`${b}=([^&]*)`))) ? l[1] : null; }; g && c(g, 'state') && (i = JSON.parse(decodeURIComponent(c(g, 'state'))), i.action === 'mpeditor' && (b.sessionStorage.setItem('_mpcehash', g), history.replaceState(i.desiredHash || '', e.title, j.pathname + j.search)));
            } catch (m) { } let k; let
                h; window.mixpanel = a; a._i = []; a.init = function (b, c, f) {
                function e(b, a) {
                    const c = a.split('.'); c.length == 2 && (b = b[c[0]], a = c[1]); b[a] = function () {
                        b.push([a].concat(Array.prototype.slice.call(arguments,
                            0)));
                    };
                } let d = a; typeof f !== 'undefined' ? d = a[f] = [] : f = 'mixpanel'; d.people = d.people || []; d.toString = function (b) { let a = 'mixpanel'; f !== 'mixpanel' && (a += `.${f}`); b || (a += ' (stub)'); return a; }; d.people.toString = function () { return `${d.toString(1)}.people (stub)`; }; k = 'disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user'.split(' ');
                for (h = 0; h < k.length; h++)e(d, k[h]); a._i.push([b, c, f]);
            }; a.__SV = 1.2; b = e.createElement('script'); b.type = 'text/javascript'; b.async = !0; b.src = typeof MIXPANEL_CUSTOM_LIB_URL !== 'undefined' ? MIXPANEL_CUSTOM_LIB_URL : e.location.protocol === 'file:' && 'https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//) ? 'https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js' : 'https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js'; c = e.getElementsByTagName('script')[0]; c.parentNode.insertBefore(b, c);
        }
    }(document, window.mixpanel || []));
    mixpanel.init(Project.mixpanel);
}
