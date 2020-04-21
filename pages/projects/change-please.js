import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectColourBlockSection
} from "../../components/ProjectDetailSectionItem";
import ProjectNav from "../../components/ProjectNav";
import Footer from "../../components/Footer";

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (

            <React.Fragment>
                <Page title="Change Please" canonical="projects/change-please">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Internal Project'}/>
                            </React.Fragment>

                        }
                        projectTitle={'Changing the [face] of debt tracking'}
                        projectType={'The lean, mean, face detecting, debt tracking machine'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Mobile Development'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
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
                        className="hero--change-please"
                        projectImage={"/static/images/projects/change-please/Rotato-Snapshot@1x.png"}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'00 / Overview'}
                                            description={'So you\'re out for dinner and you end up paying... again, you promise yourself that you\'ll remember, but you never do. ChangePlease! has got your back. Open the app, scan your group of friends with your camera and create a debt with the relevant people in seconds.\n' +
                                            '\n' +
                                            'ChangePlease! was created to test the best of breed in face detection, as well as challenge the well trodden paths of debt tracking and finance apps.'}/>
                    </div>


                    <ProjectFullImageSection
                        className={'panel--navy pt-5 pb-5'}
                        title={'Mobile APP UI Design'}
                        subTitle={'01 / Design'}
                        imageUrl={'/static/images/projects/change-please/cp-2@1x.png'}
                        imageAltText={'Mobile AR'}
                    />

                    <div className="container">
                        <ProjectTextSection subTitle={'01 / Challenge'}
                                            description={'ChangePlease! posed a real challenge for the whole Solid State Group team. In saturated markets, pretenders to the throne need to be beautiful and workflows need to be intuitive and repeatable. Ensuring that FacePay was seemlessly introduced and dismissed in the payment workflows also needed to feel valuable and quick, otherwise it was worthless. Even when we nailed the design, integrating with facial recognition API\'s was a huge technical challenge to overcome.'}
                        />

                        <ProjectTextSection subTitle={'02 / Highlights'}
                                            description={'We\'re really please with the UI and UX design. The app works beautifully and even the feature with a slight learning curve are easily learned and more importantly remembered for the next use.\n' +
                                            '\n' +
                                            'The facial recognition works really well and detects multiple users super-quick, even in crowds of people.'}
                        />

                        <ProjectTechSection
                            className="flex-row-reverse"
                            description={'Using React Native we were able to communicate with the Bluetooth inhalers both with shared code across Android and iOS, reducing the differences between them.  \n' +
                            '\n' +
                            'Within 6 months we were on both the iOS App Store and Google Play Store in time for a medical trial.\n'}
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
