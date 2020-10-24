import React from 'react';

import {
    Avatar,
    Badge,
    Button,
    Divider,
    Element,
    Heading,
    Icon,
    FabulaProvider,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Badge',
    component: Badge,
};

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper>
                <Heading mb={1} mt={0}>
                    <Element mr={1}>Heading</Element>
                    <Badge color="aux">Level 1</Badge>
                </Heading>

                <Heading level={2} mb={1} mt={0}>
                    <Element mr={1}>Heading</Element>
                    <Badge color="aux">Level 2</Badge>
                </Heading>

                <Heading level={3} mb={1} mt={0}>
                    <Element mr={1}>Heading</Element>
                    <Badge color="aux">Level 3</Badge>
                </Heading>

                <Heading level={4} mb={1} mt={0}>
                    <Element mr={.5}>Heading</Element>
                    <Badge color="aux">Level 4</Badge>
                </Heading>

                <Heading level={5} mb={1} mt={0}>
                    <Element mr={.5}>Heading</Element>
                    <Badge color="aux">Level 5</Badge>
                </Heading>

                <Heading level={6} mb={1} mt={0}>
                    <Element mr={.5}>Heading</Element>
                    <Badge color="aux">Level 6</Badge>
                </Heading>
            </Wrapper>
            <Divider my={1} />
            <Button color="primary" compact={true} mr="1">
                <Element mr={.5}>Button</Element>
                <Badge color="primary" invert={true}>99+</Badge>
            </Button>
            <Button color="lavender" compact={true} mr="1">
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" invert={true}>99+</Badge>
            </Button>
            <Button color="hot" compact={true} mr="1">
                <Element mr={.5}>Button</Element>
                <Badge color="hot" invert={true}>99+</Badge>
            </Button>
            <Button color="aux" compact={true} mr="1">
                <Element mr={.5}>Button</Element>
                <Badge color="aux" invert={true}>99+</Badge>
            </Button>
            <Button color="dark" compact={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" invert={true}>99+</Badge>
            </Button>
            <Divider my={1} />
            <Avatar mr={1}>
                <Badge color="primary" rounded={true}>9</Badge>
            </Avatar>
            <Avatar mr={1}>
                <Badge color="primary" rounded={true}>99+</Badge>
            </Avatar>
            <Avatar mr={1}>
                <Badge color="primary" rounded={true}>
                    <Icon name="check"></Icon>
                </Badge>
            </Avatar>
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true} color="primary">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true} color="lavender">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true} color="hot">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true} color="aux">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge clear={true} color="dark">9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux">9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark">9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDarken = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge darken={true}>9</Badge>
            </Button>
            <Button color="primary" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" darken={true}>9</Badge>
            </Button>
            <Button color="lavender" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" darken={true}>9</Badge>
            </Button>
            <Button color="hot" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" darken={true}>9</Badge>
            </Button>
            <Button color="aux" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" darken={true}>9</Badge>
            </Button>
            <Button color="dark" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" darken={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge faded={true}>9</Badge>
            </Button>
            <Button color="primary" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" faded={true}>9</Badge>
            </Button>
            <Button color="lavender" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" faded={true}>9</Badge>
            </Button>
            <Button color="hot" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" faded={true}>9</Badge>
            </Button>
            <Button color="aux" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" faded={true}>9</Badge>
            </Button>
            <Button color="dark" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" faded={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInvert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge invert={true}>9</Badge>
            </Button>
            <Button color="primary" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" invert={true}>9</Badge>
            </Button>
            <Button color="lavender" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" invert={true}>9</Badge>
            </Button>
            <Button color="hot" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" invert={true}>9</Badge>
            </Button>
            <Button color="aux" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" invert={true}>9</Badge>
            </Button>
            <Button color="dark" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" invert={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLighten = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge lighten={true}>9</Badge>
            </Button>
            <Button color="primary" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" lighten={true}>9</Badge>
            </Button>
            <Button color="lavender" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" lighten={true}>9</Badge>
            </Button>
            <Button color="hot" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" lighten={true}>9</Badge>
            </Button>
            <Button color="aux" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" lighten={true}>9</Badge>
            </Button>
            <Button color="dark" compact={true} mr={1}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" lighten={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge outline={true}>9</Badge>
            </Button>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" outline={true}>9</Badge>
            </Button>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" outline={true}>9</Badge>
            </Button>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" outline={true}>9</Badge>
            </Button>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" outline={true}>9</Badge>
            </Button>
            <Button compact={true} mr={1} outline={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" outline={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge rounded={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="primary" rounded={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="lavender" rounded={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="hot" rounded={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="aux" rounded={true}>9</Badge>
            </Button>
            <Button border={true} compact={true} mr={1} rounded={true}>
                <Element mr={.5}>Button</Element>
                <Badge color="dark" rounded={true}>9</Badge>
            </Button>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <Badge color="aux" mr={.5}>Badge</Badge>
                <Badge color="aux" mx={.5}>Badge</Badge>
                <Badge color="aux" ml={.5}>Badge</Badge>
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <Badge color="aux" mb={.5}>Badge</Badge>
                <Badge color="aux" my={.5}>Badge</Badge>
                <Badge color="aux" mt={.5}>Badge</Badge>
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <Badge color="aux">Badge</Badge>
                <Wrapper al="center" flex={true}>
                    <Badge color="aux">Badge</Badge>
                    <Badge color="aux" m={1}>Badge</Badge>
                    <Badge color="aux">Badge</Badge>
                </Wrapper>
                <Badge color="aux">Badge</Badge>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Badge color="aux" mr={1} p={2}>Badge</Badge>
            <Badge color="aux" mr={1} pb={2}>Badge</Badge>
            <Badge color="aux" mr={1} pl={2}>Badge</Badge>
            <Badge color="aux" mr={1} pr={2}>Badge</Badge>
            <Badge color="aux" mr={1} pt={2}>Badge</Badge>
            <Badge color="aux" mr={1} px={2}>Badge</Badge>
            <Badge color="aux" mr={1} py={2}>Badge</Badge>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Badge color="aux" hidden={true}>Badge</Badge>
            <Badge color="aux" visible={true}>Badge</Badge>
        </UtilsProvider>
    </FabulaProvider>
)