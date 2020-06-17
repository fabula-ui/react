import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Avatar,
    Badge,
    FabulaProvider,
    Icon,
    FabulaUtils,
} from '../lib';

export default {
    title: 'Avatar',
    component: Avatar,
};

export const AdaptColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Avatar adaptColor={true} mr="1" />
            <Avatar adaptColor={true} color="primary" mr="1" />
            <Avatar adaptColor={true} color="secondary" mr="1" />
            <Avatar adaptColor={true} color="success" mr="1" />
            <Avatar adaptColor={true} color="danger" mr="1" />
            <Avatar adaptColor={true} color="warning" mr="1" />
            <Avatar adaptColor={true} color="hot" mr="1" />
            <Avatar adaptColor={true} color="cold" mr="1" />
            <Avatar adaptColor={true} color="dark" mr="1" />
            <Avatar adaptColor={true} color="light" mr="1" />
            <Avatar adaptColor={true} color="aux" mr="1" />
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Avatar mr="1" />
            <Avatar color="primary" mr="1" />
            <Avatar color="secondary" mr="1" />
            <Avatar color="success" mr="1" />
            <Avatar color="danger" mr="1" />
            <Avatar color="warning" mr="1" />
            <Avatar color="hot" mr="1" />
            <Avatar color="cold" mr="1" />
            <Avatar color="dark" mr="1" />
            <Avatar color="light" mr="1" />
            <Avatar color="aux" mr="1" />
        </FabulaUtils>
    </FabulaProvider>
)

export const CustomIcon = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Avatar mr="1" />
            <Avatar icon="file" mr="1" />
        </FabulaUtils>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Avatar mr="1" rounded />
            <Avatar color="primary" mr="1" rounded />
            <Avatar color="secondary" mr="1" rounded />
            <Avatar color="success" mr="1" rounded />
            <Avatar color="danger" mr="1" rounded />
            <Avatar color="warning" mr="1" rounded />
            <Avatar color="hot" mr="1" rounded />
            <Avatar color="cold" mr="1" rounded />
            <Avatar color="dark" mr="1" rounded />
            <Avatar color="light" mr="1" rounded />
            <Avatar color="aux" mr="1" rounded />
        </FabulaUtils>
    </FabulaProvider>
)

export const ShowInitials = () => (
    <>
        <FabulaProvider>
            <FabulaUtils>
                <div mb="1">
                    <Avatar mr="1" showInitials="Default" />
                    <Avatar color="primary" mr="1" showInitials="primary" />
                    <Avatar color="secondary" mr="1" showInitials="secondary" />
                    <Avatar color="success" mr="1" showInitials="success" />
                    <Avatar color="danger" mr="1" showInitials="danger" />
                    <Avatar color="warning" mr="1" showInitials="warning" />
                    <Avatar color="hot" mr="1" showInitials="hot" />
                    <Avatar color="cold" mr="1" showInitials="cold" />
                    <Avatar color="dark" mr="1" showInitials="dark" />
                    <Avatar color="light" mr="1" showInitials="light" />
                    <Avatar color="aux" mr="1" showInitials="aux" />
                </div>

                <div>
                    <Avatar mr="1" showInitials="Default" rounded />
                    <Avatar color="primary" mr="1" showInitials="primary" rounded />
                    <Avatar color="secondary" mr="1" showInitials="secondary" rounded />
                    <Avatar color="success" mr="1" showInitials="success" rounded />
                    <Avatar color="danger" mr="1" showInitials="danger" rounded />
                    <Avatar color="warning" mr="1" showInitials="warning" rounded />
                    <Avatar color="hot" mr="1" showInitials="hot" rounded />
                    <Avatar color="cold" mr="1" showInitials="cold" rounded />
                    <Avatar color="dark" mr="1" showInitials="dark" rounded />
                    <Avatar color="light" mr="1" showInitials="light" rounded />
                    <Avatar color="aux" mr="1" showInitials="aux" rounded />
                </div>
            </FabulaUtils>
        </FabulaProvider>
    </>
)

export const Size = () => (
    <>
        <FabulaProvider>
            <FabulaUtils>
                <div mb="1">
                    <Avatar mr="1" size="xxl" />
                    <Avatar mr="1" size="xl" />
                    <Avatar mr="1" size="lg" />
                    <Avatar mr="1" size="md" />
                    <Avatar mr="1" size="sm" />
                    <Avatar mr="1" size="xs" />
                </div>

                <div>
                    <Avatar mr="1" size="xxl" color="dark" />
                    <Avatar mr="1" size="xl" color="dark" />
                    <Avatar mr="1" size="lg" color="dark" />
                    <Avatar mr="1" size="md" color="dark" />
                    <Avatar mr="1" size="sm" color="dark" />
                    <Avatar mr="1" size="xs" color="dark" />
                </div>
            </FabulaUtils>
        </FabulaProvider>
    </>
)

export const ExternalBadge = () => (
    <>
        <div>
            <FabulaProvider>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
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
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
                    <Avatar mr="1">
                        <Badge color="primary" placement={{ x: 'right', y: 'bottom' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1">
                        <Badge color="primary" placement={{ x: 'right', y: 'top' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1">
                        <Badge color="primary" placement={{ x: 'left', y: 'top' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1">
                        <Badge color="primary" placement={{ x: 'left', y: 'bottom' }} rounded={true}>8</Badge>
                    </Avatar>
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
                    <Avatar mr="1" rounded={true}>
                        <Badge color="primary" placement={{ x: 'right', y: 'bottom' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1" rounded={true}>
                        <Badge color="primary" placement={{ x: 'right', y: 'top' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1" rounded={true}>
                        <Badge color="primary" placement={{ x: 'left', y: 'top' }} rounded={true}>8</Badge>
                    </Avatar>
                    <Avatar mr="1" rounded={true}>
                        <Badge color="primary" placement={{ x: 'left', y: 'bottom' }} rounded={true}>8</Badge>
                    </Avatar>
                </FabulaUtils>
            </FabulaProvider>
        </div>

        <hr />

        <div>
            <FabulaProvider utils={true}>
                <FabulaUtils>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="xs">1</Badge></Avatar>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="sm">1</Badge></Avatar>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="md">1</Badge></Avatar>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="lg">1</Badge></Avatar>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="xl">1</Badge></Avatar>
                    <Avatar mr="1"><Badge circle={true} color="primary" size="xxl">1</Badge></Avatar>
                </FabulaUtils>
            </FabulaProvider>
        </div>
    </>
)