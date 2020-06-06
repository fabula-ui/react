import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Card,
    FabulaProvider,
    Tab,
    Tabs,
    UtilsProvider,
    Icon
} from '../lib';

export default {
    title: 'Tabs',
    component: Tabs,
};

export const Examples = () => (
    <FabulaProvider>
        <Tabs>
            <Tab active={true} name="docs">Docs</Tab>
            <Tab name="components">Components</Tab>
            <Tab name="showcase">Showcase</Tab>
        </Tabs>
    </FabulaProvider>
)

export const Block = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Expand = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Tabs expand={true} mb={1}>
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="block">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="float">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="pill">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>
        </UtilsProvider>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Float = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Icons = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Pill = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>

            <div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Stacked = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="primary" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="secondary" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </div>

            <div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="success" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="danger" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="warning" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </div>

            <div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="hot" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="cold" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="dark" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </div>

            <div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="light" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="aux" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)
