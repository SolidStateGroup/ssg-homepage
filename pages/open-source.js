import React, { Component } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Tabs from '../components/base/forms/Tabs';
import TabItem from '../components/base/forms/TabItem';

export default class OpenSource extends Component {
    static displayName = 'OpenSourcePage'

    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: 0,
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>
                      Open Source Projects - Bullet Train
                    </title>
                </Head>
                <div className="pt-5 hero__open-source text-center">
                    <h1 className="text-center margin-bottom">Open Source</h1>
                    <p className="pb-3">
                        Bullet Train is 100% Open Source Software.
                        We welcome pull requests!
                    </p>
                </div>

                <div className="container">

                    <Tabs
                      className="pill" value={this.state.tab}
                      onChange={tab => this.setState({ tab })}
                    >
                        <TabItem
                          id="btn-select-flags"
                          value="Platform"
                          tabLabel={(
                              <Row className="row-center">
                                    Platform
                              </Row>
                            )}
                        >
                            <div className="mb-5">
                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-api" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-api</h2>
                                            <p className="m-0">
Python REST API for Bullet-Train.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--python"/>
                                            <small className="technology-name">Python</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-frontend" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-frontend</h2>
                                            <p className="m-0">
                                              The admininstration interface for Bullet Train.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-docs" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-docs</h2>
                                            <p className="m-0">
This is the documentation repository for the Docs of Bullet Train.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-examples" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-examples</h2>
                                            <p className="m-0">
A collection of integrations to Bullet Train in a number of different frameworks.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--typescript"/>
                                            <small className="technology-name">TypeScript</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-rules-engine" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-rules-engine</h2>
                                            <p className="m-0">
Evaluate objects against a set of JSON rules supporting nested ALL, NONE and ANY predicates with standard operators.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </TabItem>

                        <TabItem
                          value="Client"
                          id="btn-select-remote-config" tabLabel={(
                              <Row className="row-center">
                                SDK Client Libraries
                              </Row>
                        )}
                        >
                            <div className="mb-5">
                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-js-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-js-client</h2>
                                            <p className="m-0">
                                              Javascript client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>
                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-js-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>react-native-bullet-train</h2>
                                            <p className="m-0">
                                              React Native client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>
                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-nodejs-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-nodejs-client</h2>
                                            <p className="m-0">
Node.js client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--javascript"/>
                                            <small className="technology-name">JavaScript</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-dotnet-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-dotnet-client</h2>
                                            <p className="m-0">
.NET Standard client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--c"/>
                                            <small className="technology-name">C#</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-ruby-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-ruby-client</h2>
                                            <p className="m-0">
Ruby client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--ruby"/>
                                            <small className="technology-name">Ruby</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-python-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-python-client</h2>
                                            <p className="m-0">
Python client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--python"/>
                                            <small className="technology-name">Python</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-java-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-java-client</h2>
                                            <p className="m-0">
Java/Android client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">Java</small>
                                        </div>
                                    </div>
                                </a>

                                <a
                                  className="open-source-card" href="https://github.com/BulletTrainHQ/bullet-train-ios-client" target="_blank"
                                  rel="noopener noreferrer"
                                >
                                    <div className="panel panel-default panel--open-source mt-4">
                                        <div className="panel-content">
                                            <h2>bullet-train-ios-client</h2>
                                            <p className="m-0">
iOS/Swift client.
                                            </p>
                                            <div className="colour-block colour-block--small colour-block--java"/>
                                            <small className="technology-name">iOS/Swift</small>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </TabItem>
                    </Tabs>

                </div>
                <Footer className="homepage"/>
            </div>
        );
    }
}
