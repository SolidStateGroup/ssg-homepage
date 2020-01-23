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
                  <div className="col justify-content-start p-5">
                      <div>
                          <p className="project__subtitle mb-0">iOS and Android Mobile App</p>
                          <h2 className="project__title">Rebooting female fitness for Tone and Sculpt</h2>
                          <ul className="text-list list-inline mb-4">
                              <li className="text-list__item list-inline-item">Research</li>
                              <li className="text-list__item list-inline-item">UX design</li>
                              <li className="text-list__item list-inline-item">UI design</li>
                              <li className="text-list__item list-inline-item">Mobile App Development</li>
                              <li className="text-list__item list-inline-item">API Development</li>
                          </ul>
                          <ButtonSecondary className="hidden-sm-down">View project</ButtonSecondary>
                      </div>
                  </div>
                  <div className="col align-items-center justify-content-center hero__gfx-container text-center">
                      <img src="/static/images/projects/tands-dashboard.svg" alt="Tone and Sculpt" className="img-fluid"/>
                      <ButtonSecondary className="hidden-sm-up">View project</ButtonSecondary>
                  </div>
              </div>
          </div>
        );
    }
};
export default ProjectItem;
