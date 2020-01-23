import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
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
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-md-left text-sm-center">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3">
                                <h1 className="hero__title">We design and build amazing digital products</h1>
                                <ButtonPrimary>View latest projects</ButtonPrimary>
                            </div>
                        </div>
                        <div className="flex-1 align-items-center justify-content-center hero__gfx-container">
                            <img src="/static/images/hero-gfx.svg" alt="Blob Graphic" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="hero__footer">
                        <div className="flex-row hero__list">
                            <div className="flex-row ml-auto">
                                <p className="mb-0 mr-3 text">Trusted by</p>
                                <img src="/static/images/clients/ba.svg" alt="British Airways"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
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

                <div className="section">
                    <h2 className="section__title">Featured Projects</h2>
                    <FeaturedProjects/>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Blob GFX"/>
                                <h5>Research</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                            <div className="align-self-center mb5">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/design-blob-icon.svg" className="mb-3" alt="Blob GFX"/>
                                <h5>Design</h5>
                                <p>Explore creative options to bring your vision to life</p>
                            </div>
                            <div className="align-self-center mb5">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/development-blob-icon.svg" className="mb-3" alt="Blob GFX"/>
                                <h5>Development</h5>
                                <p>Rapid application development</p>
                            </div>
                            <div className="align-self-center mb5">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Blob GFX"/>
                                <h5>Release</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                            <div className="align-self-center mb5">
                                <img src="/static/images/svg-icons/arrow-right-icon.svg" alt="arrow-right"/>
                            </div>
                            <div className="col text-center">
                                <img src="/static/images/svg-icons/research-blob-icon.svg" className="mb-3" alt="Blob GFX"/>
                                <h5>Product Development</h5>
                                <p>Gather insights about your product and market</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/static/images/svg-icons/arrow-gradient-left-turn.svg" className="img-fluid img__full-width pl-5 pr-5" alt="Blob GFX"/>
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
