import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectTextSection
} from '../../components/ProjectDetailSectionItem';
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
                        clientImage="/static/images/clients/white/tone-and-sculpt-white.svg"
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
                        srcSet={'/static/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /static/images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x'}
                    />

                    <div className="container sectionOneAnimation" id="sectionOneTrigger">
                        <ProjectTextSection
                            className="sectionOneAnimation"
                            subTitle="00 / Overview"
                            description={'\n' +
                            'Tone and Sculpt came to us with the objective of making their app the leading womens fitness app in 6 months. Their existing app had lots of users, but they were unhappy with the quality of the experience they were getting. \n' +
                            '\n'}
                        />
                        <ProjectDetailSectionItem
                            title={'UX Research'}
                            subTitle={'01 / DESIGN DISCOVERY'}
                            imageOne={'/static/images/services/ux-niall.jpg'}
                            srcSetImageOne={'/static/images/services/ux-niall.jpg 1x, /static/images/services/ux-niall@2x.jpg 2x'}
                            imageTwo={'/static/images/services/ux-andy.jpg'}
                            srcSetImageTwo={'/static/images/services/ux-andy.jpg 1x, /static/images/services/ux-andy@2x.jpg 2x'}
                            description={'After consolidating feedback from their users, our high level objectives were to drastically improve the user experience and interface, to provide a more personalised and bespoke experience for users and make the app a truly social platform. '}
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
                            srcSetImageOne={'/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg 1x, /static/images/projects/tone-and-sculpt/macbook-pro-on-table@2x.jpg  2x'}
                            description={'We undertook a detailed design discovery phase which consisted of competitor analysis, \n' +
                            'user research, user journey maps and more to help contextualize our design decisions going forward.'}
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
                        <ProjectTextSection
                            className="sectionOneAnimation"
                            subTitle="03 / UI Design"
                            description={'After iterating on wireframes, we began the UI design phase which resulted in a clean and professional interface, with improved navigation patterns and features for the user.'}
                        />
                        <div id="sectionTwoTrigger">
                            <ProjectFullImageSection
                                className="sectionTwoAnimation"
                                title={'UI Components'}
                                subTitle={'03 / UI Design'}
                                imageUrl={'/static/images/projects/tone-and-sculpt/ui-components.png'}
                                srcSet={'/static/images/projects/tone-and-sculpt/ui-components.png 1x, /static/images/projects/tone-and-sculpt/ui-components@2x.png 2x'}
                                imageAltText={'Tone and Sculpt UI'}
                            />
                        </div>
                    </div>

                    <ProjectFullImageSection
                        className="panel panel--gradient-blue"
                        imageUrl={'/static/images/projects/tone-and-sculpt/3-screen.png'}
                        srcSet={'/static/images/projects/tone-and-sculpt/3-screen.png 1x, /static/images/projects/tone-and-sculpt/3-screen@2x.png 2x'}
                        imageAltText={'Tone and Sculpt UI'}
                    />

                    <div className="container">
                        <ProjectTextSection
                            className="sectionOneAnimation"
                            subTitle="04 / Solution"
                            description={'We successfully designed and developed the new Tone and Sculpt app over a period of three months, just in time for their relaunch in January 2020.'}
                        />
                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-md-4 col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/react.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-md-4 col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/node.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-md-4 col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/docker.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-md-4 col-6 text-center mb-md-0 mb-4">
                                        <img src='/static/images/tech-icons/dark/python.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-md-4 col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/postgres.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-md-4 col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/aws.svg' className='img-responsive'/>
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

                    <div className="d-flex justify-content-center">
                        <img src="/static/images/projects/tone-and-sculpt/t&s-phones.jpg"
                             srcSet="/static/images/projects/tone-and-sculpt/t&s-phones.jpg 1x, /static/images/projects/tone-and-sculpt/t&s-phones@2x.jpg 2x"
                             className="img-fluid mb-5" alt="tone and sculpt phones"/>
                    </div>

                    {/*<ClientQuote*/}
                    {/*    image={'/static/images/projects/tone-and-sculpt/phone.png'}*/}
                    {/*    srcSet="/static/images/projects/tone-and-sculpt/phone.png 1x, /static/images/projects/tone-and-sculpt/phone@2x.png 2x"*/}
                    {/*    text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}*/}
                    {/*    clientName={'Krissy Cela'} clientTitle={'Founder - Tone and Sculpt'}/>*/}

                    {/*<div className="section container mt-5 mb-5">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-md-4">*/}
                    {/*            <ProjectStatItem heading={'20,000+'}*/}
                    {/*                             text={'New users subscribed and paying for the app'}/>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-4">*/}
                    {/*            <ProjectStatItem/>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-4">*/}
                    {/*            <ProjectStatItem/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
