import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectTechSection,
    ProjectTextSection,
} from '../../components/ProjectDetailSectionItem';
import Footer from '../../components/Footer';
import ProjectNav from '../../components/ProjectNav';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    };

    componentDidMount() {
        API.trackPage(Constants.pages.projectSA);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.siteAssist} canonical="projects/pickswise">
                    <ProjectHero
                      clientImage="/static/images/projects/pickswise/Pickswise-Logo.svg"
                      projectTitle="The home of free sports picks, news and experts' best bets"
                      projectType="Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Mobile App Development"/>
                          </React.Fragment>
)}
                      className="hero--pickswise"
                      projectImage="/static/images/projects/pickswise/1.png"
                      srcSet="/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="Overview"
                          description={'Site Assist were looking for a long-term technical partner to support them in developing their new product.  They had experienced a huge gap in the construction industry and set about building a digital solution.  \n'
                                + '\n'
                              + 'Site Assist had an idea for a SaaS product which targeted the construction industry by offering a versatile digital platform to large construction companies, needing to digitise and streamline their existing processes on site. \n'
                                + '\n'
                              + 'The Site Assist team have many years experience in the construction industry and understand the need for modernisation in all areas, this product specifically focuses on the processes that govern permitting and inspections on large construction sites. \n'}
                        />

                      <ProjectTextSection
                        className="sectionOneAnimation"
                        subTitle="Challenge"
                        description={'Site Assist were looking for a long-term technical partner to support them in developing their new product.  They had experienced a huge gap in the construction industry and set about building a digital solution.  \n'
                        + '\n'
                        + 'Site Assist had an idea for a SaaS product which targeted the construction industry by offering a versatile digital platform to large construction companies, needing to digitise and streamline their existing processes on site. \n'
                        + '\n'
                        + 'The Site Assist team have many years experience in the construction industry and understand the need for modernisation in all areas, this product specifically focuses on the processes that govern permitting and inspections on large construction sites. \n'}
                      />


                    </div>

                    <div className="container">


                        <ProjectDetailSectionItem
                              // title={'Users & Audience'}
                          subTitle="Solution"
                          imageOne="/static/images/projects/pickswise/3.png"
                          srcSetImageOne="/static/images/projects/pickswise/3.png 1x, /static/images/projects/pickswise/3@2x.png 2x"
                          description={'The construction industry is the least productive industry in the U.K as well as one of the most dangerous. The cost of work related injuries in construction is estimated to £1bn per year and workers on site spend on average 7 hours a month on paperwork. Furthermore the industry is also unique due to the amount of subcontractors working in parallel with various tasks. Communication and compliance is therefore crucial in order to deliver a project on time, on budget and in a safe manner.\n'
                              + '\n'
                              + 'There are various digital platforms and mobile applications to digitise inspections as well as permits, yet these are often hard to use, badly implemented and not aimed at small and mid sized sub-contractors. Site Assist’s mission was to create a tool that covers key processes and that could be implemented to a minimum cost. \n'}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="UX Analysis"
                                  />
                                  <WideListItem
                                    listItemText="User Journey Maps"
                                  />
                              </React.Fragment>
)}
                        />




                    </div>

                  <ProjectFullImageSection
                    imageUrl="/static/images/projects/pickswise/2.png"
                    srcSet="/static/images/projects/pickswise/2.png 1x, /static/images/projects/pickswise/2@2x.png 2x"
                    imageAltText="Dashboard UI"
                    className="panel panel--bg-pickswise"
                  />


                    <div className="container">
                        <ProjectTechSection
                          techLogoItems={(
                              <React.Fragment>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="react" src="/static/images/tech-icons/dark/react.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt=".net" src="/static/images/tech-icons/dark/net.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                                  <div className="col-6 text-center mb-md-0 mb-4">
                                      <img alt="mysql" src="/static/images/tech-icons/dark/MySQL.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 text-center">
                                      <img
                                        alt="aws" src="/static/images/tech-icons/dark/aws.svg"
                                        className="img-responsive"
                                      />
                                  </div>
                              </React.Fragment>
)}
                          ProjectServiceListItem={(
                              <React.Fragment>
                                  <WideListItem
                                    listItemText="Mobile Development"
                                  />
                                  <WideListItem
                                    listItemText="Backend Development"
                                  />
                                  <WideListItem
                                    listItemText="API Development"
                                  />
                              </React.Fragment>
)}
                        />


                        <ProjectTextSection
                                // className="sectionTwoAnimation"
                          subTitle="Outcome"
                          description="The new SaaS solution was tested on a large client in the construction industry. The founders were happy with the product that went above and beyond the initial scope of the project. SSG is supporting Site Assist to develop new product features and transition to an in house team."
                        />

                    </div>

                    <ClientQuote
                      image="/static/images/projects/pickswise/1.png"
                      srcSet="/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x"
                      text="We worked with SSG to completely rebuild our digital properties, API, CMS and a brand new mobile app for iOS and Android. The team were brilliant under significant time pressure and we felt like we were in expert hands from start to finish."
                      clientName="John Smith" clientTitle="Co-Founder & CEO at Site Assist"
                    />

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
