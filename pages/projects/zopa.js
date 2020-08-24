import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
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

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.zopa} canonical="projects/racing-post">
                    <ProjectHero
                      clientImage="/static/images/clients/white/zopa-white.svg"
                      projectTitle="New borrowing power service for a FeelGood Money platform"
                      projectType="Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="API Development"/>
                          </React.Fragment>
)}
                      className="hero--zopa"
                      projectImage="/static/images/projects/zopa/zopa-1.png"
                      srcSet="/static/images/projects/zopa/zopa-1.png 1x, /static/images/projects/zopa/zopa-1@2x.png 2x"
                    />
                    <div className="container">
                        <div>
                            <ProjectTextSection
                              subTitle="00 / Overview"
                              description="Zopa brought us in to join their newly formed mobile development department. We supported them in the creation of a new credit score and borrowing power service. Our engagement was then extended to produce a push notification service that all areas of the business could use to send notifications to their customers."
                            />
                            <ProjectTextSection
                              subTitle="01 / Credit Score Application"
                              description="We worked within their in house team to build the necessary Java microservices for their users to retrieve their up to date credit score. This was then extended to developing how much the users were able to borrow via Zopa’s peer to peer loans through a borrowing power service. The API’s were built using Zopa’s version of Jersey RESTful Web Services."
                            />
                        </div>
                        <div>
                            <ProjectDetailSectionItem
                              description="We built a push notification service on top of the Firebase Cloud Messaging service that could be reached from all different departments of the business. From individual transactions to company wide notifications, each department could make REST requests or connect to the services Kafka stream to send notifications to the users."
                              subTitle="02/ Rebuild of API services"
                              imageOne="/static/images/projects/zopa/zopa-2.png"
                              srcSetImageOne="/static/images/projects/zopa/zopa-2.png 1x, /static/images/projects/zopa/zopa-2@2x.png 2x"
                            />
                        </div>

                    </div>

                    <ProjectFullImageSection
                      title="Mobile Development "
                      className="panel panel--navy"
                      subTitle="02 / Rebuild of API services"
                      imageUrl="/static/images/projects/zopa/zopa-3.png"
                      srcSet="/static/images/projects/zopa/zopa-3.png 1x, /static/images/zopa/zopa-3@2x.png 2x"
                      imageAltText="Tone and Sculpt UI"
                    />


                    <div className="container">
                        <ProjectTechSection
                          subTitle="03/ Technology Used"
                          techLogoItems={(
                              <React.Fragment>
                                  <div className="col-6 pt-5 pt-lg-0 text-center">
                                      <img src="/static/images/tech-icons/dark/kotlin.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 pt-5 pt-lg-0 text-center mb-md-0 mb-4">
                                      <img src="/static/images/tech-icons/dark/java.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 pt-5 pt-lg-0 text-center">
                                      <img src="/static/images/tech-icons/dark/firebase.svg" className="img-responsive"/>
                                  </div>
                                  <div className="col-6 pt-5 text-center">
                                      <img src="/static/images/tech-icons/dark/kafka.svg" className="img-responsive"/>
                                  </div>
                              </React.Fragment>
)}
                        />
                    </div>


                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};
export default TheComponent;
