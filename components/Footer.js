import propTypes from 'prop-types';

const Footer = class extends React.Component {
    static displayName = 'Footer';

    static propTypes = {
        className: propTypes.string,
    }

    componentDidMount() {
    }

    render() {
        const { className } = this.props;
        return (
            <footer className={`${className} clearfix footer`}>
                <div className="flex-row justify-content-center">
                    <div className="flex-column">
                        <img src="/static/images/svg-icons/partner-icon.svg" alt="something" />
                    </div>
                    <div className="flex-column col-lg-5 px-5">
                        <h3 className="footer__title">Interested in working with us?</h3>
                        <p className="footer__text">Are you a large enterprise looking for a technology partner or a consultancy looking for experienced, highly skilled developers to supplement your team.</p>
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
        );
    }
};

export default Footer;
