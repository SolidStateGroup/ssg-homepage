import propTypes from 'prop-types';
import FooterLegal from '../components/FooterLegal';
import Link from 'next/link';
import Map from '../components/Map'
import { ButtonPrimary } from './base/forms/Button';
import React from 'react';

const Footer = class extends React.Component {
    static displayName = 'Footer';

    static propTypes = {
        className: propTypes.string,
    };

    componentDidMount() {

        // const footerController = new ScrollMagic.Controller();
        //
        // const tl = new gsap.timeline();
        //
        // tl.from(
        //     '.footer-container', .5, {opacity: 0, y: 100, ease: 'power1'},
        // );
        //
        // const scene1 = new ScrollMagic.Scene({
        //     triggerElement: '#footerTrigger',
        //     reverse: null,
        //     triggerHook: 'onEnter',
        // })
        //     .setTween(tl);
        //
        // scene1.addIndicators({name: "scene 1", colorEnd: "red"});
        //
        // footerController.addScene([
        //     scene1,
        // ]);

    }

    render() {
        const {className} = this.props;
        return (
            <div id="footerTrigger" className="footer-container d-flex flex-column mr-0 ml-0">
                <Map className="map-wrapper" forceScroll={this.props.initialiseMap}/>
                <footer className={`${className} clearfix footer flex-fill`}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center hidden-sm-down">
                                <img src="/static/images/svg-icons/partner-icon.svg" alt="something"/>
                            </div>
                            <div className="col col-lg-6 px-md-5 px-0">
                                <h3 className="footer__title">Interested in working with us?</h3>
                                <p className="footer__text">We're a highly skilled team of strategists, designers and
                                    technical developers. If you think we can help you, call us for a chat or send us a
                                    brief.</p>
                            </div>
                            <div className="col px-md-2 px-0">
                                <dl>
                                    <dt className="light">Call us on</dt>
                                    <dd className="bold"><a href="tel:+442076137220" onClick={() => API.trackEvent({ category: 'Contact', event: 'view', label: 'tel_footer' })}>+44 20 7613 7220</a></dd>
                                </dl>
                                <dl>
                                    <dt className="light">Email us at</dt>
                                    <dd className="bold"><a
                                        href="mailto:projects@solidstategroup.com" onClick={() => API.trackEvent({ category: 'Contact', event: 'view', label: 'mailto_footer' })}>projects@solidstategroup.com</a></dd>
                                </dl>
                                <Link prefetch={false} href="/contact-form">
                                    <ButtonPrimary onClick={() => API.trackEvent({ category: 'Contact', event: 'view', label: this.props.gaFooterLabel })}>Send us a brief</ButtonPrimary>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
                <FooterLegal/>
            </div>
        );
    }
};

export default Footer;
