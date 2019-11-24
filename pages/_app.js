import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../project/polyfill';
import Header from '../components/Header';

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

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
                        <script src="/static/chromefix.js"/>
                        <script
                          src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"
                          integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY"
                          crossOrigin="anonymous"
                        />
                        <script
                          src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js"
                          integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB"
                          crossOrigin="anonymous"
                        />

                        <link
                          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800,900&display=swap"
                          rel="stylesheet"
                        />
                        <link
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"
                          rel="stylesheet"
                        />

                        <title>
                                Bullet Train - Feature Flags, Feature Toggles and Remote Config
                        </title>
                        {/* Chromefix */}
                        <script />
                        <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                        <script src="/static/scripts/inspectlet.js" type="text/javascript" id="inspectletjs" />
                        <script src="/static/scripts/fullstory.js" type="text/javascript" />
                    </Head>
                    <Header/>
                    <Component {...pageProps} />
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
