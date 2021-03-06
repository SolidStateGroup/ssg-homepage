import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import { ButtonSecondary } from './base/forms/Button';
import Page from './Page';
import {withRouter} from 'next/router';
import {projects} from '../pages/work';
import findIndex from 'lodash/findIndex'
const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectNav = global.ProjectNav = class extends React.PureComponent {
    static displayName = 'ProjectNav';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary,
    };

    render() {
        const { children, router:{route}, ButtonComponent, ...rest } = this.props;
        const index = findIndex(projects,{href:route})
        const nextProject = projects[index+1] || projects[0];
        const {clientImage, href} = nextProject;
        return (
          <div className="section section--grey">
          <div className="container">
                <div className="flex-row mt-4 mb-4 project-bottom-nav justify-content-end">
                    <div className="project-bottom-nav__item">
                        <h2 className="section__title--dark">Next Case Study</h2>
                        <img src={clientImage} className="img-fluid project-bottom-nav__image mt-3" alt="Client logo"/>
                        <Link prefetch={false} href={href || "#"}>
                            <ButtonPrimary className="d-block mt-4">View Project
                                <svg
                                    className="ml-2" width={15} height={12}
                                    viewBox="0 0 15 12"
                                >
                                    <path
                                        d="M9.232.294l5.634 5.396a.426.426 0 010 .62l-5.634 5.396a.469.469 0 01-.646 0l-.269-.26a.426.426 0 010-.619L12.72 6.62H.884a.448.448 0 01-.456-.438v-.364c0-.24.205-.438.456-.438h11.835L8.32 1.173a.426.426 0 010-.62l.27-.259a.464.464 0 01.64 0z"
                                        fill="#fff"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </ButtonPrimary>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        );
    }
};
export default withRouter(ProjectNav);
