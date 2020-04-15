import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import {TextListItem, WideListItem} from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectTechSection,
    ProjectTextSection,
    ProjectFullVideoSection
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
                <Page title="Unilever" canonical="projects/unilever">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Unilever'}/>
                            </React.Fragment>

                        }
                        projectTitle={'Shopping that buys itself'}
                        projectType={'Automated ecommerce via connected scales'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Greensock Animation Platform'}/>
                            </React.Fragment>
                        }
                        className="hero--unilever"
                        projectImage={"/static/images/projects/unilever/unilever-1@1x.png"}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'When Unilever put out the call for ideas to make ecommerce more efficient and sustainable, Solid State’s thinking stood out – in a highly competitive environment.\n' +
                            '\n' +
                            'We developed a connected weighing scale for consumers to use at home, which would automatically order replacement products from a supermarket partner when stocks were getting low.'}
                        />
                    </div>

                    <ProjectFullImageSection
                        title={'Connected Scale'}
                        subTitle={'01 / Connected Scale'}
                        imageUrl={'/static/images/projects/unilever/scale.png'}
                        imageAltText={'Responsive UI'}
                    />

                    <div className="container">

                        <ProjectTextSection
                            subTitle="01 / Challenge"
                            description={'Unilever was looking for big ideas to improve ecommerce systems, and staged a hackathon with 250+ people competing to develop the best solutions.\n' +
                            '\n' +
                            'The Solid State team decided to streamline ecommerce by building a weighing scale to sit underneath any Unilever product in the home, automatically re-ordering that product when it sensed the weight drop below a certain level.\n' +
                            '\n' +
                            'In just 48 hours, we needed to build a working hardware prototype and integrate it with a supermarket’s online ecommerce system.'}
                        />

                        <ProjectDetailSectionItem
                            subTitle={'02 / Prototyping'}
                            title={'UX Wireframes'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/unilever/unilever-wireframes.png'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
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
                        <ProjectFullImageSection
                            title={'Mobile APP UI Design'}
                            subTitle={'03 / Design'}
                            imageUrl={'/static/images/projects/unilever/unilever-replensih-onboarding.png'}
                            imageAltText={'Mobile app onboarding'}
                        />
                        <ProjectDetailSectionItem
                            subTitle={'04 / Prototyping'}
                            title={'Rapid Prototyping / Hardware Fabrication'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
                            imageOne={'/static/images/projects/unilever/Button UX 6b.png'}
                            imageOneclassName="img__shadow"
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
                        <ProjectDetailSectionItem
                            subTitle={'05 / Development'}
                            className="flex-row-reverse"
                            title={'Mobile Development & Bluetooth integration'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
                            imageOne={'/static/images/projects/unilever/unilever-onboarding.png'}
                        />
                    </div>

                    <div className="container">
                        <ProjectTechSection
                            subTitle={'05 / Development'}
                            className="flex-row-reverse"
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

                        <ProjectTextSection subTitle={'06 / Highlights'}
                                            description={'Unilever liked the idea so much that they funded further development and user testing of the solution after the hackathon.\n' +
                                            '\n' +
                                            'In a single weekend, we proved that rapid prototyping can produce brilliant, practical solutions for even the biggest corporations.'}/>

                        <ProjectFullVideoSection youtubeLink={'https://www.youtube.com/embed/ePI_25LuTLc'}/>

                    </div>

                    <ClientQuote
                        text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}
                        clientName={'Joe Comiskey'}
                        image={'/static/images/projects/unilever/unilever-1@1x.png'}
                        clientTitle={'Head of eCommerce Capability, Innovation and Strategy, UK Unilever'}/>
                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
