import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import StarRatingListItem from './StartRatingListItem';
import ButtonHexagonSidebar from './ButtonHexagonSidebar';
import Link from 'next/link';

const _propTypes = {
  className: propTypes.string,
  children: propTypes.node,
};

const RNConversionSidebar = global.RNConversionSidebar = class extends React.PureComponent {
  static displayName = 'RNConversionSidebar';

  static propTypes = _propTypes;

  render() {
    const { children, className, ...rest } = this.props;
    return (

    <nav id="sidebarMenu" className={cn(this.props.className, ' rncc__sidebar col-md-5 col-lg-3 sidebar collapse')}>

      <div className="rncc__sidebar-meta row pl-3 mt-5 pb-5">
        <Link prefetch={false} href="/react-native-conversion-calculator/overview">
          <div className="pl-0 cursor-pointer">
            <img
              className="rncc__app-icon--small" src="/static/images/clients/app-icon.png"
              srcSet="/static/images/clients/app-icon.png 2x, /static/images/clients/app-icon.png 1x"
            />
          </div>
        </Link>
        <div className="col">
          <h2 className="text-light mb-0">7 Fitness </h2>
          <p className="text-light mb-2 text-small">Fitness International, LLC</p>
          <StarRatingListItem
            className="rating-list--small" starRating="2" numberOfRatings="4.2"
            filled icon="fab fa-app-store-ios"
          />
          <StarRatingListItem
            className="rating-list--small" starRating="2" numberOfRatings="4.2"
            filled={false} icon="fab fa-google-play"
          />
        </div>
      </div>

      <ul className="rncc__sidebar-nav nav">
        <div className="flex-row pl-3 pt-3 mb-3 no-wrap">
          <i className="fab fa-react text-react-blue" />
          <h6 className="text-light pl-3 mb-0">React Native Conversion Calculator</h6>
        </div>
        {children}
      </ul>
      <Link prefetch={false} href="/">
        <div className="rncc__sidebar-brand-container cursor-pointer">
          <p className="text-navy-secondary bold mb-0">React Native Specialists</p>
          <img src="/static/images/ssg-logotype-white.svg" className="rncc__sidebar-brand" alt="SSG"/>
        </div>
      </Link>
    </nav>
    );
  }
};
export default RNConversionSidebar;
