import React from 'react';

import {
    Badge,
    Column,
    FabulaProvider,
    List,
    ListItem,
    Row,
    Tag,
    Text,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'List',
    component: List,
};

// Base component
const BaseComponent = ({ color, ...rest }) => {
    return (
        <UtilsProvider>
            <List color={color} padding={true} {...rest}>
                <ListItem flex={true}>
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

                <ListItem flex={true}>
                    <Wrapper grow={1}>
                        <Text size="lg" weight={600}>
                            <Text inline={true} mr={.5}>List Item 2</Text>
                            <Badge color={color || 'secondary'} invert={!!color} size="sm">Badge</Badge>
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

                <ListItem flex={true}>
                    <Wrapper grow={1}>
                        <Text size="lg" weight={600}>
                            <Text inline={true} mr={.5}>List Item 3</Text>
                            <Badge color={color || 'hot'} invert={!!color} size="sm">Badge</Badge>
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

export const PropDivider = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent divider={true} />
                </Column>
                <Column col={6}>
                    <BaseComponent divider={false} />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent color="primary" divider={true} />
                </Column>
                <Column col={6}>
                    <BaseComponent color="primary" divider={false} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent padding={true} />
                </Column>
                <Column col={6}>
                    <BaseComponent padding={false} />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent color="primary" padding={true} />
                </Column>
                <Column col={6}>
                    <BaseComponent color="primary" padding={false} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropStriped = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} />
            <BaseComponent color="primary" mb={1} striped={true} />
            <BaseComponent color="lavender" mb={1} striped={true} />
            <BaseComponent color="hot" mb={1} striped={true} />
            <BaseComponent color="aux" mb={1} striped={true} />
            <BaseComponent color="dark" striped={true} />
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = props => (
    <List color="aux" padding={true} {...props}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
    </List>
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <UtilBaseComponent mr={.5} width={400} />
                <UtilBaseComponent mx={.5} width={400} />
                <UtilBaseComponent ml={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <UtilBaseComponent mb={.5} width={400} />
                <UtilBaseComponent my={.5} width={400} />
                <UtilBaseComponent mt={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <UtilBaseComponent width={400} />
                <Wrapper al="center" flex={true}>
                    <UtilBaseComponent width={400} />
                    <UtilBaseComponent m={1} width={400} />
                    <UtilBaseComponent width={400} />
                </Wrapper>
                <UtilBaseComponent width={400} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent mb={1} p={2} />
            <UtilBaseComponent mb={1} pb={2} />
            <UtilBaseComponent mb={1} pl={2} />
            <UtilBaseComponent mb={1} pr={2} />
            <UtilBaseComponent mb={1} pt={2} />
            <UtilBaseComponent mb={1} px={2} />
            <UtilBaseComponent mb={1} py={2} />
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent hidden={true} />
            <UtilBaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)