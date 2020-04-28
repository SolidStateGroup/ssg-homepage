import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import {TextListItem, WideListItem} from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
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
                <Page title="Electron Trader Client" canonical="projects/electron-trader">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Electron'}/>
                            </React.Fragment>
                        }
                        projectTitle={'Tapping into the future of the electricity market'}
                        projectType={'Responsive website'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design'}/>
                            </React.Fragment>
                        }
                        className="hero--electron-dashboard"
                        projectImage={'/static/images/projects/electron-trader/electron-trader-1@1x.png'}
                        srcSet={'/static/images/projects/electron-trader/electron-trader-1@1x.png 1x, /static/images/projects/electron-trader/electron-trader-1@2x.png 2x'}
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                                className="sectionOneAnimation"
                                subTitle="00 / Overview"
                                description={'There are around a dozen wind generators in the Orkneys, they generate more electricity as the wind speed increases. There are about 120 small “assets” – such as storage heaters in people’s homes, when switched on they consume energy. When the generators are generating too much and there is too little local consumption, the network tells some of the wind generators to turn off (a “constraint”), which costs them money. \n' +
                                '\n' +
                                'What the underlying platform does is to allow the generators to offer to pay the assets to turn on, which would in turn lead to the network removing the constraint (so the generators get paid). The state of the system is determined once a minute (an “epoch”), based on messages it receives from both the assets and generators.\n'}
                            />

                            <ProjectTextSection
                                className="sectionTwoAnimation"
                                subTitle="01 / Challenge"
                                description={'Electron needed us to significantly upgrade the UI of their PoC platform. They needed design ideas that would make the UI standout as a slick, professional, interface. '}
                            />
                        </div>

                        <div id="sectionTwoTrigger">
                            <ProjectDetailSectionItem
                                className="sectionTwoAnimation"
                                imageOneclassName="img__shadow"
                                title={'UI Components'}
                                imageOne={'/static/images/projects/electron-trader/UI-Components---Light@1x.jpg'}
                                srcSetImageOne={'/static/images/projects/electron-trader/UI-Components---Light@1x.jpg 1x, /static/images/projects/electron-trader/UI-Components---Light@2x.jpg 2x'}
                                ProjectServiceListItem={
                                    <React.Fragment>
                                        <WideListItem
                                            listItemText={'UX Design'}/>
                                        <WideListItem
                                            listItemText={'UI Style Guide'}/>
                                        <WideListItem
                                            listItemText={'UI Design'}/>
                                        <WideListItem
                                            listItemText={'Data Visualisation'}/>
                                    </React.Fragment>}
                            />
                        </div>
                        <div id="sectionThreeTrigger">
                            <ProjectFullImageSection
                                className="sectionThreeAnimation"
                                title={'Dashboard UI'}
                                subTitle={'UI Design'}
                                imageUrl={'/static/images/projects/electron-trader/Electron-Trader-Dashboard-Dark-v3@1x.jpg'}
                                srcSet={'/static/images/projects/electron-trader/Electron-Trader-Dashboard-Dark-v3@1x.jpg 1x, /static/images/projects/electron-trader/Electron-Trader-Dashboard-Dark-v3@2x.jpg 2x'}
                                imageAltText={'Dashboard UI'}
                            />
                        </div>
                    </div>

                    <div className="container sectionFourAnimation" id="sectionFourTrigger">
                        <ProjectTextSection
                            subTitle="02 / Solution"
                            description={'Using the Electron brand guidelines as a starting point, we designed and implemented a  slick and professional dashboard interface. This included bespoke component design and data visualization.'}/>
                        <ProjectDetailSectionItem
                            subTitle={'03 / Design'}
                            title={'Fonts & Colours'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/wazoku/wazoku-font.png'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
                        />
                        <ProjectColourBlockSection
                            imageOne={'/static/images/projects/electronx/electronx_primary-colours.png'}
                            imageTwo={'/static/images/projects/electronx/electronx_secondary-colours.png'}/>
                    </div>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
