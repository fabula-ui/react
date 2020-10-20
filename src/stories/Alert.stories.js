import React from 'react';

import {
    Alert,
    FabulaProvider,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Alert',
    component: Alert,
};

// Base component
const BaseComponent = props => (
    <Alert icon="bell" text="This is an example of an alert" title="Alert Title" {...props} />
)

// Stories
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} type="success" />
            <BaseComponent mb={1} type="warning" />
            <BaseComponent mb={1} type="danger" />
            <BaseComponent type="info" />
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropBorder = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} type="info" />
            <BaseComponent border={false} type="info" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent clear={true} mb={1} />
            <BaseComponent clear={true} color="primary" mb={1} />
            <BaseComponent clear={true} color="lavender" mb={1} />
            <BaseComponent clear={true} color="hot" mb={1} />
            <BaseComponent clear={true} color="aux" mb={1} />
            <BaseComponent clear={true} color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropCloseButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent closeButton={true} mb={1} />
            <BaseComponent closeButton={true} color="primary" mb={1} />
            <BaseComponent closeButton={true} color="lavender" mb={1} />
            <BaseComponent closeButton={true} color="hot" mb={1} />
            <BaseComponent closeButton={true} color="aux" mb={1} />
            <BaseComponent closeButton={true} color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent color="primary" mb={1} />
            <BaseComponent color="lavender" mb={1} />
            <BaseComponent color="hot" mb={1} />
            <BaseComponent color="aux" mb={1} />
            <BaseComponent color="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent faded={true} mb={1} />
            <BaseComponent color="primary" faded={true} mb={1} />
            <BaseComponent color="lavender" faded={true} mb={1} />
            <BaseComponent color="hot" faded={true} mb={1} />
            <BaseComponent color="aux" faded={true} mb={1} />
            <BaseComponent color="dark" faded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent glow={true} mb={1} />
            <BaseComponent color="primary" glow={true} mb={1} />
            <BaseComponent color="lavender" glow={true} mb={1} />
            <BaseComponent color="hot" glow={true} mb={1} />
            <BaseComponent color="aux" glow={true} mb={1} />
            <BaseComponent color="dark" glow={true} />
        </UtilsProvider>
    </FabulaProvider>
)
export const PropIcon = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent icon="database" mb={1} />
            <BaseComponent icon={{ color: 'primary', name: 'calendar' }} mb={1} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInvert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent invert={true} mb={1} />
            <BaseComponent color="primary" invert={true} mb={1} />
            <BaseComponent color="lavender" invert={true} mb={1} />
            <BaseComponent color="hot" invert={true} mb={1} />
            <BaseComponent color="aux" invert={true} mb={1} />
            <BaseComponent color="dark" invert={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropMarker = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent marker="primary" mb={1} />
            <BaseComponent marker="lavender" mb={1} />
            <BaseComponent marker="hot" mb={1} />
            <BaseComponent marker="aux" mb={1} />
            <BaseComponent marker="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent outline={true} mb={1} />
            <BaseComponent color="primary" outline={true} mb={1} />
            <BaseComponent color="lavender" outline={true} mb={1} />
            <BaseComponent color="hot" outline={true} mb={1} />
            <BaseComponent color="aux" outline={true} mb={1} />
            <BaseComponent color="dark" outline={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropTextColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent textColor="primary" mb={1} />
            <BaseComponent textColor="lavender" mb={1} />
            <BaseComponent textColor="hot" mb={1} />
            <BaseComponent textColor="aux" mb={1} />
            <BaseComponent textColor="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropTitleColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent titleColor="primary" mb={1} />
            <BaseComponent titleColor="lavender" mb={1} />
            <BaseComponent titleColor="aux" mb={1} />
            <BaseComponent titleColor="hot" mb={1} />
            <BaseComponent titleColor="dark" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropType = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} title="Success Type" type="success" />
            <BaseComponent mb={1} title="Warning Type" type="warning" />
            <BaseComponent mb={1} title="Danger Type" type="danger" />
            <BaseComponent title="Info Type" type="info" />
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <BaseComponent mr={.5} width={400} />
                <BaseComponent mx={.5} width={400} />
                <BaseComponent ml={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <BaseComponent mb={.5} width={400} />
                <BaseComponent my={.5} width={400} />
                <BaseComponent mt={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <BaseComponent width={400} />
                <Wrapper al="center" flex={true}>
                    <BaseComponent width={400} />
                    <BaseComponent m={1} width={400} />
                    <BaseComponent width={400} />
                </Wrapper>
                <BaseComponent width={400} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent mb={1} p={2} />
            <BaseComponent mb={1} pb={2} />
            <BaseComponent mb={1} pl={2} />
            <BaseComponent mb={1} pr={2} />
            <BaseComponent mb={1} pt={2} />
            <BaseComponent mb={1} px={2} />
            <BaseComponent mb={1} py={2} />
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent hidden={true} />
            <BaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)