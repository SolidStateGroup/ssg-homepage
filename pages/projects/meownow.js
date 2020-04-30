import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectFullImageSection,
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
                <Page title="Meow Now" canonical="projects/meownow">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'MeowNow'}/>
                            </React.Fragment>

                        }
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
                        className="hero--meownow"
                        projectImage={"/static/images/projects/meownow/meownow-1@1x.png"}
                        srcSet={'/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x'}
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
                            title={'Design Language'}
                            subTitle={'01 / Style guide'}
                            imageUrl={'/static/images/projects/meownow/meownow_brand_board.png'}
                            srcSet={'/static/images/projects/meownow/meownow_brand_board.png 1x, /static/images/projects/meownow/meownow_brand_board@2x.png 2x'}
                            imageAltText={'Meownow Brand'}
                        />
                        <ProjectFullImageSection
                            title={'Mobile UI'}
                            subTitle={'02 / Responsive Website'}
                            imageUrl={'/static/images/projects/meownow/tails_mobile.png'}
                            srcSet={'/static/images/projects/meownow/tails_mobile.png 1x, /static/images/projects/meownow/tails_mobile@2x.png 2x'}
                            imageAltText={'Responsive UI'}
                        />
                        <ProjectTextSection
                            subTitle="03 / Solution"
                            title="The Experiments"
                            description={'We undertook a 5 day design sprint, during which time we developed a number of brand names before settling on MeowNow.  We then set about creating a number of brand routes beginning with 6 polarising ideas and gradually knocking those down until the client was settled on one route, which was then iterated until sign off.  Once we had a brand we began to create a design language, once again developing multiple routes for the client and eventually progressing with one. This would eventually be used to design the ad creative and the responsive website.  As part of the creative requirements we needed to show some legitimate product packaging that you might expect to see in a real life subscription product. We set about designing cans, bags and boxes that would provide the backdrop for the marketing efforts.'}
                        />
                    </div>

                    <div className="panel panel--gradient-meownow pb-0 text-center mb-5">
                        <div className="container">
                            <img src="/static/images/projects/meownow/tails_mobile_multiple.png" srcSet={'/static/images/projects/meownow/tails_mobile_multiple.png 1x, /static/images/projects/meownow/tails_mobile_multiple@2x.png 2x'} alt={'Publicate UI'} className="img-fluid"/>
                        </div>
                    </div>

                    <ProjectFullImageSection
                        subTitle={'04 / Ad Creative'}
                        title={'Display Ads'}
                        imageUrl={'/static/images/projects/meownow/tails_cat-ads@1x.png'}
                        srcSet={'/static/images/projects/meownow/tails_cat-ads@1x.png 1x, /static/images/projects/meownow/tails_cat-ads@2x.png 2x'}
                        imageAltText={'Responsive UI'}
                    />

                    <div className="p-5 flex-row">
                        <div className="container text-center">
                            <img src="/static/images/projects/meownow/meownow-facebook-1@1x.png" srcSet={'/static/images/projects/meownow/meownow-facebook-1@1x.png 1x, /static/images/projects/meownow/meownow-facebook-1@2x.png 2x'} alt="Meownow Ad" className="pr-2"/>
                            <img src="/static/images/projects/meownow/meownow-facebook-2@1x.png" srcSet={'/static/images/projects/meownow/meownow-facebook-2@1x.png 1x, /static/images/projects/meownow/meownow-facebook-2@2x.png 2x'} alt="Meownow Ad 2" className="pl-2"/>
                        </div>
                    </div>

                    <ClientQuote
                        image={'/static/images/projects/meownow/meownow-1@1x.png'}
                        srcSet={'/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x'}
                        text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                        clientName={'Laura Cannon'} clientTitle={'New Market & Strategies'}/>
                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
