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
                                <button type="button" className="btn--primary">
                                    View latest projects
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 align-items-center justify-content-center hero__gfx-container">
                            <img src="/static/images/hero-gfx.svg" alt="Blob Graphic" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="hero__footer">
                        <div className="flex-row hero__list">
                            <div className="flex-row ml-auto">
                                <p className="mb-0 mr-3 text">Trusted by</p>
                                <img src="/static/images/clients/ba.svg" alt="British Airways"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <h2 className="section__title">Services</h2>
                        <ul className="lined-list list-unstyled">
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                            <li className="lined-list__item list-unstyled-item col-lg-6"><a href="/" className="lined-list__item__link">Branding</a></li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </Page>
        );
    };
};

export default HomePage;
