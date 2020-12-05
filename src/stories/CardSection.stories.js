import React from 'react';

import {
    Button,
    Card,
    CardImage,
    CardSection,
    Column,
    FabulaProvider,
    Row,
    Text,
    UtilsProvider
} from '../lib';

export default {
    title: 'Card Section',
    component: CardSection,
};

// Base component
const BaseComponent = ({ color, darken, divider, faded, lighten }) => (
    <Card>
        <CardSection color={color} faded={faded} padding={true}>
            <Text color="inherit" size="lg" weight={700}>Card Title</Text>
            <Text aux={true} color={color ? 'inherit' : ''} size="sm">Card subtitle</Text>
        </CardSection>
        <CardSection color={color} darken={darken} divider={divider ? 'top' : ''} lighten={lighten} padding={true}>
            <Button color={color || 'primary'} expand={true} invert={!!color}>
                Button
            </Button>
        </CardSection>
    </Card>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Card width="400px">
                <CardImage height={120} />
                <CardSection padding={true}>
                    <Text color="inherit" size="lg" weight={700}>Card Title</Text>
                    <Text aux={true} size="sm">Card subtitle</Text>
                </CardSection>
                <CardSection divider="top" padding={true}>
                    <Button color="primary" expand={true}>
                        Button
                    </Button>
                </CardSection>
            </Card>
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent />
                </Column>
                <Column col="3">
                    <BaseComponent color="primary" />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" />
                </Column>
            </Row>

            <Row>
                <Column col="3">
                    <BaseComponent color="aux" />
                </Column>
                <Column col="3">
                    <BaseComponent color="dark" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDarken = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent />
                </Column>
                <Column col="3">
                    <BaseComponent color="primary" darken={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" darken={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" darken={true} />
                </Column>
            </Row>

            <Row>
                <Column col="3">
                    <BaseComponent color="aux" darken={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="dark" darken={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDivider = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent divider={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="primary" divider={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" divider={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" divider={true} />
                </Column>
            </Row>

            <Row>
                <Column col="3">
                    <BaseComponent color="aux" divider={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="dark" divider={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent faded={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="primary" faded={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" faded={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" faded={true} />
                </Column>
            </Row>

            <Row>
                <Column col="3">
                    <BaseComponent color="aux" faded={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="dark" faded={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLighten = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent lighten={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="primary" lighten={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" lighten={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" lighten={true} />
                </Column>
            </Row>

            <Row>
                <Column col="3">
                    <BaseComponent color="aux" lighten={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="dark" lighten={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = ({ pmb, ...rest }) => (
    <Card mb={pmb}>
        <CardSection {...rest}>
            <Text block={true} size="lg" weight={700}>Card Title</Text>
            <Text aux={true} size="sm">Card subtitle</Text>
        </CardSection>
    </Card>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent pmb={1} p={2} />
            <UtilBaseComponent pmb={1} pb={2} />
            <UtilBaseComponent pmb={1} pl={2} />
            <UtilBaseComponent pmb={1} pr={2} />
            <UtilBaseComponent pmb={1} pt={2} />
            <UtilBaseComponent pmb={1} px={2} />
            <UtilBaseComponent pmb={1} py={2} />
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent hidden={true} pmb={1} />
            <UtilBaseComponent padding={true} visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)