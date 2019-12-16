import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../project/polyfill';
import Header from '../components/Header';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <React.Fragment>
                    <Head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                        <meta
                          name="description"
                          content="Manage your Feature Flags, Feature Toggles and Remote Config in your Mobile, React, React Native, Java, Javascript (Node) and Python projects."
                        />
                        <link rel="preconnect" href="https://fullstory.com"/>
                        <title>
                                Bullet Train - Feature Flags, Feature Toggles and Remote Config
                        </title>
                        <link rel="icon" sizes="192x192" href="/static/icons-192.png"/>
                        <link rel="apple-touch-icon" href="/static/icons-192.png"/>
                        <link rel="manifest" href="/static/manifest.json"/>
                        <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                        <script src="/static/chromefix.js"></script>
                        <meta name="theme-color" content="#1d2d3f"/>
                    </Head>
                    <Header/>
                    <Component />
                    <div id="confirm"/>
                    <div id="alert"/>
                    <div id="modal"/>
                    {
                            E2E && (
                                <React.Fragment>
                                    <div className="e2e" id="e2e-request" />
                                    <div className="e2e" id="e2e-error" />
                                </React.Fragment>
                            )
                        }
                </React.Fragment>
            </Container>
        );
    }
}

export default MyApp;
