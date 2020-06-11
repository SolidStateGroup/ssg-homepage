import React from 'react';
import { getStory, withPaddedContainer } from './setup';
import Button, { ButtonTertiary, ButtonPrimary, ButtonSecondary, ButtonText } from '../components/base/forms/Button';
import ListItem, { ListItemUnderlined } from '../components/ListItem';
import BlogItem from '../components/BlogItem';
import BlogPost from '../components/BlogPost';
import BaLogo from '../components/ClientLogos/BaLogo';
import HertzLogo from '../components/ClientLogos/HertzLogo';
import UnileverLogo from '../components/ClientLogos/UnileverLogo';
import NHSLogo from '../components/ClientLogos/NHSLogo';
import VisaLogo from '../components/ClientLogos/VisaLogo';
import DisneyLogo from '../components/ClientLogos/DisneyLogo';
import ProjectItem from '../components/ProjectItem';
import exampleMD from './example-blog-post';
import ServiceItem from '../components/ServiceItem';
import Card from '../components/Card';

getStory('Typography')
    .addDecorator(withPaddedContainer)
    .add('default', () => (
        <>
            <h1>Test</h1>
            <h2>Test</h2>
            <h3>Test</h3>
            <h4>Test</h4>
            <h5>Test</h5>
            <h6>Test</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
    ));

getStory('Buttons')
    .addDecorator(withPaddedContainer)
    .add('default', () => <Button>A Button</Button>)
    .add('primary', () => <ButtonPrimary>A Button</ButtonPrimary>)
    .add('secondary', () => <ButtonSecondary>A Button</ButtonSecondary>)
    .add('tertiary', () => <ButtonTertiary>A Button</ButtonTertiary>)
    .add('text', () => <ButtonText buttonText={'Explore our services'}/>)
    .add('download', () =>  <ButtonDownload href="/static/downloads/SSG-design-process.pdf">SSG-Styleguide__FINAL-12345678.sketch</ButtonDownload>)
    .add('hexagon', () => <React.Fragment><div class="col-md-3"><ButtonHexagon buttonText={'Strategy'}/></div></React.Fragment>);

getStory('Forms')
    .addDecorator(withPaddedContainer)
    .add('input', () =>      <React.Fragment><div class="hero p-5"> <Input InputLabel={'Email address *'} forLabel="Email address" placeholder="name@example.com"
                                       formID={'email address'}
                                       inputClassName="form-control form__input mb-3"/></div></React.Fragment>);


getStory('Blog')
    .addDecorator(withPaddedContainer)
    .add('Blog Item', () => (
        <BlogItem item={{
            'author': 'Kyle',
            'title': 'Achieving a perfect 100% Google Lighthouse audit score with Next and Redux',
            'description': 'Jumping down a satisfying rabbit hole with NextJS',
            'tags': [
                'javascript',
                'react',
                'showdev',
                'webdev',
            ],
            'dateFormatted': 'Aug 26 2019',
            'sort': -1566774000000,
            'url': '100-percent-lighthouse-score',
        }}
        />
    ))
    .add('Blog Post', () => (
        <BlogPost
            route="Test Blog" source={exampleMD}
        />
    ));

getStory('ListItems')
    .addDecorator(withPaddedContainer)
    .add('default', () => <ListItem listItemText={'a list item'} listItemLink={'/'}/>)
    .add('underlined', () => <ListItemUnderlined listItemText={'an underlined list item'} listItemLink={'/'}/>);

getStory('Cards')
    .addDecorator(withPaddedContainer)
    .add('default', () => <Card cardTechnology={'JavaScript'} cardTechnologyStars={'120'} cardTechnologyForked={'14'}
                                techColourClass={'card__technology--yellow'} cardTitle={'rio'}/>);

getStory('Services')
    .addDecorator(withPaddedContainer)
    .add('default', () =>      <ServiceItem
        serviceListItem={<React.Fragment><ListItemUnderlined listItemText={'Tone & Sculpt'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Purely Capital'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Wazoku Idea App'} listItemLink={'/'}/><ListItemUnderlined listItemText={'Unilever'} listItemLink={'/'}/></React.Fragment>}
        subTitle={'UX Design'}
        serviceImage={'/static/images/services/mobile-app-development.jpg'}
        serviceDescription={'From our London office, we\'ve been working with startups and corporations for over 15 years, building cross-platform, enterprise-grade, entrepreneurial websites and apps for digital transformation projects.'}/>);

getStory('ClientLogos')
    .addDecorator(withPaddedContainer)
    .add('default', () =>
        <>
            <div className="row">
                <div className="col">
                    <BaLogo fill={'#201C26'}/>
                </div>
                <div className="col">
                    <HertzLogo fill={'#201C26'}/>
                </div>
                <div className="col">
                    <UnileverLogo width={50} height={50} fill={'#201C26'}/>
                </div>
                <div className="col">
                    <VisaLogo fill={'#201C26'}/>
                </div>
                <div className="col">
                    <NHSLogo fill={'#201C26'}/>
                </div>
                <div className="col">
                    <DisneyLogo fill={'#201C26'}/>
                </div>
            </div>
        </>
    )

