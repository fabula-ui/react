import React from 'react';

import {
    Column,
    Container,
    FabulaProvider,
    ToastProvider,
    Row,
    Toast,
    UtilsProvider
} from '../lib';

import { ToastExamples } from '../examples/Toast/Toast';

export default {
    title: 'Toast',
    component: Toast,
};

// Base component
const BaseComponent = ({ color, hideButton, iconColor, iconName, ...rest }) => (
    <Toast color={color} hideButton={{ border: !color, color, invert: !!color, label: 'Hide', ...hideButton }} icon={{ color: iconColor, name: iconName || 'hard-drive' }} message="Here is an example of a toast component working..." {...rest} />
)

// Stories
export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent clear={true} iconColor="primary" />
                </Column>

                <Column col={6}>
                    <BaseComponent clear={true} color="primary" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={6}>
                    <BaseComponent clear={true} color="lavender" iconColor="lavender" />
                </Column>

                <Column col={6}>
                    <BaseComponent clear={true} color="hot" iconColor="hot" />
                </Column>
            </Row>

            <Row>
                <Column col={6}>
                    <BaseComponent clear={true} color="aux" iconColor="aux" />
                </Column>

                <Column col={6}>
                    <BaseComponent clear={true} color="dark" iconColor="dark" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <BaseComponent />
                </Column>

                <Column col={4}>
                    <BaseComponent color="primary" />
                </Column>

                <Column col={4}>
                    <BaseComponent color="lavender" />
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <BaseComponent color="hot" />
                </Column>

                <Column col={4}>
                    <BaseComponent color="aux" />
                </Column>

                <Column col={4}>
                    <BaseComponent color="dark" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <BaseComponent faded={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="primary" faded={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="lavender" faded={true} />
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <BaseComponent color="hot" faded={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="aux" faded={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="dark" faded={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <BaseComponent glow={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="primary" glow={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="lavender" glow={true} />
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <BaseComponent color="hot" glow={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="aux" glow={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="dark" glow={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropHideButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <BaseComponent color="primary" hideButton={{ color: 'primary', compact: true, invert: true, label: "Hide me" }} mb={1} />
                <BaseComponent color="primary" hideButton={{ color: 'primary', invert: true, label: "Hide me", wide: true }} />
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropIcon = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <BaseComponent iconName="compass" mb={1} />
                <BaseComponent iconColor="primary" iconName="battery-charging" mb={1} />
                <BaseComponent iconColor="lavender" iconName="camera" mb={1} />
                <BaseComponent iconColor="hot" iconName="database" mb={1} />
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLink = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent link={{
                label: 'Go there',
                target: '_blank',
                url: 'https://www.github.com/fabula-ui'
            }} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="primary" hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="lavender" hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <BaseComponent color="hot" hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="aux" hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>

                <Column col={4}>
                    <BaseComponent color="dark" hideButton={{ invert: false, outline: true }} outline={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const HandleStacks = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <ToastProvider>
                    <ToastExamples />
                </ToastProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
}