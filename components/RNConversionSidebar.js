import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StarRatingListItem from './StartRatingListItem';
import ButtonHexagonSidebar from './ButtonHexagonSidebar';
import RNConversionNavItem from './RNConversionNavItem';
import { useRouterData } from '../common/useData';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
};


const TheComponent = (props) => {
    const { children, className, ...rest } = props;
    const router = useRouter();
    const { data } = useRouterData();
    return (

        <nav id="sidebarMenu" className={cn(className, ' rncc__sidebar col-md-5 col-lg-3 sidebar collapse')}>

            <div className="rncc__sidebar-meta row pl-3 mt-5 pb-5">
                <Link prefetch={false} href="/react-native-conversion-calculator/overview">
                    <div style={{height:109, width:109}} className="pl-0 cursor-pointer">
                        {data && (
                          <img
                            className="rncc__app-icon--small" src="/static/images/clients/app-icon.png"
                            srcSet={data?.logo}
                          />
                        )}

                    </div>
                </Link>
                {data && (
                  <div className="col">
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
                <div className="flex-row pl-3 pt-3 mb-3 no-wrap">
                    <i className="fab fa-react text-react-blue" />
                    <h6 className="text-light pl-3 mb-0">React Native Conversion Calculator</h6>
                </div>
                <RNConversionNavItem
                  icon="far fa-mobile" number="01" title="Your App"
                  href="./"
                />
                <RNConversionNavItem
                  icon="fas fa-chart-line" number="02" title="Projected Costs"
                  href="projected-costs" isActive={router.asPath.includes('projected-costs')}
                />
                <RNConversionNavItem
                  icon="fas fa-search-dollar" number="03" title="Insights"
                  href="insights"
                  isActive={router.asPath.includes('insights')}
                />
                <RNConversionNavItem
                  icon="far fa-file-invoice-dollar" number="04" title="Conversion Costs"
                  href="conversion-costs" isActive={router.asPath.includes('conversion-costs')}
                />
                <RNConversionNavItem
                  icon="far fa-sack-dollar" number="05" title="Savings"
                  href="savings" isActive={router.asPath.includes('savings')}
                />
            </ul>
            <Link prefetch={false} href="/">
                <div className="rncc__sidebar-brand-container cursor-pointer">
                    <p className="text-navy-secondary bold mb-0">React Native Specialists</p>
                    <img src="/static/images/ssg-logotype-white.svg" className="rncc__sidebar-brand" alt="SSG"/>
                </div>
            </Link>
        </nav>
    );
};

export default TheComponent;
