import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import {TextListItem, WideListItem} from '../../components/ListItem';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectTechSection,
    ProjectTextSection
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
                <Page title={Constants.titles.racingPost}  canonical="projects/racing-post">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Racing Post'}/>
                            </React.Fragment>
                        }
                        projectTitle={'New Serverless Data Platform for the home of horse racing news'}
                        projectType={'Responsive website & Mobile App'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'API Development,'}/>
                                <TextListItem listItemText={'Mobile App Development'}/>
                                <TextListItem listItemText={'Cloud Infrastructure Implementation'}/>
                            </React.Fragment>
                        }
                        className="hero--racingpost"
                        projectImage={'/static/images/projects/racing-post/racing-post-1.png'}
                        srcSet={'/static/images/projects/racing-post/racing-post-1.png 1x, /static/images/projects/racing-post/racing-post-1@2x.png 2x'}
                    />
                    <div className="container">
                        <div>
                            <ProjectTextSection
                                subTitle="00 / Overview"
                                description={'Working as the technology partners alongside the management consultant team at Arthur D. Little, Racing Post brought us in to rebuild their data platform. The main aims were to allow them to bring in new horse racing data streams from all over the world in the most efficient way possible, as well as a rebuild of their B2B and B2C API offerings.'}
                            />
                            <ProjectTextSection
                                subTitle="01 / New Serverless Data Platform"
                                description={'The core data pipeline was built with a number of Step Functions, each comprising multiple Lambda functions to ingest, transform, match and load records related to horse racing in the USA and France. It was made highly customisable with configuration files to allow new countries to be added in a matter of hours.'}
                            />
                        </div>
                        <div>
                            <ProjectDetailSectionItem
                                description="Java Spring Boot APIs were built to expose the data from the new data platform to the customers and Racing Post clients. These new had to replicate the older B2B and B2C APIs they replaced while also exposing the more detailed data."
                                subTitle={'02/ Rebuild of API services'}
                                imageOne={'/static/images/projects/racing-post/racing-post-2.png'}
                                srcSetImageOne={'/static/images/projects/racing-post/racing-post-2.png 1x, /static/images/projects/racing-post/racing-post-2@2x.png 2x'}
                            />
                        </div>
                        <ProjectTextSection
                            subTitle="03 / Cloud Based Infrastructure"
                            description={'We handled all devops for the project building all infrastructure as code with Terraform and the serverless framework. Using gitlab pipelines we automated all builds, tests and releases.'}
                        />
                        <ProjectTextSection
                            subTitle="04/ New Mobile and Web Platform"
                            description={'After completing the rebuild of the new data platform and APIs the company requested that we also built their new mobile app and website.'}
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
