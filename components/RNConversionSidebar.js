import React, { FunctionComponent, useState } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StarRatingListItem from './StartRatingListItem';
import RNConversionNavItem from './RNConversionNavItem';
import { useRouterData } from '../common/useData';
import { ButtonPrimary } from './base/forms/Button';

const _propTypes = {
    className: propTypes.string,
};

const TheComponent = (props) => {
    const { className } = props;
    const router = useRouter();
    const { data } = useRouterData();
    const [isActive, setIsActive] = useState(false);
    return (

        <React.Fragment>
            <div className="rncc__navbar">
                <nav >
                    <a onClick={() => setIsActive(!isActive)} href="#" className="rncc__navbar-icon">
                        {/* if menu open */}
                        {isActive ? (
                            <img alt="Close Menu" src={require('../public/images/svg-icons/close-icon.svg')} className="d-lg-none" />
                        ) : (
                            <img alt="Menu" src={require('../public/images/svg-icons/menu-icon.svg')} className="d-lg-none" />
                        )}
                    </a>
                </nav>
            </div>

            {/*Desktop sidebar*/}
            <nav id="sidebarMenu" className={cn(className, 'rncc__sidebar col-md-0 col-lg-3 sidebar collapse hidden-md-down')}>
                <div className="rncc__sidebar-meta row pl-3 mt-5 pb-5">
                    <Link prefetch={false} href="./">
                        <div style={{ height: 109, width: 109 }} className="pl-0 cursor-pointer">
                            {data && (
                            <img
                              className="rncc__app-icon--small" src="/images/clients/app-icon.png"
                              srcSet={data?.logo}
                            />
                            )}

                        </div>
                    </Link>
                    {data && (
                    <div className="col rncc__rating-info">
                        <h2 className="text-light mb-0">{data?.title}</h2>
                        <p className="text-light mb-2 text-small">{data?.company}</p>
                        <StarRatingListItem
                          className="rating-list--small" starRating={data?.ios_rating} numberOfRatings={data?.ios_number_of_ratings}
                          filled icon="fab fa-app-store-ios"
                        />
                        <StarRatingListItem
                          className="rating-list--small" starRating={data?.android_rating} numberOfRatings={data?.android_number_of_ratings}
                          filled={false} icon="fab fa-google-play"
                        />
                    </div>
                    )}

                </div>

                <ul className="rncc__sidebar-nav nav">
                    <div className="flex-row pl-3 pt-3 mb-3 no-wrap rncc__react-logo">
                        <i className="fab fa-react text-react-blue" />
                        <h6 className="text-light pl-3 mb-0">React Native Conversion Calculator</h6>
                    </div>
                    <RNConversionNavItem
                      icon="far fa-mobile" number="01" title="Your App"
                      href="./"
                    />
                    <RNConversionNavItem
                      icon="fas fa-chart-line" number="02" title="Projected Costs"
                      href="projected" isActive={router.asPath.includes('projected')}
                    />
                    <RNConversionNavItem
                      icon="fas fa-search-dollar" number="03" title="Insights"
                      href="insights"
                      isActive={router.asPath.includes('insights')}
                    />
                    <RNConversionNavItem
                      icon="far fa-file-invoice-dollar" number="04" title="Conversion Costs"
                      href="development" isActive={router.asPath.includes('development')}
                    />
                    <RNConversionNavItem
                      icon="far fa-sack-dollar" number="05" title="Savings"
                      href="savings" isActive={router.asPath.includes('savings')}
                    />
                    <RNConversionNavItem
                      icon="fab fa-react" number="06" title="React Native Experts"
                      href="react-native" isActive={router.asPath.includes('react-native')}
                    />
                </ul>
                <Link prefetch={false} href="/">
                    <div className="rncc__sidebar-brand-container cursor-pointer">
                        <p className="text-navy-secondary bold mb-0">React Native Specialists</p>
                        <img src="/images/ssg-logotype-white.svg" className="rncc__sidebar-brand" alt="SSG"/>
                    </div>
                </Link>
            </nav>

            {/*Mobile sidebar*/}
            <nav id="sidebarMenu" className={cn(className, 'rncc__sidebar col-md-0 col-lg-3 sidebar collapse hidden-lg-up', {"hidden":!isActive})}>
                <div className="rncc__sidebar-meta row pl-3 mt-5 pb-5">
                    <Link prefetch={false} href="./">
                        <div className="pl-0 cursor-pointer">
                            {data && (
                              <img
                                className="rncc__app-icon--small" src="/images/clients/app-icon.png"
                                srcSet={data?.logo}
                              />
                            )}

                        </div>
                    </Link>
                    {data && (
                      <div className="col rncc__rating-info">
                          <h2 className="text-light mb-0">{data?.title}</h2>
                          <p className="text-light mb-2 text-small">{data?.company}</p>
                          <StarRatingListItem
                            className="rating-list--small" starRating={data?.ios_rating} numberOfRatings={data?.ios_number_of_ratings}
                            filled icon="fab fa-app-store-ios"
                          />
                          <StarRatingListItem
                            className="rating-list--small" starRating={data?.android_rating} numberOfRatings={data?.android_number_of_ratings}
                            filled={false} icon="fab fa-google-play"
                          />
                      </div>
                    )}

                </div>

                <ul className="rncc__sidebar-nav nav">
                    <div className="flex-row pl-3 pt-3 mb-3 no-wrap rncc__react-logo">
                        <i className="fab fa-react text-react-blue" />
                        <h6 className="text-light pl-3 mb-0">React Native Conversion Calculator</h6>
                    </div>
                    <RNConversionNavItem
                      icon="far fa-mobile" number="01" title="Your App"
                      href="./"
                    />
                    <RNConversionNavItem
                      icon="fas fa-chart-line" number="02" title="Projected Costs"
                      href="projected" isActive={router.asPath.includes('projected')}
                    />
                    <RNConversionNavItem
                      icon="fas fa-search-dollar" number="03" title="Insights"
                      href="insights"
                      isActive={router.asPath.includes('insights')}
                    />
                    <RNConversionNavItem
                      icon="far fa-file-invoice-dollar" number="04" title="Conversion Costs"
                      href="development" isActive={router.asPath.includes('development')}
                    />
                    <RNConversionNavItem
                      icon="far fa-sack-dollar" number="05" title="Savings"
                      href="savings" isActive={router.asPath.includes('savings')}
                    />
                    <RNConversionNavItem
                      icon="fab fa-react" number="06" title="React Native Experts"
                      href="react-native" isActive={router.asPath.includes('react-native')}
                    />
                </ul>
                <Link prefetch={false} href="/">
                    <div className="rncc__sidebar-brand-container cursor-pointer">
                        <p className="text-navy-secondary bold mb-0">React Native Specialists</p>
                        <img src="/images/ssg-logotype-white.svg" className="rncc__sidebar-brand" alt="SSG"/>
                    </div>
                </Link>
            </nav>
        </React.Fragment>
    );
};

export default TheComponent;
