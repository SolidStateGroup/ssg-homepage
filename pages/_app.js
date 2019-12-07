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

                        <link
                          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
                          rel="stylesheet"
                        />
                        <link
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"
                          rel="stylesheet"
                        />

                        <title>
                                Bullet Train - Feature Flags, Feature Toggles and Remote Config
                        </title>
                        <link rel="shortcut icon" href="/static/images/favicon.ico"/>
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
