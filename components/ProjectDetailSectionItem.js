import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { ButtonSecondary } from './base/forms/Button';
import ReactLogo from './TechIcons/ReactLogo';
import NodeLogo from './TechIcons/NodeLogo';
import DockerLogo from './TechIcons/DockerLogo';
import JavaLogo from './TechIcons/JavaLogo';
import PostgresLogo from './TechIcons/PostgresLogo';
import AWSLogo from './TechIcons/AWSLogo';

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
            <div className={cn(this.props.className, 'row project-section-item pt-5 pb-5')}>
                <div className="col-md-6 d-flex justify-content-center align-self-center">
                    <div className="flex-row">
                        {this.props.imageOne ? (
                        <div className="col align-self-end">
                            <img
                              src={this.props.imageOne || '/static/images/services/mobile-app-development.jpg'}
                              alt="UX Design Whiteboard"
                              className={cn(this.props.imageOneclassName, "img-fluid")}
                            />
                        </div>
                        ) : (
                            null
                        )}
                        {this.props.imageTwo ? (
                            <div className="col align-self-end">
                                <img
                                  src={this.props.imageTwo || '/static/images/services/ux-andy.jpg'}
                                  alt="UX Design Whiteboard"
                                  className="img-fluid"
                                />
                            </div>
                        ) : (
                            null
                        )}

                        {this.props.video ? (
                            <div className="col align-self-end">
                                <video preload="none" autoPlay={true} muted={true} loop={true} width="100%">
                                    <source
                                        src={this.props.video || "https://storage.googleapis.com/ssg-website-images/case-studies/purely-capital/quote-confirmationv2.mov"}
                                        type="video/mp4"/>
                                </video>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                </div>

                <div className="col-md-5 offset-md-1 pr-5">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || 'Design Discovery'}</h6>
                    <h3>{this.props.title || null}</h3>
                    <p className="mt-4 project-section-item__text">{this.props.description || null }</p>


                    {this.props.ProjectServiceListItem ? (
                        <div className="mt-5">
                            <h6 className="title--project-section title--project-section--small text-grey mb0">
                                What we did
                            </h6>
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


export const ProjectTechSection = global.ProjectTechSection = class extends React.PureComponent {
    static displayName = 'ProjectTechSection';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                <div className="col-md-5 offset-md-1 pr-5">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || 'Development'}</h6>
                    <h3>{this.props.title || 'Technology Used'}</h3>
                    <p className="mt-4">{this.props.description || 'We work with you to iterate on the various creative deliverables until you achieve your vision.'}</p>


                    {this.props.ProjectServiceListItem ? (
                        <div className="mt-5">
                            <h6 className="title--project-section title--project-section--small text-grey mb0">What we
                                did
                            </h6>
                            <ul className="wide-list list-unstyled flex-row">
                                {this.props.ProjectServiceListItem}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                </div>
                <div className="col-md-6 d-flex">
                    <div className="flex-row">
                        <div className="col-md-4 col-6 text-center">
                            <ReactLogo fill="#2C2733" className="client-logo--large"/>
                        </div>
                        <div className="col-md-4 col-6 text-center">
                            <NodeLogo fill="#2C2733" className="client-logo--medium"/>
                        </div>
                        <div className="col-md-4 col-6 text-center">
                            <DockerLogo fill="#2C2733" className="logo--medium"/>
                        </div>
                        <div className="col-md-4 col-6 text-center mb-md-0 mb-4">
                            <JavaLogo fill="#2C2733" className="client-logo--small"/>
                        </div>
                        <div className="col-md-4 col-6 text-center">
                            <PostgresLogo fill="#2C2733" className="client-logo--large"/>
                        </div>
                        <div className="col-md-4 col-6 text-center">
                            <AWSLogo fill="#2C2733" className="client-logo--medium"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export const ProjectTextSection = global.ProjectTextSection = class extends React.PureComponent {
    static displayName = 'ProjectTextSection';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                <div className="col-md-4 offset-md-1">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || '01 / Overview'}</h6>
                </div>
                <div className="col-md-6 offset-md-1">

                    {this.props.title ? (
                        <h3 className="mb-4">{this.props.title || null}</h3>
                    ) : (
                        null
                    )}

                    <div className="flex-row">
                        <p className="project-section-item__text">{this.props.description || 'Lorem ipsum dolor sit amet, dictas similique incorrupte ut mei, vel eu nusquam noluisse. Etiam interpretaris ea sea, nec tibique omittantur no. Ei mucius inimicus dissentiunt vim, no quo noster adolescens, ne per efficiendi intellegam. Cum inani harum adversarium et, officiis euripidis incorrupte cu ius.'}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export const ProjectColourBlockSection = global.ProjectColourBlockSection = class extends React.PureComponent {
    static displayName = 'ProjectColourBlockSection';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <React.Fragment>

                <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                    <div className="offset-md-1 col-md-5">
                        <h3 className="mb-3">Primary Colours</h3>
                        <img src={this.props.imageOne || '/static/images/projects/wazoku/wazoku-colours.png'} className="img-fluid"/>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="offset-sm-7 col-md-5">
                        <h3 className="mb-3">Secondary Colours</h3>
                        <img src={this.props.imageTwo ||'/static/images/projects/wazoku/wazoku-secondary-colours.png'} className="img-fluid" />
                    </div>
                </div>



            </React.Fragment>

        );
    }
};

export const ProjectFullImageSection = global.ProjectTextSection = class extends React.PureComponent {
    static displayName = 'ProjectTextSection';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <div>
                <div className="text-center px-3">
                    <h6 className="title--project-section title--project-section--small text-grey">03 / UI Design</h6>
                    <h3>UI Components</h3>
                    <img src="/static/images/projects/tone-and-sculpt/ui-components.png" alt={'Tone and Sculpt UI'} />
                </div>
            </div>
        );
    }
};