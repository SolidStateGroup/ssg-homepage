import Link from 'next/link';

const Footer = class extends React.Component {
  state = {
      operational: true,
  }

  componentDidMount() {
  }

  render() {
      const { className } = this.props;
      return (
          <footer className={`${className} clearfix`}>
              <div className="container">
                  <div className="row footer__homepage-content pt-5">
                      <div className="col-md-4">
                          <amp-img
                            src="/static/images/bullet-train-1.svg" width={166} height={21.47}
                            alt="Bullet Train Logo"
                            className="img-responsive"
                          />
                          <div className="service-status">
                              <a href="https://status.bullet-train.io/">
                                  {this.state.operational
                                      ? (
                                          <div>
                                              <span className="dot green" />
                                        Bullet Train services are operational
                                          </div>
                                      )
                                      : (
                                          <div>
                                              <span className="dot orange" />
                                        Bullet Train services are experiencing problems. Click
                                              {' '}
                                              <a href="https://cachet.dokku1.solidstategroup.com/">here</a>
                                              {' '}
                                        for more info
                                          </div>
                                      )
                                }
                              </a>
                          </div>

                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <a rel="noreferrer" href="https://github.com/SolidStateGroup?utf8=%E2%9C%93&q=bullet+train" title="GitHub">
                                      <span className="icon ion-logo-github"/>
                                  </a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="https://twitter.com/GetBulletTrain" title="Twitter">
                                      <span className="pl-4 icon ion-logo-twitter"/>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-2 offset-md-2">
                          <h6>Product</h6>
                          <ul className=" float-left nav-list">
                              <li><a href={`${Project.appUrl}demo`}>Demo</a></li>
                              <li><a href="https://docs.bullet-train.io/">Documentation</a></li>
                              <li><Link prefetch={false} href="/pricing#pricing"><a>Pricing</a></Link></li>
                          </ul>
                      </div>
                      <div className="col-md-2">
                          <h6>Support</h6>
                          <ul className=" float-left nav-list">
                              <li><a href="mailto:support@bullet-train.io">Contact Us</a></li>
                              <li><a href="https://status.bullet-train.io/">Status</a></li>
                              <li><Link prefetch={false} href="/blog/remote-config-and-feature-flags"><a>What are feature flags?</a></Link></li>
                              <li><Link prefetch={false} href="/blog/remote-config-and-feature-flags"><a>What is remote config?</a></Link></li>
                          </ul>
                      </div>
                      <div className="col-md-2">
                          <h6>Company</h6>
                          <ul className=" float-left nav-list">
                              <li><Link prefetch={false} href="/legal/tos"><a>Terms of Service</a></Link></li>
                              <li><Link prefetch={false} href="/legal/privacy-policy"><a>Privacy Policy</a></Link></li>
                              <li><Link prefetch={false} href="/legal/sla"><a>Service Level Agreement</a></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>

          </footer>
      );
  }
};

export default Footer;
