import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, { ProjectTechSection } from '../../components/ProjectDetailSectionItem';
import { WideListItem, TextListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectStatItem from '../../components/ProjectStatItem';
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
                <Page title="Tone and Sculpt" canonical="projects/tone-and-sculpt">
                    <ProjectHero
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Research,'}/>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Mobile App Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'AWS,'}/>
                                <TextListItem listItemText={'PostgreSQL,'}/>
                                <TextListItem listItemText={'Django 2,'}/>
                                <TextListItem listItemText={'Python'}/>
                            </React.Fragment>
                        }
                        className="hero--tone-and-sculpt"
                    />

                    <div className="container">
                        <ProjectDetailSectionItem
                            title={'UX Research'}
                            subTitle={'01 / DESIGN DISCOVERY'}
                            imageOne={'/static/images/services/ux-niall.jpg'}
                            imageTwo={'/static/images/services/ux-andy.jpg'}
                            description={'We work with you to iterate on the various creative deliverables until you achieve your vision.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'User Interviews'}/>
                                    <WideListItem
                                        listItemText={'UX Analysis'}/>
                                    <WideListItem
                                        listItemText={'User Journey Maps'}/>
                                    <WideListItem
                                        listItemText={'User Personas'}/>
                                </React.Fragment>}
                        />
                        <ProjectDetailSectionItem
                            className="flex-row-reverse"
                            title={'Prototyping'}
                            subTitle={'02 / WIREFRAMES & PROTOTYPES'}
                            imageOne={'/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg'}
                            description={'We work with you to iterate on the various creative deliverables until you achieve your vision.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Wireframing'}/>
                                    <WideListItem
                                        listItemText={'Clickable Prototypes'}/>
                                    <WideListItem
                                        listItemText={'Motion Prototypes'}/>
                                    <WideListItem
                                        listItemText={'Interaction Design'}/>
                                </React.Fragment>}
                        />
                        <ProjectFullImageSection
                            className={'panel--gradient-blue'}
                            title={'UI Components'}
                            subTitle={'03 / UI Design'}
                            imageUrl={'/static/images/projects/tone-and-sculpt/ui-components.png'}
                            imageAltText={'Tone and Sculpt UI'}
                        />
                    </div>

                    <div className="panel panel--gradient-blue">
                        <div className="container">
                            <img src="/static/images/projects/tone-and-sculpt/3-screen.png" alt={'Tone and Sculpt App'} />
                        </div>
                    </div>

                    <div className="container">
                        <ProjectTechSection
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

                    <div className="d-flex justify-content-center">
                        <img src="/static/images/projects/tone-and-sculpt/t&s-phones.jpg"
                             className="img-fluid img__quote-image" alt="tone and sculpt phones"/>
                    </div>

                    <ClientQuote
                        text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}
                        clientName={'Krissy Cela'} clientTitle={'Founder - Tone and Sculpt'}/>

                    <div className="section container mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-4">
                                <ProjectStatItem heading={'20,000+'}
                                                 text={'New users subscribed and paying for the app'}/>
                            </div>
                            <div className="col-md-4">
                                <ProjectStatItem/>
                            </div>
                            <div className="col-md-4">
                                <ProjectStatItem/>
                            </div>
                        </div>
                    </div>
                    <div className="section section--grey">
                        <ProjectNav clientLogo={"/static/images/clients/purely-capital-dark.png"} projectLink={'/projects/purely-capital'}/>
                    </div>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
