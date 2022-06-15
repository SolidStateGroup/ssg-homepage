import React from 'react';
import cn from 'classnames';
import filter from 'lodash/filter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import ProjectItem from '../components/ProjectItem';
import { ButtonPrimary } from '../components/base/forms/Button';
import InfiniteScroll from '../components/InfiniteScroll';

export const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/pickswise/1.png',
        srcSet: '/static/images/projects/pickswise/1.png 1x, /static/images/projects/pickswise/1@2x.png 2x,',
        clientImage: '/static/images/projects/pickswise/Pickswise-Logo.svg',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/pickswise',
        title: 'The home of free sports picks, news and experts\' best bets',
        blobColour: '#041c2c',
        tags: ['MOBILE', 'API'],
        projectType: ['Mobile App Development'],
        gaDataLabel: 'work-projects-pickswise',
    },
    // {
    //     ButtonComponent: ButtonPrimary,
    //     projectImage: '/static/images/projects/site-assist/sa-summary.png',
    //     srcSet: '/static/images/projects/site-assist/sa-summary.png 1x, /static/images/projects/site-assist/sa-summary@2x.png 2x,',
    //     clientImage: '/static/images/clients/site-assist.svg',
    //     subTitle: 'Responsive Web Application & Mobile App',
    //     href: '/projects/site-assist',
    //     title: 'Digitising the construction industry for a sustainable future',
    //     blobColour: '#e09512',
    //     tags: ['BRANDING', 'DESIGN', 'MOBILE', 'WEB', 'API'],
    //     projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
    //     gaDataLabel: 'work-projects-sa',
    // },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/detonator/1.png',
        srcSet: '/static/images/projects/detonator/1.png 1x, /static/images/projects/detonator/1@2x.png 2x,',
        clientImage: '/static/images/projects/detonator/detonator-wordmark.png',
        subTitle: 'Mobile App',
        href: '/projects/detonator',
        title: 'Re-introducing reading to a disengaged young audience',
        blobColour: '#ED6D05',
        tags: ['MOBILE', 'DESIGN'],
        projectType: ['Mobile App Design'],
        gaDataLabel: 'work-projects-detonator',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/site-assist/sa-summary.png',
        srcSet: '/static/images/projects/site-assist/sa-summary.png 1x, /static/images/projects/site-assist/sa-summary@2x.png 2x,',
        clientImage: '/static/images/clients/site-assist.svg',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/site-assist',
        title: 'Digitising the construction industry for a sustainable future',
        blobColour: '#e09512',
        tags: ['BRANDING', 'DESIGN', 'MOBILE', 'WEB', 'API'],
        projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
        gaDataLabel: 'work-projects-sa',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/electron-connect/1.png',
        srcSet: '/static/images/projects/electron-connect/1.png 1x, /static/images/projects/electron-connect/1@2x.png 2x,',
        clientImage: '/static/images/clients/electron.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/electron-connect',
        title: 'Designing a first of its kind local energy marketplace',
        blobColour: '#197FA0',
        tags: ['DESIGN', 'WEB'],
        projectType: ['UX design, UI design, Web Application'],
        gaDataLabel: 'work-projects-electron-connect',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/diagnosisview/1.png',
        srcSet: '/static/images/projects/diagnosisview/1.png 1x, /static/images/projects/diagnosisview/1@2x.png 2x,',
        clientImage: '/static/images/projects/diagnosisview/dv-brand-colour.png',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/diagnosisview',
        title: 'Providing advanced patient info for healthcare students and practitioners',
        blobColour: '#2575DE',
        tags: ['MOBILE', 'API', 'DESIGN', 'MOBILE', 'WEB'],
        projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
        gaDataLabel: 'work-projects-diagnosisview',
    },
    // {
    //     ButtonComponent: ButtonPrimary,
    //     projectImage: '/static/images/projects/mainstay/Laptop-03.png',
    //     srcSet: '/static/images/projects/mainstay/Laptop-03.png 1x, /static/images/projects/mainstay/Laptop-03@2x.png 2x,',
    //     clientImage: '/static/images/projects/mainstay/Mainstay-Logo-dark.svg',
    //     subTitle: 'Responsive Web Application',
    //     href: '/projects/mainstay',
    //     title: 'De-risking digital transformation',
    //     blobColour: '#55C5CD',
    //     tags: ['DESIGN', 'MOBILE', 'WEB', 'API '],
    //     projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
    //     gaDataLabel: 'work-projects-mainstay',
    // },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/hero/hero-1.png',
        srcSet: '/static/images/projects/hero/hero-1.png 1x, /static/images/projects/hero/hero-1@2x.png 2x,',
        clientImage: '/static/images/clients/hero-logo.png',
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
        projectImage: '/static/images/projects/ladbrokes/ladbrokes-1.png',
        srcSet: '/static/images/projects/ladbrokes/ladbrokes-1.png 1x, /static/images/projects/ladbrokes/ladbrokes-1@2x.png 2x,',
        clientImage: '/static/images/clients/ladbrokes.png',
        subTitle: 'Web Application',
        href: '/projects/ladbrokes-coral',
        title: 'Bringing the entire IT infrastructure within Ladbrokes Coral up to date',
        blobColour: '#084d8d',
        tags: ['WEB', 'API', 'IOT'],
        projectType: ['API Development, Web Application, Hardware integrations'],
        gaDataLabel: 'work-projects-ladbrokes',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/cap10/1.png',
        srcSet: '/static/images/projects/cap10/1.png 1x, /static/images/projects/cap10/1@2x.png 2x,',
        clientImage: '/static/images/clients/Cap10-logo.svg',
        subTitle: 'Mobile App',
        href: '/projects/cap10',
        title: 'Flexible reporting for businesses',
        blobColour: '#5873E1',
        tags: ['API', 'MOBILE', 'DESIGN'],
        projectType: ['UX design, UI design, API Development, Mobile App Development'],
        gaDataLabel: 'work-projects-hero',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/tands-dashboard.png',
        srcSet: '/static/images/projects/tone-and-sculpt/tands-dashboard.png 1x, /static/images/projects/tone-and-sculpt/tands-dashboard@2x.png 2x,',
        clientImage: '/static/images/clients/tone-and-sculpt.svg',
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
        projectImage: '/static/images/projects/zopa/zopa-1.png',
        srcSet: '/static/images/projects/zopa/zopa-1.png 1x, /static/images/projects/zopa/zopa-1@2x.png 2x,',
        clientImage: '/static/images/clients/zopa.svg',
        subTitle: 'Mobile App',
        href: '/projects/zopa',
        title: 'New borrowing power service for a FeelGood Money platform',
        blobColour: '#00D9C5',
        tags: ['MOBILE', 'API'],
        projectType: ['API Development'],
        gaDataLabel: 'work-projects-zopa',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/electron-connect/1.png',
        srcSet: '/static/images/projects/electron-connect/1.png 1x, /static/images/projects/electron-connect/1@2x.png 2x,',
        clientImage: '/static/images/clients/electron.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/electron-connect',
        title: 'Designing a first of its kind local energy marketplace',
        blobColour: '#197FA0',
        tags: ['DESIGN', 'WEB'],
        projectType: ['UX design, UI design, Web Application'],
        gaDataLabel: 'work-projects-electron-connect',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/diagnosisview/1.png',
        srcSet: '/static/images/projects/diagnosisview/1.png 1x, /static/images/projects/diagnosisview/1@2x.png 2x,',
        clientImage: '/static/images/projects/diagnosisview/dv-brand-colour.png',
        subTitle: 'Responsive Web Application & Mobile App',
        href: '/projects/diagnosisview',
        title: 'Providing advanced patient info for healthcare students and practitioners',
        blobColour: '#2575DE',
        tags: ['MOBILE', 'API', 'DESIGN', 'MOBILE', 'WEB'],
        projectType: ['Branding, UX design, UI design, API Development, Web Application, Mobile App Development'],
        gaDataLabel: 'work-projects-diagnosisview',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/racing-post/racing-post-1.png',
        srcSet: '/static/images/projects/racing-post/racing-post-1.png 1x, /static/images/projects/racing-post/racing-post-1@2x.png 2x,',
        clientImage: '/static/images/clients/racing-post.svg',
        subTitle: 'Responsive Website & Mobile App',
        href: '/projects/racing-post',
        title: 'New Serverless Data Platform for the home of horse racing news',
        blobColour: '#d11f25',
        tags: ['MOBILE', 'API', 'WEB'],
        projectType: ['API Development, ', 'Mobile App Development, ', 'Cloud Infrastructure Implementation'],
        gaDataLabel: 'work-projects-racing-post',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/electron-trader/electron-trader-1@1x.png',
        srcSet: '/static/images/projects/electron-trader/electron-trader-1@1x.png 1x, /static/images/projects/electron-trader/electron-trader-1@2x.png 2x,',
        clientImage: '/static/images/clients/electron.png',
        subTitle: 'Web Application',
        href: '/projects/electron-trader',
        title: 'Tapping into the future of the electricity market',
        blobColour: '#5EABBA',
        tags: ['DESIGN'],
        projectType: ['UX design, ', 'UI design'],
        gaDataLabel: 'work-projects-electron-trader',
    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        srcSet: '/static/images/projects/purely-capital/pc-summary-mac.png 1x, /static/images/projects/purely-capital/pc-summary-mac@2x.png 2x,',
        clientImage: '/static/images/clients/purely-capital-dark@2x.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: '#D02D55',
        tags: ['DESIGN', 'WEB'],
        projectType: ['Research, ', 'UX design, ', 'UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-purely',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie/hailie-phone@1x.png',
        srcSet: '/static/images/projects/hailie/hailie-phone@1x.png 1x, /static/images/projects/hailie/hailie-phone@2x.png 2x,',
        clientImage: '/static/images/clients/hailie.svg',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: '#FF715A',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'work-projects-hailie',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wazoku',
        projectImage: '/static/images/projects/wazoku/2.png',
        srcSet: '/static/images/projects/wazoku/2.png 1x, /static/images/projects/wazoku/2@2x.png 2x,',
        clientImage: '/static/images/clients/wazoku.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Ideas happen anywhere, anytime',
        blobColour: '#173E5A',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-wazoku',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/british-airways',
        projectImage: '/static/images/projects/ba/ba-summary-ipad.png',
        srcSet: '/static/images/projects/ba/ba-summary-ipad.png 1x, /static/images/projects/ba/ba-summary-ipad@2x.png 2x,',
        clientImage: '/static/images/clients/british-airways.svg',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: '#3658B0',
        tags: ['API', 'WEB'],
        projectType: ['Web App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-ba',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wfa',
        projectImage: '/static/images/projects/wfa/wfa-1.png',
        srcSet: '/static/images/projects/wfa/wfa-1.png 1x, /static/images/projects/wfa/wfa-1@2x.png 2x,',
        clientImage: '/static/images/clients/wfa.svg',
        subTitle: 'Web Application',
        title: 'Visualising data for effective marketing communications',
        blobColour: '#ff003c',
        tags: ['API', 'WEB'],
        projectType: ['UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-wfa',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/publicate',
        projectImage: '/static/images/projects/publicate/publicate-summary-ipad@1x.png',
        srcSet: '/static/images/projects/publicate/publicate-summary-ipad@1x.png 1x, /static/images/projects/publicate/publicate-summary-ipad@2x.png 2x,',
        clientImage: '/static/images/clients/publicate.png',
        subTitle: 'Tablet & Web Application',
        title: 'Straightening out corporate documentation',
        blobColour: '#fe7101',
        tags: ['API', 'MOBILE', 'DESIGN', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Web App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-publicate',
    },

    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/static/images/projects/meownow/meownow-1@1x.png',
        srcSet: '/static/images/projects/meownow/meownow-1@1x.png 1x, /static/images/projects/meownow/meownow-1@2x.png 2x,',
        clientImage: '/static/images/clients/meownow.svg',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: '#f7f7f7',
        tags: ['DESIGN', 'BRANDING', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Web Development '],
        gaDataLabel: 'work-projects-meow-now',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/electronx',
        projectImage: '/static/images/projects/electronx/Macbook_color@1x.png',
        srcSet: '/static/images/projects/electronx/Macbook_color@1x.png 1x, /static/images/projects/electronx/Macbook_color@2x.png 2x,',
        clientImage: '/static/images/clients/electron.png',
        subTitle: 'Responsive Website',
        title: 'Tapping into the future of the electricity market',
        blobColour: '#5BABBB',
        tags: ['DESIGN', 'WEB'],
        projectType: ['UX Design, ', 'UI design, ', 'Web Development, '],
        gaDataLabel: 'work-projects-electronx',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/unilever',
        projectImage: '/static/images/projects/unilever/unilever-1@1x.png',
        srcSet: '/static/images/projects/unilever/unilever-1@1x.png 1x, /static/images/projects/unilever/unilever-1@2x.png 2x,',
        clientImage: '/static/images/clients/unilever-colour.svg',
        subTitle: 'Automated ecommerce via connected scales',
        title: 'Shopping that buys itself',
        blobColour: '#007DBB',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-ul-scale',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/static/images/projects/hertz/hertz-1@1x.png',
        srcSet: '/static/images/projects/hertz/hertz-1@1x.png 1x, /static/images/projects/hertz/hertz-1@2x.png 2x,',
        clientImage: '/static/images/clients/hertz-colour.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: '#FFD60D',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-hertz',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/glenfiddich',
        projectImage: '/static/images/projects/glenfiddich/glenfiddich-1@1x.png',
        srcSet: '/static/images/projects/glenfiddich/glenfiddich-1@1x.png 1x, /static/images/projects/glenfiddich/glenfiddich-1@2x.png 2x,',
        clientImage: '/static/images/clients/glenfiddich.svg',
        subTitle: 'Multiplayer AR racing game for mobile',
        title: 'Glenfiddich Stag Racing - When Whisky Meets Hackathons',
        blobColour: '#483c3c',
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, '],
        gaDataLabel: 'work-projects-glenfiddich',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/change-please',
        projectImage: '/static/images/projects/change-please/Rotato-Snapshot@1x.png',
        srcSet: '/static/images/projects/change-please/Rotato-Snapshot@1x.png 1x, /static/images/projects/change-please/Rotato-Snapshot@2x.png 2x,',
        clientImage: '/static/images/clients/change-please.svg',
        subTitle: 'The lean, mean, face detecting, debt tracking machine',
        title: 'Changing the [face] of debt tracking',
        blobColour: '#908DF7',
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
        projectType: ['UX Design, ', 'UI design, ', 'Branding, ', 'Mobile App Development'],
        gaDataLabel: 'work-projects-changeplease',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/visa',
        projectImage: '/static/images/projects/visa/visa-1@1x.png',
        srcSet: '/static/images/projects/visa/visa-1@1x.png 1x, /static/images/projects/visa/visa-1@2x.png 2x,',
        clientImage: '/static/images/clients/visa-colour.svg',
        subTitle: 'Instant payment integration with NFC Ring',
        title: 'Cakewalk on the catwalk',
        blobColour: '#1a1e5a',
        tags: ['DESIGN', 'MOBILE', 'IOT'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development'],
        gaDataLabel: 'work-projects-visa',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/dugout',
        projectImage: '/static/images/projects/dugout/dugout-1@1x.png',
        srcSet: '/static/images/projects/dugout/dugout-1@1x.png 1x, /static/images/projects/dugout/dugout-1@2x.png 2x,',
        clientImage: '/static/images/clients/dugout.svg',
        subTitle: 'Developing with React and React Native',
        title: 'Making fantasy football a reality',
        blobColour: '#D8315B',
        tags: ['DESIGN', 'MOBILE', 'WEB', 'API'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development, ', 'Web App Development '],
        gaDataLabel: 'work-projects-dugoutfc',
    },

    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/imperial-hotels',
        projectImage: '/static/images/projects/imperial/imperial-1@1x.png',
        srcSet: '/static/images/projects/imperial/imperial-1@1x.png 1x, /static/images/projects/imperial/imperial-1@2x.png 2x,',
        clientImage: '/static/images/clients/imperial.png',
        subTitle: 'Mobile app for managing bookings, accessing hotel facilities and controlling the premium WiFi service.',
        title: 'React Native mobile application with in depth integrations',
        blobColour: '#f6921e',
        tags: ['DESIGN', 'MOBILE', 'API'],
        projectType: ['UX design, ', 'UI design, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-imperial-hotels',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/patientview',
        projectImage: '/static/images/projects/patientview/patientview-ipad@1x.png',
        srcSet: '/static/images/projects/patientview/patientview-ipad@1x.png 1x, /static/images/projects/patientview/patientview-ipad@2x.png 2x,',
        clientImage: '/static/images/clients/patientview.png',
        subTitle: 'Secure online platform for clinicians and patients',
        title: 'The doctor will see you now – wherever, whenever',
        blobColour: '#368de8',
        tags: ['API', 'WEB'],
        projectType: ['Web App Development, ', 'API Development, ', 'Mobile App Development'],
        gaDataLabel: 'work-projects-patientview',
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/chorus',
        projectImage: '/static/images/projects/chorus/chorus-1@1x.png',
        srcSet: '/static/images/projects/chorus/chorus-1@1x.png 1x, /static/images/projects/chorus/chorus-1@2x.png 2x,',
        clientImage: '/static/images/clients/chorus.png',
        subTitle: 'Find the relevant conversations for your small business on Twitter',
        title: 'Social marketing, made easy',
        blobColour: '#46cd86',
        tags: ['DESIGN', 'MOBILE', 'API', 'BRANDING'],
        projectType: ['UX design, ', 'UI design, ', 'Branding, ', 'Mobile App Development, ', 'API Development '],
        gaDataLabel: 'work-projects-chrorus',
    },
];

const WorkPage = class extends React.Component {
    static displayName = 'WorkPage';

    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: 'ALL',
        };
    }

    componentDidMount() {
        API.trackPage(Constants.pages.work);
        gsap.timeline()
            .from('.hero__container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })
            .from('.hero__footer .content-nav__item', { x: 10, opacity: 0, stagger: 0.15, ease: 'power1' });
    }

    filterProjects = () => {
        return this.state.tab === 'ALL' ? projects : filter(projects, p => p.tags.includes(this.state.tab));
    };

    render = () => {
        return (
            <Page title={Constants.titles.work} canonical="work">
                <div className="hero hero--half d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3">
                                <h1 className="hero__title mb-4">Our Work</h1>
                                <p className="text-light">Take a look at the latest and greatest projects
                                  we’ve built here at Solid State Group.
                                </p>
                            </div>
                        </div>
                        <div
                          className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down"
                        />
                    </div>
                    <div className="hero__footer">
                        <ul className="list-inline hero__footer__links content-nav mb-0">
                            <li
                              onClick={() => this.setState({ tab: 'ALL' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'ALL' })}
                            >
                              All Projects
                            </li>
                            <li
                              onClick={() => this.setState({ tab: 'DESIGN' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'DESIGN' })}
                            >
                              Design
                            </li>
                            <li
                              onClick={() => this.setState({ tab: 'MOBILE' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'MOBILE' })}
                            >
                              Mobile
                            </li>
                            <li
                              onClick={() => this.setState({ tab: 'API' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'API' })}
                            >
                              API Dev
                            </li>
                            <li
                              onClick={() => this.setState({ tab: 'IOT' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'IOT' })}
                            >
                              IOT
                            </li>
                            <li
                              onClick={() => this.setState({ tab: 'AUGMENTED REALITY' })}
                              className={cn('content-nav__item  list-inline-item', { 'content-nav__item--active': this.state.tab === 'AUGMENTED REALITY' })}
                            >
                              Augmented Reality
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="container mt-md-0 mt-5">
                    <InfiniteScroll
                      items={this.filterProjects()}
                      chunkSize={1}
                      pageSize={4}
                      renderItem={p => (
                          <ProjectItem
                            key={p.title}
                            href={p.href}
                            ButtonComponent={p.ButtonComponent}
                            projectImage={p.projectImage}
                            srcSet={p.srcSet}
                            subTitle={p.subTitle}
                            projectImageClass={p.projectImageClass}
                            blobColour={p.blobColour}
                            title={p.title}
                            projectType={p.projectType}
                            clientImage={p.clientImage}
                            gaDataLabel={p.gaDataLabel}
                          />
                      )}
                    />
                </div>
                <Footer gaFooterLabel="work_footer_contact"/>
            </Page>

        );
    };
};

export default WorkPage;
