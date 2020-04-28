import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectColourBlockSection, ProjectFullVideoSection
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
                <Page title="Visa" canonical="projects/visa">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'Visa'}/>
                            </React.Fragment>
                        }
                        projectTitle={'Cakewalk on the catwalk'}
                        projectType={'Instant payment integration with NFC Ring'}
                        ProjectServiceListItem={
                            <React.Fragment>
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
                        className="hero--visa"
                        projectImage={"/static/images/projects/visa/visa-1@1x.png"}
                        srcSet={'/static/images/projects/visa/visa-1@1x.png 1x, /static/images/projects/visa/visa-1@2x.png 2x'}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'00 / Overview'}
                                            description={'Visa Europe Collab wanted to work with renowned designer Henry Holland to create a stir at London Fashion Week.\n' +
                                            '\n' +
                                            'We built a user-friendly system that allowed House of Holland’s VIP guests to buy any of the designer items on show by touching them with a ring on their finger.\n' +
                                            '\n' +
                                            'Technology has never been more wearable.'}/>

                        <ProjectTextSection subTitle={'01 / Challenge'}
                                            description={'For users, we needed to create a mobile interface for the payment system; and for Henry Holland, we had to devise a way to tag individual items and outfits.\n' +
                                            '\n' +
                                            'Not only that: it needed to be robust enough to work first time in a high-profile live environment, and we only had six weeks until launch. And, of course, it had to look stylish.'}
                        />

                    </div>


                    <ProjectFullImageSection
                        className={'panel--navy pt-5 pb-5'}
                        title={'NFC Ring device'}
                        imageUrl={'/static/images/projects/visa/hoh-rings.png'}
                        imageAltText={'Mobile AR'}
                    />

                    <div className="container">
                        <ProjectTextSection subTitle={'02 / Solution'}
                                            description={'We built a mobile app supporting a cloud-based payment system. We then linked NFC tags on each outfit to a virtualised terminal and Visa’s payment network via Bluetooth, using a stylised version of a standard NFC Ring device.\n' +
                                            '\n' +
                                            'This solution allowed guests to tap their unique ring against the tag on any outfit, instantly purchasing it, so they could pick up their goods on the way out of the show.'}
                        />


                        <ProjectFullVideoSection youtubeLink={'https://www.youtube.com/embed/pagljreqIfo'}/>

                        <ProjectTextSection subTitle={'03 / Highlights'}
                                            description={'The guests were visibly impressed by the integration of technology and fashion, which worked perfectly on the night. Many guests made transactions during the event, proving that there’s an appetite for innovative payment solutions.\n' +
                                            '\n' +
                                            'And like all the best fashion, our solution was stylish, seamless and bespoke.\n' +
                                            '\n'}
                        />

                        <ProjectTechSection
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-4 text-center">
                                        <img src='/static/images/tech-icons/dark/node.svg' alt="node"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-4 text-center">
                                        <img src='/static/images/tech-icons/dark/Express.svg' alt="express"
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-4 text-center">
                                        <img src='/static/images/tech-icons/dark/Jade.svg'
                                             alt="jade"
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
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
