import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Badge,
    Button,
    ButtonGroup,
    FabulaProvider,
} from '../lib';

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,
};

export const Glued = () => (
    <FabulaProvider utils={true}>
        <ButtonGroup glued={true}>
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={true}>
            <Button border={true} color="primary">Button 1</Button>
            <Button border={true} color="primary">Button 2</Button>
            <Button border={true} color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="primary" glued={true}>
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary" glued={true}>
            <Button color="secondary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="secondary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="aux" glued={true}>
            <Button color="aux">Button 1</Button>
            <Button color="aux">Button 2</Button>
            <Button color="aux">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="#EEE" glued={true}>
            <Button color="primary" clear={true}>Button 1</Button>
            <Button color="secondary" clear={true}>Button 2</Button>
            <Button color="danger" clear={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={true}>
            <Button color="primary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="danger">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={true}>
            <Button color="primary" faded={true}>Button 1</Button>
            <Button color="secondary" faded={true}>Button 2</Button>
            <Button color="danger" faded={true}>Button 3</Button>
        </ButtonGroup>
        
        <ButtonGroup glued={true}>
            <Button color="primary" gradient={true}>Button 1</Button>
            <Button color="secondary" gradient={true}>Button 2</Button>
            <Button color="danger" gradient={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary" glued={true} faded={true}>
            <Button color="primary" invert={true}>Button 1</Button>
            <Button color="secondary" invert={true}>Button 2</Button>
            <Button color="danger" invert={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={true}>
            <Button color="primary" outline={true}>Button 1</Button>
            <Button color="secondary" outline={true}>Button 2</Button>
            <Button color="danger" outline={true}>Button 3</Button>
        </ButtonGroup>
    </FabulaProvider>
);

export const Spaced = () => (
    <FabulaProvider utils={true}>
        <ButtonGroup glued={false}>
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={false}>
            <Button border={true} color="primary">Button 1</Button>
            <Button border={true} color="primary">Button 2</Button>
            <Button border={true} color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="primary" glued={false}>
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary" glued={false}>
            <Button color="secondary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="secondary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="aux" glued={false}>
            <Button color="aux">Button 1</Button>
            <Button color="aux">Button 2</Button>
            <Button color="aux">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="#EEE" glued={false}>
            <Button color="primary" clear={true}>Button 1</Button>
            <Button color="secondary" clear={true}>Button 2</Button>
            <Button color="danger" clear={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={false}>
            <Button color="primary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="danger">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={false}>
            <Button color="primary" faded={true}>Button 1</Button>
            <Button color="secondary" faded={true}>Button 2</Button>
            <Button color="danger" faded={true}>Button 3</Button>
        </ButtonGroup>
        
        <ButtonGroup glued={false}>
            <Button color="primary" gradient={true}>Button 1</Button>
            <Button color="secondary" gradient={true}>Button 2</Button>
            <Button color="danger" gradient={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary" glued={false} faded={true}>
            <Button color="primary" invert={true}>Button 1</Button>
            <Button color="secondary" invert={true}>Button 2</Button>
            <Button color="danger" invert={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup glued={false}>
            <Button color="primary" outline={true}>Button 1</Button>
            <Button color="secondary" outline={true}>Button 2</Button>
            <Button color="danger" outline={true}>Button 3</Button>
        </ButtonGroup>
    </FabulaProvider>
);