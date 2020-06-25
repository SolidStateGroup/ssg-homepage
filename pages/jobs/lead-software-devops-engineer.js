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
                        <li>A good leader and an active participant in company development</li>
                        <li>Client facing and able to translate business requirements to technical specifications</li>
                        <li>A champion for agile and lean principles</li>
                        <li>Exploring and driving adoption of new technologies</li>
                    </ul>

                    <p className="bold text-dark mt-5">Our ideal candidate for this role would have an expertise in:</p>
                    <ul>
                    <li>Java, Spring</li>
                        <li>Python</li>
                        <li>Javascript/Typescript/NodeJS</li>
                        <li>RDBMS and NoSQL databases</li>
                        <li>Cloud Architecture (AWS, Google Cloud)</li>
                        <li>Building RESTful web services</li>
                        <li>Testing frameworks (e.g. Junit, Spock, Pytest)</li>
                        <li>AWS Networking and security</li>
                        <li>AWS Lambda</li>
                        <li>AWS RDS</li>
                        <li>AWS API Gateway</li>
                        <li>Other AWS tools ( Kinesis, Elasticache, DynamoDB, ElasticSearch, Athena, QuickSight, Glue, Redshift, Sagemaker etc)</li>
                        <li>Infrastructure Orchestration (Terraform / Pulumi etc)</li>
                    </ul>

                    <p className="bold text-dark mt-5">You should also have experience in:</p>

                    <ul>
                        <li>Enterprise Integration Patterns, Service-oriented architecture, Microservices patterns and concepts</li>
                        <li>Ability to clearly communicate problems and solutions to technical &amp; non-technical stakeholders</li>
                        <li>Experience of high and low level design, architecture and modelling</li>
                        <li>Docker and server orchestration</li>
                        <li>Git, TDD, BDD and Agile/Scrum, Kanban</li>
                        <li>A good understanding of serverless architecture</li>
                        <li>Environment provisioning &amp; software roll out</li>
                        <li>CI/CD build pipelines, release management</li>
                        <li>Developing backup and disaster recovery plans</li>
                        <li>Executing performance and load testing plans</li>
                    </ul>


                    <p className="bold text-dark mt-5">It would be advantageous if you had knowledge of:</p>

                    <ul>
                        <li>Message brokers (e.g. Active MQ, Kafka)</li>
                        <li>Redis, ElasticSearch</li>
                        <li>Big Data technologies (e.g. Hadoop, Spark)</li>
                        <li>Functional programming</li>
                        <li>DataDog / NewRelic</li>
                    </ul>


                    <p className="bold text-dark mt-5">Culture :</p>

                    <p>We're a tight knit team of talented designers and developers and we like to enjoy our successes together, in the pub or out and about at some of the awesome food venues in the Old Street / Shoreditch area.</p>

                    <p>We have weekly inspiration hour on Thursday afternoon where we catch up on the news from current projects and share anything inspiration we've found on our travels through the world of design and engineering.</p>

                    <p>We have seasonal socials where you might find us throwing axes, playing golf, sampling the finest spirits from around the world or even jetting off to SXSW in Austin, Texas.</p>

                    <ul>
                        <li>Interesting project work with large enterprise companies, scale-ups and startups</li>
                        <li>Unlimited beer and soft drinks to help keep you going</li>
                        <li>Personal development allowance for event/expo attendance</li>
                        <li>Flexible working with a competitive salary</li>
                        <li>Access to the cycle to work scheme</li>
                        <li>Options to invest in select startup projects</li>
                    </ul>
                </div>

                <div className="section section--grey">
                    <div className="container">
                    <p>Please submit CV’s, GitHub accounts and all that sort of thing to <a href="mailto:jobs@solidstategroup.com">jobs@solidstategroup.com</a></p>
                    <p className="bold text-dark">**Please no agencies**</p>
                    </div>

                </div>

                <Footer gaFooterLabel="job_footer_contact"/>
            </Page>
        );
    };
};

export default LeadSoftwareDevJobPage;
