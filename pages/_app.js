import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import '../project/polyfill';

class MyApp extends App {
    constructor(props) {
        super(props);
        if (typeof window !== 'undefined') {
            window.ScrollMagic = require('scrollmagic');
            require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
            require('../project/indicators');
            require('gsap/MorphSVGPlugin');
        }
    }

    componentDidMount() {
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
        }
    }

    render() {
        const { Component } = this.props;
        return (
            <Container>
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
                        <meta property="og:image" content="/static/images/homepage.png" />
                        <meta
                          name="keywords"
                          content={Constants.keywords.home}
                        />
                        <title>
                            {Constants.titles.home}
                        </title>
                        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png"/>
                        <link
                          rel="icon" type="image/png" sizes="32x32"
                          href="/static/images/favicon-32x32.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="16x16"
                          href="/static/images/favicon-16x16.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="192x192"
                          href="/static/images/favicon-192x192.png"
                        />
                        <script src="https://www.google.com/recaptcha/api.js" />
                        <meta name="theme-color" content="#2a93d6"/>
                        {/* Used to prevent a CSS flicker on chrome */}
                        <script type="text/javascript" src="/static/chromefix.js" />
                        <meta name="google-site-verification" content="jdlgcUpYAkHHGhnv9Mtu75cJ4MuzISGfFQwYzqBCBSA" />
                        <script async src={"https://www.googletagmanager.com/gtag/js?id=" + Project.ga}></script>
                    </Head>
                    <Component {...this.props}/>
                </React.Fragment>
            </Container>
        );
    }
}

export default MyApp;
