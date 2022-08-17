import React, { Children, PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import propTypes from 'prop-types';
import cn from 'classnames';
import { ButtonPrimary } from './base/forms/Button';

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

    componentDidMount() {
        gsap.timeline();

        const controller = new ScrollMagic.Controller();

        const tl1 = new gsap.timeline();

        tl1.from('.navbar-fixed', 0.25, { autoAlpha: 0, pointerEvents: 'none', ease: 'power1' });

        const scene1 = new ScrollMagic.Scene({
            reverse: true,
            offset: 100,

        })

          .setTween(tl1);

        controller.addScene([
            scene1,
        ]);
    }


    render() {
        return (
            <React.Fragment>
                <div className={`navbar-container ${this.props.className || ''}`}>
                    <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/images/ssg-logotype-white.svg" className="brand" alt="SSG"/>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/images/ssg-mark-white.svg" className="brand-mark" alt="SSG"/>
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
                                    <ActiveLink prefetch={false} href="/technology">
                                        <a className="nav-item__link nav-item__link--circle">Technology</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/blog">
                                        <a className="nav-item__link nav-item__link--circle">Blog</a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item nav-item--contact desktop-menu__item" onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'desktop_header_contact' })}>

                                    <ActiveLink prefetch={false} href="/contact-form">
                                        <ButtonPrimary className="min-width-auto pl-3 pr-3">
                                            <svg
                                              className="mr-2" width={23} height={17}
                                              viewBox="0 0 23 17"
                                            >
                                                <title>Group</title>
                                                <path
                                                  className="contact-icon"
                                                  d="M20.045 0H2.074A2.074 2.074 0 000 2.074v12.441c0 1.145.929 2.074 2.074 2.074h17.97a2.074 2.074 0 002.074-2.074V2.074A2.074 2.074 0 0020.045 0zM2.074 1.382h17.97c.381 0 .692.311.692.692v1.788c-.946.8-2.298 1.9-6.506 5.24-.73.58-2.169 1.974-3.17 1.957-1.003.017-2.446-1.378-3.172-1.957-4.207-3.34-5.56-4.44-6.506-5.24V2.074c0-.38.311-.692.692-.692zm17.97 13.824H2.075a.693.693 0 01-.692-.69V5.658c.985.808 2.54 2.057 5.647 4.523.885.709 2.45 2.268 4.03 2.26 1.573.013 3.124-1.534 4.03-2.26 3.107-2.466 4.662-3.715 5.647-4.523v8.856c0 .38-.311.691-.691.691z"
                                                  fill="#FFF"
                                                  fillRule="nonzero"
                                                />
                                            </svg>
                                            Contact Us
                                        </ButtonPrimary>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.toggle} href="#">
                                        {this.state.menuOpen ? (
                                            <img alt="Close Menu" src={require('../public/images/svg-icons/close-icon.svg')} className="mobile-menu__icon mobile-menu__icon--close" />
                                        ) : (
                                            <img alt="Menu" src={require('../public/images/svg-icons/menu-icon.svg')} className="mobile-menu__icon" />
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
                                        <a href="/technology" className="mainmenu__item">Technology</a>
                                        <a href="/blog" className="mainmenu__item">Blog</a>
                                        <a href="/contact" className="mainmenu__item" onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'mobile_header_contact' })}>Contact</a>
                                    </div>
                                </div>

                            </div>
                            <div className="mobile-menu__bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <a href="https://www.facebook.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Facebook" src={require('../public/images/platforms/facebook.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://twitter.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Twitter" src={require('../public/images/platforms/twitter.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/SolidStateGroup" target="_blank" rel="noreferrer">
                                                <img alt="GitHub" src={require('../public/images/svg-icons/github-image.svg')}/>
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

                {/*Fixed navigation that fades in*/}
                <div className="navbar-container navbar-fixed pl-3 pr-3">
                    <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/images/ssg-logotype-white.svg" className="brand" alt="SSG"/>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-item__link">
                                <img src="/images/ssg-mark-white.svg" className="brand-mark" alt="SSG"/>
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
                                    <ActiveLink prefetch={false} href="/technology">
                                        <a className="nav-item__link nav-item__link--circle">Technology</a>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink prefetch={false} href="/blog">
                                        <a className="nav-item__link nav-item__link--circle">Blog</a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item nav-item--contact desktop-menu__item" onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'desktop_header_contact' })}>
                                    <ActiveLink prefetch={false} href="/contact-form">
                                        <ButtonPrimary className="min-width-auto pl-3 pr-3">
                                            <svg
                                              className="mr-2" width={23} height={17}
                                              viewBox="0 0 23 17"
                                            >
                                                <title>Group</title>
                                                <path
                                                  className="contact-icon"
                                                  d="M20.045 0H2.074A2.074 2.074 0 000 2.074v12.441c0 1.145.929 2.074 2.074 2.074h17.97a2.074 2.074 0 002.074-2.074V2.074A2.074 2.074 0 0020.045 0zM2.074 1.382h17.97c.381 0 .692.311.692.692v1.788c-.946.8-2.298 1.9-6.506 5.24-.73.58-2.169 1.974-3.17 1.957-1.003.017-2.446-1.378-3.172-1.957-4.207-3.34-5.56-4.44-6.506-5.24V2.074c0-.38.311-.692.692-.692zm17.97 13.824H2.075a.693.693 0 01-.692-.69V5.658c.985.808 2.54 2.057 5.647 4.523.885.709 2.45 2.268 4.03 2.26 1.573.013 3.124-1.534 4.03-2.26 3.107-2.466 4.662-3.715 5.647-4.523v8.856c0 .38-.311.691-.691.691z"
                                                  fill="#FFF"
                                                  fillRule="nonzero"
                                                />
                                            </svg>
                                            Contact Us
                                        </ButtonPrimary>
                                    </ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.toggle} href="#">
                                        {this.state.menuOpen ? (
                                          <img alt="Close Menu" src={require('../public/images/svg-icons/close-icon.svg')} className="mobile-menu__icon mobile-menu__icon--close" />
                                        ) : (
                                          <img alt="Menu" src={require('../public/images/svg-icons/menu-icon.svg')} className="mobile-menu__icon" />
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
                                        <a href="/technology" className="mainmenu__item">Technology</a>
                                        <a href="/blog" className="mainmenu__item">Blog</a>
                                        <a href="/contact" className="mainmenu__item" onClick={() => API.trackEvent({ category: 'Buttons', event: 'view', label: 'mobile_header_contact' })}>Contact</a>
                                    </div>
                                </div>

                            </div>
                            <div className="mobile-menu__bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <a href="https://www.facebook.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Facebook" src={require('../public/images/platforms/facebook.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://twitter.com/solidstategroup" target="_blank" rel="noreferrer">
                                                <img alt="Twitter" src={require('../public/images/platforms/twitter.svg')}/>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/SolidStateGroup" target="_blank" rel="noreferrer">
                                                <img alt="GitHub" src={require('../public/images/svg-icons/github-image.svg')}/>
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
