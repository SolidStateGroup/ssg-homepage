/**
 * Created by niallquinn on 31/01/2020.
 */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const ErrorPage = class extends React.Component {
    static displayName = 'ErrorPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.contactFormThanksPage} canonical="404">
                <div className="hero hero--full d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="col-md-8 pl-0">
                                    <h1 className="hero__title mb-4">404</h1>
                                    <p className="text-white">Oops, we couldn't find the page you were looking for...</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div
                                    className="flex-1 hero__blob-container">
                                    <div className="contact-sidebar">
                                        <p className="text-light">Rather have a chat?</p>

                                        <p className="text-light">Call <a className="bold">Matthew</a> on
                                            <a href="tel:+44(0)2076137222" className="bold"> +44 (0)207 613 7222</a></p>

                                        <p className="text-light">Email our new business team
                                            <a className="bold" href="mailto:matthew@solidstategroup.com">
                                                &nbsp;matthew@solidstategroup.com</a></p>
                                    </div>

                                    <img src="/images/hero-blob.svg" alt="hero-blob"
                                         className="img-fluid position-absolute hidden-sm-down"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>

            </Page>
        );
    };
};

export default ErrorPage;
