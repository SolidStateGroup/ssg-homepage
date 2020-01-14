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

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    render() {
        const addedClass = this.state.menuOpen ? 'd-block' : ' d-none ';
        return (
            <div className={`navbar-container ${this.props.className || ''}`}>
                <div className="container">
                    <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                        <Link
                          href="/"
                        >
                            <a className="nav-link navbar-brand">
                                <img
                                  title="Bullet Train" height={24}
                                  src="/static/images/bullet-train-1.svg"
                                  className="brand " alt="Bullet Train logo"
                                />
                            </a>
                        </Link>
                        <div style={{ flex: 1 }} className="navbar" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className={`nav-item d-sm-block${addedClass}`}>
                                    <Link prefetch={false} href="/pricing"><a className="nav-link">Pricing</a></Link>
                                </li>
                                <li className={`nav-item d-sm-block${addedClass}`}>
                                    <Link prefetch={false} href="https://docs.bullet-train.io/"><a className="nav-link">Documentation</a></Link>
                                </li>
                                <li className={`nav-item d-sm-block${addedClass}`}>
                                    <Link prefetch={false} href="/open-source"><a className="nav-link">Open Source</a></Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={`nav-item d-sm-block${addedClass}`}>
                                    <Link prefetch={false} href="?signup">
                                        <a className="nav-link">
                                            <span className="nav-link-featured">
                                            Try it Free
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <Link prefetch={false} href={`${Project.appUrl}login`}><a className="nav-link">Log in</a></Link>
                                </li>
                                <li className="nav-item d-block d-lg-none">
                                    <a onClick={this.toggleMenu}>
                                        <img width={32} src="/static/images/menu.svg"/>
                                    </a>
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
