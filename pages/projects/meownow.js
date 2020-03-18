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
                <Page title="Meow Now" canonical="projects/meownow">
                    <ProjectHero
                        projectTitle={'Subscription service for your feline friends'}
                        projectType={'Responsive website'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Branding,'}/>
                                <TextListItem listItemText={'Product design,'}/>
                                <TextListItem listItemText={'Ad creative,'}/>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Responsive website'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'React Native,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                            </React.Fragment>
                        }
                        className="hero--publicate"
                        projectImage={"/static/images/projects/wfa/wfa-1.png"}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            title="The brief"
                            description={'After initial discussions, we agreed to approach the problem using our test and learn process, which involved iterative test cycles to answer the largest questions that the business had to answer before committing to launching a brand new product in the UK.\n' +
                            '\n' +
                            'The creative brief was to design a new brand identity, product packaging and product website for a cat food subscription business. The brand must feel real, high quality and generate enough confidence for website visitors to commit to buying the products and sign up for a weekly, monthly or annual subscription.'}
                        />
                        <ProjectFullImageSection
                            className={'panel--gradient-blue'}
                            title={'Mobile UI'}
                            subTitle={'01 / Ad Creative'}
                            imageUrl={'/static/images/projects/meownow/tails_mobile.png'}
                            imageAltText={'Responsive UI'}
                        />
                        <ProjectTextSection
                            subTitle="02 / Solution"
                            title="The Experiments"
                            description={'We undertook a 5 day design sprint, during which time we developed a number of brand names before settling on MeowNow.  We then set about creating a number of brand routes beginning with 6 polarising ideas and gradually knocking those down until the client was settled on one route, which was then iterated until sign off.  Once we had a brand we began to create a design language, once again developing multiple routes for the client and eventually progressing with one. This would eventually be used to design the ad creative and the responsive website.  As part of the creative requirements we needed to show some legitimate product packaging that you might expect to see in a real life subscription product. We set about designing cans, bags and boxes that would provide the backdrop for the marketing efforts.'}
                        />
                    </div>

                    <div className="panel panel--gradient-publicate pb-0 text-center mb-5">
                        <div className="container">
                            <img src="/static/images/projects/meownow/tails_mobile_multiple.png" alt={'Publicate UI'} className="img-fluid"/>
                        </div>
                    </div>

                    <ProjectFullImageSection
                        className={'panel--gradient-blue'}
                        subTitle={'03 / Ad Creative'}
                        title={'Display Ads'}
                        imageUrl={'/static/images/projects/meownow/tails_cat-ads.jpg'}
                        imageAltText={'Responsive UI'}
                    />

                    <div className="p-5 flex-row">
                        <div className="container">
                            <img src="/static/images/projects/meownow/meownow-facebook-1.png" alt="Meownow Ad" className="pr-2"/>
                            <img src="/static/images/projects/meownow/meownow-facebook-2.png" alt="Meownow Ad 2" className="pl-2"/>
                        </div>
                    </div>

                    <ClientQuote
                        text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                        clientName={'Laura Cannon'} clientTitle={'New Market & Strategies'}/>

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
