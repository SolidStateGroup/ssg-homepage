import React from 'react';
import '../components/Modal';

import ForgotPasswordModal from '../components/ForgotPasswordModal';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import 'lazyframe/dist/lazyframe.css';
import { ButtonWhite } from '../components/base/forms/Button';
import data from '../common/utils/_data';
import Link from 'next/link';

const Guide = props => (
    <div>
        <div onClick={() => window.location = props.href} style={{ cursor: 'pointer', color: 'white', width: 360, alignItems: 'center', height: 183, backgroundColor: '#1d2d3f', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <img style={{ marginBottom: props.title ? 10 : 0 }} alt="Feature flags in JavaScript" src={props.image}/>
            {props.title && (
            <h4 style={{ fontSize: 14 }}>
                {props.title}
            </h4>
            )}
        </div>
        <a style={{ color: '#1c2b3d', textAlign: 'center', display: 'block' }} href={props.href}>
            <strong>
                {props.description}
            </strong>
        </a>
    </div>
);

const HomePage = class extends React.Component {
    static displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.HOME);
    }

    showForgotPassword = (e) => {
        e.preventDefault();
        openModal('Forgot password', <ForgotPasswordModal onComplete={() => {
            toast('Forgot password submitted');
        }}
        />);
    }


    toggleLogin = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }

    register = (details) => {
        const { email, password, first_name, last_name, organisation_name = 'Default Organisation' } = details;
        this.setState({ isSaving: true });

        data.post(`${Project.api}auth/register/`, {
            email,
            password1: password,
            password2: password,
            first_name,
            last_name,
        })
            .then((res) => {
                if (res && res.key) {
                    API.setStoredToken(res.key);
                    document.location = Project.appUrl;
                }
            })
            .catch((error) => {
                this.setState({ error, isSaving: false });
            });
    }

    render = () => {
        const { email, password, organisation_name, first_name, last_name, error, isLoading, isSaving } = this.state;
        const redirect = ''; // todo: fixme
        return (
            <div className="homepage">
                <Hero redirect={redirect}/>

                <div className="tech">
                    <div className="container">
                        <div className="text-center margin-auto col-md-12 col-lg-8 push-lg-2">
                            <h2>We currently support these popular languages</h2>
                            <div className="row">
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/java/">
                                        <img src="/static/images/tech-logos/java.png" alt="Java" title="Java"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/javascript/">
                                        <img src="/static/images/tech-logos/javascript.png" alt="JavaScript" title="JavaScript"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/javascript/">
                                        <img src="/static/images/tech-logos/react.png" alt="React JS" title="React JS"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/node/">
                                        <img src="/static/images/tech-logos/node.png" alt="Node.js" title="Node.js"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/python/">
                                        <img
                                          src="/static/images/tech-logos/python.png" className="img-fluid" alt="Python"
                                          title="Python"
                                        />
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/ruby/">
                                        <img src="/static/images/tech-logos/ruby.png" alt="Ruby" title="Ruby"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/dotnet/">
                                        <img src="/static/images/tech-logos/dotnet.png" alt=".NET" title=".NET"/>
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/java/">
                                        <img src="/static/images/tech-logos/android2x.png" alt="android" title="android" />
                                    </a>
                                </div>
                                <div className="col-md-1 col-xs-6">
                                    <a href="https://docs.bullet-train.io/clients/ios/">
                                        <img src="/static/images/tech-logos/bt-IOS.png" alt="IOS" title="IOS" />
                                    </a>
                                </div>
                            </div>
                            <p className="text-small margin-top no-mb">
                      Don't worry if you don't see your
                      preferred tech,
                                {' '}
                                <a href="mailto:support@bullet-train.io">get in touch</a>
                                {' '}
                      and let
                      us know what you'd like to see.
                                <br/>
                              We also have a core RESTful API.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Manage features without deployments</h2>
                                <p>
                                  Bullet Train combines the concepts of feature toggles with the flexibility of remote config. Rather than just switching features on and off, you can configure them for individual segments, users and development environments.
                                </p>
                            </div>
                            <div className="col-md-8 text-right">
                                <img style={{ maxWidth: '100%' }} alt="Feature use cases" src="/static/images/homepage-features.png"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature-container alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="text-left">
                                    <img style={{ maxWidth: '100%' }} alt="User segmentation and ab testing" src="/static/images/homepage-segments.png"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Powerful user segmentation</h2>
                                <p>
                                  Utilise our powerful rules engine to manage your features for the users you wish to target. You can even use segments for <strong>staged rollouts</strong> or <strong>a/b testing</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="text-center text-center col-lg-4 offset-lg-4">
                        <h2>Fully Featured Platform</h2>
                    </div>
                    <div className="container">
                        <div className="mt-5">
                            <div className="mb-3 flex-row">
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-ios-switch mb-3"/>
                                        <h5 className="card__title">Feature Flag Management</h5>
                                        <p className="card__paragraph-text">
Ship features remotely across
                            multiple environments. Deliver true Continuous Integration.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/managing-features/"
                                        >
Feature flags
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-ios-options mb-3"/>
                                        <h5 className="card__title">Customise Features</h5>
                                        <p className="card__paragraph-text">
                                            {' '}
Change the behaviour,
                            appearance and configuration of your app without needing to
                            deploy.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/managing-features/"
                                        >
Remote config
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-ios-person mb-3"/>
                                        <h5 className="card__title">User Traits</h5>
                                        <p className="card__paragraph-text">
Store traits against your users
                            without modifying your back-end and target features specifically for them.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/managing-identities/#identity-traits"
                                        >
User Traits
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-row">
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-md-contacts mb-3"/>
                                        <h5 className="card__title">Create User Segements</h5>
                                        <p className="card__paragraph-text">
Create detailed user segments
                            based on their traits, then target features based on the segment.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/managing-segments/"
                                        >
User Segments
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-ios-browsers mb-3"/>
                                        <h5 className="card__title">Staged Feature Rollouts</h5>
                                        <p className="card__paragraph-text">
Deploy features to 1% of your user base.
                            All good? Roll out to everybody.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/staged-feature-rollouts/"
                                        >
A/B Testing
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card--feature">
                                        <span className="card__icon ion-md-done-all mb-3"/>
                                        <h5 className="card__title">Track Changes</h5>
                                        <p className="card__paragraph-text">
Audit changes &amp;
                            rollback any mistakes or issues.
                                        </p>
                                        <a
                                          className="card__link"
                                          href="https://docs.bullet-train.io/audit-logs/"
                                        >
Feature Audit
                                            <span
                                              className="pl-2 ion-md-arrow-dropright"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ padding: '1rem' }} className="feature-container alt">
                    <div className="container">
                        <div className="text-center">
                            <h2>Resources</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Guide
                                  href="https://www.youtube.com/watch?v=_lyNzKLZ8rc"
                                  description="A tutorial on how to use Bullet Train using React Native."
                                  image="/static/images/tech-logos/react.png"
                                  title="React Feature Flags Guide"
                                />
                            </div>
                            <div className="col-md-4">
                                <Guide
                                  href="https://www.youtube.com/watch?v=GPkCLO0F-5g"
                                  description="A quick introduction to Bullet Train."
                                  image="/static/images/90seconds.png"
                                />
                            </div>
                            <div className="col-md-4">
                                <Guide
                                  href="https://www.youtube.com/watch?v=8cD-t7KKitU"
                                  description="A tutorial on how to use Bullet Train using vanilla JavaScript."
                                  image="/static/images/tech-logos/javascript.png"
                                  title="JavaScript Feature Flags Guide"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <a style={{ color: '#1c2b3d', fontSize: 18 }} href="https://www.youtube.com/channel/UCki7GZrOdZZcsV9rAIRchCw">
                        View all
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sign-up" id="sign-up">
                    <div>
                        <div className="card signup-form container animated fadeIn col-md-8 col-xl-8">
                            <form
                              id="form" name="form" onSubmit={(e) => {
                                  Utils.preventDefault(e);
                                  this.register({ email, password, organisation_name, first_name, last_name });
                              }}
                            >
                                <div className="form-intro text-center">
                                    <h3>It's free to get started.</h3>
                                    <p className="text-white">
                                        We have a 100% free for life plan for smaller projects.
                                        {' '}
                                        <Link href="/pricing">
                                            <a>
                                              Check out our Pricing
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                                <fieldset id="details" className="col-lg-6 offset-lg-3">
                                    <InputGroup
                                      title="First Name"
                                      data-test="firstName"
                                      inputProps={{
                                          name: 'firstName',
                                          className: 'full-width',
                                          error: error && error.first_name,
                                      }}
                                      onChange={(e) => {
                                          this.setState({ first_name: Utils.safeParseEventValue(e) });
                                      }}
                                      className="input-default full-width"
                                      type="text"
                                      name="firstName" id="firstName"
                                    />
                                    <InputGroup
                                      title="Last Name"
                                      data-test="lastName"
                                      inputProps={{
                                          name: 'lastName',
                                          className: 'full-width',
                                          error: error && error.last_name,
                                      }}
                                      onChange={(e) => {
                                          this.setState({ last_name: Utils.safeParseEventValue(e) });
                                      }}
                                      className="input-default full-width"
                                      type="text"
                                      name="lastName" id="lastName"
                                    />
                                    <InputGroup
                                      title="Email address"
                                      data-test="email"
                                      inputProps={{
                                          name: 'email',
                                          className: 'full-width',
                                          error: error && error.email,
                                      }}
                                      onChange={(e) => {
                                          this.setState({ email: Utils.safeParseEventValue(e) });
                                      }}
                                      className="input-default full-width"
                                      type="text"
                                      name="email"
                                      id="email"
                                    />
                                    <InputGroup
                                      title="Password"
                                      data-test="password"
                                      inputProps={{
                                          name: 'password',
                                          className: 'full-width',
                                          error: error && error.password1,
                                      }}
                                      onChange={(e) => {
                                          this.setState({ password: Utils.safeParseEventValue(e) });
                                      }}
                                      className="input-default full-width"
                                      type="password"
                                      name="password"
                                      id="password"
                                    />

                                    {error
                                  && (
                                  <FormGroup>
                                      <div id="error-alert" className="alert alert-danger">
                                        Please check your details and try again
                                      </div>
                                  </FormGroup>
                                  )
                                  }

                                    <div className="form-cta margin-top">

                                        <ButtonWhite
                                          data-test="signup-btn"
                                          name="signup-btn"
                                          disabled={isLoading || isSaving}
                                          className="full-width"
                                          type="submit"
                                        >
                                        Sign Up
                                        </ButtonWhite>
                                        <a href={`${Project.appUrl}login`} id="existing-member-btn">
                                                  Already a member?
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer className="homepage"/>
            </div>
        );
    }
};

export default HomePage;
