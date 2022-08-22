import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import { ListItemUnderlined, WideListItem } from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import { ButtonPrimary } from '../../components/base/forms/Button';
import ProjectItem from '../../components/ProjectItem';
import ServicesHero from '../../components/ServicesHero';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/hero/hero-1.png',
        srcSet: '/images/projects/hero/hero-1.png 1x, /images/projects/hero/hero-1@2x.png 2x,',
        clientImage: '/images/clients/hero-logo.png',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/hero-wellbeing',
        title: 'Connected Health, Made Simple',
        blobColour: '#15CBCE',
        tags: ['WEB', 'API', 'IOT', 'MOBILE', 'DESIGN'],
        projectType: ['UX design, UI design, API Development, Web Application, Hardware integrations, Mobile App Development'],
        gaDataLabel: 'work-projects-hero',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        clientImage: '/images/clients/tone-and-sculpt.svg',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: 'project__image--short',
        blobColour: '#5CC2E1',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-ts',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/images/projects/meownow/meownow-1@1x.png',
        srcSet: '/images/projects/meownow/meownow-1@1x.png 1x, /images/projects/meownow/meownow-1@2x.png 2x,',
        clientImage: '/images/clients/meownow.svg',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: '#f7f7f7',
        tags: ['DESIGN', 'BRANDING', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Web Development'],
        gaDataLabel: 'work-projects-meow-now',
    },
];


const UserTestingPage = class extends React.Component {
    static displayName = 'UserTestingPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        API.trackPage(Constants.pages.servicesUserTesting);
    }

    render = () => {
        return (
            <Page title={Constants.titles.userTesting} canonical="user-research">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <ServicesHero title="User Testing" text="We do usability testing to validate ideas early on, remove assumptions and deliver a better user experience for users." />
                </div>


                <h2 className="text-center mt-5">How it works</h2>

                <div className="container">
                    <ServiceItem
                      serviceImage="/images/services/User-Interview.png"
                      srcSet="/images/services/User-Interview.png 1x, /images/services/User-Interview@2x.png 2x"
                      // imageClassName="img__shadow"
                      className="flex-row-reverse"
                      subTitle="Create a test plan"
                      serviceDescription="First we create a test plan to identify the specifics of the user test. We define things like features to test, audience, the business case and the test’s objectives."
                    />

                    <ServiceItem
                      srcSet="/images/services/recruit-testers.png 1x, /images/services/recruit-testers.png 2x"
                      serviceImage="/images/services/recruit-testers@2x.png"
                      // imageClassName="img__shadow"
                      subTitle="Recruit testers"
                      serviceDescription="We utilise our existing pool of testers or prospective users that you might already have access to in order to conduct the best possible test."
                    />

                    <ServiceItem
                      serviceImage="/images/services/user-research.png"
                      srcSet="/images/services/user-research.png 1x, /images/services/user-research@2x.png 2x"
                      className="flex-row-reverse"
                      subTitle="Test!"
                      serviceDescription={

                            <>
                                {'We use tools like\n'} <Link prefetch={false} href="https://maze.co/">
                                Maze
                                                        </Link> {'to allow us to run fast user research. Test participants are provided with pre determined tasks to perform, whilst audio a nd visual data is recorded and given to us to analyse when the test is complete.\n \n This allows us to run multiple tests concurrently and gather feedback from several users at the same time - which gives us invaluable insights from audiences in as little as a day.'}
                            </>
                        }


                    />

                    <ServiceItem
                      srcSet="/images/services/insights.png 1x, /images/services/insights@2x.png 2x"
                      serviceImage="/images/services/insights.png"
                      subTitle="Insights"
                      serviceDescription={'Once we’ve completed the research we\'ll use the collated data to provide some insights and actions for your product.  These actions will serve to inform design decisions and indicate ways in which existing products could be improved.'}
                    />

                </div>

                <div className="section section--dark text-light text-light-paragraph">
                    <div className="container">
                        <h2 className="text-center text-light"><span className="text-primary">User Test</span> Examples</h2>

                        <ServiceItem
                          srcSet="/images/services/a-b-test.png 1x, /images/services/a-b-test@2x.png 2x"
                          serviceImage="/images/services/a-b-test.png"
                          subTitle="A/B Testing"
                          serviceDescription="Validate your early-stage design outlines before you start to build on them. Save resources by giving the right commitment to the right projects."
                        />

                        <ServiceItem
                          className="flex-row-reverse"
                          srcSet="/images/services/product-concepts.png 1x, /images/services/product-concepts@2x.png 2x"
                          serviceImage="/images/services/product-concepts.png"
                          subTitle="Validating product concepts"
                          serviceDescription="Validate key decisions early on to save precious time and resources. Concentrate your efforts in the right direction to create the right products for your users."
                        />

                        <ServiceItem
                          srcSet="/images/services/maze_interaction.png 1x, /images/services/maze_interaction@2x.png 2x"
                          serviceImage="/images/services/maze_interaction.png"
                          subTitle="Test mobile app usability"
                          serviceDescription="Validate expectations of your product by testing mobile app usability with users. Uncover pain points in their journey to work towards a friction-free experience with your Product team."
                        />

                    </div>
                </div>

                <ClientQuote
                  image="/images/projects/meownow/meownow-1@1x.png"
                  srcSet="/images/projects/meownow/meownow-1@1x.png 1x, /images/projects/meownow/meownow-1@2x.png 2x"
                  text={'The work you all did was great - and beyond the test being successful, the energy it created internally just seeing something that felt so real... it\'s been awesome thanks so much - really enjoyed working with you all.'}
                  clientName="Laura Cannon" clientTitle="New Market & Strategies"
                />

                {/*<div className="container">*/}
                {/*    <h3 className="section__title--dark text-center mb-5 mt-5">User research case studies</h3>*/}
                {/*    {projects.map(p => (*/}
                {/*        <ProjectItem*/}
                {/*          ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}*/}
                {/*          subTitle={p.subTitle}*/}
                {/*          title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}*/}
                {/*          projectImageClass={p.projectImageClass}*/}
                {/*          blobColour={p.blobColour}*/}
                {/*          srcSet={p.srcSet}*/}
                {/*          projectType={p.projectType}*/}
                {/*          href={p.href}*/}
                {/*          clientImage={p.clientImage}*/}
                {/*          gaDataLabel={p.gaDataLabel}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}

                <Footer gaFooterLabel="services_design_footer_contact"/>
            </Page>
        );
    };
};

export default UserTestingPage;
