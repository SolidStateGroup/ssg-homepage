import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, {
    ProjectFullImageSection,
    ProjectTechSection
} from '../../components/ProjectDetailSectionItem';
import { WideListItem, TextListItem } from '../../components/ListItem';
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
              <Page title="Publicate" canonical="projects/publicate">
                  <ProjectHero
                    clientImage="/images/clients/white/publicate-white.png"
                    projectTitle={'Straightening out corporate documentation'}
                    projectType={'Tablet & Web Application'}
                    ProjectServiceListItem={
                        <React.Fragment>
                            <TextListItem listItemText={'UX design,'}/>
                            <TextListItem listItemText={'UI design,'}/>
                            <TextListItem listItemText={'Tablet App Development,'}/>
                            <TextListItem listItemText={'API Development'}/>
                        </React.Fragment>
                    }
                    ProjectTechListItem={
                        <React.Fragment>
                            <TextListItem listItemText={'React Native'}/>
                            <TextListItem listItemText={'Java,'}/>
                            <TextListItem listItemText={'Webpack,'}/>
                            <TextListItem listItemText={'Docker'}/>
                        </React.Fragment>
                    }
                    className="hero--publicate"
                    projectImage={"/images/images/projects/publicate/publicate-summary-ipad@1x.png"}
                    srcSet={'/images/projects/publicate/publicate-summary-ipad@1x.png 1x, /images/projects/publicate/publicate-summary-ipad@2x.png 2x'}
                  />

                  <div className="container">
                      <ProjectTextSection
                        subTitle="00 / Overview"
                        title="The brief"
                        description={'The Publicate House team approached us to redesign and rebuild their app, which helps companies manage and distribute company documentation across their organisation and individual teams.  We would also be redesigning and building the app\'s document viewer which facilitated the use of the companies external interactive presentations.   \n\nThe new app needed to be responsive to mobile and tablet devices in both orientations, and could be branded and themed by each of Publicates corporate clients on the client side. The long term plan was also to release on both iOS and Android stores so it was a easy to choose React Native as our framework for the project.'}
                      />
                  </div>

                  <ProjectFullImageSection
                    className={'panel--navy'}
                    title={'Orientation Sensitive UI'}
                    subTitle={'01 / UI Design'}
                    imageUrl={'/images/projects/publicate/publicate-ipads@1x.png'}
                    srcSet={'/images/projects/publicate/publicate-ipads@1x.png 1x, /images/projects/publicate/publicate-ipads@2x.png 2x'}
                    imageAltText={'Responsive UI'}
                  />

                  <div className="container">
                      <ProjectTechSection
                        techLogoItems={
                            <React.Fragment>
                                <div className="col-4 text-center">
                                    <img src='/images/tech-icons/dark/react.svg' alt="react"
                                         className='img-responsive'/>
                                </div>
                                <div className="col-4 text-center">
                                    <img src='/images/tech-icons/dark/java.svg' alt="java"
                                         className='img-responsive'/>
                                </div>
                                <div className="col-4 text-center mb-md-0 mb-4">
                                    <img alt="webpack" src='/images/tech-icons/dark/Webpack.svg'
                                         className='img-responsive'/>
                                </div>
                            </React.Fragment>
                        }
                        ProjectServiceListItem={
                            <React.Fragment>
                                <WideListItem
                                  listItemText={'UX Design'}/>
                                <WideListItem
                                  listItemText={'UI Design'}/>
                                <WideListItem
                                  listItemText={'Mobile Development'}/>
                                <WideListItem
                                  listItemText={'API Development'}/>
                            </React.Fragment>}

                      />
                  </div>

                  <div className="panel panel--gradient-publicate">
                      <div className="container text-center">
                          <img src="/images/projects/publicate/publicate-ipad-swot@1x.png" srcSet={'/images/projects/publicate/publicate-ipad-swot@1x.png 1x, /images/projects/publicate/publicate-ipad-swot@2x.png 2x'} alt={'Publicate UI'} className="img-fluid"/>
                      </div>
                  </div>
                  <ProjectNav/>
              </Page>
              <Footer/>
          </React.Fragment>
        );
    }
};

export default TheComponent;
