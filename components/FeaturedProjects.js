import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';
import { ButtonPrimary } from './base/forms/Button';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
};

const FeaturedProjects = global.FeaturedProjects = class extends React.PureComponent {
    static displayName = 'FeaturedProjects';

    static propTypes = _propTypes;

    render() {
        const { children, ...rest } = this.props;
        return (
          <div className={cn(this.props.className,"featured-projects")}>
              <h2 className="section__title mb-5 mt-5">Featured Projects</h2>
              <div className="project--featured project--t-and-s">
                  <ProjectItem ButtonComponent={ButtonSecondary} projectImage={'/static/images/projects/tands-dashboard.svg'} subTitle="iOS and Android Mobile App" title="Rebooting female fitness for Tone and Sculpt"/>
              </div>
              <div className="project--featured project--purely hidden">
                  <ProjectItem />
              </div>
              <div className="project--featured project--ba hidden">
                  <ProjectItem />
              </div>
          </div>
        );
    }
};
export default FeaturedProjects;
