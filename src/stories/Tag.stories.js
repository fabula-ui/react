import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    Tag,
    TagGroup,
    UtilsProvider
} from '../lib';

export default {
    title: 'Tag',
    component: Tag,
};

export const AnchorAndButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="primary" rounded={true}>
                    <a href="">Fabula</a>
                </Tag>
                <Tag color="secondary" rounded={true}>Fabula</Tag>
                <Tag color="success" rounded={true}>Fabula</Tag>
                <Tag color="danger" rounded={true}>Fabula</Tag>
                <Tag color="warning" rounded={true}>Fabula</Tag>
                <Tag color="hot" rounded={true}>Fabula</Tag>
                <Tag color="cold" rounded={true}>Fabula</Tag>
                <Tag color="dark" rounded={true}>Fabula</Tag>
                <Tag color="light" rounded={true}>Fabula</Tag>
                <Tag color="aux" rounded={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Clear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag clear={true}>Fabula</Tag>
                <Tag color="primary" clear={true}>Fabula</Tag>
                <Tag color="secondary" clear={true}>Fabula</Tag>
                <Tag color="success" clear={true}>Fabula</Tag>
                <Tag color="danger" clear={true}>Fabula</Tag>
                <Tag color="warning" clear={true}>Fabula</Tag>
                <Tag color="hot" clear={true}>Fabula</Tag>
                <Tag color="cold" clear={true}>Fabula</Tag>
                <Tag color="dark" clear={true}>Fabula</Tag>
                <Tag color="light" clear={true}>Fabula</Tag>
                <Tag color="aux" clear={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag>Fabula</Tag>
                <Tag color="primary">Fabula</Tag>
                <Tag color="secondary">Fabula</Tag>
                <Tag color="success">Fabula</Tag>
                <Tag color="danger">Fabula</Tag>
                <Tag color="warning">Fabula</Tag>
                <Tag color="hot">Fabula</Tag>
                <Tag color="cold">Fabula</Tag>
                <Tag color="dark">Fabula</Tag>
                <Tag color="light">Fabula</Tag>
                <Tag color="aux">Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag faded={true}>Fabula</Tag>
                <Tag color="primary" faded={true}>Fabula</Tag>
                <Tag color="secondary" faded={true}>Fabula</Tag>
                <Tag color="success" faded={true}>Fabula</Tag>
                <Tag color="danger" faded={true}>Fabula</Tag>
                <Tag color="warning" faded={true}>Fabula</Tag>
                <Tag color="hot" faded={true}>Fabula</Tag>
                <Tag color="cold" faded={true}>Fabula</Tag>
                <Tag color="dark" faded={true}>Fabula</Tag>
                <Tag color="light" faded={true}>Fabula</Tag>
                <Tag color="aux" faded={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag glow={true}>Fabula</Tag>
                <Tag color="primary" glow={true}>Fabula</Tag>
                <Tag color="secondary" glow={true}>Fabula</Tag>
                <Tag color="success" glow={true}>Fabula</Tag>
                <Tag color="danger" glow={true}>Fabula</Tag>
                <Tag color="warning" glow={true}>Fabula</Tag>
                <Tag color="hot" glow={true}>Fabula</Tag>
                <Tag color="cold" glow={true}>Fabula</Tag>
                <Tag color="dark" glow={true}>Fabula</Tag>
                <Tag color="light" glow={true}>Fabula</Tag>
                <Tag color="aux" glow={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag invert={true}>Fabula</Tag>
                <Tag color="primary" invert={true}>Fabula</Tag>
                <Tag color="secondary" invert={true}>Fabula</Tag>
                <Tag color="success" invert={true}>Fabula</Tag>
                <Tag color="danger" invert={true}>Fabula</Tag>
                <Tag color="warning" invert={true}>Fabula</Tag>
                <Tag color="hot" invert={true}>Fabula</Tag>
                <Tag color="cold" invert={true}>Fabula</Tag>
                <Tag color="dark" invert={true}>Fabula</Tag>
                <Tag color="light" invert={true}>Fabula</Tag>
                <Tag color="aux" invert={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag outline={true}>Fabula</Tag>
                <Tag color="primary" outline={true}>Fabula</Tag>
                <Tag color="secondary" outline={true}>Fabula</Tag>
                <Tag color="success" outline={true}>Fabula</Tag>
                <Tag color="danger" outline={true}>Fabula</Tag>
                <Tag color="warning" outline={true}>Fabula</Tag>
                <Tag color="hot" outline={true}>Fabula</Tag>
                <Tag color="cold" outline={true}>Fabula</Tag>
                <Tag color="dark" outline={true}>Fabula</Tag>
                <Tag color="light" outline={true}>Fabula</Tag>
                <Tag color="aux" outline={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup>
                <Tag rounded={true}>Fabula</Tag>
                <Tag color="primary" rounded={true}>Fabula</Tag>
                <Tag color="secondary" rounded={true}>Fabula</Tag>
                <Tag color="success" rounded={true}>Fabula</Tag>
                <Tag color="danger" rounded={true}>Fabula</Tag>
                <Tag color="warning" rounded={true}>Fabula</Tag>
                <Tag color="hot" rounded={true}>Fabula</Tag>
                <Tag color="cold" rounded={true}>Fabula</Tag>
                <Tag color="dark" rounded={true}>Fabula</Tag>
                <Tag color="light" rounded={true}>Fabula</Tag>
                <Tag color="aux" rounded={true}>Fabula</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)