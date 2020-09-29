import React from 'react';

import {
    Badge,
    FabulaProvider,
    List,
    ListItem,
    Tag,
    TagGroup,
    Text,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'List Item',
    component: ListItem,
};

const BaseComponent = ({ color, ...rest }) => {
    return (
        <UtilsProvider>
            <List padding={true}>
                <ListItem color={color} flex={true} {...rest}>
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

export const PropButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent button={true} mb={1} />
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