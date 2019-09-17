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
      const isDark = false;
      return (
      <>
          {isHomepage && (
          <nav className="show navbar navbar__master-brand">
              <div className="navbar-left">
                  <div className="navbar-nav">

                      <a
                        href="https://labs.solidstategroup.com/" target="__blank"
                        className="nav-item nav-item-brand nav-link"
                      >
                          <div className="nav-item-brand">
                              <img
                                src="/static/images/products-nav/labs-logo-dark.svg" alt="ssg-labs-logo"
                                className="brand"
                              />
                          </div>
                      </a>

                  </div>
              </div>

              <div className="navbar-right">
                  <Popover
                    style={{ padding: 10 }} className="popover-right"
                    renderTitle={(toggle, isActive) => (
                        <div className="products-button" onClick={toggle}>
                    Products
                            <ion
                              className={isActive ? 'ion-ios-arrow-dropup' : 'ion-ios-arrow-dropdown'}
                            />
                        </div>
                    )}
                  >
                      {toggle => (
                          <div>
                              <a
                                href="https://bullet-train.io/" target="__blank"
                                className="product-item"
                              >
                                  <img src="/static/images/products-nav/bullet-train-logo-mark.svg" alt="Bullet Train logo"/>
                                  <h5>Bullet Train</h5>
                                  <small>Release features with confidence</small>
                              </a>
                              <a
                                href="https://formlyapp.com/" target="__blank"
                                className="product-item"
                              >
                                  <img
                                    src="/static/images/products-nav/formly-logo-mark-colour.svg" alt="Formly logo"
                                  />
                                  <h5>Formly</h5>
                                  <small>Contact Forms, Simplified</small>
                              </a>
                              <a
                                href="https://uptimely.app/" target="__blank"
                                className="product-item"
                              >
                                  <img
                                    src="/static/images/products-nav/uptimely-logo-mark-colour-filled.svg" alt="Uptimely logo"
                                  />
                                  <h5>Uptimely</h5>
                                  <small>Website Monitoring. Sorted.</small>
                              </a>
                          </div>
                      )}
                  </Popover>
              </div>
          </nav>
          )}
          <nav
            className={`navbar navbar-fixed-top ${isHomepage ? ' navbar-homepage ' : ''}${isLegal ? 'navbar-aside dark-header ' : ''}${isDark ? ' dark-header ' : ''}${this.state.myClassName ? this.state.myClassName : ''}`}
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
                              <Link className="float-right" to={`/${redirect}`} onClick={Utils.scrollToSignUp}>
                                  <Button className="btn-primary">Login</Button>
                              </Link>
                              <ul className="nav-list list-unstyled float-right">
                                  <li><Link href="/features"><a>Features</a></Link></li>
                                  <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                  <li><a target="_blank" href="https://docs.bullet-train.io/">Docs</a></li>
                                  <li><Link href="/open-source">Open Source</Link></li>
                                  <li><Link href={`${Project.appUrl}/demo`}>Demo</Link></li>
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
                                              <li><Link to="/features">Features</Link></li>
                                              <li><Link to="/pricing">Pricing</Link></li>
                                              <li><a target="_blank" href="https://docs.bullet-train.io/" onClick={this.hideMobileNav}>Docs</a></li>
                                              <li><Link to="/open-source">Open Source</Link></li>
                                              <li><Link to="/demo">Demo</Link></li>
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
