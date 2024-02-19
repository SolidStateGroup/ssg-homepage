import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import { TextListItem, WideListItem } from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection,
    ProjectTechSection,
    ProjectTextSection,
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
        API.trackPage(Constants.pages.projectHero);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.builtByBecky} canonical="projects/built-by-becky">
                    <ProjectHero
                      clientImage="/images/clients/white/built-by-becky-logo-white.png"
                      projectTitle="Helping women feel amazing at any age"
                      projectType="Web Application & Mobile App"
                      ProjectServiceListItem={(
                          <React.Fragment>
                              <TextListItem listItemText="UX design,"/>
                              <TextListItem listItemText="UI design,"/>
                              <TextListItem listItemText="API Development,"/>
                              <TextListItem listItemText="Web Application,"/>
                              <TextListItem listItemText="Mobile App Development"/>
                          </React.Fragment>
                        )}
                      className="hero--built-by-becky"
                      projectImage="/images/projects/built-by-becky/1.png"
                      srcSet="/images/projects/built-by-becky/1.png 1x, /images/projects/built-by-becky/1@2x.png 2x"
                    />

                    <div className="container">
                        <div id="sectionOneTrigger">
                            <ProjectTextSection
                              className="sectionOneAnimation"
                              subTitle="00 / Overview"
                              description={'Built by Becky is a community of women aimed at improving physical and mental health, all from the comfort of your own home.'
                                    + '\n\nBuilt by Becky came to SSG to develop a mobile and web application that would allow women to subscribe to access Becky\'s workout content.'}
                            />

                            <ProjectTextSection
                              className="sectionTwoAnimation"
                              subTitle="01 / Challenge"
                              description={
`Becky had a well-established following on Instagram, inspiring women with her workouts and postnatal fitness.

At this point, the business side was limited to a private Instagram group and a 1-page Wix website where people could purchase workouts. 

Solid State Group's challenge was to transform them into a digital business by creating a bespoke mobile application that would handle subscriptions for her content .`
                                }
                            />
                        </div>

                        <ProjectTextSection
                          subTitle="01 / Challenge"
                          title={'Identifying the problems\n'}
                          description={`Creating the health and fitness platform had a number of challenges:
${'\n'}
1. Establish a clear branding direction from the ground up, reaching a consensus on the specific approach and developing high-fidelity designs.

2. Define the method for content consumption and purchase, addressing the mix of short-form and long-form videos, along with various exercises based on repetitions and duration.

3. Establish a Workout Hierarchy, intending to transform videos into exercises, workouts, programs, and challenges. 

4. Specify the content entry process, emphasizing the need for flexibility in programs and workouts. Facilitate the reuse of existing exercises and equipment while allowing customization.

5. Create sufficient infrastructure for large surges of demand. Creating applications for large influencers requires being able to handle big bursts of traffic to the application.


                          `}
                        />

                        <ProjectTextSection
                          title="Discovery Phase"
                          subTitle="02 / Solution"
                          description={`We initiated the project with a discovery phase, drawing upon our extensive knowledge of health and fitness apps from previous experience. Our focus was to delve into Becky's specific vision, understanding the distinctive features and strengths she envisioned for her application.

Through active listening and collaborative discussions, we engaged in an iterative process for screen designs. This continued until we achieved a level of confidence in how the application would seamlessly function from start to finish. 

The outcome of this discovery phase was a consensus on a set of screen designs, technical specifications, and a detailed project estimate.

With the defined requirements in place, we identified project milestones and determined the essential functionality for the initial app release. To manage the development process effectively, we structured the work into agile sprints. Regular updates were released to the client, providing a transparent view of the progress. This dynamic exchange often sparked new ideas and requirements, fostering an agile and adaptive development approach.
                              `}
                        />

                        <ProjectDetailSectionItem
                          title="Design System"
                          subTitle="02 / Solution"
                          imageOne="/images/projects/built-by-becky/design-system.png"
                          srcSetImageOne="/images/projects/built-by-becky/design-system.png 1x, /images/projects/built-by-becky/design-system.png 2x"
                          description={`We developed a design system to illustrate how the product would work, at the same time we can use this to help make development more seamless.
                          Solid State Group have been iterating on a proprietary React Native boilerplate project since Facebook released the technology in 2015, this allowed us to implement the design system quickly.\\n'
                       `}
                        />
                        <ProjectDetailSectionItem
                          title="Workout Content"
                          subTitle="02 / Solution"
                          imageOne="/images/projects/built-by-becky/4.png"
                          srcSetImageOne="/images/projects/built-by-becky/4.png 1x, /images/projects/built-by-becky/4@2x.png 2x"
                          description={`We developed a system whereby users could start short and long form exercises as part of a workout or program.${'\n'}
It was realised early after the initial release we needed more to this, we later added circuits, supersets and tri-sets to let Becky better serve her content.
`}
                        />
                        <ProjectDetailSectionItem
                          title="Sharing web and mobile functionality"
                          subTitle="02 / Solution"
                          imageOne="/images/projects/built-by-becky/1@2x.png"
                          description="Due to App Store fees and general shareability it was desirable to have a partnering web application where people could subscribe. Our codebase has been developed in a way whereby common functionality can be shared across both platforms saving time and money as well as reducing bugs."
                        />

                        <ProjectFullImageSection
                          imageUrl="/images/projects/built-by-becky/bbb-architecture.png"
                          srcSet="/images/projects/built-by-becky/bbb-architecture.png 1x, /images/projects/built-by-becky/bbb-architecture@2x.png 2x"
                          imageAltText="Common Architecture"
                        />



                        <ProjectTextSection
                          subTitle="04 / Headlines"
                          description={`We achieved a successful launch of the new mobile and web app.${'\n'}
The combination of positive feedback and increasing user engagement has resulted in a strong growing subscriber base, turning Built by Becky into a healthy recurring revenue generating digital business. `}
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
