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

                                {/*<section>*/}
                                {/*    <p className="text-light mt-5">1. What can we help you with?</p>*/}
                                {/*    <div className="row">*/}
                                {/*        <div className="col-lg-3 col-6">*/}
                                {/*            <ButtonHexagon onClick={this.toggle}*/}
                                {/*                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}*/}
                                {/*                           buttonText={'Strategy'}*/}
                                {/*                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>*/}
                                {/*        </div>*/}

                                {/*        <div className="col-lg-3 col-6">*/}
                                {/*            <ButtonHexagon onClick={this.toggle}*/}
                                {/*                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}*/}
                                {/*                           buttonText={'Design'}*/}
                                {/*                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>*/}
                                {/*        </div>*/}
                                {/*        <div className="col-lg-3 col-6">*/}
                                {/*            <ButtonHexagon onClick={this.toggle}*/}
                                {/*                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}*/}
                                {/*                           buttonText={'Mobile App Development'}*/}
                                {/*                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>*/}
                                {/*        </div>*/}

                                {/*        <div className="col-lg-3 col-6">*/}
                                {/*            <ButtonHexagon onClick={this.toggle}*/}
                                {/*                           ButtonHexagonActive={`${this.state.buttonPressed ? true : ''}`}*/}
                                {/*                           buttonText={'Web Development'}*/}
                                {/*                           class={`btn--hexagon ${this.state.buttonPressed ? 'active' : ''}`}/>*/}
                                {/*        </div>*/}

                                {/*    </div>*/}
                                {/*</section>*/}

                                <div className="col-lg-8 pl-0 pb-5">
                                    <form action="https://post.formlyapp.com/solidstategroup-website?redirect=/thanks"
                                          method="POST">

                                        <p className="text-light mt-5">1. Project Information</p>

                                        <div className="form-group">
                                            <textarea className="form-control form__input" name="textarea" id="Textarea"
                                                      placeholder="Tell us a little bit about your project or how we can help..."
                                                      rows="3" required/>
                                        </div>

                                        <p className="text-light mt-5">2. Contact Details</p>
                                        <Input InputLabel={'Name'} forLabel="Name" placeholder="Name"
                                               type="name" name="personname"
                                               inputClassName="form-control form__input mb-3"/>

                                        <Input type="email" name="replyto" InputLabel={'Email address *'} forLabel="Email address"
                                               placeholder="name@example.com"
                                               id="exampleInputEmail1"
                                               inputClassName="form-control form__input mb-3"/>

                                        <div className="d-flex justify-content-center">
                                            <div data-callback="onCaptcha"
                                                 data-sitekey="6LcK0WQUAAAAAMrEyxUFXuV2BFc4B0Dozfh1rq1Q"/>
                                        </div>

                                        <ButtonPrimary type="submit" value="Send" id="submit" className="mt-3">Submit</ButtonPrimary>
                                    </form>
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
