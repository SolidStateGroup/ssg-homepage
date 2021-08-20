import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import StatSlider from '../../components/StatSlider';
import Page from '../../components/Page';
import ButtonHexagonSidebar from '../../components/ButtonHexagonSidebar';
import ProjectBlobImage from '../../components/ProjectBlobImage';

const ProjectedCosts = class extends React.Component {
    static displayName = 'ProjectedCosts';


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        API.trackPage(Constants.pages.home);
    }

    render = () => {
        return (
            <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

                <div className="container-fluid rncc__bg">
                    <div className="row">
                        <nav id="sidebarMenu" className="rncc__sidebar col-md-5 col-lg-3 sidebar collapse">

                            <div className="rncc__sidebar-meta row pl-3 mt-5 pb-5">
                                <div className="pl-0">
                                    <img
                                      className="rncc__app-icon--small" src="/static/images/clients/app-icon.png"
                                      srcSet="/static/images/clients/app-icon.png 2x, /static/images/clients/app-icon.png 1x"
                                    />
                                </div>
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


                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              ButtonHexagonActive
                                              icon="far fa-mobile text-primary"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              icon="far fa-mobile"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>


                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              icon="far fa-mobile"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>


                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              icon="far fa-mobile"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>


                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              icon="far fa-mobile"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>


                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="flex-row">
                                            <ButtonHexagonSidebar
                                              icon="far fa-mobile"
                                            />
                                            <div className="col">
                                                <h6 className="text-light mb-0">01</h6>
                                                <h6 className="text-navy-secondary mb-0">Your App</h6>
                                            </div>
                                        </div>


                                    </a>
                                </li>
                            </ul>
                            <div className="rncc__sidebar-brand-container">
                                <p className="text-navy-secondary bold mb-0">React Native Specialists</p>
                                <img src="/static/images/ssg-logotype-white.svg" className="rncc__sidebar-brand" alt="SSG"/>
                            </div>
                        </nav>

                        <main role="main" className="col-md-7 ml-sm-auto col-lg-9 px-md-4">
                            <h1 className="text-light">Projected costs</h1>

                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                            <nav className="rncc__bottom-nav navbar flex-md-nowrap pr-5 pb-4 pl-0">
                                <ButtonText className="mr-0 text-primary" buttonText="Back">Hello</ButtonText>

                                <ButtonPrimary className="px-3">
                                    Next
                                </ButtonPrimary>
                            </nav>


                        </main>
                    </div>
                </div>


            </Page>
        );
    };
};

export default ProjectedCosts;
