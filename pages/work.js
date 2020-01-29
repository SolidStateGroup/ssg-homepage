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
        projectImage: '/static/images/projects/tands-summary-image.png',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        tags: ['DESIGN'],

    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/pc-summary-image.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        tags: ['DESIGN'],

    },
    {
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie-summary-image.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
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
                  <div className="hero__footer hidden-sm-down">
                      <ul className="list-inline content-nav mb-0">
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
                        title={p.title} className="mb-5"
                      />

                  ))}
              </div>
              <Footer/>
          </Page>

      );
  };
};

export default WorkPage;
