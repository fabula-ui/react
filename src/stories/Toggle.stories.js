import React from 'react';

import {
    Div,
    FabulaProvider,
    Toggle,
    UtilsProvider
} from '../lib';

export default {
    title: 'Toggle',
    component: Toggle,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div row>
                <Toggle col="4" label="Toggle Label" />
                <Toggle col="4" label="Toggle Label" rounded={false} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const ActiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="primary" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="secondary" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="success" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="danger" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="warning" label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" activeColor="hot" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="cold" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="dark" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="light" label="Toggle Label" />
                <Toggle active={true} col="2" activeColor="aux" label="Toggle Label" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" label="Toggle Label" />
                <Toggle active={true} col="2" color="primary" label="Toggle Label" />
                <Toggle active={true} col="2" color="secondary" label="Toggle Label" />
                <Toggle active={true} col="2" color="success" label="Toggle Label" />
                <Toggle active={true} col="2" color="danger" label="Toggle Label" />
                <Toggle active={true} col="2" color="warning" label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" color="hot" label="Toggle Label" />
                <Toggle active={true} col="2" color="cold" label="Toggle Label" />
                <Toggle active={true} col="2" color="dark" label="Toggle Label" />
                <Toggle active={true} col="2" color="light" label="Toggle Label" />
                <Toggle active={true} col="2" color="aux" label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" label="Toggle Label" />
                <Toggle col="2" color="primary" label="Toggle Label" />
                <Toggle col="2" color="secondary" label="Toggle Label" />
                <Toggle col="2" color="success" label="Toggle Label" />
                <Toggle col="2" color="danger" label="Toggle Label" />
                <Toggle col="2" color="warning" label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" color="hot" label="Toggle Label" />
                <Toggle col="2" color="cold" label="Toggle Label" />
                <Toggle col="2" color="dark" label="Toggle Label" />
                <Toggle col="2" color="light" label="Toggle Label" />
                <Toggle col="2" color="aux" label="Toggle Label" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Disabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="primary" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="secondary" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="success" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="danger" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="warning" disabled={true} label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" color="hot" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="cold" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="dark" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="light" disabled={true} label="Toggle Label" />
                <Toggle active={true} col="2" color="aux" disabled={true} label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="primary" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="secondary" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="success" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="danger" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="warning" disabled={true} label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" color="hot" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="cold" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="dark" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="light" disabled={true} label="Toggle Label" />
                <Toggle col="2" color="aux" disabled={true} label="Toggle Label" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const InactiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle col="2" />
                <Toggle col="2" inactiveColor="primary" label="Toggle Label" />
                <Toggle col="2" inactiveColor="secondary" label="Toggle Label" />
                <Toggle col="2" inactiveColor="success" label="Toggle Label" />
                <Toggle col="2" inactiveColor="danger" label="Toggle Label" />
                <Toggle col="2" inactiveColor="warning" label="Toggle Label" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" inactiveColor="hot" label="Toggle Label" />
                <Toggle col="2" inactiveColor="cold" label="Toggle Label" />
                <Toggle col="2" inactiveColor="dark" label="Toggle Label" />
                <Toggle col="2" inactiveColor="light" label="Toggle Label" />
                <Toggle col="2" inactiveColor="aux" label="Toggle Label" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="3" label="Toggle Label" size="xl" />
                <Toggle active={true} col="3" label="Toggle Label" size="lg" />
                <Toggle active={true} col="3" label="Toggle Label" size="md" />
                <Toggle active={true} col="3" label="Toggle Label" size="sm" />
            </Div>
            <Div mb="1" row>
                <Toggle active={true} col="3" label="Toggle Label" size="xs" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)