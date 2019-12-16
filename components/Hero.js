import Link from 'next/link';
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

                <div className="open-source">
                    <div>
                        <img alt="github" src="/static/images/github.svg"/>
                        {'We\'re '}
                        <Link prefetch={false} href="/open-source">
                            <a
                              className="link"
                            >
                                100% Open Source
                            </a>
                        </Link>
                        . Host with us or on your own infrastructure.
                    </div>
                </div>
                {/*<img alt="Bullet Train Logo" className="hero-illustration" src="/static/images/bullet-train-illustration.svg"/>*/}
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
                    </div>
                </div>
            </div>
        );
    }
};

export default Hero;
