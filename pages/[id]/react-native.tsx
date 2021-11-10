import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Page from '../../components/Page'; // we need this to make JSX compile
import Header from '../../components/Header';
import StarRatingListItem from '../../components/StartRatingListItem';
import CardBuildCosts from '../../components/CardBuildCosts';
import RNConversionSidebar from '../../components/RNConversionSidebar';
import RNConversionNavItem from '../../components/RNConversionNavItem';
import StatSlider from '../../components/StatSlider';
import ButtonHexagonSidebar from '../../components/ButtonHexagonSidebar';
import ProjectBlobImage from '../../components/ProjectBlobImage';
import { ButtonPrimary } from '../../components/base/forms/Button';
import { converstionSteps, useStep } from '../../common/converstion-steps';
import { useRouterData } from '../../common/useData';

type ComponentType = {}

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>

                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main">
                        <h1 className="text-light text-center pad-top-large mb-4 mt-md-0 mt-5">React Native <strong className="text-primary">Specialists</strong></h1>

                        <div className="row mt-5">
                            <div className="col-md-8">
                                <CardBuildCosts>
                                    <form action="https://post.formlyapp.com/ssg?redirect=/thanks" method="POST">
                                        <p className="text-light">Want to know more? Fill out the form and we'll get back to you.</p>
                                        <Input
                                          InputLabel="Name" forLabel="Name" placeholder="Name"
                                          type="name" name="personname"
                                          inputClassName="form-control form__input mb-3"
                                        />
                                        <Input
                                          type="email" name="replyto" InputLabel="Email address *"
                                          forLabel="Email address"
                                          placeholder="name@example.com"
                                          id="exampleInputEmail1"
                                          inputClassName="form-control form__input mb-3"
                                        />
                                        <div className="form-group">
                                            <label className="form__label" htmlFor="textarea">Comment</label>
                                            <textarea
                                              className="form-control form__input" name="textarea" id="Textarea"
                                              placeholder="Additional information"
                                              rows="3" required
                                            />
                                        </div>

                                         <div className="mt-4 mb-3">
                                            <div id="recaptcha" />
                                         </div>

                                        <ButtonPrimary
                                          type="submit" value="Send" id="submit"
                                          className="mt-3"
                                        >Submit
                                        </ButtonPrimary>
                                    </form>
                                </CardBuildCosts>
                            </div>
                            <div className="col-md-4 mt-5 mt-md-0">
                                <h5 className="text-light">Why Solid State Group?</h5>
                                <p className="text-light">Because we have worked with React Native since it’s launch in 2015, and we have <a href="/work">years of experience in designing and building successful React Native apps</a>.</p>
                            </div>
                        </div>


                        {/*{nav}*/}
                    </main>
                </div>
            </div>


        </Page>
    );
};

export default TheComponent;
