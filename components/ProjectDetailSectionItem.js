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

const ProjectDetailSectionItem = global.ProjectDetailSectionItem = class extends React.PureComponent {
    static displayName = 'ProjectDetailSectionItem';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary,
    };

    componentDidMount() {

    }

    render() {
        const {children, ButtonComponent, ...rest} = this.props;
        return (
            <div className={cn(this.props.className, 'row project-section-item pt-5 pb-5')}>
                <div className="col-md-6 d-flex justify-content-center align-self-center">
                    <div className="flex-row">
                        {this.props.imageOne ? (
                            <div className="col align-self-end">
                                <img
                                    src={this.props.imageOne || '/static/images/services/mobile-app-development.jpg'}
                                    srcSet={this.props.srcSetImageOne}
                                    alt={this.props.altImageOne || null}
                                    className={cn(this.props.imageOneclassName, "img-fluid mb-md-0 mb-5")}
                                />
                            </div>
                        ) : (
                            null
                        )}
                        {this.props.imageTwo ? (
                            <div className="col align-self-end">
                                <img
                                    src={this.props.imageTwo || '/static/images/services/ux-andy.jpg'}
                                    srcSet={this.props.srcSetImageTwo}
                                    alt={this.props.altImageTwo || null}
                                    className={cn(this.props.imageTwoclassName, "img-fluid")}
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

                        {this.props.iframe ? (
                            <div className="col align-self-end">
                                {this.props.iframe}
                            </div>
                        ) : (
                            null
                        )}


                    </div>
                </div>

                <div className="col-md-5 offset-md-1 pr-5">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || 'Design Discovery'}</h6>
                    <h3>{this.props.title || null}</h3>
                    <p className="mt-4 project-section-item__text">{this.props.description || null}</p>


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
        const {props} = this;
        return (
            <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                <div className="col-md-5 offset-md-1 pr-5">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || 'Development'}</h6>
                    <h3>{this.props.title || 'Technology Used'}</h3>
                    <p className="mt-4">{this.props.description || null}</p>

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
                    <div className="flex-row mt-3">
                        {this.props.techLogoItems ? (
                            <React.Fragment>
                                {this.props.techLogoItems}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className="col-md-4 col-6 text-center">
                                    <img src='/static/images/tech-icons/dark/react.svg' className='img-responsive'/>
                                </div>
                                <div className="col-md-4 col-6 text-center">
                                    <img src='/static/images/tech-icons/dark/node.svg' className='img-responsive'/>
                                </div>
                                <div className="col-md-4 col-6 text-center">
                                    <img src='/static/images/tech-icons/dark/docker.svg' className='img-responsive'/>
                                </div>
                                <div className="col-md-4 col-6 text-center mb-md-0 mb-4">
                                    <img src='/static/images/tech-icons/dark/java.svg' className='img-responsive'/>
                                </div>
                                <div className="col-md-4 col-6 text-center">
                                    <img src='/static/images/tech-icons/dark/postgres.svg' className='img-responsive'/>
                                </div>
                                <div className="col-md-4 col-6 text-center">
                                    <img src='/static/images/tech-icons/dark/aws.svg' className='img-responsive'/>
                                </div>
                            </React.Fragment>
                        )}

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
        const {props} = this;
        return (
            <div id={this.props.id} className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                <div className="col-md-4 offset-md-1">
                    <h6 className="title--project-section title--project-section--small text-grey mb0">{this.props.subTitle || '01 / Overview'}</h6>
                </div>
                <div className="col-md-6 offset-md-1">

                    {this.props.title ? (
                        <h3 className="mb-4">{this.props.title || null}</h3>
                    ) : (
                        null
                    )}
                    {this.props.description ? (
                        <div className="flex-row">
                            <p className="project-section-item__text">{this.props.description || null}</p>
                        </div>
                    ) : (
                        null
                    )}

                    {this.props.bulletedList ? (

                        <ul className="project-section-item__list">
                            {this.props.bulletedList || null}
                        </ul>

                    ) : (
                        null
                    )}
                </div>
            </div>
        );
    }
};

export const ProjectColourBlockSection = global.ProjectColourBlockSection = class extends React.PureComponent {
    static displayName = 'ProjectColourBlockSection';

    static propTypes = _propTypes;

    render() {
        const {props} = this;
        return (
            <React.Fragment>

                <div className={cn(this.props.className, 'row project__section-item pt-5 pb-5')}>
                    <div className="offset-md-1 col-md-5">
                        <h3 className="mb-3">Primary Colours</h3>
                        <img src={this.props.imageOne || '/static/images/projects/wazoku/wazoku-colours.png'}
                             className="img-fluid"/>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="offset-sm-7 col-md-5">
                        <h3 className="mb-3">Secondary Colours</h3>
                        <img src={this.props.imageTwo || '/static/images/projects/wazoku/wazoku-secondary-colours.png'}
                             className="img-fluid"/>
                    </div>
                </div>


            </React.Fragment>

        );
    }
};

export const ProjectFullImageSection = global.ProjectFullImageSection = class extends React.PureComponent {
    static displayName = 'ProjectFullImageSection';

    static propTypes = _propTypes;

    render() {
        const {props} = this;
        return (
            <div className={cn(this.props.className, 'p-3')}>
                <div className="text-center">
                    <div className={this.props.textClassName}>
                        <h6 className="title--project-section title--project-section--small text-grey">{props.subTitle}</h6>
                        <h3>{props.title}</h3>

                        {this.props.description ? (

                          <div className="offset-md-3 col-md-6">
                              <p className="project-section-item__text mt-4">{this.props.description}</p>
                          </div>

                        ) : (
                          null
                        )}

                    </div>
                    <img src={props.imageUrl} srcSet={props.srcSet || null} alt={props.imageAltText} className={cn(this.props.imageClassName, 'img-fluid  py-5')}  />
                </div>
            </div>
        );
    }
};

export const ProjectFullVideoSection = global.ProjectFullVideoSection = class extends React.PureComponent {
    static displayName = 'ProjectFullVideoSection';
    static propTypes = _propTypes;

    render() {
        const {props} = this;
        return (
            <div className={this.props.className}>

                {this.props.title ? (
                    <h3 className="text-center mb-5 mt-5">{props.title}</h3>
                ) : (
                    null
                )}

                {this.props.videoLink ? (
                    <div className="col-md-12 pr-0 pl-0">
                        <video width="100%" autoPlay={true} muted={true} loop={true}>
                            <source
                                src={this.props.videoLink || "https://storage.cloud.google.com/ssg-website-images/video/Hailie%204k.mov"}
                                type="video/mp4"/>
                        </video>
                    </div>

                ) : (
                    null
                )}

                {this.props.youtubeLink ? (
                    <div className="embed-responsive embed-responsive-16by9 mb-5">
                        <iframe className="embed-responsive-item"
                                src={this.props.youtubeLink || "https://www.youtube.com/embed/ePI_25LuTLc"}
                                allowFullScreen=""/>
                    </div>

                ) : (
                    null
                )}

            </div>


        );
    }
};

export const ProjectPrototypeSection = global.ProjectPrototypeSection = class extends React.PureComponent {
    static displayName = 'ProjectPrototypeSection';
    static propTypes = _propTypes;

    render() {
        const {props} = this;
        return (
          <div className={this.props.className}>

              {this.props.title ? (
                <h3 className="text-center mb-5 mt-5">{props.title}</h3>
              ) : (
                null
              )}

              {this.props.prototypeLink ? (

                <div className="col-md-12 text-center">

                    <iframe width="100%" height="650"
                            src={this.props.prototypeLink}
                            allowFullScreen></iframe>

                </div>

              ) : (
                null
              )}

          </div>


        );
    }
};
