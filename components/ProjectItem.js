import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import { ButtonSecondary } from './base/forms/Button';

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
        ButtonComponent: ButtonSecondary,
    };

    componentDidMount() {
        gsap.to('#path-1 path', {duration: 8, morphSVG: "#path-2 path", yoyo: true, repeat: -1});
    }

    render() {
        const { children, ButtonComponent, ...rest } = this.props;
        return (
            <div className={cn(this.props.className, ' project__item')}>
                {this.props.projectNumber ? (
                    <h1 className="project__number d-none d-sm-block">{this.props.projectNumber}</h1>
                ) : (
                    null
                )}
                <div className="flex-1 align-self-stretch flex-row project__item-container">
                    <div className="col-md-6 justify-content-start pb-xs-0 pb-3 pt-xs-0 pt-3">
                        <div>
                            <p className="project__subtitle mb-0">{this.props.subTitle || 'Solid State Group'}</p>
                            <h2 className="project__title ">{this.props.title}</h2>
                            {this.props.clientImage ? (
                                <div className="mb-4 mt-3"><img
                                    src={this.props.clientImage}
                                    alt={this.props.clientName}
                                    className="project__client-image img-fluid"
                                />
                                </div>
                            ) : (
                               null
                            )}

                            {this.props.projectType ? (

                            <p className="project__type">
                                {this.props.projectType || null}
                            </p>

                            ) : (
                                null
                            )}

                            <Link prefetch={false} href={this.props.href}>
                                <ButtonComponent className="project__cta mt-3" onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: this.props.gaDataLabel })}>View project</ButtonComponent>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 align-items-center justify-content-center text-center project__image-container">
                        <div className="blob__container">
                            <img src={this.props.projectImage || "/public/images/projects/tone-and-sculpt/phone.png"}
                                 srcSet={this.props.srcSet || null}
                                 alt="Blob Graphic"
                                 className={cn(this.props.projectImageClass, 'project__image img-fluid blob__image')}/>
                            {this.props.blobColour ? (
                                <React.Fragment>
                                    <svg className="blob__svg" id="path-1" width={508} height={478}
                                         viewBox="0 0 508 478">
                                        <path
                                            d="M391.92 45.36C446.4 69.6 502.44 107.28 507.48 154.2c5.04 46.8-41.04 102.72-79.8 142.2-38.88 39.36-70.56 62.28-102.12 96-31.56 33.72-63 78.36-99 84.48-36 6.24-76.44-26.16-105.72-60.6-29.28-34.56-47.4-71.16-69.84-112.8C28.56 261.84 2.04 215.04.12 162.72-1.68 110.28 21.12 52.2 63.84 24c42.6-28.08 104.88-26.4 162.6-20.04 57.72 6.36 110.88 17.16 165.48 41.4z"
                                            fill={this.props.blobColour || "#69D9D3"}
                                            fillRule="nonzero"
                                        />
                                    </svg>

                                    <svg id="path-2" className="hidden" width={523} height={477} viewBox="0 0 523 477">
                                        <path
                                            d="M434.93 108.03c53.017 58.464 97.687 131.634 86.274 195.98-11.413 64.346-79.033 120.112-152.052 149.405-73.02 29.293-151.439 32.234-219.795 3.554C81.124 428.167 22.954 367.743 5.65 296.656-11.654 225.57 11.91 143.82 60.998 86.215 110.086 28.732 184.578-4.728 252.566.543c67.865 5.27 129.349 49.025 182.365 107.488z"
                                            fill="#69D9D3"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                </React.Fragment>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default ProjectItem;
