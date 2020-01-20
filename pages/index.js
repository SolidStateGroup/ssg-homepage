import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const HomePage = class extends React.Component {
    static displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.home} canonical="">
                <div className="hero d-flex flex-column mx-0 p-4">
                  <Header/>
                  <div className="hero__container flex-1 align-self-stretch row flex-row">
                    <div className="flex-1 justify-content-start p-5">
                      <div>
                        <h1 className="hero__title">We design and build amazing digital products</h1>
                        <button className="btn--primary">
                          View latest projects
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <img src="/static/images/pulse-bg.svg" alt="Pulse Background" />
                    </div>
                  </div>
                  <div className="hero__footer">
                    <div className="flex-row">
                      <div className="flex-row ml-auto">
                        <p className="mb-0 mr-3">Trusted by</p>
                        <img src="/static/images/clients/ba.svg" alt="British Airways" />
                      </div>
                    </div>
                  </div>
                </div>
                <Footer/>
            </Page>
        );
    }
};

export default HomePage;
