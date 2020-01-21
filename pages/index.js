import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import {ListItemUnderlined} from '../components/base/ListItem';
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

                <div>
                    <h2 className="section__title">Featured Projects</h2>
                    <div className="project--featured project--t-and-s">
                        <div className="hero__container flex-1 align-self-stretch row flex-row">
                            <div className="flex-1 justify-content-start p-5">
                                <div>
                                    <h1 className="hero__title">We design and build amazing digital products</h1>
                                    <ButtonSecondary>View latest projects</ButtonSecondary>
                                </div>
                            </div>
                            <div className="flex-1 align-items-center justify-content-center hero__gfx-container">
                                <img src="/static/images/projects/tands-dashboard.svg" alt="Tone and Sculpt" className="img-fluid"/>
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
