import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import BaLogo from '../../components/ClientLogos/BaLogo';
import UnileverLogo from '../../components/ClientLogos/UnileverLogo';
import HertzLogo from '../../components/ClientLogos/HertzLogo';
import NHSLogo from '../../components/ClientLogos/NHSLogo';
import DisneyLogo from '../../components/ClientLogos/DisneyLogo';
import FeaturedProjects from '../../components/FeaturedProjects';
import { ListItemUnderlined } from '../../components/ListItem';
import { ButtonPrimary, ButtonText } from '../../components/base/forms/Button';
import ProjectBlobImage from '../../components/ProjectBlobImage';

const LeadSoftwareDevJobPage = class extends React.Component {
    static displayName = 'LeadSoftwareDevJobPage';


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        API.trackPage(Constants.pages.home);
    }

    render = () => {
        return (
            <Page title={Constants.titles.leadSoftwareDevJobPage} canonical="/jobs/lead-software-devops-engineer">

                <div className="hero mx-0 pt-4 pr-4 pb-0 pl-0">
                    <Header/>
                    <div className="hero__container text-center text-md-left">
                        <div className="container">
                            <div className="flex-row">
                                <div className="col-md-6">
                                    <h5 className="title--light mb-0">Job title</h5>
                                    <h1 className="hero__title mb-4">Lead Software / DevOps Engineer</h1>
                                </div>
                                <div
                                  className="flex-1 align-items-center justify-content-center hero__blob-container hidden-sm-down"
                                >
                                    <img src="/static/images/hero-blob-3.svg" alt="hero-blob" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section__content container mt-5 mb-5">
                    <dl className="row">
                        <dt className="col-sm-3"><span className="bold">Job title:</span></dt>
                        <dd className="col-sm-9">Senior Software Engineer</dd>
                        <dt className="col-sm-3"><span className="bold">Reporting to:</span></dt>
                        <dd className="col-sm-9">Technical Director</dd>
                        <dt className="col-sm-3"><span className="bold">Working from:</span></dt>
                        <dd className="col-sm-9">86-90 Paul Street, Shoreditch, London</dd>
                        <dt className="col-sm-3"><span className="bold">Salary:</span></dt>
                        <dd className="col-sm-9">Depends on qualifications</dd>
                    </dl>

                    <p>We are an award winning digital agency specialising in web applications and mobile app development. Our clients range from large enterprises through to funded start-ups.</p>

                    <p>We remember the Roundabout before it was Silicon. When we moved into our Old Street office, there were only a handful of tech startups in the neighbourhood – and 18 years later, we’re still going strong.</p>

                    <p>We are looking for an experienced and talented senior engineer to join our growing and close-knit team. At Solid State you'll have an unique opportunity to work with big name clients on exciting  projects utilising the latest technologies currently available.  As well as working on end-to-end builds with startups and new businesses.</p>

                    <p className="bold text-dark mt-5">We are looking for people who have:</p>

                    <ul>
                        <li>A passion for technology and take their personal development seriously</li>
                        <li>5+ years experience in architecting and building web and mobile applications</li>
                        <li>A computer science/software engineering degree or equivalent</li>
                        <li>AWS Cloud Practitioner certification or higher</li>
                    </ul>

                    <p className="bold text-dark mt-5">You should also be:</p>

                    <ul>
                        <li>A hard worker with a passion for software quality</li>
                        <li>5+ years experience in architecting and building web and mobile applications</li>
                        <li>A computer science/software engineering degree or equivalent</li>
                        <li>AWS Cloud Practitioner certification or higher</li>
                    </ul>


                </div>

                <Footer gaFooterLabel="home_footer_contact"/>
            </Page>
        );
    };
};

export default LeadSoftwareDevJobPage;
