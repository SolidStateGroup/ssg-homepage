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

  componentDidMount() {
      const els = document.getElementsByClassName('nav-link');
      console.log(els);
      for (let i = 0; i < els.length; i++) {
          els[i].addEventListener('mouseleave', () => {
              for (let x = 0; x < els.length; x++) {
                  els[x].classList.remove('nav-faint');
              }
          });
          els[i].addEventListener('mouseover', function () {
              for (let x = 0; x < els.length; x++) {
                  els[x].classList.add('nav-faint');
              }
              this.classList.remove('nav-faint');
          });
      }
  }

  render() {
      return (
          <div className="navbar-container">
              <div className="container">
                  <nav className="navbar navbar-expand-lg">
                      <Link
                        href="/"
                      >
                          <a className="nav-link navbar-brand">
                              <img
                                title="Bullet Train" height={24}
                                src="/static/images/bullet-train-1.svg"
                                className="brand" alt="Bullet Train logo"
                              />
                          </a>
                      </Link>
                      <button
                        className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                          <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                  <Link prefetch={false} href="/pricing"><a className="nav-link">Pricing</a></Link>
                              </li>
                              <li className="nav-item active">
                                  <Link prefetch={false} href="https://docs.bullet-train.io/"><a className="nav-link">Documentation</a></Link>
                              </li>
                              <li className="nav-item">
                                  <Link prefetch={false} href="/open-source"><a className="nav-link">Open Source</a></Link>
                              </li>
                          </ul>
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a href="#" onClick={Utils.scrollToSignUp} className="nav-link">
                                      <span className="nav-link-featured">
                                        Try it Free
                                      </span>
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <Link prefetch={false} href={`${Project.appUrl}login`}><a className="nav-link">Log in</a></Link>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      );
  }
}

export default withRouter(Header);
