import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Badge,
    Icon,
    FabulaProvider,
    FabulaUtils
} from '../lib';

export default {
    title: 'Badge',
    component: Badge,
};

export const Circle = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1">
                <Badge circle><Icon name="user-check" /></Badge>
                <Badge color="primary" circle><Icon name="user-check" /></Badge>
                <Badge color="secondary" circle><Icon name="user-check" /></Badge>
                <Badge color="success" circle><Icon name="user-check" /></Badge>
                <Badge color="danger" circle><Icon name="user-check" /></Badge>
                <Badge color="warning" circle><Icon name="user-check" /></Badge>
                <Badge color="hot" circle><Icon name="user-check" /></Badge>
                <Badge color="cold" circle><Icon name="user-check" /></Badge>
                <Badge color="dark" circle><Icon name="user-check" /></Badge>
                <Badge color="light" circle><Icon name="user-check" /></Badge>
                <Badge color="aux" circle><Icon name="user-check" /></Badge>
            </div>

            <div>
                <Badge circle>1</Badge>
                <Badge color="primary" circle>1</Badge>
                <Badge color="secondary" circle>1</Badge>
                <Badge color="success" circle>1</Badge>
                <Badge color="danger" circle>1</Badge>
                <Badge color="warning" circle>1</Badge>
                <Badge color="hot" circle>1</Badge>
                <Badge color="cold" circle>1</Badge>
                <Badge color="dark" circle>1</Badge>
                <Badge color="light" circle>1</Badge>
                <Badge color="aux" circle>1</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Clear = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1">
                <Badge clear><Icon name="user-check" /></Badge>
                <Badge color="primary" clear><Icon name="user-check" /></Badge>
                <Badge color="secondary" clear><Icon name="user-check" /></Badge>
                <Badge color="success" clear><Icon name="user-check" /></Badge>
                <Badge color="danger" clear><Icon name="user-check" /></Badge>
                <Badge color="warning" clear><Icon name="user-check" /></Badge>
                <Badge color="hot" clear><Icon name="user-check" /></Badge>
                <Badge color="cold" clear><Icon name="user-check" /></Badge>
                <Badge color="dark" clear><Icon name="user-check" /></Badge>
                <Badge color="light" clear><Icon name="user-check" /></Badge>
                <Badge color="aux" clear><Icon name="user-check" /></Badge>
            </div>
            <div>
                <Badge clear>123</Badge>
                <Badge color="primary" clear>123</Badge>
                <Badge color="secondary" clear>123</Badge>
                <Badge color="success" clear>123</Badge>
                <Badge color="danger" clear>123</Badge>
                <Badge color="warning" clear>123</Badge>
                <Badge color="hot" clear>123</Badge>
                <Badge color="cold" clear>123</Badge>
                <Badge color="dark" clear>123</Badge>
                <Badge color="light" clear>123</Badge>
                <Badge color="aux" clear>123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1">
                <Badge><Icon name="user-check" /></Badge>
                <Badge color="primary"><Icon name="user-check" /></Badge>
                <Badge color="secondary"><Icon name="user-check" /></Badge>
                <Badge color="success"><Icon name="user-check" /></Badge>
                <Badge color="danger"><Icon name="user-check" /></Badge>
                <Badge color="warning"><Icon name="user-check" /></Badge>
                <Badge color="hot"><Icon name="user-check" /></Badge>
                <Badge color="cold"><Icon name="user-check" /></Badge>
                <Badge color="dark"><Icon name="user-check" /></Badge>
                <Badge color="light"><Icon name="user-check" /></Badge>
                <Badge color="aux"><Icon name="user-check" /></Badge>
            </div>

            <div>
                <Badge>123</Badge>
                <Badge color="primary">123</Badge>
                <Badge color="secondary">123</Badge>
                <Badge color="success">123</Badge>
                <Badge color="danger">123</Badge>
                <Badge color="warning">123</Badge>
                <Badge color="hot">123</Badge>
                <Badge color="cold">123</Badge>
                <Badge color="dark">123</Badge>
                <Badge color="light">123</Badge>
                <Badge color="aux">123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1}>
                <Badge faded><Icon name="user-check" /></Badge>
                <Badge color="primary" faded><Icon name="user-check" /></Badge>
                <Badge color="secondary" faded><Icon name="user-check" /></Badge>
                <Badge color="success" faded><Icon name="user-check" /></Badge>
                <Badge color="danger" faded><Icon name="user-check" /></Badge>
                <Badge color="warning" faded><Icon name="user-check" /></Badge>
                <Badge color="hot" faded><Icon name="user-check" /></Badge>
                <Badge color="cold" faded><Icon name="user-check" /></Badge>
                <Badge color="dark" faded><Icon name="user-check" /></Badge>
                <Badge color="light" faded><Icon name="user-check" /></Badge>
                <Badge color="aux" faded><Icon name="user-check" /></Badge>
            </div>

            <div>
                <Badge faded>123</Badge>
                <Badge color="primary" faded>123</Badge>
                <Badge color="secondary" faded>123</Badge>
                <Badge color="success" faded>123</Badge>
                <Badge color="danger" faded>123</Badge>
                <Badge color="warning" faded>123</Badge>
                <Badge color="hot" faded>123</Badge>
                <Badge color="cold" faded>123</Badge>
                <Badge color="dark" faded>123</Badge>
                <Badge color="light" faded>123</Badge>
                <Badge color="aux" faded>123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1}>
                <Badge invert><Icon name="user-check" /></Badge>
                <Badge color="primary" invert><Icon name="user-check" /></Badge>
                <Badge color="secondary" invert><Icon name="user-check" /></Badge>
                <Badge color="success" invert><Icon name="user-check" /></Badge>
                <Badge color="danger" invert><Icon name="user-check" /></Badge>
                <Badge color="warning" invert><Icon name="user-check" /></Badge>
                <Badge color="hot" invert><Icon name="user-check" /></Badge>
                <Badge color="cold" invert><Icon name="user-check" /></Badge>
                <Badge color="dark" invert><Icon name="user-check" /></Badge>
                <Badge color="light" invert><Icon name="user-check" /></Badge>
                <Badge color="aux" invert><Icon name="user-check" /></Badge>
            </div>

            <div>
                <Badge invert>123</Badge>
                <Badge color="primary" invert>123</Badge>
                <Badge color="secondary" invert>123</Badge>
                <Badge color="success" invert>123</Badge>
                <Badge color="danger" invert>123</Badge>
                <Badge color="warning" invert>123</Badge>
                <Badge color="hot" invert>123</Badge>
                <Badge color="cold" invert>123</Badge>
                <Badge color="dark" invert>123</Badge>
                <Badge color="light" invert>123</Badge>
                <Badge color="aux" invert>123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1}>
                <Badge outline><Icon name="user-check" /></Badge>
                <Badge color="primary" outline><Icon name="user-check" /></Badge>
                <Badge color="secondary" outline><Icon name="user-check" /></Badge>
                <Badge color="success" outline><Icon name="user-check" /></Badge>
                <Badge color="danger" outline><Icon name="user-check" /></Badge>
                <Badge color="warning" outline><Icon name="user-check" /></Badge>
                <Badge color="hot" outline><Icon name="user-check" /></Badge>
                <Badge color="cold" outline><Icon name="user-check" /></Badge>
                <Badge color="dark" outline><Icon name="user-check" /></Badge>
                <Badge color="light" outline><Icon name="user-check" /></Badge>
                <Badge color="aux" outline><Icon name="user-check" /></Badge>
            </div>

            <div>
                <Badge outline>123</Badge>
                <Badge color="primary" outline>123</Badge>
                <Badge color="secondary" outline>123</Badge>
                <Badge color="success" outline>123</Badge>
                <Badge color="danger" outline>123</Badge>
                <Badge color="warning" outline>123</Badge>
                <Badge color="hot" outline>123</Badge>
                <Badge color="cold" outline>123</Badge>
                <Badge color="dark" outline>123</Badge>
                <Badge color="light" outline>123</Badge>
                <Badge color="aux" outline>123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1">
                <Badge rounded><Icon name="user-check" /></Badge>
                <Badge color="primary" rounded><Icon name="user-check" /></Badge>
                <Badge color="secondary" rounded><Icon name="user-check" /></Badge>
                <Badge color="success" rounded><Icon name="user-check" /></Badge>
                <Badge color="danger" rounded><Icon name="user-check" /></Badge>
                <Badge color="warning" rounded><Icon name="user-check" /></Badge>
                <Badge color="hot" rounded><Icon name="user-check" /></Badge>
                <Badge color="cold" rounded><Icon name="user-check" /></Badge>
                <Badge color="dark" rounded><Icon name="user-check" /></Badge>
                <Badge color="light" rounded><Icon name="user-check" /></Badge>
                <Badge color="aux" rounded><Icon name="user-check" /></Badge>
            </div>

            <div mb="1">
                <Badge rounded>1</Badge>
                <Badge color="primary" rounded>1</Badge>
                <Badge color="secondary" rounded>1</Badge>
                <Badge color="success" rounded>1</Badge>
                <Badge color="danger" rounded>1</Badge>
                <Badge color="warning" rounded>1</Badge>
                <Badge color="hot" rounded>1</Badge>
                <Badge color="cold" rounded>1</Badge>
                <Badge color="dark" rounded>1</Badge>
                <Badge color="light" rounded>1</Badge>
                <Badge color="aux" rounded>1</Badge>
            </div>

            <div>
                <Badge rounded>123</Badge>
                <Badge color="primary" rounded>123</Badge>
                <Badge color="secondary" rounded>123</Badge>
                <Badge color="success" rounded>123</Badge>
                <Badge color="danger" rounded>123</Badge>
                <Badge color="warning" rounded>123</Badge>
                <Badge color="hot" rounded>123</Badge>
                <Badge color="cold" rounded>123</Badge>
                <Badge color="dark" rounded>123</Badge>
                <Badge color="light" rounded>123</Badge>
                <Badge color="aux" rounded>123</Badge>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)