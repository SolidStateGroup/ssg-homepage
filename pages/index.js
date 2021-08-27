import React from 'react';
import Link from 'next/link';
import Header, { HeaderFixed } from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import BaLogo from '../components/ClientLogos/BaLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import HertzLogo from '../components/ClientLogos/HertzLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import FeaturedProjects from '../components/FeaturedProjects';
import { ListItemUnderlined } from '../components/ListItem';
import { ButtonPrimary, ButtonText } from '../components/base/forms/Button';
import ProjectBlobImage from '../components/ProjectBlobImage';

const HomePage = class extends React.Component {
    static displayName = 'HomePage';


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        API.trackPage(Constants.pages.home);
        gsap.timeline()
            .from('.hero__container', { duration: 0.5, delay: 0.25, y: 10, autoAlpha: 0, ease: 'power1' });

        const controller = new ScrollMagic.Controller();

        const tl = new gsap.timeline();
        const tl2 = new gsap.timeline();
        const tl3 = new gsap.timeline();

        tl.from('#sectionOneAnimation', 1, { y: 50, opacity: 0, ease: 'power1' });
        tl2.from('#sectionTwoAnimation', 1, { y: 50, opacity: 0, ease: 'power1' });
        tl3.from('#sectionThreeAnimation', 1, { y: 50, opacity: 0, ease: 'power1' });

        const scene1 = new ScrollMagic.Scene({
            triggerElement: '#sectionOneTrigger',
            reverse: null,
            triggerHook: 'onEnter',
        })
            .setTween(tl);


        const scene2 = new ScrollMagic.Scene({
            triggerElement: '#sectionTwoTrigger',
            reverse: null,
            triggerHook: 'onEnter',
        })

            .setTween(tl2);

        const scene3 = new ScrollMagic.Scene({
            triggerElement: '#sectionThreeTrigger',
            reverse: null,
            triggerHook: 'onEnter',
        })

            .setTween(tl3);

        controller.addScene([
            scene1,
            scene2,
            scene3,
        ]);
    }

    render = () => {
        return (
            <Page title={Constants.titles.home} canonical="">
                <div className="hero hero--full d-flex flex-column mx-0 p-4">
                    <Header className="navbar-container--transparent"/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3 pl-md-3 pl-0">
                                <h1 className="hero__title mb-4">We design and build
                                    amazing digital products
                                </h1>
                                <Link prefetch={false} href="/work">
                                    <ButtonPrimary onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'home_hero_work' })}>View latest projects</ButtonPrimary>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex-column align-items-center hidden-sm-down">
                            <ProjectBlobImage
                              blobColour="#69D9D3" src="/static/images/hero-devices@1x.png"
                              srcSet="/static/images/hero-devices@2x.png 2x, /static/images/hero-devices@1x.png 1x"
                            />
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
                                    <div className="flex-row ml-auto hero__list">
                                        <div className="col-4 col-md-2 hero__list--animated">
                                            <p className="mb-0 mr-3 text text-center mb-3 mb-sm-0">Trusted by</p>
                                        </div>
                                        <div className="col-4 col-md-2 text-center hero__list--animated">
                                            <BaLogo className="client-logo--large mb-3 mb-sm-0" fill="white"/>
                                        </div>
                                        <div className="col-4 col-md-2 text-center hero__list--animated">
                                            <DisneyLogo className="client-logo--medium mb-3 mb-sm-0" fill="white"/>
                                        </div>
                                        <div className="col-4 col-md-2 text-center hero__list--animated">
                                            <UnileverLogo className="client-logo--small" fill="white"/>
                                        </div>
                                        <div className="col-4 col-md-2 text-center hero__list--animated">
                                            <NHSLogo className="client-logo--medium" fill="white"/>
                                        </div>
                                        <div className="col-4 col-md-2 text-center hero__list--animated">
                                            <HertzLogo className="client-logo--medium" fill="white"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section" id="sectionOneTrigger">
                    <div className="container-fluid pl-md-0 pl-3 pr-0" id="sectionOneAnimation">
                        <div className="col-md-8 pl-0 offset-md-2">
                            <h2 className="section__title section__title--dark">Services</h2>
                            <ul className="lined-list list-unstyled flex-row pl-sm-5 pl-0 mt-3">
                                <ListItemUnderlined listItemText="UX & UI Design" listItemLink="/services/design"/>
                                <ListItemUnderlined
                                  listItemText="Mobile App Development"
                                  listItemLink="/services/mobile-app-development"
                                />
                                <ListItemUnderlined
                                  listItemText="Responsive Web Apps"
                                  listItemLink="/services/responsive-web-apps"
                                />
                                <ListItemUnderlined listItemText="Branding" listItemLink="/services/branding"/>
                                <ListItemUnderlined listItemText="Strategy" listItemLink="/services/strategy"/>
                                <ListItemUnderlined listItemText="User Research" listItemLink="/services/user-research"/>
                                <ListItemUnderlined
                                  listItemText="API Development"
                                  listItemLink="/services/api-development"
                                />
                                <ListItemUnderlined
                                  listItemText="Systems Integration"
                                  listItemLink="/services/systems-integration"
                                />
                            </ul>
                            <Link prefetch={false} href="/services">
                                <ButtonText
                                  onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'home_services' })}
                                  buttonText="Explore our services" type="button"
                                  className="text-primary pl-sm-5 pl-0"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-5 mb-5 section--no-padding" id="sectionTwoTrigger">
                    <div className="flex-row justify-content-end" id="sectionTwoAnimation">
                        <FeaturedProjects className="col-lg-10 pl-0 pr-0"/>
                    </div>
                </div>

                <div className="section my-5" id="sectionThreeTrigger">
                    <div className="container-fluid pl-md-0 pl-3 pr-0" id="sectionThreeAnimation">
                        <div className="col-md-8 pl-0 offset-md-2 mt-5">
                            <h2 className="section__title section__title--dark mb-5">Our process</h2>
                        </div>
                        <div className="col-md-8 pl-0 offset-md-2">
                            <div className="flex-row">
                                <div className="col text-center">
                                    <img
                                      src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3"
                                      alt="Research"
                                    />
                                    <h5>Research</h5>
                                    <p>Define business objectives and gather insights on product and market fit</p>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                      src="/static/images/svg-icons/design-blob-icon.svg" className="mb-3"
                                      alt="Design"
                                    />
                                    <h5>Design</h5>
                                    <p>Define the product in stories, generate estimates, create UX/UI and design prototypes</p>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                      src="/static/images/svg-icons/development-blob-icon.svg" className="mb-3"
                                      alt="Development"
                                    />
                                    <h5>Development</h5>
                                    <p>Develop infrastructure, APIs, websites and mobile applications through multiple sprints</p>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                      src="/static/images/svg-icons/release-blob-icon.svg" className="mb-3"
                                      alt="Release"
                                    />
                                    <h5>Release</h5>
                                    <p>Test all assets, integrate analytics, deploy to client, client tests and release to production</p>
                                </div>
                                <div className="align-self-center mb5 hidden-sm-down">
                                    <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                                </div>
                                <div className="col text-center">
                                    <img
                                      src="/static/images/svg-icons/product-blob-icon.svg" className="mb-3"
                                      alt="Product Development"
                                    />
                                    <h5>Product Development</h5>
                                    <p>Analyse customer interactions & plan subsequent releases</p>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                  src="/static/images/svg-icons/arrow-gradient-left-turn.svg"
                                  className="img-fluid img__full-width pl-5 pr-5 hidden-sm-down" alt="Cycle GFX"
                                />
                                <div className="text-center">
                                    <p className="mt-4 bold text-grey">By listening to your customers feedback and repeating this process, support you beyond initial release and help you develop the product to achieve your business goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer gaFooterLabel="home_footer_contact"/>
            </Page>
        );
    };
};

export default HomePage;
