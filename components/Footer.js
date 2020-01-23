import propTypes from 'prop-types';
import FooterLegal from '../components/FooterLegal';

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
          <div className="footer-container">
              <footer className={`${className} clearfix footer`}>
                  <div className="flex-row justify-content-center">
                      <div className="flex-column">
                          <img src="/static/images/svg-icons/partner-icon.svg" alt="something"/>
                      </div>
                      <div className="flex-column px-5">
                          <h3 className="footer__title">Interested in working with us?</h3>
                          <p className="footer__text">Are you a large enterprise looking for a technology partner or a
                              consultancy looking for experienced, highly skilled developers to supplement your
                              team.</p>
                      </div>
                      <div className="flex-column">
                          <dl>
                              <dt>Call us on</dt>
                              <dd>+44 (0)207 613 7222</dd>
                          </dl>
                          <dl>
                              <dt>Email us at</dt>
                              <dd>projects@solidstategroup.com</dd>
                          </dl>
                          <ButtonPrimary>Get in touch</ButtonPrimary>
                      </div>
                  </div>
              </footer>
              <FooterLegal />
          </div>
        );
    }
};

export default Footer;
