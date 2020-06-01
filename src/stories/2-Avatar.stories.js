import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Avatar,
    Badge,
    FabulaProvider,
    Icon,
} from '../lib';

export default {
    title: 'Avatar',
    component: Avatar,
};

export const AdaptColor = () => (
    <FabulaProvider utils={true}>
        <Avatar adaptColor={true} mb="1" />
        <Avatar adaptColor={true} color="primary" mb="1" />
        <Avatar adaptColor={true} color="secondary" mb="1" />
        <Avatar adaptColor={true} color="success" mb="1" />
        <Avatar adaptColor={true} color="danger" mb="1" />
        <Avatar adaptColor={true} color="warning" mb="1" />
        <Avatar adaptColor={true} color="hot" mb="1" />
        <Avatar adaptColor={true} color="cold" mb="1" />
        <Avatar adaptColor={true} color="dark" mb="1" />
        <Avatar adaptColor={true} color="light" mb="1" />
        <Avatar adaptColor={true} color="aux" mb="1" />
    </FabulaProvider>
)

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

export const CustomIcon = () => (
    <FabulaProvider utils={true}>
        <Avatar mb="1" />
        <Avatar icon="file" mb="1" />
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

export const ShowInitials = () => (
    <>
        <div>
            <FabulaProvider utils={true}>
                <Avatar showInitials="Default" />
                <Avatar color="primary" showInitials="primary" />
                <Avatar color="secondary" showInitials="secondary" />
                <Avatar color="success" showInitials="success" />
                <Avatar color="danger" showInitials="danger" />
                <Avatar color="warning" showInitials="warning" />
                <Avatar color="hot" showInitials="hot" />
                <Avatar color="cold" showInitials="cold" />
                <Avatar color="dark" showInitials="dark" />
                <Avatar color="light" showInitials="light" />
                <Avatar color="aux" showInitials="aux" />
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar showInitials="Default" rounded />
                <Avatar color="primary" showInitials="primary" rounded />
                <Avatar color="secondary" showInitials="secondary" rounded />
                <Avatar color="success" showInitials="success" rounded />
                <Avatar color="danger" showInitials="danger" rounded />
                <Avatar color="warning" showInitials="warning" rounded />
                <Avatar color="hot" showInitials="hot" rounded />
                <Avatar color="cold" showInitials="cold" rounded />
                <Avatar color="dark" showInitials="dark" rounded />
                <Avatar color="light" showInitials="light" rounded />
                <Avatar color="aux" showInitials="aux" rounded />
            </FabulaProvider>
        </div>
    </>
)

export const Size = () => (
    <>
        <div>
            <FabulaProvider utils={true}>
                <Avatar size="xxl" />
                <Avatar size="xl" />
                <Avatar size="lg" />
                <Avatar size="md" />
                <Avatar size="sm" />
                <Avatar size="xs" />
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar size="xxl" color="dark" />
                <Avatar size="xl" color="dark" />
                <Avatar size="lg" color="dark" />
                <Avatar size="md" color="dark" />
                <Avatar size="sm" color="dark" />
                <Avatar size="xs" color="dark" />
            </FabulaProvider>
        </div>
    </>
)

export const ExternalBadge = () => (
    <>
        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1"><Badge rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="primary" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="secondary" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="success" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="danger" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="hot" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="cold" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="dark" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="light" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1"><Badge color="aux" rounded={true}><Icon name="user" /></Badge></Avatar>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1" rounded={true}><Badge rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="primary" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="secondary" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="success" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="danger" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="hot" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="cold" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="dark" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="light" rounded={true}><Icon name="user" /></Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="aux" rounded={true}><Icon name="user" /></Badge></Avatar>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1"><Badge rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="primary" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="secondary" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="success" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="danger" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="hot" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="cold" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="dark" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="light" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1"><Badge color="aux" rounded={true}>1</Badge></Avatar>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1" rounded={true}><Badge rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="primary" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="secondary" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="success" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="danger" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="hot" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="cold" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="dark" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="light" rounded={true}>1</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="aux" rounded={true}>1</Badge></Avatar>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1"><Badge rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="primary" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="secondary" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="success" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="danger" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="hot" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="cold" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="dark" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="light" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1"><Badge color="aux" rounded={true}>99+</Badge></Avatar>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1" rounded={true}><Badge rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="primary" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="secondary" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="success" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="danger" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="hot" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="cold" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="dark" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="light" rounded={true}>99+</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="aux" rounded={true}>99+</Badge></Avatar>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1"><Badge circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="primary" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="secondary" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="success" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="danger" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="hot" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="cold" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="dark" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="light" circle={true}>8</Badge></Avatar>
                <Avatar mr="1"><Badge color="aux" circle={true}>8</Badge></Avatar>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1" rounded={true}><Badge circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="primary" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="secondary" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="success" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="danger" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="hot" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="cold" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="dark" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="light" circle={true}>8</Badge></Avatar>
                <Avatar mr="1" rounded={true}><Badge color="aux" circle={true}>8</Badge></Avatar>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1">
                    <Badge color="primary" placement={{x: 'right', y: 'bottom'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1">
                    <Badge color="primary" placement={{x: 'right', y: 'top'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1">
                    <Badge color="primary" placement={{x: 'left', y: 'top'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1">
                    <Badge color="primary" placement={{x: 'left', y: 'bottom'}} rounded={true}>8</Badge>
                </Avatar>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1" rounded={true}>
                    <Badge color="primary" placement={{x: 'right', y: 'bottom'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1" rounded={true}>
                    <Badge color="primary" placement={{x: 'right', y: 'top'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1" rounded={true}>
                    <Badge color="primary" placement={{x: 'left', y: 'top'}} rounded={true}>8</Badge>
                </Avatar>
                <Avatar mr="1" rounded={true}>
                    <Badge color="primary" placement={{x: 'left', y: 'bottom'}} rounded={true}>8</Badge>
                </Avatar>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <Avatar mr="1"><Badge circle={true} color="primary" size="xs">1</Badge></Avatar>
                <Avatar mr="1"><Badge circle={true} color="primary" size="sm">1</Badge></Avatar>
                <Avatar mr="1"><Badge circle={true} color="primary" size="md">1</Badge></Avatar>
                <Avatar mr="1"><Badge circle={true} color="primary" size="lg">1</Badge></Avatar>
                <Avatar mr="1"><Badge circle={true} color="primary" size="xl">1</Badge></Avatar>
                <Avatar mr="1"><Badge circle={true} color="primary" size="xxl">1</Badge></Avatar>
            </FabulaProvider>
        </div>
    </>
)