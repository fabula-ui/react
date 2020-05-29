import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Avatar,
    FabulaProvider,
} from '../lib';

export default {
    title: 'Avatar',
    component: Avatar,
};

export const Color = () => (
    <FabulaProvider utils={true}>
        <Avatar mb="1" />
        <Avatar color="primary" mb="1" />
        <Avatar color="secondary" mb="1" />
        <Avatar color="success" mb="1" />
        <Avatar color="danger" mb="1" />
        <Avatar color="warning" mb="1" />
        <Avatar color="hot" mb="1" />
        <Avatar color="cold" mb="1" />
        <Avatar color="dark" mb="1" />
        <Avatar color="light" mb="1" />
        <Avatar color="aux" mb="1" />
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider utils={true}>
        <Avatar mb="1" rounded />
        <Avatar color="primary" mb="1" rounded />
        <Avatar color="secondary" mb="1" rounded />
        <Avatar color="success" mb="1" rounded />
        <Avatar color="danger" mb="1" rounded />
        <Avatar color="warning" mb="1" rounded />
        <Avatar color="hot" mb="1" rounded />
        <Avatar color="cold" mb="1" rounded />
        <Avatar color="dark" mb="1" rounded />
        <Avatar color="light" mb="1" rounded />
        <Avatar color="aux" mb="1" rounded />
    </FabulaProvider>
)