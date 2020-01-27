import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import BaLogo from '../components/ClientLogos/BaLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import VisaLogo from '../components/ClientLogos/VisaLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import FeaturedProjects from '../components/FeaturedProjects';
import {ListItemUnderlined} from '../components/ListItem';
import {ButtonPrimary, ButtonText} from '../components/base/forms/Button';

const HomePage = class extends React.Component {
    static displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.home} canonical="">
                <div className="hero d-flex flex-column mx-0 p-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3">
                                <h1 className="hero__title mb-4">We design and build amazing digital products</h1>
                                <ButtonPrimary>View latest projects</ButtonPrimary>
                            </div>
                        </div>
                        <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                            <img src="/static/images/hero-gfx.png" alt="Blob Graphic" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="hero__footer hidden-sm-down">
                        <div className="row">
                            <div className="col">
                                <div className="mouse">
                                    <div className="scroller"/>
                                </div>
                                <div className="vertical-line"/>
                            </div>
                            <div className="col-md-7">
                                <div className="hero__list">
                                    <div className="flex-row ml-auto">
                                        <p className="mb-0 mr-3 text">Trusted by</p>
                                        <div className="col">
                                            <BaLogo fill={'white'} />
                                        </div>
                                        <div className="col">
                                            <DisneyLogo fill={'white'} />
                                        </div>
                                        <div className="col">
                                            <UnileverLogo fill={'white'} width={50} height={50} />
                                        </div>
                                        <div className="col">
                                            <NHSLogo fill={'white'} />
                                        </div>
                                        <div className="col">
                                            <DisneyLogo fill={'white'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container-fluid col-lg-8 offset-md-2">
                        <h2 className="section__title">Services</h2>
                        <ul className="lined-list list-unstyled flex-row pl-5 mt-3">
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'}  />
                            <ListItemUnderlined listItemText={'Strategy'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'UX & UI Design'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Prototyping'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Mobile app development'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Responsive web apps'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'API Development'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Systems integration'} listItemLink={'/'} />
                        </ul>
                        <ButtonText buttonText={'Explore our services'} type={'button'} className="text-primary pl-5"/>
                    </div>
                </div>

                <div className="mt-5 mb-5 section--no-padding">
                    <div className="row justify-content-end">
                        <FeaturedProjects className="col-lg-10 "/>
                    </div>
                </div>

                <div className="section my-5">
                    <div className="container">
                        <h2 className="section__title text-center mb-5">Our Services</h2>
                        <div className="row">
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
