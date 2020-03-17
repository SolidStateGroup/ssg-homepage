import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import { ButtonPrimary } from './base/forms/Button';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
};

const projects = [
    {
        className: 'project--t-and-s',
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/phone.png',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        tags: ['DESIGN'],
        projectNumber: ['01'],
        projectImageClass: 'img-fluid--short position-relative',

    },
    {
        className: 'project--purely',
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        tags: ['DESIGN'],
        projectNumber: ['02'],
        projectImageClass: 'position-relative',

    },
    {
        className: 'project--ba',
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/ba/ba-summary-ipad.png',
        subTitle: 'Real-time operational dashboard',
        title: 'The real-time machine: integrating with 1960s tech',
        tags: ['Cloud Infrastructure', 'Systems Integration', 'API Development'],
        projectNumber: ['03'],
        projectImageClass: 'position-relative',
    },
    {
        className: 'project--hailie',
        ButtonComponent: ButtonPrimary,
        href: '/projects/hailie',
        projectImage: '/static/images/projects/hailie/hailie-phone@1x.png',
        subTitle: 'iOS and Android Mobile App',
        title: 'Reinventing treatment of respiritory issues',
        tags: ['Cloud Infrastructure', 'Systems Integration', 'API Development'],
        projectNumber: ['04'],
        projectImageClass: 'position-relative',
    },
];

const FeaturedProjects = global.FeaturedProjects = class extends React.PureComponent {
    static displayName = 'FeaturedProjects';

    static propTypes = _propTypes;

    toggle = (index) => {
        this.setState({ index, prevIndex: this.state.index });
        const buttonPressed = !this.state.buttonPressed;

        if (buttonPressed) {
            // fade in anim

        } else {
            // fade out anim
        }
        this.setState({ buttonPressed });
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    render() {
        const { children, ...rest } = this.props;

        const activeItem = projects[this.state.index];
        const prevItem = !isNaN(this.state.prevIndex) && projects[this.state.prevIndex];
        const items = [activeItem];
        if (prevItem) {
            items.push(prevItem);
        }

        return (
            <div className={cn(this.props.className, 'featured-projects')}>
                <div className="container-fluid">
                    <h2 className="section__title section__title--dark mb-5 mt-5">Featured Projects</h2>
                </div>
                <div className="featured-projects-container position-relative">
                    {
                        [items.map(item => (
                            <div className={cn('project--featured', item.className, { active: activeItem === item })}>
                                <ProjectItem
                                  key={item.title}
                                  href={item.href}
                                  projectNumber={item.projectNumber} className={cn('project__item-featured')} ButtonComponent={item.Button}
                                  projectImage={item.projectImage}
                                  subTitle={item.subTitle} title={item.title} projectImageClass={item.projectImageClass}
                                />
                            </div>

                        ))]
                    }
                </div>

                <nav aria-label="Project page navigation" className="project-pagination-container">
                    <ul className="project-pagination">
                        {projects.map((p, i) => (
                            <li className={cn('project-pagination__item', { active: i === this.state.index })}>
                                <button onClick={() => this.toggle(i)} className="btn--transparent">
                                    <svg
                                      className="pagination-circle-icon" width={16} height={16}
                                      viewBox="0 0 16 16"
                                    >
                                        <title>Oval Copy 4</title>
                                        <circle
                                          cx={7}
                                          cy={109}
                                          r={7}
                                          transform="rotate(90 58 59)"
                                          stroke="#FFF"
                                          strokeWidth={2}
                                          fill="none"
                                          fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
};
export default FeaturedProjects;
