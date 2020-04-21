import React, { Children, PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import propTypes from 'prop-types';
import cn from 'classnames';

const ActiveLink = withRouter(({ router, children, ...props }) => (
    <Link {...props}>
        {React.cloneElement(Children.only(children), {
            className:
        `/${router.pathname.split('/')[1]}` === props.href ? `${children.props.className} active` : children.props.className,
        })}
    </Link>
));

class Header extends PureComponent {
  static displayName = 'Header';

  static propTypes = {
      className: propTypes.string,
  };

  constructor(props) {
      super(props);
      this.state = {};
  }

    toggle = () => {
        const menuOpen = !this.state.menuOpen;
        if (menuOpen) {
            // fade in anim
            gsap.to('.mobile-menu', { duration: 0.25, opacity: 1, display: 'block', ease: 'power1' });
            gsap.to('.mainmenu', { duration: 0.5, y: '5%', opacity: 1, display: 'block', ease: 'power1.inOut' });
            gsap.from('.pulse-circle', { duration: 0.5, opacity: 0, y: -20, stagger: 0.25 });
        } else {
            // fade out anim
            gsap.to('.mobile-menu', { duration: 0.5, opacity: 0, display: 'none', ease: 'power1' });
            gsap.to('.mainmenu', { duration: 0.25, y: '0%', opacity: 0, display: 'none', ease: 'power1.inOut' });
        }
        this.setState({ menuOpen });
    }

    render() {
        return (
            <React.Fragment>
                <div className={`navbar-container ${this.props.className || ''}`}>
                    <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/static/images/ssg-logotype-white.svg" className="brand" alt="SSG"/>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/static/images/ssg-mark-white.svg" className="brand-mark" alt="SSG"/>
                            </a>
                        </Link>
                        <div style={{ flex: 1 }} className="navbar" id="navbarSupportedContent">
                            <ul className="navbar-nav desktop-menu mr-auto">
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/work">
                                        <a className="nav-item__link nav-item__link--circle">Work</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/services">
                                        <a className="nav-item__link nav-item__link--circle">Services</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/partners">
                                        <a className="nav-item__link nav-item__link--circle">Partners</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/blog">
                                        <a className="nav-item__link nav-item__link--circle">Blog</a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item desktop-menu__item">
                                    <img alt="Email" src={require('../static/images/svg-icons/mail-icon.svg')} className="mr-2" />
                                    <ActiveLink prefetch={false} href="/contact-form">
                                        <a className="nav-item__link">Contact us</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.toggle} href="#">
                                        {this.state.menuOpen ? (
                                            <img alt="Close Menu" src={require('../static/images/svg-icons/close-icon.svg')} className="mobile-menu__icon mobile-menu__icon--close" />
                                        ) : (
                                            <img alt="Menu" src={require('../static/images/svg-icons/menu-icon.svg')} className="mobile-menu__icon" />
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cn({ 'mobile-menu d-flex': true, active: this.state.menuOpen })}>
                            <div className="pulse-container">
                                <svg width={371} height={371} viewBox="0 0 371 371">
                                    <title>pulse-small</title>
                                    <defs>
                                        <filter
                                          x="-2.9%"
                                          y="-2.9%"
                                          width="105.8%"
                                          height="105.8%"
                                          filterUnits="objectBoundingBox"
                                        >
                                            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                                            <feGaussianBlur
                                              stdDeviation={2.5}
                                              in="shadowOffsetOuter1"
                                              result="shadowBlurOuter1"
                                            />
                                            <feColorMatrix
                                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.497049825 0"
                                              in="shadowBlurOuter1"
                                              result="shadowMatrixOuter1"
                                            />
                                            <feMerge>
                                                <feMergeNode in="shadowMatrixOuter1" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <g

                                      transform="translate(3 3)"
                                      fill="#FFF"
                                      fillRule="evenodd"
                                    >
                                        <circle
                                          className="pulse-circle" opacity={0.027} cx={182.25}
                                          cy={182.25} r={182.25}
                                        />
                                        <circle
                                          className="pulse-circle" opacity={0.052} cx={181.75}
                                          cy={182.75} r={136.75}
                                        />
                                        <circle
                                          className="pulse-circle" opacity={0.053} cx={182.25}
                                          cy={182.25} r={91.25}
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className="mobile-menu__item-inner d-flex">
                                <div className="mainmenu">
                                    <div className="align-self-center">
                                        <a href="/work" className="mainmenu__item" >Work</a>
                                        <a href="/services" className="mainmenu__item">Services</a>
                                        <a href="/partners" className="mainmenu__item">Partners</a>
                                        <a href="/blog" className="mainmenu__item">Blog</a>
                                        <a href="/contact" className="mainmenu__item">Contact</a>
                                    </div>
                                </div>

                            </div>
                            <div className="mobile-menu__bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <a href="https://www.facebook.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Facebook" src={require('../static/images/platforms/facebook.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://twitter.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Twitter" src={require('../static/images/platforms/twitter.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/SolidStateGroup" target="_blank" rel="noreferrer">
                                                <img alt="GitHub" src={require('../static/images/svg-icons/github-image.svg')}/>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-center text-white pt-3 pb-3">
                                      Email us at <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </React.Fragment>

        );
    }
}

export default withRouter(Header);
