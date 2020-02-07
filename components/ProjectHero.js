import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Header from "../components/Header";
import ProjectHeroPulse from "../components/animation/ProjectHeroPulse";

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectHero = global.ProjectHero = class extends React.PureComponent {
    static displayName = 'ProjectHero';

    static propTypes = _propTypes;

    // static defaultProps = {
    //     ButtonComponent: ButtonSecondary,
    // };

    render() {
        const { children} = this.props;
        return (
            <React.Fragment>
                <div className={cn(this.props.className, ' hero hero--three-quarters d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4')}>
                    <Header className="navbar-container--transparent"/>
                    <div className="d-flex flex-1">
                        <div className="container align-self-center">
                            <div className="flex-row">
                                <div className="col-md-4">
                                    <h5 className="title--light mb-0">{this.props.projectType || 'iOS and Android Mobile App'}</h5>
                                    <h1 className="hero__title mb-4">{this.props.projectTitle || 'Rebooting female fitness for Tone and Sculpt'}</h1>

                                    <h6 className="text-uppercase title--light opacity--70 mt-5">Services</h6>
                                    <ul className="text-list list-inline mb-4">
                                        <li className="text-list__item list-inline-item">Research,</li>
                                        <li className="text-list__item list-inline-item">UX design,</li>
                                        <li className="text-list__item list-inline-item">UI design,</li>
                                        <li className="text-list__item list-inline-item">Mobile App Development,</li>
                                        <li className="text-list__item list-inline-item">API Development</li>
                                    </ul>

                                    <h6 className="text-uppercase title--light opacity--70 mt-5">Technology</h6>
                                    <ul className="text-list list-inline mb-4">
                                        <li className="text-list__item list-inline-item">React Native,</li>
                                        <li className="text-list__item list-inline-item">AWS,</li>
                                        <li className="text-list__item list-inline-item">PostgreSQL,</li>
                                        <li className="text-list__item list-inline-item">Django 2,</li>
                                        <li className="text-list__item list-inline-item">Python</li>
                                    </ul>
                                </div>
                                <div className="offset-md-2 col-md-6 text-center">
                                    <img src="/static/images/projects/tands-dashboard.png" alt="Blob Graphic" className="img-fluid"/>

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
