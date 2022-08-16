import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import '../project/polyfill';
import CookieConsent from 'react-cookie-consent';
import { HeaderFixed } from '../components/Header';
import Page from '../components/Page';

import 'rc-switch/assets/index.css'
class MyApp extends App {
    constructor(props) {
        super(props);
        if (typeof window !== 'undefined') {
            window.ScrollMagic = require('scrollmagic');
            require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
            require('../project/indicators');
            require('gsap/MorphSVGPlugin');
        }
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'dataLayer',
            });
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start':
                      new Date().getTime(),
                    event: 'gtm.js',
                });
                const f = d.getElementsByTagName(s)[0];
                const j = d.createElement(s);
                const dl = l != 'dataLayer' ? `&l=${l}` : '';
                j.async = true;
                j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
                f.parentNode.insertBefore(j, f);
            }(window, document, 'script', 'dataLayer', 'GTM-P6F8VMF'));

            window.dataLayer = window.dataLayer || [];
            global.gtag = () => { dataLayer.push(arguments); };
            gtag('js', new Date());

            gtag('config', Project.ga);
        }
    }

    render() {
        const { Component } = this.props;
        return (
                <React.Fragment>
                    <Head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <meta name="google-site-verification" content="v7vflMwxmlc2vmrgR_-0IYEvmNx_wzNkxzL6b5wG4hY" />
                        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                        <meta
                          name="description"
                          content={Constants.descriptions.home}
                        />
                        <meta property="og:image" content="/images/homepage.png" />
                        <meta
                          name="keywords"
                          content={Constants.keywords.home}
                        />
                        <title>
                            {Constants.titles.home}
                        </title>
                        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
                        <link
                          rel="icon" type="image/png" sizes="32x32"
                          href="/images/favicon-32x32.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="16x16"
                          href="/images/favicon-16x16.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="192x192"
                          href="/images/favicon-192x192.png"
                        />
                        <script src="https://www.google.com/recaptcha/api.js" />
                        <meta name="theme-color" content="#2a93d6"/>
                        {/* Used to prevent a CSS flicker on chrome */}
                        <script type="text/javascript" src="/chromefix.js" />
                        <meta name="google-site-verification" content="jdlgcUpYAkHHGhnv9Mtu75cJ4MuzISGfFQwYzqBCBSA" />
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${Project.ga}`} />
                    </Head>
                    <Component {...this.props}/>
                    <CookieConsent
                      enableDeclineButton
                      declineButtonStyle={{
                          background: 'transparent',
                          border: '0',
                          borderRadius: '0px',
                          boxShadow: 'none',
                          color: '#1AC0C6',
                          cursor: 'pointer',
                          flex: '0 0 auto',
                          padding: '5px 10px',
                          margin: '15px',
                      }}
                      containerClasses="cookie-wrapper"
                      disableButtonStyles
                      buttonClasses="btn--primary btn__cookie"
                      buttonText="OK"
                      flipButtons
                    >
                        We use cookies to improve your experience on our site. Please let us know if you agree to all of these cookies.
                    </CookieConsent>
                </React.Fragment>
        );
    }
}

export default MyApp;
