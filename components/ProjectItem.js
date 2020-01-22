import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
};

const ProjectItem = global.ProjectItem = class extends React.PureComponent {
    static displayName = 'ProjectItem';

    static propTypes = _propTypes;

    render() {
        const { children, ...rest } = this.props;
        return (
          <div className={cn(this.props.className, 'project__item')}>
              <div className="flex-1 align-self-stretch row flex-row">
                  <div className="flex-1 justify-content-start p-5">
                      <div>
                          <h2 className="project__title">We design and build amazing digital products</h2>
                          <ButtonSecondary>View latest projects</ButtonSecondary>
                      </div>
                  </div>
                  <div className="flex-1 align-items-center justify-content-center hero__gfx-container">
                      <img src="/static/images/projects/tands-dashboard.svg" alt="Tone and Sculpt" className="img-fluid"/>
                  </div>
              </div>
          </div>
        );
    }
};
export default ProjectItem;
