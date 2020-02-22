import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import ReactLogo from '../components/TechIcons/ReactLogo';
import NodeLogo from '../components/TechIcons/NodeLogo';
import DockerLogo from '../components/TechIcons/DockerLogo';
import JavaLogo from '../components/TechIcons/JavaLogo';
import PostgresLogo from '../components/TechIcons/PostgresLogo';
import AWSLogo from '../components/TechIcons/AWSLogo';
import { ListItemUnderlined } from '../components/ListItem';
import ServiceItem from '../components/ServiceItem';
import Card from '../components/Card';
import Link from 'next/link';
import { ButtonPrimary } from '../components/base/forms/Button';

const ServicesPage = class extends React.Component {
    static displayName = 'ServicesPage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return (
            <Page title={Constants.titles.services} canonical="services">
                <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
                        <div className="flex-1 p-5">
                            <div className="container">
                                <h5 className="title--light mb-0">Our Services</h5>
                                <h1 className="hero__title mb-4">UX & UI Design</h1>
                                <p className="text-light">We approach our design projects using decades of experience
                                    and with a passion for providing the best experience for your users. Our desire is
                                    to understand your users and deliver value quickly.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ServiceItem className={'flex-row-reverse'}
                                 serviceListItem={
                                     <React.Fragment>
                                         <ListItemUnderlined listItemText={'User research'}
                                                             listItemLink={'/'}/>
                                         <ListItemUnderlined
                                             listItemText={'Wireframing'} listItemLink={'/'}/>
                                         <ListItemUnderlined
                                             listItemText={'Prototyping'} listItemLink={'/'}/>
                                         <ListItemUnderlined
                                             listItemText={'User testing'} listItemLink={'/'}/>
                                     </React.Fragment>
                                 }
                                 subTitle={'UX Design'}
                                 listTitle={'WHAT WE DO'}
                                 serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}/>

                    <ServiceItem
                        serviceListItem={
                            <React.Fragment>
                                <ListItemUnderlined listItemText={'User research'}
                                                    listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'Wireframing'} listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'Prototyping'} listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'User testing'} listItemLink={'/'}/>
                            </React.Fragment>
                        }
                        subTitle={'UI Design'}
                        listTitle={'WHAT WE DO'}
                        serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}/>
                </div>
                <div className="panel panel--navy flex-row">
                    <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                        <img src="/static/images/projects/tands-summary-image.png" alt="Design" className="img-fluid"/>
                    </div>
                    <div className="flex-1 justify-content-start p-5">
                        <div className=" translatey-offset-down" ref={div => this.myElement = div}>
                            <blockquote className="light px-5">Solid State Group are the bomb digadi bomb bom boom town.  Solid State Group are the bomb digadi bomb bom boom town.  Solid State Group are the bomb digadi bomb bom boom town.  Solid State Group are the bomb digadi bomb bom boom town</blockquote>
                            <p className="text-small text-light px-5">Krissy Cela / <span className="text-primary">Founder - Tone and Sculpt</span></p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Page>
        );
    };
};

export default ServicesPage;
