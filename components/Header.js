import React, { Children, PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import propTypes from 'prop-types';


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

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
      return (
          <div className={`navbar-container ${this.props.className || ''}`}>
              <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                  <Link href="/">
                      <a className="nav-item__link">
                        <img src="/static/images/ssg-logotype-white.png" className="brand" alt="SSG"/>
                      </a>
                  </Link>
                  <div style={{ flex: 1 }} className="navbar" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
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
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <img src="/static/images/svg-icons/mail-icon.svg" className="mr-2" />
                              <ActiveLink prefetch={false} href="/contact">
                                <a className="nav-item__link">Contact us</a>
                              </ActiveLink>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      );
  }
}

export default withRouter(Header);
