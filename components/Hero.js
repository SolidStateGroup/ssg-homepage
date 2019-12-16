import Link from 'next/link';
import React from 'react';
import Button from './base/forms/Button';

const Hero = class extends React.Component {
    static displayName = 'Hero'

    constructor(props, context) {
        super(props, context);
        this.state = { value: props.defaultValue };
    }

    toggle = () => {
        this.setState({ value: !this.state.value });
    };

    render() {
        const explain = true;
        return (
            <div className="hero-container">
                <div className="hero hero--homepage">
                    <div className="container">
                        <h1 className="margin-bottom margin-top">Release features with confidence</h1>
                        <p className="">
                        Manage feature flags and remote config across web, mobile and
                        server side applications. Deliver true Continuous Integration. Get builds out faster.
                        Control who has access to new features.
                        </p>
                        <div className="hero-cta mt-1">
                            <Button onClick={Utils.scrollToSignUp}>
                                {/* <Link href={`/${this.props.redirect}#sign-up`}> */}
                            Sign up Now
                                {/* </Link> */}
                            </Button>
                            <p className="text-small">No payment card required</p>
                        </div>
                        <div className="white"/>
                        <div className="tech">
                            <div className="text-center margin-auto col-md-12 text-center">
                                <h2>We currently support these popular languages</h2>
                                <div className="row">
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/java/">
                                            <img src="/static/images/tech-logos/java.png" alt="Java" title="Java"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/javascript/">
                                            <img src="/static/images/tech-logos/javascript.png" alt="JavaScript" title="JavaScript"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/javascript/">
                                            <img src="/static/images/tech-logos/react.png" alt="React JS" title="React JS"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/node/">
                                            <img src="/static/images/tech-logos/node.png" alt="Node.js" title="Node.js"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/python/">
                                            <img
                                              src="/static/images/tech-logos/python.png" className="img-fluid" alt="Python"
                                              title="Python"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/ruby/">
                                            <img src="/static/images/tech-logos/ruby.png" alt="Ruby" title="Ruby"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/dotnet/">
                                            <img src="/static/images/tech-logos/dotnet.png" alt=".NET" title=".NET"/>
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/java/">
                                            <img src="/static/images/tech-logos/android2x.png" alt="android" title="android" />
                                        </a>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-4">
                                        <a href="https://docs.bullet-train.io/clients/ios/">
                                            <img src="/static/images/tech-logos/bt-IOS.png" alt="IOS" title="IOS" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-small no-mb">
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
                </div>
            </div>
        );
    }
};

export default Hero;
