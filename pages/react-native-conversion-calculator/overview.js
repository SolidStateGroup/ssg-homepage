import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import StatSlider from '../../components/StatSlider';
import Page from '../../components/Page';
import ProjectBlobImage from '../../components/ProjectBlobImage';

const Overview = class extends React.Component {
    static displayName = 'ReactNativeConversionCalculator';


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        API.trackPage(Constants.pages.home);
    }

    render = () => {
        return (
            <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

                <div className="rncc__bg pb-5">
                    <Header className="navbar-container--transparent"/>
                    <div className="container">
                        <h1 className="text-light mt-5 mb-0">
                            Your App
                        </h1>
                        <div className="row pl-3 mt-5 pb-5">
                            <div className="col-md-3 pl-0">
                                <img className="rncc__app-icon" src="/static/images/clients/app-icon.png"
                                     srcSet="/static/images/clients/app-icon.png 2x, /static/images/clients/app-icon.png 1x" />
                            </div>
                            <div className="col-md-9 pl-0">
                                <h2 className="text-light">7 Fitness </h2>
                                <p className="text-light">Fitness International, LLC</p>
                                <div className="row">
                                    <div className="col-md-7">

                                        <StarRatingListItem starRating={'2'} numberOfRatings={'4.2'} className="mt-3" filled={true} icon="fab fa-app-store-ios" />

                                        <StarRatingListItem starRating={'2'} numberOfRatings={'4.2'} className="mt-3" filled={false} icon="fab fa-google-play" />

                                    </div>
                                    <div className="col-md-5">
                                        <p className="text-light mb-0"><strong>First released:</strong> 1st October 2019</p>
                                        <p className="text-light mb-0"><strong>Latest release:</strong> 22nd June 2021</p>
                                        <p className="text-light"><strong>Average releases per year:</strong> 4.2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 pb-5">
                            <div className="col-md-5 pl-0">
                                <CardBuildCosts className="card-build-costs__google" cardTitle={'Android Build Costs\n' +
                                '(Over 2 Years)'}>
                                    <StatSlider subTitle={'Development Costs'} title={'£70,000'} min={0} max={70000} />
                                    <StatSlider className="mt-4" subTitle={'Development Costs'} title={'£70,000'} min={0} max={70000} />
                                </CardBuildCosts>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <CardBuildCosts className="card-build-costs__ios" cardTitle={'iOS Build Costs\n' +
                                '(Over 2 Years)'}>
                                    <StatSlider subTitle={'Development Costs'} title={'£70,000'} min={0} max={70000} />
                                    <StatSlider className="mt-4" subTitle={'Development Costs'} title={'£70,000'} min={0} max={70000} />
                                </CardBuildCosts>
                            </div>
                        </div>

                        <div className="col-md-4 offset-md-4 text-center mt-5 pb-5">
                            <p className="text-light mb-0">We estimate the total cost of ownership<span className="text-primary"> *</span> over the next 2 years to be:</p>
                            <h1 className="hero__title text-light">£438,000</h1>
                            <p className="text-light mb-0 text-small"><span className="text-primary"> *</span> Information based on our own estimates and research</p>
                            <Link prefetch={false} href="/react-native-conversion-calculator/projected-costs">
                                <ButtonPrimary className="mt-4">Next</ButtonPrimary>
                            </Link>


                        </div>



                    </div>
                </div>

            </Page>
        );
    };
};

export default Overview;
