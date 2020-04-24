import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const PrivacyPage = class extends React.Component {
    static displayName = 'PrivacyPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.PrivacyPage} canonical="privacy-policy">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="container mt-5">
                        <h1 className="hero__title mb-4">Privacy policy</h1>


                        <p className="text-white">This Privacy Policy covers information we collect from users and visitors of our Website,
                            located at <a href="http://www.solidstategroup.com" target="_blank"
                                          rel="external">http://www.solidstategroup.com</a> as owned and operated by
                            Solid State Technology Limited trading as Solid State Group (SSG).</p>
                        <p className="text-white">Solid State Group is committed to respecting and protecting the privacy of visitors to our
                            website and to demonstrate our commitment to privacy we have developed this privacy
                            statement.</p>
                        <p className="text-white">Our sites use a form that visitors can use to request to receive our newsletter which
                            includes information on our products and services. From these forms we collect the following
                            information.</p>
                        <ul>
                            <li><p className="text-white">Visitor’s contact information such as email addresses</p>
                            </li>
                            <li><p className="text-white">IP address</p>
                            </li>
                        </ul>
                        <p className="text-white">We use your contact information to send you information about our Company and to get in touch
                            with you when necessary.</p>
                        <p className="text-white">Solid State Group follows industry standard security measures to prevent the loss, misuse and
                            alteration of the information that is under our control. We do not sell or disclose
                            information obtained on-line about our visitors.</p>
                        <p className="text-white">Solid State Group shall take all reasonable steps to protect any data you give to us via the
                            web site.</p>
                        <p className="text-white">If you wish to update or amend the information which Solid State may hold about you or wish
                            Solid State Group to cease using your data please contact us <a
                                href="mailto:info@solidstategroup.com">info@solidstategroup.com</a>.</p>
                        <p className="text-white">You have a right under the Data Protection Act 1998 (and if you live in the Republic of
                            Ireland, under its equivalent data protection legislation) to access the information Solid
                            State Group holds about you, subject to certain conditions. If you wish to make an
                            application to access this information please contact us <a
                                href="mailto:info@solidstategroup.com">info@solidstategroup.com</a>.</p>
                        <p className="text-white">These terms and conditions shall be governed by and construed in accordance with English law
                            and the parties hereby submit to the exclusive jurisdiction of the English courts in respect
                            of all matters arising in connection herewith.</p>
                        <h3 id="Security" className="mt-5 mb-3"><a href="#Security" className="headerlink" title="Security"></a>Security</h3>
                        <p className="text-white">We are committed to ensuring that your information is secure. In order to prevent
                            unauthorised access or disclosure, we have put in place suitable physical, electronic and
                            managerial procedures to safeguard and secure the information we collect online.</p>
                        <h2 id="Cookie-Policy" className="mt-5"><a href="#Cookie-Policy"
                                                  title="Cookie Policy"></a>Cookie Policy</h2><h3 className="mt-3 mb-3"  id="Just-browsing"><a
                        href="#Just-browsing" title="Just browsing"></a>Just browsing</h3><p className="text-white">If
                        you are just looking around our website we use analytical or performance cookies. These help us
                        understand our visitors’ interaction with our website which enables us to improve the way our
                        website works, for example, making it easy for users to find the information they need. These
                        cookies do not collect information that identifies you. All information collected is aggregated
                        and therefore anonymous. They are only used to improve the performance of our website</p>
                        <p className="text-white">If you do not want this to take place you can adjust your browser settings or visit<a
                            href="http://www.aboutcookies.org/" target="_blank"
                            rel="external"> www.aboutcookies.org</a> which tells you how to do this on a variety of
                            browsers. Only use our site if you consent to the cookies being installed. Please be aware
                            that restricting cookies may impact on the functionality of the site.</p>
                        <h3 id="Contact"><a href="#Contact" className="headerlink" title="Contact"></a>Contact</h3>
                        <p className="text-white">You will not be contacted by us if you just look around the site. We will only contact you if
                            you complete a call back or contact request.</p>
                        <p className="text-white">The rest of this section gives you a list of what performance cookies are set by our website
                            and a description of how they are used.</p>
                        <ul>
                            <li>_utma - This Google Analytics cookie is used to determine the number of unique visitors
                                to our website and it is updated with each page viewed. This cookie persists for 2 years
                                unless deleted by the user.
                            </li>
                            <li>_utmb - This Google Analytics cookie is used to establish and continue a user session
                                with this site, this cookie is updated to expire in 30 minutes, thus continuing a single
                                session for as long as user activity continues within 30-minute intervals.
                            </li>
                            <li>_utmc - This Google Analytics cookie is a tracking code to determine session status.
                                Persists for the duration of the browser session unless deleted
                            </li>
                            <li>_utmz - This Google Analytics cookie stores the type of referral used by the visitor to
                                reach your site. Persists for six months unless deleted.
                            </li>
                            <li>_utmv - Google Analytics Cookie. Used for user-custom variables in Analytics</li>
                        </ul>


                    </div>

                </div>
                <Footer/>

            </Page>
        );
    };
};

export default PrivacyPage;