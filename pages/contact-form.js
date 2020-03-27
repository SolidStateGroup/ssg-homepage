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
                                <h5 className="title--light mb-0">Project Planner</h5>
                                <div className="col-md-8 pl-0">
                                    <h1 className="hero__title mb-4">Tell us about your project</h1>
                                </div>
                                <section>
                                    <p className="text-light mt-5">1. What can we help you with?</p>
                                    <div className="row">
                                        <div className="col-lg-3 col-6">
                                            <ButtonHexagon onClick={this.toggle}
                                                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}
                                                           buttonText={'Strategy'}
                                                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>
                                        </div>

                                        <div className="col-lg-3 col-6">
                                            <ButtonHexagon onClick={this.toggle}
                                                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}
                                                           buttonText={'Design'}
                                                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <ButtonHexagon onClick={this.toggle}
                                                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}
                                                           buttonText={'Mobile App Development'}
                                                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>
                                        </div>

                                        <div className="col-lg-3 col-6">
                                            <ButtonHexagon onClick={this.toggle}
                                                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}
                                                           buttonText={'Web Development'}
                                                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>
                                        </div>

                                    </div>
                                </section>

                                <div className="col-lg-8">
                                    <section>
                                        <p className="text-light mt-5">2. Project Information</p>

                                        <div className="form-group">
                                            <label className="form__label" for="projectInfoTextarea">Tell us a little bit
                                                about
                                                your project or how we can help...</label>
                                            <textarea className="form-control" id="projectInfoTextarea" rows="3"/>
                                        </div>
                                    </section>


                                    <section className="pb-5">
                                        <p className="text-light mt-5">3. Contact Details</p>
                                        <Input InputLabel={'Email address *'} forLabel="Email address" placeholder="name@example.com"
                                               formID={'email address'}
                                               inputClassName="form-control form__input mb-3"/>

                                        <Input InputLabel={'Email address *'} forLabel="Email address" placeholder="name@example.com"
                                               formID={'email address'}
                                               inputClassName="form-control form__input mb-3"/>

                                        <Input InputLabel={'Email address *'} forLabel="Email address" placeholder="name@example.com"
                                               formID={'email address'}
                                               inputClassName="form-control form__input mb-3"/>

                                        <ButtonPrimary className="mt-3">Submit</ButtonPrimary>
                                    </section>
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
