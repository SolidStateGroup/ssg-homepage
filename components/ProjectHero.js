import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Header from '../components/Header';
import ProjectHeroPulse from '../components/animation/ProjectHeroPulse';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectHero = global.ProjectHero = class extends React.PureComponent {
    static displayName = 'ProjectHero';

    static propTypes = _propTypes;

    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <div
                    className={cn(this.props.className, 'hero project-hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4')}>
                    <Header className="navbar-container--transparent"/>
                    <div className="d-flex flex-1 pt-5 pb-5">
                        <div className="container align-self-center">
                            <div className="flex-row">
                                <div className="offset-md-1 col-md-5">
                                    <h5 className="title--light mb-0">{this.props.projectType || 'iOS and Android Mobile App'}</h5>
                                    <h1 className="hero__title mb-4">{this.props.projectTitle || 'Rebooting female fitness for Tone and Sculpt'}</h1>


                                    <h6 className="text-uppercase title--light opacity--70 mt-5">Client</h6>
                                    <ul className="text-list list-inline mb-4">
                                        {this.props.ProjectClientName}
                                    </ul>

                                    <h6 className="text-uppercase title--light opacity--70 mt-5">Services</h6>
                                    <ul className="text-list list-inline mb-4">
                                        {this.props.ProjectServiceListItem}
                                    </ul>

                                    <h6 className="text-uppercase title--light opacity--70 mt-5">Technology</h6>
                                    <ul className="text-list list-inline mb-4">
                                        {this.props.ProjectTechListItem}
                                    </ul>
                                </div>
                                <div className="offset-md-1 col-md-5 text-center">
                                    <img src={this.props.projectImage || '/static/images/projects/tone-and-sculpt/tands-dashboard.png'}
                                         srcSet={this.props.srcSet || null}
                                         alt="Project Hero Image" className="img-fluid project-hero__image"/>
                                    <ProjectHeroPulse/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default ProjectHero;
