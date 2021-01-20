import React, { Component } from 'react';
import propTypes from 'prop-types';
import Page from '../../components/Page';
import ProjectHero from '../../components/ProjectHero';
import {TextListItem, WideListItem} from '../../components/ListItem';
import ClientQuote from '../../components/ClientQuote';
import ProjectDetailSectionItem, {
    ProjectColourBlockSection, ProjectFullImageSection,
    ProjectTechSection,
    ProjectTextSection
} from '../../components/ProjectDetailSectionItem';
import Footer from '../../components/Footer';
import ProjectNav from '../../components/ProjectNav';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const TheComponent = class extends Component {
    static displayName = 'TheComponent';

    static propTypes = {
        children: propTypes.node,
    };

    componentDidMount() {
        API.trackPage(Constants.pages.projectElectronX);
    }

    render() {
        return (
            <React.Fragment>
                <Page title="Electron X" canonical="projects/electronx">
                    <ProjectHero
                        clientImage="/static/images/clients/white/electron-white.png"
                        projectTitle={'Tapping into the future of the electricity market'}
                        projectType={'Responsive website'}
                        ProjectServiceListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'UX design,'}/>
                                <TextListItem listItemText={'UI design,'}/>
                                <TextListItem listItemText={'Frontend & Backend Development'}/>
                            </React.Fragment>
                        }
                        ProjectTechListItem={
                            <React.Fragment>
                                <TextListItem listItemText={'Java,'}/>
                                <TextListItem listItemText={'Webpack,'}/>
                                <TextListItem listItemText={'Docker,'}/>
                                <TextListItem listItemText={'Greensock Animation Platform'}/>
                            </React.Fragment>
                        }
                        className="hero--electronx"
                        projectImage={"/static/images/projects/electronx/Macbook_color@1x.png"}
                        srcSet={'/static/images/projects/electronx/Macbook_color@1x.png 1x, /static/images/projects/electronx/Macbook_color@2x.png 2x'}
                    />

                    <div className="container">
                        <ProjectTextSection
                            subTitle="00 / Overview"
                            description={'Electron approached us to design and develop a marketing website for ElectronX, a platform aiming to solve the challenge of integrating millions of new energy assets into the existing energy industry. Electron use blockchain technology to avoid the trade-offs inherent in centralized platforms so to maximize the true value that can be released by this dramatic shift to renewables.'}
                        />

                        <ProjectTextSection
                            subTitle="01 / Challenge"
                            description={'The website needed to showcase Electrons proposed new security token, and visualize the concept of tapping into the future of the electricity market. We wanted to ensure the concepts discussed such as hi tech, energy grids and electricity were conveyed through the websites look and feel.'}
                        />

                        <ProjectFullImageSection
                            title={'Landing Page UI'}
                            subTitle={'01 / Landing Page'}
                            imageUrl={'/static/images/projects/electronx/electronx_landing-page.png'}
                            srcSet={'/static/images/projects/electronx/electronx_landing-page.png 1x, /static/images/projects/electronx/electronx_landing-page@2x.png 2x'}
                            imageAltText={'Responsive UI'}
                        />
                        <ProjectTextSection
                            subTitle="02 / Solution"
                            description={'Using the ElectronX brand guidelines as a starting point, we designed and implemented a fully responsive marketing page for the future Security Token Offering. We used WebGL & Three.js for the energy animations and Greensock (GSAP) for page transitions. The result was a high fidelity beautiful website showcasing The marketplace for interactive energy.'} />
                    </div>

                    <ProjectFullImageSection
                        className={'panel--navy'}
                        title={'Fully Responsive'}
                        imageUrl={'/static/images/projects/electronx/electronx_mobile.png'}
                        srcSet={'/static/images/projects/electronx/electronx_mobile.png 1x, /static/images/projects/electronx/electronx_mobile.png 2x'}
                        imageAltText={'Responsive UI'}
                    />

                    <div className="container">
                        <ProjectDetailSectionItem
                            subTitle={'03 / Design'}
                            title={'Fonts & Colours'}
                            className="flex-row-reverse"
                            imageOne={'/static/images/projects/wazoku/wazoku-font.png'}
                            description={'Summary of the fonts and colours used in the User Interface design of the application'}
                        />
                        <ProjectColourBlockSection imageOne={'/static/images/projects/electronx/electronx_primary-colours.png'} imageTwo={'/static/images/projects/electronx/electronx_secondary-colours.png'} />
                    </div>

                    <ProjectNav/>
                </Page>
                <Footer/>
            </React.Fragment>
        );
    }
};

export default TheComponent;
