import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Popover from './base/Popover';
import Button from './base/forms/Button';
// import propTypes from 'prop-types';

class Header extends PureComponent {
  static displayName = 'Header';

  static propTypes = {};

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
      // todo: fix
      const isLegal = false;
      const isHomepage = this.props.router.pathname === '/';
      const redirect = '';
      const isDark = !isHomepage;
      return (
      <>
          <nav
            className={`navbar navbar-fixed-top ${isLegal ? 'navbar-aside dark-header ' : ''}${isDark ? ' dark-header ' : ''}${this.state.myClassName ? this.state.myClassName : ''}`}
          >
              <Row space>
                  <div className="navbar-left">
                      <div className="navbar-nav">
                          <Link
                            href="/"
                            className="nav-item nav-item-brand nav-link"
                          >
                              {isLegal ? null : (
                                  <Row>
                                      {isHomepage || isDark ? (
                                          <img
                                            title="Bullet Train" height={24}
                                            src="/static/images/bullet-train-1.svg"
                                            className="brand" alt="Bullet Train logo"
                                          />)
                                          : (
                                              <img
                                                title="Bullet Train" height={24}
                                                src="/static/images/bullet-train-black.svg"
                                                className="brand" alt="Bullet Train logo"
                                              />
                                          )}
                                  </Row>
                              )}
                          </Link>
                      </div>
                  </div>
                  <div className="navbar-right">
                      <div>

                          <div className="hidden-sm-down">
                              <Link prefetch={false} className="float-right" to={`/${redirect}`} onClick={Utils.scrollToSignUp}>
                                  <Button className="btn-primary">Login</Button>
                              </Link>
                              <ul className="nav-list list-unstyled float-right">
                                  <li><Link prefetch={false} href="/features"><a>Features</a></Link></li>
                                  <li><Link prefetch={false} href="/pricing"><a>Pricing</a></Link></li>
                                  <li><Link prefetch={false} href="https://docs.bullet-train.io/">Demo</Link></li>
                                  <li><Link prefetch={false} href="/open-source">Open Source</Link></li>
                                  <li><Link prefetch={false} href={`${Project.appUrl}demo`}>Demo</Link></li>
                              </ul>
                          </div>


                          <div className="hidden-md-up">
                              <Popover
                                className="popover-right mobile-navigation"
                                renderTitle={(toggle, isActive) => (
                                    <div className="mobile-navigation__button" onClick={toggle}>
                                        <ion
                                          className={isActive ? 'icon ion-ios-close' : 'icon ion-md-menu'}
                                        />
                                    </div>
                                )}
                                ref={c => this.mobileNav = c}
                              >
                                  {toggle => (
                                      <div className="mobile-navigation__bg">
                                          <ul className="list-unstyled mb-0">
                                              <li><Link prefetch={false} to="/features">Features</Link></li>
                                              <li><Link prefetch={false} to="/pricing">Pricing</Link></li>
                                              <li><Link prefetch={false} to="https://docs.bullet-train.io">Documentation</Link></li>
                                              <li><Link to="/open-source">Open Source</Link></li>
                                              <li><Link to={`${Project.appUrl}demo`}>Demo</Link></li>
                                              <li>
                                                  <Link to={`/login${redirect}`}>
                                                      <Button className="btn-block">Login</Button>
                                                  </Link>
                                              </li>
                                          </ul>
                                      </div>
                                  )}
                              </Popover>
                          </div>


                      </div>
                  </div>
              </Row>
          </nav>
      </>
      );
  }
}

export default withRouter(Header);
