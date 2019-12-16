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
                          <div className="service-status">
                              <a href="https://status.bullet-train.io/">
                                  <span className="uptime-badge">
                                      <span className="label">
                                      Status
                                      </span>
                                      {this.state.operational ? (
                                          <span className="success">
                                            Operational
                                          </span>
                                      ) : (
                                          <span className="error">
                                            Experiencing issues
                                          </span>
                                      )}
                                  </span>
                                  <span>
                                      Uptime is important, view our uptime history here.
                                  </span>
                              </a>
                          </div>

                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <a rel="noreferrer" href="https://github.com/BulletTrainHQ" title="GitHub">
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
                              <li><a href={`${Project.appUrl}demo`}>Demo Account</a></li>
                              <li><a href="https://docs.bullet-train.io/">Documentation</a></li>
                              <li><Link prefetch={false} href="/pricing#pricing"><a>Pricing</a></Link></li>
                          </ul>
                      </div>
                      <div className="col-md-2">
                          <h6>Support</h6>
                          <ul className=" float-left nav-list">
                              <li><a href="mailto:support@bullet-train.io">Contact Us</a></li>
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
