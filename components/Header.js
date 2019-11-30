import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
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
                          >
                              <a className="nav-item nav-item-brand nav-link">
                              {isLegal ? null : (
                                  <Row>
                                      {isHomepage || isDark ? (
                                          <amp-img
                                            width="185.547px"
                                            height="24px"
                                            title="Bullet Train"
                                            src="/static/images/bullet-train-1.svg"
                                            className="brand" alt="Bullet Train logo"
                                          />)
                                          : (
                                              <amp-img
                                                width="185.547px"
                                                height="24px"
                                                title="Bullet Train"
                                                src="/static/images/bullet-train-black.svg"
                                                className="brand" alt="Bullet Train logo"
                                              />
                                          )}
                                  </Row>
                              )}
                              </a>
                          </Link>
                      </div>
                  </div>
                  <div className="navbar-right">
                      <div>
                          <div className="hidden-sm-down">
                              <ul className="nav-list list-unstyled float-right">
                                  <li><Link prefetch={false} href="/features"><a>Features</a></Link></li>
                                  <li><Link prefetch={false} href="/pricing"><a>Pricing</a></Link></li>
                                  <li><Link prefetch={false} href="https://docs.bullet-train.io/"><a>Documentation</a></Link></li>
                                  <li><Link prefetch={false} href="/open-source"><a>Open Source</a></Link></li>
                                  <li><Link prefetch={false} href={`${Project.appUrl}login`}><a>Sign in</a></Link></li>
                              </ul>
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
