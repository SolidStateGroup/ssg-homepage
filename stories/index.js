import React from 'react';
import { getStory, withPaddedContainer } from './setup';
import Button, { ButtonTertiary, ButtonPrimary, ButtonSecondary, ButtonText } from '../components/base/forms/Button';
import ListItem, { ListItemUnderlined } from '../components/ListItem';
import BlogItem from '../components/BlogItem';
import BlogPost from '../components/BlogPost';
import BaLogo from '../components/ClientLogos/BaLogo';
import exampleMD from './example-blog-post';

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
    .add('text', () => <ButtonText>A Button</ButtonText>);


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


getStory('ClientLogos')
    .addDecorator(withPaddedContainer)
    .add('default', () => <BaLogo fill={'#201C26'}/>)

