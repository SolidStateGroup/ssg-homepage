/**
 * Created by niallquinn on 31/01/2020.
 */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const ContactFormPage = class extends React.Component {
    static displayName = 'ContactFormPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    toggle = () => {
        const buttonPressed = !this.state.buttonPressed;
        if (buttonPressed) {
            // fade in anim
        } else {
            // fade out anim
        }
        this.setState({buttonPressed});
    }

    render = () => {
        return (
            <Page title={Constants.titles.contactForm} canonical="contact-form">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
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
                                        <p className="text-light">Rather have a chat?</p>

                                        <p className="text-light">Call <a className="bold">Matthew</a> on
                                            <a href="tel:+44(0)2076137222" className="bold"> +44 (0)207 613 7222</a></p>

                                        <p className="text-light">Email our new business team
                                            <a className="bold" href="mailto:matthew@solidstategroup.com">
                                                &nbsp;matthew@solidstategroup.com</a></p>
                                    </div>

                                    <img src="/static/images/hero-blob.svg" alt="hero-blob"
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

export default ContactFormPage;
