import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import StarRatingListItem from './StartRatingListItem';
import ButtonHexagonSidebar from './ButtonHexagonSidebar';

const _propTypes = {
    className: propTypes.string,
    isActive: propTypes.bool,
    number: propTypes.string,
    title: propTypes.string,
    icon: propTypes.string,
    href: propTypes.string,
};

const RNConversionNavItem = global.RNConversionNavItem = class extends React.PureComponent {
  static displayName = 'RNConversionNavItem';

  static propTypes = _propTypes;

  render() {
      const { children, ButtonComponent, isActive, number, title, icon, href, ...rest } = this.props;
      return (

          <Link href={this.props.href}>
              <li className="nav-item">
                  <a href="#" className={`nav-link ${this.props.isActive ? ' active' : ''}`}>
                      <div className="flex-row">
                          <ButtonHexagonSidebar
                            ButtonHexagonActive={isActive}
                            icon={`${this.props.icon} ${this.props.isActive ? ' text-primary' : ''}`}
                          />
                          <div className="col rncc__button-title">
                              <h6 className="text-light mb-0">{this.props.number}</h6>
                              <h6 className="text-navy-secondary mb-0">{this.props.title}</h6>
                          </div>
                      </div>
                  </a>
              </li>
          </Link>

      );
  }
};
export default RNConversionNavItem;
