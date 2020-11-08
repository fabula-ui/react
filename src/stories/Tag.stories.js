import React, { Fragment } from 'react';

import {
    FabulaProvider,
    Tag,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Tag',
    component: Tag,
};

// Base component
const BaseComponent = props => (
    <Fragment>
        <Wrapper mb={1}>
            <Tag mr={.5} {...props}>Normal</Tag>
            <Tag color="primary" mr={.5} {...props}>Normal</Tag>
            <Tag color="lavender" mr={.5} {...props}>Normal</Tag>
            <Tag color="hot" mr={.5} {...props}>Normal</Tag>
            <Tag color="aux" mr={.5} {...props}>Normal</Tag>
            <Tag color="dark" {...props}>Normal</Tag>
        </Wrapper>

        <Wrapper mb={1}>
            <Tag href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="primary" href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="lavender" href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="hot" href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="aux" href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="dark" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
        </Wrapper>

        <Wrapper>
            <Tag button={true} mr={.5} {...props}>Button</Tag>
            <Tag button={true} color="primary" mr={.5} {...props}>Button</Tag>
            <Tag button={true} color="lavender" mr={.5} {...props}>Button</Tag>
            <Tag button={true} color="hot" mr={.5} {...props}>Button</Tag>
            <Tag button={true} color="aux" mr={.5} {...props}>Button</Tag>
            <Tag button={true} color="dark" {...props}>Button</Tag>
        </Wrapper>
    </Fragment>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper>
                <Tag mr={.5}>Normal</Tag>
                <Tag href="https://www.github.com/fabula-ui" mr={.5} rel="noopener noreferrer" target="_blank">Anchor</Tag>
                <Tag button={true}>Button</Tag>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent clear={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent faded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent glow={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInvert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent invert={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent outline={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent rounded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb="1">
                <Tag color="primary" mr={.5} size="xs">Extra-small</Tag>
                <Tag color="primary" mr={.5} size="sm">Small</Tag>
                <Tag color="primary" mr={.5} size="md">Medium</Tag>
                <Tag color="primary" mr={.5} size="lg">Large</Tag>
                <Tag color="primary" mr={.5} size="xl">Extra-large</Tag>
                <Tag color="primary" size="xxl">2x Extra-large</Tag>
            </Wrapper>

            <Wrapper mb={1}>
                <Tag button={true} color="primary" mr={.5} size="xs">Extra-small</Tag>
                <Tag button={true} color="primary" mr={.5} size="sm">Small</Tag>
                <Tag button={true} color="primary" mr={.5} size="md">Medium</Tag>
                <Tag button={true} color="primary" mr={.5} size="lg">Large</Tag>
                <Tag button={true} color="primary" mr={.5} size="xl">Extra-large</Tag>
                <Tag button={true} color="primary" size="xxl">2x Extra-large</Tag>
            </Wrapper>

            <Wrapper mb={1}>
                <Tag color="primary" href="https://www.fabulaui.com" mr={.5} size="xs">Extra-small</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" mr={.5} size="sm">Small</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" mr={.5} size="md">Medium</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" mr={.5} size="lg">Large</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" mr={.5} size="xl">Extra-large</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="xxl">2x Extra-large</Tag>
            </Wrapper>

            <Wrapper mb={1}>
                <Tag color="primary" mr={.5} rounded={true} size="xs">Extra-small</Tag>
                <Tag color="primary" mr={.5} rounded={true} size="sm">Small</Tag>
                <Tag color="primary" mr={.5} rounded={true} size="md">Medium</Tag>
                <Tag color="primary" mr={.5} rounded={true} size="lg">Large</Tag>
                <Tag color="primary" mr={.5} rounded={true} size="xl">Extra-large</Tag>
                <Tag color="primary" rounded={true} size="xxl">2x Extra-large</Tag>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <Tag color="aux" mr={.5}>Tag</Tag>
                <Tag color="aux" mx={.5}>Tag</Tag>
                <Tag color="aux" ml={.5}>Tag</Tag>
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <Tag color="aux" mb={.5}>Tag</Tag>
                <Tag color="aux" my={.5}>Tag</Tag>
                <Tag color="aux" mt={.5}>Tag</Tag>
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <Tag color="aux">Tag</Tag>
                <Wrapper al="center" flex={true}>
                    <Tag color="aux">Tag</Tag>
                    <Tag color="aux" m={1}>Tag</Tag>
                    <Tag color="aux">Tag</Tag>
                </Wrapper>
                <Tag color="aux">Tag</Tag>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Tag color="aux" mr={1} p={2}>Tag</Tag>
            <Tag color="aux" mr={1} pb={2}>Tag</Tag>
            <Tag color="aux" mr={1} pl={2}>Tag</Tag>
            <Tag color="aux" mr={1} pr={2}>Tag</Tag>
            <Tag color="aux" mr={1} pt={2}>Tag</Tag>
            <Tag color="aux" mr={1} px={2}>Tag</Tag>
            <Tag color="aux" mr={1} py={2}>Tag</Tag>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Tag color="aux" hidden={true}>Tag</Tag>
            <Tag color="aux" visible={true}>Tag</Tag>
        </UtilsProvider>
    </FabulaProvider>
)