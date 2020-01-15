import React from 'react';
import { getStory, withPaddedContainer } from './setup';
import Button, { ButtonTertiary, ButtonPrimary, ButtonSecondary } from '../components/base/forms/Button';

getStory('Buttons')
    .addDecorator(withPaddedContainer)
    .add('default', () => <Button>A Button</Button>)
    .add('primary', () => <ButtonPrimary>A Button</ButtonPrimary>)
    .add('secondary', () => <ButtonSecondary>A Button</ButtonSecondary>)
    .add('tertiary', () => <ButtonTertiary>A Button</ButtonTertiary>);
