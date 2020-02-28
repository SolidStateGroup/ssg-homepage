import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import { ListItemUnderlined } from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';

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
                                 serviceDescription={'Building products that solve problems for your users is hard.  We apply years of experience and formalised techniques to provide data that drives the design process.  ' +
                                 'User experience has never been more important for digital products.'}/>

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
                <ClientQuote text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'} clientName={'Krissy Cela'} clientTitle={'Founder - Tone and Sculpt'}/>
                <Footer/>
            </Page>
        );
    };
};

export default ServicesPage;
