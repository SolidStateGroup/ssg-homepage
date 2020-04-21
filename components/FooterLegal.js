import propTypes from 'prop-types';


const FooterLegal = class extends React.Component {
    static displayName = 'FooterLegal';

    static propTypes = {
        className: propTypes.string,
    };

    componentDidMount() {
    }

    render() {
        const { className } = this.props;
        return (
          <div className={`${className} footer-legal`}>
              <div className="container">
                  <div className="flex-row">
                      <div className="flex-column mr-auto">
                          <p className="footer__text mr-auto">&copy; Solid State Group 2020. Company number 4510864. <a
                            href="/" className="footer__text">Privacy Policy</a></p>
                      </div>
                      <div className="flex-column">
                          <ul className="list-inline">
                              <a href="https://www.facebook.com/solidstategroup" target="_blank" rel="noreferrer">
                                  <li className="list-inline-item mr-3">
                                      <img src="/static/images/platforms/facebook.svg"
                                                                        alt="Facebook"/>
                                  </li>
                              </a>

                              <a href="https://twitter.com/solidstategroup" target="_blank" rel="noreferrer">
                                  <li className="list-inline-item mr-3">
                                      <img src="/static/images/platforms/twitter.svg"
                                                                        alt="Twitter"/>
                                  </li>
                              </a>
                              <a href="https://github.com/SolidStateGroup" target="_blank" rel="noreferrer">
                                  <li className="list-inline-item">
                                      <img src="/static/images/platforms/github.svg"
                                                                        alt="GitHub"/>
                                  </li>
                              </a>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
};

export default FooterLegal;
