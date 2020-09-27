import React from 'react';

import {
    Badge,
    Column,
    FabulaProvider,
    List,
    ListItem,
    Row,
    Tag,
    TagGroup,
    Text,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'List',
    component: List,
};

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
                    <TagGroup>
                        <Tag color={color} invert={!!color} size="sm">Tag 1</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 2</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 3</Tag>
                    </TagGroup>
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
                    <TagGroup>
                        <Tag color={color} invert={!!color} size="sm">Tag 1</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 2</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 3</Tag>
                    </TagGroup>
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
                    <TagGroup>
                        <Tag color={color} invert={!!color} size="sm">Tag 1</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 2</Tag>
                        <Tag color={color} invert={!!color} size="sm">Tag 3</Tag>
                    </TagGroup>
                </ListItem>
            </List>
        </UtilsProvider>
    )
}

BaseComponent.defaultProps = {
    divider: true
}

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
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