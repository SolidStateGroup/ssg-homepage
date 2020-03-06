import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import BaLogo from '../components/ClientLogos/BaLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import HertzLogo from '../components/ClientLogos/HertzLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import FeaturedProjects from '../components/FeaturedProjects';
import {ListItemUnderlined} from '../components/ListItem';
import {ButtonPrimary, ButtonText} from '../components/base/forms/Button';
import ProjectBlobImage from '../components/ProjectBlobImage';
import Link from 'next/link';

const HomePage = class extends React.Component {
    static displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;

    }

    componentDidMount = async () => {

        gsap.to('#path-1 path', {duration: 8, morphSVG: "#path-2 path", yoyo: true, repeat: -1});

        // this.controller = new ScrollMagic.Controller();
        // new ScrollMagic.Scene({
        //     triggerElement: "#scrollStarts",
        //     offset: -300, // start this scene after scrolling for -300px
        //     reverse:false
        // })
        //     .setTween("#myElement", 0.5, {
        //         opacity: 1,
        //         translateX: 20
        //     })
        //     // .setPin("#myElement") // pins the element for the the scene's duration
        //     .addTo(this.controller); // assign the scene to the controller
    }

    render = () => {
        return (
            <Page title={Constants.titles.home} canonical="">
                <div className="hero hero--full d-flex flex-column mx-0 p-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3 translatey-offset-down" ref={div => this.myElement = div}>
                                <h1 ref={div => this.myElement = div} className="hero__title mb-4">We design and build
                                    amazing digital products</h1>
                                <Link prefetch={false} href="/work">
                                    <ButtonPrimary>View latest projects</ButtonPrimary>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex-column align-items-center hidden-sm-down">
                            <ProjectBlobImage blobColour="#69D9D3" image="/static/images/hero-devices.png" />
                        </div>
                    </div>

                    <div className="hero__footer hidden-sm-down">
                        <div className="row">
                            <div className="col hidden-md-down">
                                <div className="mouse">
                                    <div className="scroller"/>
                                </div>
                                <div className="vertical-line"/>
                            </div>
                            <div className="col-lg-8 col-12 pl-0 pr-0">
                                <div className="hero__list">
                                    <div className="flex-row ml-auto">
                                        <div className="col-4 col-md-2">
                                            <p className="mb-0 mr-3 text text-center mb-3 mb-sm-0">Trusted by</p>
                                        </div>
                                        <div className="col-4 col-md-2 text-center">
                                            <BaLogo className="client-logo--large mb-3 mb-sm-0" fill={'white'} />
                                        </div>
                                        <div className="col-4 col-md-2 text-center">
                                            <DisneyLogo className="client-logo--medium mb-3 mb-sm-0" fill={'white'} />
                                        </div>
                                        <div className="col-4 col-md-2 text-center">
                                            <UnileverLogo className="client-logo--small" fill={'white'} />
                                        </div>
                                        <div className="col-4 col-md-2 text-center">
                                            <NHSLogo className="client-logo--medium" fill={'white'} />
                                        </div>
                                        <div className="col-4 col-md-2 text-center">
                                            <HertzLogo className="client-logo--medium" fill={'white'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section" id="scrollStarts" >
                    <div className="container-fluid col-lg-8 pl-0 offset-md-2" id="myElement">
                        <h2 className="section__title section__title--dark">Services</h2>
                        <ul className="lined-list list-unstyled flex-row pl-sm-5 pl-0 mt-3">
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'}  />
                            <ListItemUnderlined listItemText={'Strategy'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'UX & UI Design'} listItemLink={'/services/ux-design'} />
                            <ListItemUnderlined listItemText={'Prototyping'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Mobile app development'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Responsive web apps'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'API Development'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Systems integration'} listItemLink={'/'} />
                        </ul>
                        <Link prefetch={false} href="/services">
                            <ButtonText buttonText={'Explore our services'} type={'button'} className="text-primary pl-sm-5 pl-0"/>
                        </Link>
                    </div>
                </div>

                <div className="mt-5 mb-5 section--no-padding">
                    <div className="flex-row justify-content-end">
                        <FeaturedProjects className="col-lg-10 pl-0 pr-0"/>
                    </div>
                </div>

                <div className="section my-5">
                    <div className="container">
                        <h2 className="section__title section__title--dark text-center mb-5">Our process</h2>
                        <div className="flex-row">
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Research"/>
                                <h5>Research</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                            <div className="align-self-center mb5 hidden-sm-down">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/design-blob-icon.svg" className="mb-3" alt="Design"/>
                                <h5>Design</h5>
                                <p>Explore creative options to bring your vision to life</p>
                            </div>
                            <div className="align-self-center mb5 hidden-sm-down">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/development-blob-icon.svg" className="mb-3" alt="Development"/>
                                <h5>Development</h5>
                                <p>Rapid application development</p>
                            </div>
                            <div className="align-self-center mb5 hidden-sm-down">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Release"/>
                                <h5>Release</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                            <div className="align-self-center mb5 hidden-sm-down">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Product Development"/>
                                <h5>Product Development</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/static/images/svg-icons/arrow-gradient-left-turn.svg" className="img-fluid img__full-width pl-5 pr-5 hidden-sm-down" alt="Cycle GFX"/>
                            <div className="text-center">
                                <p className="mt-4 bold text-grey">We support you beyond MVP release and help you develop the product and achieve your business goals</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default HomePage;
