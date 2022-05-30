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
        API.trackPage(Constants.pages.projectSA);
    }

    render() {
        return (
            <React.Fragment>
                <Page title={Constants.titles.pickswise} canonical="projects/pickswise">
                    <ProjectHero
                      clientImage="/static/images/projects/pickswise/Pickswise-Logo.svg"
                      projectTitle="The home of free sports picks, news and experts' best bets"
                      projectType="Mobile Application & Web application"
                      ProjectServiceListItem={(
                        <React.Fragment>
                          <TextListItem listItemText='Mobile App Development' />
                          <TextListItem listItemText='Web Development,' />
                        </React.Fragment>
)}
                      className="hero--pickswise"
                      projectImage="/static/images/projects/pickswise/1.png"
                      srcSet="/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x"
                    />

                    <div className="container">

                        <ProjectTextSection
                          className="sectionOneAnimation"
                          subTitle="01 / Overview"
                          description={'Pickswise is the home of free sports picks and betting tips. Our experts give you their best bets every day on all major US sports. \n' +
                          ' \n' +
                          'Spotlight Sports Group engaged with Solid State Group to build a mobile application that offered similar functionality to their existing website.\n' +
                          ' \n' +
                          'We delivered the project ahead of schedule and within budget has led to further projects including redefining their web architecture and offering training to their internal teams. Our velocity allowed us to deliver post MVP features in time for the NFL season without risking stability issues due to best practice CICD principles allowing the team to test beta features in production\n' +
                          ' \n' +
                          'The mobile application quickly became a major source of revenue for the company, exceeding projected forecasts.\n'}
                        />

                      <ProjectTextSection
                        className="sectionOneAnimation"
                        subTitle="Challenge"
                        description={'Pickswise had seen a lot of success within the American sports market but needed a stronger mobile presence. We were tasked with creating a new mobile application from the ground up with tight deadlines and a backlog of required features to meet the NFL season. \n' +
                        '\n' +
                        'Given the challenges, we suggested an approach with React Native and Microsoft’s Code Push technology allowing us to incrementally release features over the air, reducing the risks of waiting for App Store approvals and missing strict deadlines.\n' +
                        '\n' +
                        'The application is heavily customer focused and hence had to be accessible, performant and stable. There was also a big focus on targeted in-app messaging to drive conversion. \n'}
                      />


                    </div>

                    <div className="container">


                        <ProjectDetailSectionItem
                          title={'Rapid React Native Development'}
                          subTitle="Solution"
                          imageOne="/static/images/projects/pickswise/3.png"
                          srcSetImageOne="/static/images/projects/pickswise/3.png 1x, /static/images/projects/pickswise/3@2x.png 2x"
                          description={'Solid State Group have been iterating on a proprietary React Native boilerplate project since Facebook released the technology in 2015, this allowed us to get a skeleton stable application deployed very quickly.\n' +
                          '\n' +
                          'We developed on a feature basis using Kanban methodology, signing them off with Pickswise’s internal team. We submitted the application early whilst developing features which ensured that the application was released on time. \n'}
                        />

                      <ProjectDetailSectionItem
                        className="flex-row-reverse"
                        title={'React Native Training'}
                        subTitle="Solution"
                        imageOne="/static/images/projects/pickswise/1.png"
                        srcSetImageOne="/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x"
                        description={'Following the successful release, it was important for Pickswise to build out their internal teams in React Native. Whilst building post-MVP features we also helped train their new team, providing documentation and training post-MVP to the point where they could start developing features on their own.\n'}
                      />




                    </div>

                  <ProjectFullImageSection
                    imageUrl="/static/images/projects/pickswise/2.png"
                    srcSet="/static/images/projects/pickswise/2.png 1x, /static/images/projects/pickswise/2@2x.png 2x"
                    imageAltText="Dashboard UI"
                    className="panel panel--bg-pickswise"
                  />



                  <div className="container">
                    <ProjectTextSection
                      title="Migrating the website to our common layer architecture"
                      className="sectionOneAnimation"
                      subTitle="Solution"
                      description={'Due to the success and velocity of the mobile application, we engaged in a follow-up project to re-create their website using the same codebase whilst also leveraging mobile features they had yet to develop. \n' +
                      '\n' +
                      'This approach lets Pickswise release features to their web and mobile platforms simultaneously and combines their teams into a single cross-functional team. We also created a CLI allowing web and mobile developers to generate code based on answering a set of common questions, this also ensured that code was consistent throughout.\n' +
                      '\n' +
                      'We achieved the goal by releasing a new version of their website that shared the same codebase as the mobile application we released.\n' +
                      '\n' +
                      'This stage of the project provided the following benefits:\n' +
                      '\n' +
                      '1. Introduced a lot of code reuse, the business logic for mobile and web was no longer written differently in both places.\n' +
                      '2. Encouraged feature parity across mobile applications and the website.\n' +
                      '3. Reduced testing duplication: all business logic/API integration should be common meaning that by testing one platform you are testing the majority of the other.\n' +
                      '4. Improved velocity and code consistency through the use of our CLI, this generated API integration code for both platforms.\n' +
                      '5. Reduced overall effort required for feature development, if one platform creates a feature first, the work for the second is reduced.\n' +
                      '6. Encouraged common wording/localisation and formatting. There was now a single source of truth for all wording / formatting used between web and mobile. \n' +
                      '7. Allows possibility of cross functional teams.\n'}
                    />

                    <ProjectFullImageSection
                      imageUrl="/static/images/projects/pickswise/Pickswise-Architecture.png"
                      srcSet="/static/images/projects/pickswise/Pickswise-Architecture.png 1x, /static/images/projects/pickswise/Pickswise-Architecture@2x.png 2x"
                      imageAltText="Common Architecture"
                    />


                    <ProjectDetailSectionItem
                      imageOneclassName="img__shadow"
                      title={'Mobile UI Library'}
                      subTitle="Solution"
                      imageOne="/static/images/projects/pickswise/Pickswise-Desktop.png"
                      srcSetImageOne="/static/images/projects/pickswise/Pickswise-Desktop.png 1x, /static/images/projects/pickswise/Pickswise-Desktop@2x.png 2x"
                      description={'Pickswise wanted to allow other applications to utilise the UI components we created. To accomplish this we used Storybook to document and test the UI components. We also built and documented a release process for UI components to be downloadable and used in other applications.\n' +
                      '\n' +
                      'We also trained the internal team on the differences in approach to standard application development to developing a reusable component library. \n'}
                    />

                    <ProjectDetailSectionItem
                      className="flex-row-reverse"
                      title={'Training for cross-platform development'}
                      subTitle="Solution"
                      imageOne="/static/images/projects/pickswise/Pickswise-Desktop-2.png"
                      srcSetImageOne="/static/images/projects/pickswise/Pickswise-Desktop-2.png 1x, /static/images/projects/pickswise/Pickswise-Desktop-2@2x.png 2x"
                      description={'After creating a reusable web and mobile architecture, our next step was to guide the team on developing and maintaining feature parity across the 2 platforms. For this we provided workshops and recorded video training sessions on best practices, CI/CD and testing.'}
                    />


                  </div>



                    <div className="container">
                      <ProjectTechSection
                        techLogoItems={(
                          <React.Fragment>
                            <div className='col-6 text-center'>
                              <img
                                alt='react' src='/static/images/tech-icons/dark/react.svg'
                                className='img-responsive'
                              />
                            </div>
                            <div className='col-6 text-center'>
                              <img
                                alt='react' src='/static/images/tech-icons/dark/react-native-logo.png'
                                className='img-responsive'
                              />
                            </div>
                            <div className='col-6 text-center'>
                              <img
                                alt='.net' src='/static/images/tech-icons/dark/redux-logo.png'
                                className='img-responsive'
                              />
                            </div>
                            <div className='col-6 text-center mb-md-0 mb-4'>
                              <img alt='mysql' src='/static/images/tech-icons/dark/Figma.svg'
                                   className='img-responsive' />
                            </div>
                          </React.Fragment>
                        )}
                        ProjectServiceListItem={(
                          <React.Fragment>
                            <WideListItem
                              listItemText='Mobile Development'
                            />
                            <WideListItem
                              listItemText='Web Development'
                            />
                            <WideListItem
                              listItemText='Backend Development'
                            />
                            <WideListItem
                              listItemText='API Development'
                            />
                          </React.Fragment>
                        )}
                      />


                        <ProjectTextSection
                                // className="sectionTwoAnimation"
                          subTitle="Outcome"
                          description="- Released their mobile application on time and under budget
- Helped them build and train an internal mobile team
- Redeveloped their existing website to a single cross platform codebase
- Trained the internal team on cross platform development
- Built a re-usable mobile UI library
"
                        />

                    </div>

                    {/*<ClientQuote*/}
                    {/*  image="/static/images/projects/pickswise/1.png"*/}
                    {/*  srcSet="/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x"*/}
                    {/*  text="We worked with SSG to completely rebuild our digital properties, API, CMS and a brand new mobile app for iOS and Android. The team were brilliant under significant time pressure and we felt like we were in expert hands from start to finish."*/}
                    {/*  clientName="John Smith" clientTitle="Co-Founder & CEO at Site Assist"*/}
                    {/*/>*/}

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
