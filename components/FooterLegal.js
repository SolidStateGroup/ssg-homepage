import propTypes from 'prop-types';


const FooterLegal = class extends React.Component {
    static displayName = 'FooterLegal';

    static propTypes = {
        className: propTypes.string,
    }

    componentDidMount() {
    }

    render() {
        const { className } = this.props;
        return (
          <div className={`${className} footer-legal`}>
            <div className="flex-row">
                <div className="flex-column mr-auto">
                    <p className="footer__text mr-auto">&copy; Solid State Group 2020.  Company number 4510864.  <a href="/" className="footer__text">Privacy Policy</a></p>
                </div>
                <div className="flex-column">
                    <ul className="list-inline">
                        <li className="list-inline-item"><img src="/static/images/platforms/behance.svg" alt="Behance"/></li>
                        <li className="list-inline-item"><img src="/static/images/platforms/dribbble.svg" alt="Dribbble"/></li>
                        <li className="list-inline-item"><img src="/static/images/platforms/github.svg" alt="GitHub"/></li>
                    </ul>
                </div>
            </div>
          </div>
        );
    }
};

export default FooterLegal;
