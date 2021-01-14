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

    componentDidMount() {
        API.trackPage(Constants.pages.workHero);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Electron Trader Client" canonical="projects/electron-trader">
                    <ProjectHero
                        clientImage="/static/images/clients/white/hero-logo-white.png"
                        projectTitle={'Connected Health, Made Simple'}
                        projectType={'Responsive Web Application & Mobile App'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'API Development,'}/>
                                <TextListItem listItemText={'Web Application,'}/>
                                <TextListItem listItemText={'Hardware integrations,'}/>
                                <TextListItem listItemText={'Mobile App Development'}/>
                            </React.Fragment>
                        }
                        className="hero--hero-wellbeing"
                        projectImage={'/static/images/projects/hero/hero-1.png'}
                        srcSet={'/static/images/projects/hero/hero-1.png 1x, /static/images/projects/hero/hero-1@2x.png 2x'}
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                                className="sectionOneAnimation"
                                subTitle="00 / Overview"
                                description={'Routed in elite sport, research and innovation, Hero Wellbeing exists to help create healthy and happy communities. One unique human at a time. They offer a blended digital and in-person approach to deliver a holistic wellbeing programme. \n' +
                                '\n' +
                                'Hero came to SSG to completely overhaul their digital service Hero Navigator, which allows individuals and businesses to progress against goals including sleep, movement, nutrition and mindfulness using wearable technologies.'}
                            />

                            <ProjectTextSection
                                className="sectionTwoAnimation"
                                subTitle="01 / Challenge"
                                description={'Originally founded in 2017, by 2020 Hero was delivering its product to companies in different industries, from Premier League football clubs to large corporates such as vodafone and their staff all around the world. The existing Navigator platform had been built by various development agencies and had amassed a lot of technical debt, performance issues and design inconsistency. \n' +
                                '\n' +
                                'We were initially tasked with building Hero’s mobile app from scratch, using the existing Web App as a blueprint for the desired IA, features and general functionality.  This however was a significant challenge with the API in an incomplete state and the Web App in dire need of a UX and UI rethink.\n' +
                                '\n' +
                                'After presenting our creative for the mobile app, the client requested that we give the Web App a facelift inline with the new design language and also review the form & function of the Dashboard, as we had been able to demonstrate a better way of exposing core functionality to the end user in the mobile app designs.\n' +
                                '\n' +
                                'This project was made all the more challenging by incredibly ambitious deadlines, driven by Hero’s new business endeavours. '}
                            />
                        </div>


                        <ProjectTextSection
                            subTitle="01 / Challenge"
                            title={'Identifying the problems\n'}
                            description={'The Hero Navigator mobile and webs app suffered from a number of core issues:\n' +
                            '\n' +
                                '1. Undesirable look and feel. Hero’s existing apps lacked the look and feel that Hero wanted for their users: A high end slick interface for the wellbeing sector. \n' + '\n' +
                            '2. Consistency. There were glaring UI inconsistencies across Hero’s mobile and web app such as conflicting fonts, palettes, UI components and navigation patterns.\n' + '\n' +
                            '3. Hierarchy. The information architecture was cluttered and unorganized making it feel more complex than it needed to be. There was also a concept of users building  custom menus and navs that would not scale in the long run. \n' + '\n' +
                            '4. Bugs. The web app suffered from a broken and incomplete API and needed to be fixed before we progressed the mobile app development. The mobile app itself would crash during simple user flows. \n' +
                            '\n' + 'Our goal was to improve these aspects of Hero’s digital platforms without having to completely rebuild existing product features where possible. With a tight deadline and lack of resource for endeavours such as user research due to time limitations we got started.'

                            }/>
                    </div>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
