import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import BaLogo from '../components/ClientLogos/BaLogo';
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
                            <img src="/static/images/hero-gfx.svg" alt="Blob Graphic" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="hero__footer">
                        <div className="row">
                            <div className="col-md-6 hidden-sm-down">
                                <div className="mouse">
                                    <div className="scroller"/>
                                </div>
                                <div className="vertical-line"/>
                            </div>
                            <div className="col-md-6">
                                <div className="flex-row hero__list">
                                    <div className="flex-row ml-auto">
                                        <p className="mb-0 mr-3 text">Trusted by</p>
                                        <BaLogo fill={'white'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container-fluid col-lg-8 offset-md-2">
                        <h2 className="section__title">Services</h2>
                        <ul className="lined-list list-unstyled flex-row">
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'}  />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                            <ListItemUnderlined listItemText={'Branding'} listItemLink={'/'} />
                        </ul>
                        <ButtonText type={'button'} className="text-primary">
                            Explore our services
                        </ButtonText>
                    </div>
                </div>

                <div className="mt-5 mb-5 section--no-padding">
                    <div className="row justify-content-end">
                        <FeaturedProjects className="col-lg-10 "/>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
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
