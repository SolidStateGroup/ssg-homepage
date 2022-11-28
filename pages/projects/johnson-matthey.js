import React, { Component } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, { ProjectTechSection, ProjectFullImageSection } from '../../components/ProjectDetailSectionItem';
import { WideListItem, TextListItem } from '../../components/ListItem';
import Footer from '../../components/Footer';
import ProjectNav from '../../components/ProjectNav';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    };

    componentDidMount() {
        API.trackPage(Constants.pages.projectWFA);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.JohnsonMatthey} canonical="projects/johnson-matthey">
                    <ProjectHero
                      clientImage="/images/projects/johnson-matthey/Johnson_Matthey _Logo_white.svg"
                      projectTitle="Dashboard for a FTSE-100 client"
                      projectType="Responsive Web Application"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="Web Application Development,"/>
                              <TextListItem listItemText="API Development"/>
                          </React.Fragment>
)}
                      className="hero--jm"
                      projectImage="/images/projects/johnson-matthey/jm-1.png"
                      srcSet="/images/projects/johnson-matthey/jm-1.png 1x, /images/projects/johnson-matthey/jm-1@2x.png 2x"
                    />

                    <div className="container">


                        <ProjectTextSection
                          subTitle="Overview"
                          description={'Our FTSE-100 client required a clean, simple business intelligence dashboard to deliver accurate reports for the ‘C level’ executives. The executives wanted a simple way to review the performance of all of their R & D projects across a number of sectors on their mobile, tablet and desktop devices. \n'
                                              + '\n'
                                              + 'The data to power the dashboard needed to be ingested from third party systems and, once obtained,  analysed and reformatted to highlight the key data points required by the executives. \n'}
                        />

                        <ProjectDetailSectionItem
                          subTitle="Challenge"
                          imageOne="/images/projects/johnson-matthey/jm-2.png"
                          srcSetImageOne="/images/projects/johnson-matthey/jm-2.png 1x, /images/projects/johnson-matthey/jm-2@2x.png 2x"
                          description={'Our client required a near real-time overview of sector performance within the company, in addition to automated exporting tools.\n\n'
                            + 'The third party systems were not able to provide a suitable API to be able to display the data in an efficient manner or were unnecessarily complicated.\n\n'
                            + 'There were hundreds of data points that needed to be analysed and summarised in order to provide an efficient application.\n'}
                        />


                        <ProjectTextSection
                          subTitle="Solution"
                          description={'Solid State Group was championed with the task of building the business intelligence dashboard platform. \n'
                            + 'We architected and built the API along with a responsive web application, hosted in AWS.\n'
                            + '\n'
                            + 'Using an agile approach, we were able to quickly mould to the requirements as they evolved throughout the project as different data points were prioritised for importance.\n'}
                        />

                    </div>

                    <ProjectFullImageSection
                      className="panel panel--background-jm"
                      imageUrl="/images/projects/johnson-matthey/jm-1.png"
                      srcSet="/images/projects/johnson-matthey/jm-1.png 1x, /images/projects/johnson-matthey/jm-1@2x.png 2x"
                    />


                    <div className="section section--grey">
                        <ProjectNav/>
                    </div>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
