import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, {ProjectTechSection} from '../../components/ProjectDetailSectionItem';
import {WideListItem, TextListItem} from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectStatItem from '../../components/ProjectStatItem';
import Footer from '../../components/Footer';
import ProjectNav from '../../components/ProjectNav';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    componentDidMount() {
        API.trackPage(Constants.pages.projectPurely);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Purely Capital" canonical="projects/purely-capital">
                    <ProjectHero
                        clientImage="/images/clients/white/purely-capital-white.png"
                        projectTitle={'The future of media financing'}
                        projectType={'Web Application'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Research,'}/>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Interaction Design,'}/>
                                <TextListItem listItemText={'Web Application Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Graph QL,'}/>
                                <TextListItem listItemText={'Webpack'}/>
                            </React.Fragment>
                        }
                        className="hero--purely-capital"
                        projectImage={"/images/projects/purely-capital/pc-summary-mac.png"}
                        srcSet={'/images/projects/purely-capital/pc-summary-mac.png 1x, /images/projects/purely-capital/pc-summary-mac@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Challenge'}
                                            description={'To create an engaging, interactive experience to what is a considerably sterile subject matter. Large forms are always daunting for users and product designers so creating a unique and exciting initial experience was paramount for \'selling\' this product to new visitors.\n' +
                                            '\n'}/>

                        <ProjectDetailSectionItem
                            subTitle={'Design Discovery'}
                            title={'UX Research'}
                            imageOne={'/images/projects/purely-capital/purely_wireframes.png'}
                            srcSetImageOne={'/images/projects/purely-capital/purely_wireframes.png 1x, /images/projects/purely-capital/purely_wireframes@2x.png 2x'}
                            description={'We created a prototype that was built with Sketch and Invision. This let users move through the core workflows and indentified any pain points in the web app. '}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'UX Analysis'}/>
                                    <WideListItem
                                        listItemText={'UX Journey Maps'}/>
                                    <WideListItem
                                        listItemText={'UX Research'}/>
                                </React.Fragment>}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'UX Process'}
                            className="flex-row-reverse"
                            title={'UI Design'}
                            imageOne={'/images/projects/purely-capital/purely_desktop-1.png'}
                            srcSetImageOne={'/images/projects/purely-capital/purely_desktop-1.png 1x, /images/projects/purely-capital/purely_desktop-1@2x.png 2x'}
                            description={'We built on our wireframes with a high fidelity design language for the application process, as well as the dashboard interface.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Wireframing'}/>
                                    <WideListItem
                                        listItemText={'Clickable Prototypes'}/>
                                </React.Fragment>}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'High Fidelity Design'}
                            title={'Interaction Design'}
                            video={'https://storage.googleapis.com/ssg-website-images/case-studies/purely-capital/quote-confirmationv2.mov'}
                            description={'\n' +
                            'We focussed on specific areas of the app and undertook detailed interaction design phases to make the product \'pop\' in all the right moments.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Motion Prototpyes'}/>
                                    <WideListItem
                                        listItemText={'UI Design'}/>
                                    <WideListItem
                                        listItemText={'High Fidelity Prototypes'}/>
                                    <WideListItem
                                        listItemText={'Frontend Development'}/>
                                </React.Fragment>}
                        />

                        <ProjectTextSection subTitle={'Solution'}
                                            description={'We identified the first contact and the final quote as the areas that book ended the initial experience for the end user and ensured that we surprised and delighted the user, despite the rather labour intensive application process.' +
                                            '\n'}/>

                        <div className="section">
                            <div className="container">
                                <img className="img-fluid"
                                     src="/images/projects/purely-capital/purely-phones@1x.png"
                                     srcSet="/images/projects/purely-capital/purely-phones@1x.png 1x, /images/projects/purely-capital/purely-phones@2x.png 2x"/>
                            </div>
                        </div>

                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/react.svg' alt="react" className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/java.svg' alt="java" className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/images/tech-icons/dark/GraphQL-dark.svg'
                                             alt="graph ql"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img src='/images/tech-icons/dark/Webpack.svg'
                                             alt="webpack"
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'API Migration'}/>
                                    <WideListItem
                                        listItemText={'Relaunch'}/>
                                </React.Fragment>}

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
