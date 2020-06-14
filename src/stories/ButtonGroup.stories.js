import React from 'react';

import {
    Button,
    ButtonGroup,
    FabulaProvider,
    UtilsProvider
} from '../lib';

export default {
    title: 'Button Group',
    component: ButtonGroup,
};

export const Flow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <ButtonGroup mb="1">
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup flow="vertical" mb="1">
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Glued = () => (
    <FabulaProvider>
        <UtilsProvider>
            <ButtonGroup glued={true} mb={1}>
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued={true} mb={1}>
                <Button border={true} color="primary">Button 1</Button>
                <Button border={true} color="primary">Button 2</Button>
                <Button border={true} color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup dividerColor="primary" glued={true} mb={1}>
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup dividerColor="secondary" glued={true} mb={1}>
                <Button color="secondary">Button 1</Button>
                <Button color="secondary">Button 2</Button>
                <Button color="secondary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup dividerColor="aux" glued={true} mb={1}>
                <Button color="aux">Button 1</Button>
                <Button color="aux">Button 2</Button>
                <Button color="aux">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup dividerColor="#EEE" glued={true} mb={1}>
                <Button color="primary" clear={true}>Button 1</Button>
                <Button color="secondary" clear={true}>Button 2</Button>
                <Button color="danger" clear={true}>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued={true} mb={1}>
                <Button color="primary">Button 1</Button>
                <Button color="secondary">Button 2</Button>
                <Button color="danger">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued={true} mb={1}>
                <Button color="primary" faded={true}>Button 1</Button>
                <Button color="secondary" faded={true}>Button 2</Button>
                <Button color="danger" faded={true}>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued={true} mb={1}>
                <Button color="primary" gradient={true}>Button 1</Button>
                <Button color="secondary" gradient={true}>Button 2</Button>
                <Button color="danger" gradient={true}>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup dividerColor="secondary" glued={true} faded={true} mb={1}>
                <Button color="primary" invert={true}>Button 1</Button>
                <Button color="secondary" invert={true}>Button 2</Button>
                <Button color="danger" invert={true}>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued={true}>
                <Button color="primary" outline={true}>Button 1</Button>
                <Button color="secondary" outline={true}>Button 2</Button>
                <Button color="danger" outline={true}>Button 3</Button>
            </ButtonGroup>
        </UtilsProvider>
    </FabulaProvider>
);

export const Spaced = () => (
    <FabulaProvider>
        <ButtonGroup>
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button border={true} color="primary">Button 1</Button>
            <Button border={true} color="primary">Button 2</Button>
            <Button border={true} color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="primary">
            <Button color="primary">Button 1</Button>
            <Button color="primary">Button 2</Button>
            <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary">
            <Button color="secondary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="secondary">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="aux">
            <Button color="aux">Button 1</Button>
            <Button color="aux">Button 2</Button>
            <Button color="aux">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="#EEE">
            <Button color="primary" clear={true}>Button 1</Button>
            <Button color="secondary" clear={true}>Button 2</Button>
            <Button color="danger" clear={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button color="primary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="danger">Button 3</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button color="primary" faded={true}>Button 1</Button>
            <Button color="secondary" faded={true}>Button 2</Button>
            <Button color="danger" faded={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button color="primary" gradient={true}>Button 1</Button>
            <Button color="secondary" gradient={true}>Button 2</Button>
            <Button color="danger" gradient={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup dividerColor="secondary" faded={true}>
            <Button color="primary" invert={true}>Button 1</Button>
            <Button color="secondary" invert={true}>Button 2</Button>
            <Button color="danger" invert={true}>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button color="primary" outline={true}>Button 1</Button>
            <Button color="secondary" outline={true}>Button 2</Button>
            <Button color="danger" outline={true}>Button 3</Button>
        </ButtonGroup>
    </FabulaProvider>
);