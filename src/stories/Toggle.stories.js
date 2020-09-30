import React from 'react';

import {
    Div,
    FabulaProvider,
    Toggle,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Toggle',
    component: Toggle,
};

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Toggle label="Toggle Label" mb={1} />
            <Toggle>Toggle Label</Toggle>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropActiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Toggle activeColor="primary" label="Inactive" mr={1} />
                <Toggle active={true} activeColor="primary" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle activeColor="lavender" label="Inactive" mr={1} />
                <Toggle active={true} activeColor="lavender" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle activeColor="hot" label="Inactive" mr={1} />
                <Toggle active={true} activeColor="hot" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle activeColor="aux" label="Inactive" mr={1} />
                <Toggle active={true} activeColor="aux" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="dark" label="Inactive" mr={1} />
                <Toggle active={true} color="dark" label="Active" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Toggle color="primary" label="Inactive" mr={1} />
                <Toggle active={true} color="primary" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="lavender" label="Inactive" mr={1} />
                <Toggle active={true} color="lavender" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="hot" label="Inactive" mr={1} />
                <Toggle active={true} color="hot" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="aux" label="Inactive" mr={1} />
                <Toggle active={true} color="aux" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="dark" label="Inactive" mr={1} />
                <Toggle active={true} color="dark" label="Active" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDisabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Toggle color="primary" disabled={true} label="Inactive" mr={1} />
                <Toggle active={true} color="primary" disabled={true} label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="lavender" disabled={true} label="Inactive" mr={1} />
                <Toggle active={true} color="lavender" disabled={true} label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="hot" disabled={true} label="Inactive" mr={1} />
                <Toggle active={true} color="hot" disabled={true} label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="aux" disabled={true} label="Inactive" mr={1} />
                <Toggle active={true} color="aux" disabled={true} label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle color="dark" disabled={true} label="Inactive" mr={1} />
                <Toggle active={true} color="dark" disabled={true} label="Active" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInactiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Toggle inactiveColor="primary" label="Inactive" mr={1} />
                <Toggle active={true} inactiveColor="primary" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle inactiveColor="lavender" label="Inactive" mr={1} />
                <Toggle active={true} inactiveColor="lavender" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle inactiveColor="hot" label="Inactive" mr={1} />
                <Toggle active={true} inactiveColor="hot" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle inactiveColoractiveColor="aux" label="Inactive" mr={1} />
                <Toggle active={true} inactiveColor="aux" label="Active" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Toggle inactiveColor="dark" label="Inactive" mr={1} />
                <Toggle active={true} inactiveColor="dark" label="Active" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Toggle active={true} label="Extra-small Toggle" mb={1} size="xs" />
            <Toggle active={true} label="Small Toggle" mb={1} size="sm" />
            <Toggle active={true} label="Medium Label" mb={1} size="md" />
            <Toggle active={true} label="Large Toggle" mb={1} size="lg" />
            <Toggle active={true} label="Extra-large Toggle" mb={1} size="xl" />
            <Toggle active={true} label="2x Extra-large Toggle" size="xxl" />
        </UtilsProvider>
    </FabulaProvider>
)