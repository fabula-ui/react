import React from 'react';

import {
    Checkbox,
    FabulaProvider,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Checkbox label="Checkbox Label" onChange={() => alert('Changed')} />
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropActiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Inactive" mr={1} />
                <Checkbox checked={true} label="Active" mr={1} />
                <Checkbox indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox activeColor="primary" label="Inactive" mr={1} />
                <Checkbox activeColor="primary" checked={true} label="Active" mr={1} />
                <Checkbox activeColor="primary" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox activeColor="lavender" label="Inactive" mr={1} />
                <Checkbox activeColor="lavender" checked={true} label="Active" mr={1} />
                <Checkbox activeColor="lavender" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox activeColor="hot" label="Inactive" mr={1} />
                <Checkbox activeColor="hot" checked={true} label="Active" mr={1} />
                <Checkbox activeColor="hot" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox activeColor="aux" label="Inactive" mr={1} />
                <Checkbox activeColor="aux" checked={true} label="Active" mr={1} />
                <Checkbox activeColor="aux" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true}>
                <Checkbox activeColor="dark" label="Inactive" mr={1} />
                <Checkbox activeColor="dark" checked={true} label="Active" mr={1} />
                <Checkbox activeColor="dark" indeterminate={true} label="Indeterminate" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Inactive" mr={1} />
                <Checkbox checked={true} label="Active" mr={1} />
                <Checkbox indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="primary" label="Inactive" mr={1} />
                <Checkbox color="primary" checked={true} label="Active" mr={1} />
                <Checkbox color="primary" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="lavender" label="Inactive" mr={1} />
                <Checkbox color="lavender" checked={true} label="Active" mr={1} />
                <Checkbox color="lavender" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="hot" label="Inactive" mr={1} />
                <Checkbox color="hot" checked={true} label="Active" mr={1} />
                <Checkbox color="hot" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="aux" label="Inactive" mr={1} />
                <Checkbox color="aux" checked={true} label="Active" mr={1} />
                <Checkbox color="aux" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true}>
                <Checkbox color="dark" label="Inactive" mr={1} />
                <Checkbox color="dark" checked={true} label="Active" mr={1} />
                <Checkbox color="dark" indeterminate={true} label="Indeterminate" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropDisabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox disabled={true} label="Inactive" mr={1} />
                <Checkbox checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="primary" disabled={true} label="Inactive" mr={1} />
                <Checkbox color="primary" checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox color="primary" disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="lavender" disabled={true} label="Inactive" mr={1} />
                <Checkbox color="lavender" checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox color="lavender" disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="hot" disabled={true} label="Inactive" mr={1} />
                <Checkbox color="hot" checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox color="hot" disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="aux" disabled={true} label="Inactive" mr={1} />
                <Checkbox color="aux" checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox color="aux" disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true}>
                <Checkbox color="dark" disabled={true} label="Inactive" mr={1} />
                <Checkbox color="dark" checked={true} disabled={true} label="Active" mr={1} />
                <Checkbox color="dark" disabled={true} indeterminate={true} label="Indeterminate" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInactiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Inactive" mr={1} />
                <Checkbox checked={true} label="Active" mr={1} />
                <Checkbox indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox inactiveColor="primary" label="Inactive" mr={1} />
                <Checkbox inactiveColor="primary" checked={true} label="Active" mr={1} />
                <Checkbox inactiveColor="primary" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox inactiveColor="lavender" label="Inactive" mr={1} />
                <Checkbox inactiveColor="lavender" checked={true} label="Active" mr={1} />
                <Checkbox inactiveColor="lavender" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox inactiveColor="hot" label="Inactive" mr={1} />
                <Checkbox inactiveColor="hot" checked={true} label="Active" mr={1} />
                <Checkbox inactiveColor="hot" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox inactiveColor="aux" label="Inactive" mr={1} />
                <Checkbox inactiveColor="aux" checked={true} label="Active" mr={1} />
                <Checkbox inactiveColor="aux" indeterminate={true} label="Indeterminate" />
            </Wrapper>

            <Wrapper flex={true}>
                <Checkbox inactiveColor="dark" label="Inactive" mr={1} />
                <Checkbox inactiveColor="dark" checked={true} label="Active" mr={1} />
                <Checkbox inactiveColor="dark" indeterminate={true} label="Indeterminate" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropReadOnly = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Inactive" mr={1} readOnly={true} />
                <Checkbox checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="primary" label="Inactive" mr={1} readOnly={true} />
                <Checkbox color="primary" checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox color="primary" indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="lavender" label="Inactive" mr={1} readOnly={true} />
                <Checkbox color="lavender" checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox color="lavender" indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="hot" label="Inactive" mr={1} readOnly={true} />
                <Checkbox color="hot" checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox color="hot" indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>

            <Wrapper flex={true} mb={1}>
                <Checkbox color="aux" label="Inactive" mr={1} readOnly={true} />
                <Checkbox color="aux" checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox color="aux" indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>

            <Wrapper flex={true}>
                <Checkbox color="dark" label="Inactive" mr={1} readOnly={true} />
                <Checkbox color="dark" checked={true} label="Active" mr={1} readOnly={true} />
                <Checkbox color="dark" indeterminate={true} label="Indeterminate" readOnly={true} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Extra-small Checkbox" mr={1} size="xs" />
                <Checkbox checked={true} label="Extra-small Checkbox" mr={1} size="xs" />
                <Checkbox indeterminate={true} label="Extra-small Checkbox" size="xs" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Small Checkbox" mr={1} size="sm" />
                <Checkbox checked={true} label="Small Checkbox" mr={1} size="sm" />
                <Checkbox indeterminate={true} label="Small Checkbox" size="sm" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Medium Checkbox" mr={1} size="md" />
                <Checkbox checked={true} label="Medium Checkbox" mr={1} size="md" />
                <Checkbox indeterminate={true} label="Medium Checkbox" size="md" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Large Checkbox" mr={1} size="lg" />
                <Checkbox checked={true} label="Large Checkbox" mr={1} size="lg" />
                <Checkbox indeterminate={true} label="Large Checkbox" size="lg" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="Extra-Large Checkbox" mr={1} size="xl" />
                <Checkbox checked={true} label="Extra-Large Checkbox" mr={1} size="xl" />
                <Checkbox indeterminate={true} label="Extra-Large Checkbox" size="xl" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <Checkbox label="2x Extra-Large Checkbox" mr={1} size="xxl" />
                <Checkbox checked={true} label="2x Extra-Large Checkbox" mr={1} size="xxl" />
                <Checkbox indeterminate={true} label="2x Extra-Large Checkbox" size="xxl" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <Checkbox label="Checkbox" mr={.5} />
                <Checkbox label="Checkbox" mx={.5} />
                <Checkbox label="Checkbox" ml={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <Checkbox label="Checkbox" mb={.5} />
                <Checkbox label="Checkbox" my={.5} />
                <Checkbox label="Checkbox" mt={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <Checkbox label="Checkbox" />
                <Wrapper al="center" flex={true}>
                    <Checkbox label="Checkbox" />
                    <Checkbox label="Checkbox" m={1} />
                    <Checkbox label="Checkbox" />
                </Wrapper>
                <Checkbox label="Checkbox" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Checkbox label="Checkbox" hidden={true} />
            <Checkbox label="Checkbox" visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)