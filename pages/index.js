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
                <Header/>
                <div className="hero">
                  <h1>We design and build amazing digital products</h1>
                </div>
                <Footer/>
            </Page>
        );
    }
};

export default HomePage;
