import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';

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
          <div className="featured-projects">
              <div className="project--featured project--t-and-s">
                  <ProjectItem />
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
