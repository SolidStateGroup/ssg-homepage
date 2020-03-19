import React from 'react';
import cn from 'classnames';
import filter from 'lodash/filter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import ProjectItem from '../components/ProjectItem';
import { ButtonPrimary } from '../components/base/forms/Button';

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/phone.png',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: "project__image--short",
        blobColour: "#5CC2E1",
        tags: ['DESIGN'],

    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: "#D02D55",
        tags: ['DESIGN'],

    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie/hailie-phone@1x.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        blobColour: "#FF715A",
        tags: ['DESIGN', 'MOBILE'],

    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wazoku',
        projectImage: '/static/images/projects/wazoku/2.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Ideas happen anywhere, anytime',
        blobColour: "#173E5A",
        tags: ['DESIGN', 'MOBILE'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/british-airways',
        projectImage: '/static/images/projects/ba/ba-summary-ipad.png',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        blobColour: "#3658B0",
        tags: ['API'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/wfa',
        projectImage: '/static/images/projects/wfa/wfa-1.png',
        subTitle: 'Web Application',
        title: 'Visualising data for effective marketing communications',
        blobColour: "#ff003c",
        tags: ['API'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/publicate',
        projectImage: '/static/images/projects/publicate/publicate-summary-ipad@1x.png',
        subTitle: 'Tablet & Web Application',
        title: 'Straightening out corporate documentation',
        blobColour: "#fe7101",
        tags: ['API', 'MOBILE', 'DESIGN'],
    },

    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/meownow',
        projectImage: '/static/images/projects/meownow/meownow-1@1x.png',
        subTitle: 'Responsive Website',
        title: 'Subscription service for your feline friends',
        blobColour: "#f7f7f7",
        tags: ['DESIGN', 'BRANDING', 'WEB'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/electronx',
        projectImage: '/static/images/projects/electronx/Macbook_color@1x.png',
        subTitle: 'Responsive Website',
        title: 'Tapping into the future of the electricity market',
        blobColour: "#5BABBB",
        tags: ['DESIGN', 'WEB'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/unilever',
        projectImage: '/static/images/projects/unilever/unilever-1@1x.png',
        subTitle: 'Automated ecommerce via connected scales',
        title: 'Shopping that buys itself',
        blobColour: "#007DBB",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hertz',
        projectImage: '/static/images/projects/hertz/hertz-1@1x.png',
        subTitle: 'Connected Car mobile application',
        title: 'Feels on wheels',
        blobColour: "#FFD60D",
        tags: ['DESIGN', 'MOBILE', 'IOT'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/glenfiddich',
        projectImage: '/static/images/projects/glenfiddich/glenfiddich-1@1x.png',
        subTitle: 'Multiplayer AR racing game for mobile',
        title: 'Glenfiddich Stag Racing - When Whisky Meets Hackathons',
        blobColour: "#483c3c",
        tags: ['DESIGN', 'MOBILE', 'AUGMENTED REALITY'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/change-please',
        projectImage: '/static/images/projects/change-please/Rotato Snapshot@1x.png',
        subTitle: 'The lean, mean, face detecting, debt tracking machine',
        title: 'Changing the [face] of debt tracking',
        blobColour: "#908DF7",
        tags: ['DESIGN', 'MOBILE'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/visa',
        projectImage: '/static/images/projects/visa/visa-1@1x.png',
        subTitle: 'Instant payment integration with NFC Ring',
        title: 'Cakewalk on the catwalk',
        blobColour: "#1a1e5a",
        tags: ['DESIGN', 'MOBILE'],
    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/dugout',
        projectImage: '/static/images/projects/dugout/dugout-1@1x.png',
        subTitle: 'Developing with React and React Native',
        title: 'Making fantasy football a reality',
        blobColour: "#D8315B",
        tags: ['DESIGN', 'MOBILE'],
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

    filterProjects = () => {
        return this.state.tab === 'ALL' ? projects : filter(projects, p => p.tags.includes(this.state.tab));
    }

  render = () => {
      return (
          <Page title={Constants.titles.services} canonical="services">
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
                      </ul>
                  </div>
              </div>

              <div className="container">
                  {this.filterProjects().map(p => (
                      <ProjectItem
                        key={p.title}
                        href={p.href}
                        ButtonComponent={p.ButtonComponent}
                        projectImage={p.projectImage}
                        subTitle={p.subTitle}
                        projectImageClass={p.projectImageClass}
                        blobColour={p.blobColour}
                        title={p.title}
                      />

                  ))}
              </div>
              <Footer/>
          </Page>

      );
  };
};

export default WorkPage;
