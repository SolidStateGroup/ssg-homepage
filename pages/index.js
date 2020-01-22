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
                    <div className="hero__container flex-1 align-self-stretch row flex-row">
                        <div className="flex-1 justify-content-start p-5">
                            <div>
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
                        <ButtonText type={'button'}>
                            Explore our services
                        </ButtonText>
                    </div>
                </div>

                <div className="section">
                    <h2 className="section__title">Featured Projects</h2>
                    <FeaturedProjects/>
                </div>

                <div className="section">
                    <ul className="list-inline image-list">
                        <li className="list-inline-item image-list__item">
                            <div className="list-image__container">
                                <img src="/static/images/blob-small.svg" alt="Blob GFX" className="absolute"/>
                                <img src="/static/images/svg-icons/research-icon.svg" alt="Research" className="absolute"/>
                            </div>
                            <h5>Research</h5>
                            <p>Gather insights about your product and market</p>
                        </li>
                    </ul>
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default HomePage;
