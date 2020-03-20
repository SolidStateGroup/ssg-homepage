import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import {ListItemUnderlined, WideListItem} from '../../components/ListItem';
import ServiceItem from '../../components/ServiceItem';
import ClientQuote from '../../components/ClientQuote';
import {ButtonPrimary} from "../../components/base/forms/Button";
import ProjectItem from "../../components/ProjectItem";

const projects = [
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/tone-and-sculpt/phone.png',
        subTitle: 'iOS and Android Mobile App',
        href: '/projects/tone-and-sculpt',
        title: 'Rebooting female fitness for Tone and Sculpt',
        projectImageClass: "project__image--short",
        blobColour: "#5CC2E1",
        tags: ['DESIGN', "MOBILE", "API"],

    },
    {
        ButtonComponent: ButtonPrimary,
        projectImage: '/static/images/projects/purely-capital/pc-summary-mac.png',
        subTitle: 'Responsive Web Application',
        href: '/projects/purely-capital',
        title: 'The future of film and media financing',
        blobColour: "#D02D55",
        tags: ['DESIGN', "WEB"],

    },
];


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
                                <div className="col-lg-6 offset-lg-3">
                                    <p className="text-light">We approach our design projects using decades of
                                        experience
                                        and with a passion for providing the best experience for your users. Our desire
                                        is
                                        to understand your users and deliver value quickly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ServiceItem className={'flex-row-reverse'}
                                 imageClassName={'img__shadow '}
                                 serviceListItem={
                                     <React.Fragment>
                                         <WideListItem
                                             listItemText={'User research'}/>
                                         <WideListItem
                                             listItemText={'Wireframing'}/>
                                         <WideListItem
                                             listItemText={'Prototyping'}/>
                                         <WideListItem
                                             listItemText={'User testing'}/>
                                     </React.Fragment>
                                 }
                                 subTitle={'UX Design'}
                                 listTitle={'WHAT WE DO'}
                                 serviceDescription={'Building products that solve problems for your users is hard.  We apply years of experience and formalised techniques to provide data that drives the design process.  ' +
                                 'User experience has never been more important for digital products.'}/>

                    <ServiceItem
                        serviceImage={'/static/images/services/ui-components@1x.png'}
                        serviceListItem={
                            <React.Fragment>
                                <ListItemUnderlined listItemText={'User interface design'}
                                                    listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'Branding'} listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'Mobile first'} listItemLink={'/'}/>
                                <ListItemUnderlined
                                    listItemText={'High fidelity prototypes'} listItemLink={'/'}/>
                            </React.Fragment>
                        }
                        subTitle={'UI Design'}
                        listTitle={'WHAT WE DO'}
                        serviceDescription={'From our London office, we\'ve been working with corporations and startups for over 15 years, building intuitive user experiences with beautifully crafted user interfaces.\n' +
                        '\n'}/>

                    <ServiceItem
                        serviceImage={'https://www.solidstategroup.com/images/services/onboarding-compressed-new.gif'}
                        className={'flex-row-reverse'}
                        imageClassName={'img__shadow '}
                        serviceListItem={
                            <React.Fragment>
                                <WideListItem
                                    listItemText={'Motion prototypes'}/>
                                <WideListItem
                                    listItemText={'Frontend Development'}/>
                                <WideListItem
                                    listItemText={'CSS & Javascript Animation'}/>
                            </React.Fragment>
                        }
                        subTitle={'Interaction Design'}
                        listTitle={'WHAT WE DO'}
                        serviceDescription={'We specialise in UI/UX animation that not only looks great, but aids users by providing feedback, directing attention and showcasing the personality of your product.\n' +
                        '\n'}/>
                </div>
                <ClientQuote
                    text={'Solid State Group are really easy to work with as they are open to feedback and provide regular updates to be able to take decisions on the fly. They came up with a brilliant idea at our hackathon and they\'ve taken on board the insights from our business to further refine the product later on.'}
                    clientName={'Krissy Cela'} clientTitle={'Founder - Tone and Sculpt'}/>

                <div className="container">
                    <h3 className="section__title--dark text-center mb-5 mt-5">Design case studies</h3>
                    {projects.map((p) => (
                        <ProjectItem ButtonComponent={p.ButtonComponent} projectImage={p.projectImage}
                                     subTitle={p.subTitle}
                                     title={p.title} clientBrand={p.clientBrand} clientName={p.clientName}
                                     projectImageClass={p.projectImageClass}
                                     blobColour={p.blobColour}
                        />
                    ))}
                </div>

                <Footer/>
            </Page>
        );
    };
};

export default ServicesPage;
