import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const JobsPage = class extends React.Component {
  static displayName = 'HomePage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.jobs} canonical="jobs">
              <div className="hero hero--full d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                  <Header/>
                  <div className="container">
                  <h1 className="mt-5">Jobs</h1>
                    <p className="text-light">We currently have no open vacancies.</p>
                  </div>
              </div>
              <Footer/>
          </Page>
      );
  };
};

export default JobsPage;
