/**
 * Created by niallquinn on 31/01/2020.
 */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const ContactFormThanksPage = class extends React.Component {
    static displayName = 'ContactFormThanksPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.thanks);
    }

    render = () => {
        return (
            <Page title={Constants.titles.contactFormThanksPage} canonical="thanks">
                <div className="hero hero--full d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="col-md-8 pl-0">
                                    <h1 className="hero__title mb-4">Thanks for your email!</h1>
                                    <p className="text-white">We'll be in touch shortly.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div
                                    className="flex-1 hero__blob-container">
                                    <div className="contact-sidebar">
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

export default ContactFormThanksPage;
