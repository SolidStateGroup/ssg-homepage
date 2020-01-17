import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

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
                  <div className="hero__container flex-1 align-self-stretch flex-row">
                    <div className="flex-column flex-1 p-5">
                      <h1 className="hero__title">We design and build amazing digital products</h1>
                    </div>
                    <div className="flex-column flex-1">
                      <p></p>
                    </div>
                  </div>
                </div>
                <Footer/>
            </Page>
        );
    }
};

export default HomePage;
