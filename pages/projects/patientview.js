import React, {Component} from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import Header from '../../components/Header';
import ProjectHero from "../../components/ProjectHero";
import {TextListItem, WideListItem} from "../../components/ListItem";
import ProjectDetailSectionItem, {
    ProjectTechSection,
    ProjectTextSection
} from "../../components/ProjectDetailSectionItem";
import ProjectNav from "../../components/ProjectNav";
import Footer from "../../components/Footer";

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    }

    render() {
        return (

            <React.Fragment>
                <Page title="Patientview" canonical="projects/patientview">
                    <ProjectHero
                        ProjectClientName={
                            <React.Fragment>
                                <TextListItem listItemText={'PatientView'}/>
                            </React.Fragment>

                        }
                        projectTitle={'The doctor will see you now – wherever, whenever'}
                        projectType={'Secure online platform for clinicians and patients'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Web Application Development,'}/>
                                <TextListItem listItemText={'API Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Postgres,'}/>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'RabbitMQ,'}/>
                                <TextListItem listItemText={'Angular JS'}/>
                            </React.Fragment>
                        }
                        className="hero--patientview"
                        projectImage={"/static/images/projects/patientview/patientview-ipad@1x.png"}
                    />

                    <div className="container">

                        <ProjectTextSection subTitle={'Overview'}
                                            description={
                                                'PatientView is an online platform where patients with certain medical conditions can access up-to-date information on their illness, keep track of their medication, get test results and directly communicate with their GP.\n' +
                                                '\n' +
                                                'The platform began as a pilot project 10 years ago – and a decade later, it was showing its age.\n' +
                                                '\n' +
                                                'Solid State was called in by the Renal Association to give the geriatric technology a new lease of life, preparing it for the medical advances of the next decade and beyond.'}/>

                        <ProjectFullImageSection
                            title={'Patientview UI'}
                            subTitle={'Overview'}
                            imageUrl={'/static/images/projects/patientview/patientview-iMac@1x.png'}
                            imageAltText={'Patientview UI'}
                        />


                        <ProjectTextSection subTitle={'Challenge'}
                                            description={
                                                'PatientView began as a pilot project 10 years ago and was expanded bit by bit as more functionality was needed.\n' +
                                                '\n' +
                                                'By 2014, it was a fragmented mess. It lacked the modern architecture needed to allow future growth and the interface was awkward for mobile and tablet users.\n' +
                                                '\n' +
                                                'Our aim was to make the site more accessible to more people. If patients can see their own medical information, they feel more empowered and engaged in their treatment. It can really change lives.'}/>


                        <ProjectDetailSectionItem
                            subTitle={'Solution'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/patientview/patientview-ipad@1x.png'}
                            description={'Solid State utilised an agile approach which allowed us to focus on the features which mattered most to patients and staff. In 2015 PatientView 2.0 was launched to patients and received positive feedback. At the time the original PatientView was still supported allowing for the transition of less used features to be migrated at later dates. The new platform had an immediate effect giving us the ability to deploy changes quicker and at a lower cost. Also by rearchitecting the application we were also able to broaden its usefulness to a number of new specialties including patients without a particular speciality as long as they can send data.\n' +
                            '\n' +
                            'Solid State remains a trusted partner to support and deliver new features on a continuous bases. The number of patients currently using PatientView is now over 50,000.'}
                        />

                        <ProjectTechSection
                            className="flex-row-reverse"
                            description={'The new platform had an immediate effect giving us the ability to deploy changes quicker and at a lower cost. '}
                            techLogoItems={
                                <React.Fragment>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/angular.svg'
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/rabbit_mq.svg'
                                             className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center mb-md-0 mb-4">
                                        <img src='/static/images/tech-icons/dark/java.svg' className='img-responsive'/>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src='/static/images/tech-icons/dark/postgres.svg'
                                             className='img-responsive'/>
                                    </div>
                                </React.Fragment>
                            }
                            ProjectServiceListItem={
                                <React.Fragment>
                                    <WideListItem
                                        listItemText={'Mobile Development'}/>
                                    <WideListItem
                                        listItemText={'Backend Development'}/>
                                    <WideListItem
                                        listItemText={'API Development'}/>
                                </React.Fragment>}

                        />

                        <ProjectTextSection subTitle={'Highlights'}
                                            bulletedList={
                                                <React.Fragment>
                                                    <li>We broadened the medical conditions covered by the platform,
                                                        increasing the number of patients who can use it
                                                    </li>
                                                    <li>New features are now added regularly</li>
                                                    <li>A large percentage of users now access PatientView from mobile
                                                        devices
                                                    </li>
                                                    <li>Surveyed clinicians and patients say that patients
                                                        feel more involved in their own care, leading to more successful
                                                        treatment
                                                    </li>
                                                    <li>53,000 users registered</li>
                                                    <li>180 units are using it</li>
                                                    <li>1200 medical staff</li>
                                                    <li>100+ GPS are using it</li>
                                                </React.Fragment>
                                            }
                        />


                    </div>

                    <div className="section section--grey">
                        <ProjectNav clientLogo={"/static/images/clients/purely-capital-dark.png"}
                                    projectLink={'/projects/purely-capital'}/>
                    </div>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
