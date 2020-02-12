import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { ButtonSecondary } from './base/forms/Button';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectDetailSectionItem = global.ProjectDetailSectionItem = class extends React.PureComponent {
    static displayName = 'ProjectDetailSectionItem';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary,
    };

    render() {
        const { children, ButtonComponent, ...rest } = this.props;
        return (
            <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                <div className="col-md-6 d-flex">
                    <div className="flex-row">
                        <div className="col align-self-end">
                            <img src={this.props.imageOne || '/static/images/services/mobile-app-development.jpg'}
                                 alt="UX Design Whiteboard"
                                 className="img-fluid"/>
                        </div>

                        {this.props.imageTwo ? (
                            <div className="col align-self-end">
                                <img src={this.props.imageTwo || '/static/images/services/ux-andy.jpg'}
                                     alt="UX Design Whiteboard"
                                     className="img-fluid"/>
                            </div>
                        ) : (
                            null
                        )}

                    </div>
                </div>
                <div className="col-md-5 offset-md-1 pr-5">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">01 /
                        Design Discovery</h6>
                    <h3>{this.props.title || 'UX Research'}</h3>
                    <p className="mt-4">{this.props.description || 'We work with you to iterate on the various creative deliverables until you achieve your vision.'}</p>


                    {this.props.ProjectServiceListItem ? (
                        <div className="mt-5">
                            <h6 className="title--project-section title--project-section--small text-grey mb0">What we
                                did</h6>
                            <ul className="wide-list list-unstyled flex-row">
                                {this.props.ProjectServiceListItem}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
        );
    }
};
export default ProjectDetailSectionItem;


