import React, { Fragment } from 'react';

import {
    FabulaProvider,
    Tag,
    TagGroup,
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
        <TagGroup mb={1}>
            <Tag {...props}>Normal</Tag>
            <Tag color="primary" {...props}>Normal</Tag>
            <Tag color="lavender" {...props}>Normal</Tag>
            <Tag color="hot" {...props}>Normal</Tag>
            <Tag color="aux" {...props}>Normal</Tag>
            <Tag color="dark" {...props}>Normal</Tag>
        </TagGroup>

        <TagGroup mb={1}>
            <Tag href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="primary" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="lavender" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="hot" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="aux" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
            <Tag color="dark" href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank" {...props}>Anchor</Tag>
        </TagGroup>

        <TagGroup>
            <Tag button={true} {...props}>Button</Tag>
            <Tag button={true} color="primary" {...props}>Button</Tag>
            <Tag button={true} color="lavender" {...props}>Button</Tag>
            <Tag button={true} color="hot" {...props}>Button</Tag>
            <Tag button={true} color="aux" {...props}>Button</Tag>
            <Tag button={true} color="dark" {...props}>Button</Tag>
        </TagGroup>
    </Fragment>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag>Normal</Tag>
                <Tag href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Anchor</Tag>
                <Tag button={true}>Button</Tag>
            </TagGroup>
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
            <TagGroup mb="1">
                <Tag color="primary" size="xs">Extra-small</Tag>
                <Tag color="primary" size="sm">Small</Tag>
                <Tag color="primary" size="md">Medium</Tag>
                <Tag color="primary" size="lg">Large</Tag>
                <Tag color="primary" size="xl">Extra-large</Tag>
                <Tag color="primary" size="xxl">2x Extra-large</Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag button={true} color="primary" size="xs">Extra-small</Tag>
                <Tag button={true} color="primary" size="sm">Small</Tag>
                <Tag button={true} color="primary" size="md">Medium</Tag>
                <Tag button={true} color="primary" size="lg">Large</Tag>
                <Tag button={true} color="primary" size="xl">Extra-large</Tag>
                <Tag button={true} color="primary" size="xxl">2x Extra-large</Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag color="primary" href="https://www.fabulaui.com" size="xs">Extra-small</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="sm">Small</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="md">Medium</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="lg">Large</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="xl">Extra-large</Tag>
                <Tag color="primary" href="https://www.fabulaui.com" size="xxl">2x Extra-large</Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag color="primary" rounded={true} size="xs">Extra-small</Tag>
                <Tag color="primary" rounded={true} size="sm">Small</Tag>
                <Tag color="primary" rounded={true} size="md">Medium</Tag>
                <Tag color="primary" rounded={true} size="lg">Large</Tag>
                <Tag color="primary" rounded={true} size="xl">Extra-large</Tag>
                <Tag color="primary" rounded={true} size="xxl">2x Extra-large</Tag>
            </TagGroup>
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