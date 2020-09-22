import React from 'react';

import {
    Avatar,
    Badge,
    FabulaProvider,
    Icon,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Avatar',
    component: Avatar,
};

// Example
const BadgeExample = ({ color, mb }) => (
    <Wrapper mb={mb}>
        <Avatar mr={1}>
            <Badge color={color}>9</Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color}>99+</Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color}>
                <Icon name="check"></Icon>
            </Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} rounded={true}>9</Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} rounded={true}>99+</Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} rounded={true}>
                <Icon name="check"></Icon>
            </Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} placement={{ x: 'right', y: 'top' }} rounded={true}>
                <Icon name="check"></Icon>
            </Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} placement={{ x: 'left', y: 'top' }} rounded={true}>
                <Icon name="check"></Icon>
            </Badge>
        </Avatar>
        <Avatar mr={1}>
            <Badge color={color} placement={{ x: 'left', y: 'bottom' }} rounded={true}>
                <Icon name="check"></Icon>
            </Badge>
        </Avatar>
    </Wrapper>
)

// Stories
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <Avatar mr="1" />
                <Avatar color="primary" mr="1" />
                <Avatar color="lavender" mr="1" />
                <Avatar color="hot" mr="1" rounded={true} />
                <Avatar color="aux" mr="1" rounded={true} />
                <Avatar color="dark" rounded={true} />
            </Wrapper>

            <Wrapper>
                <Avatar image="https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_UY256_CR1,0,172,256_AL_.jpg" mr="1" />
                <Avatar color="primary" image="https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_UY256_CR1,0,172,256_AL_.jpg" mr="1" rounded={true} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropBadge = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BadgeExample mb={1} />
            <BadgeExample color="primary" mb={1} />
            <BadgeExample color="lavender" mb={1} />
            <BadgeExample color="hot" mb={1} />
            <BadgeExample color="aux" mb={1} />
            <BadgeExample color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar mr="1" />
            <Avatar color="primary" mr="1" />
            <Avatar color="lavender" mr="1" />
            <Avatar color="hot" mr="1" />
            <Avatar color="aux" mr="1" />
            <Avatar color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDarken = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar darken={true} mr="1" />
            <Avatar color="primary" darken={true} mr="1" />
            <Avatar color="lavender" darken={true} mr="1" />
            <Avatar color="hot" darken={true} mr="1" />
            <Avatar color="aux" darken={true} mr="1" />
            <Avatar color="dark" darken={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar faded={true} mr="1" />
            <Avatar color="primary" faded={true} mr="1" />
            <Avatar color="lavender" faded={true} mr="1" />
            <Avatar color="hot" faded={true} mr="1" />
            <Avatar color="aux" faded={true} mr="1" />
            <Avatar color="dark" faded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropIcon = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar mr="1" />
            <Avatar icon="camera" mr="1" />
            <Avatar icon="video" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLighten = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar lighten={true} mr="1" />
            <Avatar color="primary" lighten={true} mr="1" />
            <Avatar color="lavender" lighten={true} mr="1" />
            <Avatar color="hot" lighten={true} mr="1" />
            <Avatar color="aux" lighten={true} mr="1" />
            <Avatar color="dark" lighten={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Avatar mr="1" rounded />
            <Avatar color="primary" mr="1" rounded />
            <Avatar color="secondary" rounded />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropShowInitials = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb="1">
                <Avatar mr="1" showInitials="Default" />
                <Avatar color="primary" mr="1" showInitials="Primary" />
                <Avatar color="lavender" mr="1" showInitials="Lavender" />
                <Avatar color="hot" mr="1" showInitials="Hot" />
                <Avatar color="aux" mr="1" showInitials="Aux" />
                <Avatar color="dark" showInitials="Dark" />
            </Wrapper>

            <Wrapper>
                <Avatar mr="1" showInitials="Default" />
                <Avatar color="primary" mr="1" rounded={true} showInitials="Primary Rounded" />
                <Avatar color="lavender" mr="1" rounded={true} showInitials="Lavender Rounded" />
                <Avatar color="hot" mr="1" rounded={true} showInitials="Hot Rounded" />
                <Avatar color="aux" mr="1" rounded={true} showInitials="Aux Rounded" />
                <Avatar color="dark" rounded={true} showInitials="Dark Rounded" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb="1">
                <Avatar mr="1" size="xxl" />
                <Avatar mr="1" size="xl" />
                <Avatar mr="1" size="lg" />
                <Avatar mr="1" size="md" />
                <Avatar mr="1" size="sm" />
                <Avatar mr="1" size="xs" />
            </Wrapper>

            <Wrapper>
                <Avatar mr="1" rounded={true} size="xxl" />
                <Avatar mr="1" rounded={true} size="xl" />
                <Avatar mr="1" rounded={true} size="lg" />
                <Avatar mr="1" rounded={true} size="md" />
                <Avatar mr="1" rounded={true} size="sm" />
                <Avatar mr="1" rounded={true} size="xs" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)