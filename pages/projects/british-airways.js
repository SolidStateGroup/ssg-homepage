import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {ProjectTechSection, ProjectTextSection} from "../../components/ProjectDetailSectionItem";
import ProjectNav from "../../components/ProjectNav";
import Footer from "../../components/Footer";
import ClientQuote from "../../components/ClientQuote";

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (

            <React.Fragment>
                <Page title="British Airways" canonical="projects/british-airways">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'British Airways'}/>
                            </React.Fragment>

                        }
                        projectTitle={'The real-time machine: integrating with 1960s tech'}
                        projectType={'Real-time operational dashboard'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Web Application Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Redis,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'RabbitMQ,'}/>
                                <TextListItem listItemText={'Angular JS'}/>
                            </React.Fragment>
                        }
                        className="hero--ba"
                        projectImage={"/static/images/projects/ba/ba-summary-ipad.png"}
                        srcSet={'/static/images/projects/ba/ba-summary-ipad.png 1x, /static/images/projects/ba/ba-summary-ipad@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Overview'}
                                            description={'Our client had a real need for a real-time dashboard, to give them a better overview of their global flight operations. They had a number of different reporting systems, but none of them were able to provide real-time data.\n' +
                                            '\n' +
                                            'After two years of wrestling with the problem internally, they turned to us.\n' +
                                            '\n' +
                                            'Working alongside a global management consultancy, we designed, implemented and deployed the dashboard in less than three months. The project was then extended to include additional data such as passenger flows.'}/>

                        <ProjectTextSection subTitle={'Challenge'}
                                            description={'Our client had all the data available – sourced from a 1960s mainframe! The problem was collating it, processing it and generating the relevant operational numbers, all in real time. They had batch systems that did this, but nothing that could give them up-to-the-second information.\n' +
                                            '\n' +
                                            'They also wanted us to provide an API so that the data could be used by other applications within the business.\n' +
                                            '\n' +
                                            'The dashboard had to be accessible from large gantry screens, desktops and tablets.'} />


                        <ProjectDetailSectionItem
                            subTitle={'Solution'}
                            title={'Fully implemented system'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/ba/ba-ipad.png'}
                            srcSetImageOne={'/static/images/projects/ba/ba-ipad.png 1x, /static/images/projects/ba/ba-ipad@2x.png 2x'}
                            description={'Using Open Source tools, we had a prototype back-end working with end-to-end data after four weeks, and a fully implemented system in three months. We also developed a web-based front end that was available on web, mobile and tablet.\n' +
                            '\n' +
                            'The project was run using agile methods, with fortnightly updates given to the client as part of our sprint cycle.'}
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'API Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                </React.Fragment>}
                        />

                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/angular.svg' alt="angular"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/java.svg' alt="java"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/rabbit_mq.svg'
                                             alt="rabbit mq"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img alt="webpack" src='/static/images/tech-icons/dark/redis.svg'
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            className="flex-row-reverse"
                            description={'We went on to design and build a business-facing API, allowing other applications in the airline to use our now real-time data. As well as flight information, we pulled in passenger flow data too.\n' +
                            '\n' +
                            'The system was built on fully-redundant infrastructure, providing high availability 24x7x365.'} />
                    </div>
                    <ClientQuote
                        image={'/static/images/projects/ba/ba-ipad.png'}
                        srcSet={'/static/images/projects/ba/ba-ipad.png 1x, /static/images/projects/ba/ba-ipad@2x.png 2x'}
                        text={'A huge thanks to you and everybody involved in developing the dashboard. It gets more useful with every iteration. We all now need to learn to use it to maximum advantage, so we all have a shared, accurate, knowledge of what\'s going on in the operation.'}
                        clientName={'Managing Director'} clientTitle={'Operations at British Airways'}/>
                  <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
