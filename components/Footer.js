import propTypes from 'prop-types';
import FooterLegal from '../components/FooterLegal';
import Link from 'next/link';
import Map from '../components/Map'
const Footer = class extends React.Component {
    static displayName = 'Footer';

    static propTypes = {
        className: propTypes.string,
    };

    componentDidMount() {
    }

    render() {
        const { className } = this.props;
        return (
          <div className="footer-container d-flex flex-column mr-0 ml-0">
              <Map forceScroll={this.props.initialiseMap}/>
              <footer className={`${className} clearfix footer flex-fill`}>
                  <div className="container">
                      <div className="row">
                          <div className="col text-center hidden-sm-down">
                              <img src="/static/images/svg-icons/partner-icon.svg" alt="something"/>
                          </div>
                          <div className="col col-lg-6 px-md-5 px-0">
                              <h3 className="footer__title">Interested in working with us?</h3>
                              <p className="footer__text">We're a highly skilled team of strategists, designers and technical developers.  If you think we can help you, call us for a chat or send us a brief.</p>
                          </div>
                          <div className="col px-md-2 px-0">
                              <dl>
                                  <dt className="light">Call us on</dt>
                                  <dd className="bold">+44 (0)207 613 7222</dd>
                              </dl>
                              <dl>
                                  <dt className="light">Email us at</dt>
                                  <dd className="bold">projects@solidstategroup.com</dd>
                              </dl>
                              <Link prefetch={false} href="/contact-form">
                                  <ButtonPrimary>Send us a brief</ButtonPrimary>
                              </Link>
                          </div>
                      </div>
                  </div>
              </footer>
              <FooterLegal />
          </div>
        );
    }
};

export default Footer;
