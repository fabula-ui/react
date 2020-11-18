import React from 'react';

import {
    Badge,
    FabulaProvider,
    List,
    ListItem,
    Tag,
    Text,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'List Item',
    component: ListItem,
};

// Base component
const BaseComponent = ({ color, hidden, ...rest }) => {
    return (
        <UtilsProvider>
            <List padding={true}>
                <ListItem color={color} flex={!hidden} hidden={hidden} {...rest}>
                    <Wrapper grow={1}>
                        <Text size="lg" weight={600}>
                            <Text inline={true} mr={.5}>List Item 1</Text>
                            <Badge color={color || 'primary'} invert={!!color} size="sm">Badge</Badge>
                        </Text>
                        <Text aux={true} color={color ? 'inherit' : ''} size="sm">
                            List item subtitle
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <Tag color={color} invert={!!color} mr={.5} size="sm">Tag 1</Tag>
                        <Tag color={color} invert={!!color} mr={.5} size="sm">Tag 2</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 3</Tag>
                    </Wrapper>
                </ListItem>
            </List>
        </UtilsProvider>
    )
}

BaseComponent.defaultProps = {
    divider: true
}

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent onClick={() => alert('Click event triggered')} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} />
            <BaseComponent color="primary" mb={1} />
            <BaseComponent color="lavender" mb={1} />
            <BaseComponent color="hot" mb={1} />
            <BaseComponent color="aux" mb={1} />
            <BaseComponent color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropHref = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent button={true} href="https://www.github.com/fabula-ui" />
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = props => (
    <List color="aux" padding={true} width={400}>
        <ListItem {...props}>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
    </List>
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent m={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mb={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent ml={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mr={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mt={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mx={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent my={1} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent p={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pb={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pl={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pr={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pt={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent px={1} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent py={1} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent hidden={true} />
            </Wrapper>
            <UtilBaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)