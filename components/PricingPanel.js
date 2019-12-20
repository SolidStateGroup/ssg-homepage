import React from 'react';
import Link from 'next/link';

const PricingPanel = class extends React.Component {
  static displayName = 'PricingPanel';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }


  render() {
      const { redirect } = this.props;

      return (
          <div className="pricing pt-5" id="pricing">
              <div className="container">
                  <h1 className="text-center margin-bottom">Start using Bullet Train for free</h1>
                  <p className="text-center">Then increase your plan as your business grows.</p>
                  <div className="col-md-12">
                      <div className="flex-row row-center">
                          <div className="col-md-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Free</p>
                                      <img src="/static/images/growth.svg" alt="free icon" className="pricing-icon"/>
                                      <p className="pricing-type">Free</p>
                                      <p className="text-small text-center">more flags than the UN</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                        Sign up
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                  Up to {' '}
                                                  <strong>20,000</strong>
                                                  {' '}
                          requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                  <strong>1</strong>
                                                  {' '}
                          Team Member
                                              </p>
                                          </li>
                                          <li><p>Unlimited Projects</p></li>
                                          <li><p>Unlimited Environments</p></li>
                                          <li><p>Unlimited Feature Flags</p></li>
                                          <li><p>Unlimited Identities and Segments</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Start-Up</p>
                                      <img src="/static/images/startup.svg" alt="Startup icon" className="pricing-icon"/>
                                      <p className="pricing-type">$29</p>
                                      <p className="text-small text-center">billed monthly</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                          Sign up
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Up to <strong>250,000</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Up to <strong>3</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>Unlimited Projects</p></li>
                                          <li><p>Unlimited Environments</p></li>
                                          <li><p>Unlimited Feature Flags</p></li>
                                          <li><p>Unlimited Identities and Segments</p></li>
                                          <li><p>Email Technical Support</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured">Most Popular</p>
                                      <p className="pricing-price">Scale-Up</p>
                                      <img src="/static/images/layers2.svg" alt="Scale-up icon" className="pricing-icon"/>
                                      <p className="pricing-type">$99</p>
                                      <p className="text-small text-center">billed monthly</p>
                                      <Link href={`/${redirect}#sign-up`}>
                                          <a className="pricing-cta blue" onClick={Utils.scrollToSignUp}>
                                          Sign up
                                          </a>
                                      </Link>
                                  </div>
                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Up to <strong>2 million</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Up to <strong>10</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>All Startup Features</p></li>
                                          <li><p>Priority Email Technical Support</p></li>
                                      </ul>

                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 pricing-panel">
                              <div className="panel panel-default">
                                  <div className="panel-content">
                                      <p className="featured"/>
                                      <p className="pricing-price">Enterprise</p>
                                      <img src="/static/images/cubes.svg" alt="Enterprise icon" className="pricing-icon"/>
                                      <p className="pricing-type">Contact Us</p>
                                      <p className="text-small text-center">for enterprise pricing</p>
                                      <a href="mailto:enterprise@bullet-train.io" className="pricing-cta blue">Contact Us</a>
                                  </div>

                                  <div className="panel-footer">
                                      <p className="text-small text-center link-style">What's included</p>
                                      <ul className="pricing-features">
                                          <li>
                                              <p>
                                                Over <strong>2 million</strong> requests per month
                                              </p>
                                          </li>
                                          <li>
                                              <p>
                                                Over <strong>10</strong> Team Members
                                              </p>
                                          </li>
                                          <li><p>All Startup Features</p></li>
                                          <li><p>SAML, 2-factor and SSO options</p></li>
                                          <li><p>Uptime SLA</p></li>
                                          <li><p>Telephone and Priority Email Technical Support</p></li>
                                          <li><p>Optional On Premise Installation</p></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
};

PricingPanel.propTypes = {};

export default PricingPanel;
