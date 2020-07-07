import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    Tag,
    TagGroup,
    FabulaUtils
} from '../lib';

export default {
    title: 'Tag',
    component: Tag,
};

export const AnchorAndButton = () => (
    <FabulaProvider>
        <FabulaUtils>
            <TagGroup mb="1">
                <Tag rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="primary" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="secondary" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="success" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="danger" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="warning" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="hot" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="cold" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="dark" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="light" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
                <Tag color="aux" rounded={true}><a href="https://www.google.com" target="_blank">Fabula</a></Tag>
            </TagGroup>

            <TagGroup mb="1">
                <Tag rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="primary" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="secondary" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="success" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="danger" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="warning" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="hot" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="cold" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="dark" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="light" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
                <Tag color="aux" rounded={true}><button onClick={() => alert('Hey! It works...')}>Fabula</button></Tag>
            </TagGroup>
        </FabulaUtils>
    </FabulaProvider>
)

export const Clear = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
        <TagGroup mb="1">
                <Tag clear={true} glow={true}>Fabula</Tag>
                <Tag color="primary" clear={true} glow={true}>Fabula</Tag>
                <Tag color="secondary" clear={true} glow={true}>Fabula</Tag>
                <Tag color="success" clear={true} glow={true}>Fabula</Tag>
                <Tag color="danger" clear={true} glow={true}>Fabula</Tag>
                <Tag color="warning" clear={true} glow={true}>Fabula</Tag>
                <Tag color="hot" clear={true} glow={true}>Fabula</Tag>
                <Tag color="cold" clear={true} glow={true}>Fabula</Tag>
                <Tag color="dark" clear={true} glow={true}>Fabula</Tag>
                <Tag color="light" clear={true} glow={true}>Fabula</Tag>
                <Tag color="aux" clear={true} glow={true}>Fabula</Tag>
            </TagGroup>

            <TagGroup mb="1">
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

            <TagGroup mb="1">
                <Tag faded={true} glow={true}>Fabula</Tag>
                <Tag color="primary" faded={true} glow={true}>Fabula</Tag>
                <Tag color="secondary" faded={true} glow={true}>Fabula</Tag>
                <Tag color="success" faded={true} glow={true}>Fabula</Tag>
                <Tag color="danger" faded={true} glow={true}>Fabula</Tag>
                <Tag color="warning" faded={true} glow={true}>Fabula</Tag>
                <Tag color="hot" faded={true} glow={true}>Fabula</Tag>
                <Tag color="cold" faded={true} glow={true}>Fabula</Tag>
                <Tag color="dark" faded={true} glow={true}>Fabula</Tag>
                <Tag color="light" faded={true} glow={true}>Fabula</Tag>
                <Tag color="aux" faded={true} glow={true}>Fabula</Tag>
            </TagGroup>

            <TagGroup mb="1">
                <Tag invert={true} glow={true}>Fabula</Tag>
                <Tag color="primary" invert={true} glow={true}>Fabula</Tag>
                <Tag color="secondary" invert={true} glow={true}>Fabula</Tag>
                <Tag color="success" invert={true} glow={true}>Fabula</Tag>
                <Tag color="danger" invert={true} glow={true}>Fabula</Tag>
                <Tag color="warning" invert={true} glow={true}>Fabula</Tag>
                <Tag color="hot" invert={true} glow={true}>Fabula</Tag>
                <Tag color="cold" invert={true} glow={true}>Fabula</Tag>
                <Tag color="dark" invert={true} glow={true}>Fabula</Tag>
                <Tag color="light" invert={true} glow={true}>Fabula</Tag>
                <Tag color="aux" invert={true} glow={true}>Fabula</Tag>
            </TagGroup>

            <TagGroup mb="1">
                <Tag outline={true} glow={true}>Fabula</Tag>
                <Tag color="primary" outline={true} glow={true}>Fabula</Tag>
                <Tag color="secondary" outline={true} glow={true}>Fabula</Tag>
                <Tag color="success" outline={true} glow={true}>Fabula</Tag>
                <Tag color="danger" outline={true} glow={true}>Fabula</Tag>
                <Tag color="warning" outline={true} glow={true}>Fabula</Tag>
                <Tag color="hot" outline={true} glow={true}>Fabula</Tag>
                <Tag color="cold" outline={true} glow={true}>Fabula</Tag>
                <Tag color="dark" outline={true} glow={true}>Fabula</Tag>
                <Tag color="light" outline={true} glow={true}>Fabula</Tag>
                <Tag color="aux" outline={true} glow={true}>Fabula</Tag>
            </TagGroup>
        </FabulaUtils>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <FabulaUtils>
            <TagGroup mb={1}>
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

            <TagGroup mb={1}>
                <Tag faded={true} outline={true}>Fabula</Tag>
                <Tag color="primary" faded={true} outline={true}>Fabula</Tag>
                <Tag color="secondary" faded={true} outline={true}>Fabula</Tag>
                <Tag color="success" faded={true} outline={true}>Fabula</Tag>
                <Tag color="danger" faded={true} outline={true}>Fabula</Tag>
                <Tag color="warning" faded={true} outline={true}>Fabula</Tag>
                <Tag color="hot" faded={true} outline={true}>Fabula</Tag>
                <Tag color="cold" faded={true} outline={true}>Fabula</Tag>
                <Tag color="dark" faded={true} outline={true}>Fabula</Tag>
                <Tag color="light" faded={true} outline={true}>Fabula</Tag>
                <Tag color="aux" faded={true} outline={true}>Fabula</Tag>
            </TagGroup>
        </FabulaUtils>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <FabulaUtils>
            <TagGroup mb="1">
                <Tag color="primary" size="xs">Extra-small</Tag>
                <Tag color="primary" size="sm">Small</Tag>
                <Tag color="primary" size="md">Medium</Tag>
                <Tag color="primary" size="lg">Large</Tag>
                <Tag color="primary" size="xl">Extra-large</Tag>
            </TagGroup>

            <TagGroup>
                <Tag color="primary" rounded={true} size="xs">Extra-small</Tag>
                <Tag color="primary" rounded={true} size="sm">Small</Tag>
                <Tag color="primary" rounded={true} size="md">Medium</Tag>
                <Tag color="primary" rounded={true} size="lg">Large</Tag>
                <Tag color="primary" rounded={true} size="xl">Extra-large</Tag>
            </TagGroup>
        </FabulaUtils>
    </FabulaProvider>
)