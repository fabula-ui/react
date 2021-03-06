import React from 'react';

import {
    Container,
    FabulaProvider,
    ToastProvider,
    Toast,
    UtilsProvider,
    Wrapper
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
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent color="primary" />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)
export const PropButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <BaseComponent button={{
                    color: 'primary',
                    label: 'Go there'
                }} />
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent clear={true} hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent clear={true} color="primary" hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent clear={true} color="lavender" hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent clear={true} color="hot" hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent clear={true} color="aux" hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent clear={true} color="dark" hideButton={{ border: false, clear: true, compact: true }} />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent color="primary" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent color="lavender" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent color="hot" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent color="aux" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent color="dark" />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent faded={true} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent faded={true} color="primary" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent faded={true} color="lavender" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent faded={true} color="hot" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent faded={true} color="aux" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent faded={true} color="dark" />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent glow={true} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent glow={true} color="primary" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent glow={true} color="lavender" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent glow={true} color="hot" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent glow={true} color="aux" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent glow={true} color="dark" />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropHideButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent color="primary" hideButton={{ color: 'primary', compact: true, invert: true, label: "Hide me" }} />
                </Wrapper>
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
            <Container>
                <BaseComponent button={{
                    color: 'primary',
                    compact: true,
                    label: 'Go there',
                    href: 'https://www.github.com/fabula-ui',
                    target: '_blank'
                }} />
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} color="primary" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} color="lavender" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} color="hot" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} color="aux" />
                </Wrapper>

                <Wrapper mb={1}>
                    <BaseComponent hideButton={{ invert: false, outline: true }} outline={true} color="dark" />
                </Wrapper>
            </Container>
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