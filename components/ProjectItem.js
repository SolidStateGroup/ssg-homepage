import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import {ButtonSecondary} from './base/forms/Button';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectItem = global.ProjectItem = class extends React.PureComponent {
    static displayName = 'ProjectItem';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary
    }

    render() {
        const { children, ButtonComponent, ...rest } = this.props;
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
                          <ButtonComponent className="hidden-sm-down">View project</ButtonComponent>
                      </div>
                  </div>
                  <div className="col align-items-center justify-content-center hero__gfx-container text-center">
                      <img src={this.props.projectImage || "/static/images/projects/tands-dashboard.svg"} alt="Tone and Sculpt" className="img-fluid"/>
                      <ButtonSecondary className="hidden-sm-up">View project</ButtonSecondary>
                  </div>
              </div>
          </div>
        );
    }
};
export default ProjectItem;
