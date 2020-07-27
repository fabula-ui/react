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
                <Toggle col="4" />
                <Toggle col="4" rounded={false} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const ActiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" />
                <Toggle active={true} col="2" activeColor="primary" />
                <Toggle active={true} col="2" activeColor="secondary" />
                <Toggle active={true} col="2" activeColor="success" />
                <Toggle active={true} col="2" activeColor="danger" />
                <Toggle active={true} col="2" activeColor="warning" />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" activeColor="hot" />
                <Toggle active={true} col="2" activeColor="cold" />
                <Toggle active={true} col="2" activeColor="dark" />
                <Toggle active={true} col="2" activeColor="light" />
                <Toggle active={true} col="2" activeColor="aux" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" />
                <Toggle active={true} col="2" color="primary" />
                <Toggle active={true} col="2" color="secondary" />
                <Toggle active={true} col="2" color="success" />
                <Toggle active={true} col="2" color="danger" />
                <Toggle active={true} col="2" color="warning" />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" color="hot" />
                <Toggle active={true} col="2" color="cold" />
                <Toggle active={true} col="2" color="dark" />
                <Toggle active={true} col="2" color="light" />
                <Toggle active={true} col="2" color="aux" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" />
                <Toggle col="2" color="primary" />
                <Toggle col="2" color="secondary" />
                <Toggle col="2" color="success" />
                <Toggle col="2" color="danger" />
                <Toggle col="2" color="warning" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" color="hot" />
                <Toggle col="2" color="cold" />
                <Toggle col="2" color="dark" />
                <Toggle col="2" color="light" />
                <Toggle col="2" color="aux" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Disabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="2" disabled={true} />
                <Toggle active={true} col="2" color="primary" disabled={true} />
                <Toggle active={true} col="2" color="secondary" disabled={true} />
                <Toggle active={true} col="2" color="success" disabled={true} />
                <Toggle active={true} col="2" color="danger" disabled={true} />
                <Toggle active={true} col="2" color="warning" disabled={true} />
            </Div>

            <Div mb="1" row>
                <Toggle active={true} col="2" color="hot" disabled={true} />
                <Toggle active={true} col="2" color="cold" disabled={true} />
                <Toggle active={true} col="2" color="dark" disabled={true} />
                <Toggle active={true} col="2" color="light" disabled={true} />
                <Toggle active={true} col="2" color="aux" disabled={true} />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" disabled={true} />
                <Toggle col="2" color="primary" disabled={true} />
                <Toggle col="2" color="secondary" disabled={true} />
                <Toggle col="2" color="success" disabled={true} />
                <Toggle col="2" color="danger" disabled={true} />
                <Toggle col="2" color="warning" disabled={true} />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" color="hot" disabled={true} />
                <Toggle col="2" color="cold" disabled={true} />
                <Toggle col="2" color="dark" disabled={true} />
                <Toggle col="2" color="light" disabled={true} />
                <Toggle col="2" color="aux" disabled={true} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const InactiveColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle col="2" />
                <Toggle col="2" inactiveColor="primary" />
                <Toggle col="2" inactiveColor="secondary" />
                <Toggle col="2" inactiveColor="success" />
                <Toggle col="2" inactiveColor="danger" />
                <Toggle col="2" inactiveColor="warning" />
            </Div>

            <Div mb="1" row>
                <Toggle col="2" inactiveColor="hot" />
                <Toggle col="2" inactiveColor="cold" />
                <Toggle col="2" inactiveColor="dark" />
                <Toggle col="2" inactiveColor="light" />
                <Toggle col="2" inactiveColor="aux" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Toggle active={true} col="3" size="xl" />
                <Toggle active={true} col="3" size="lg" />
                <Toggle active={true} col="3" size="md" />
                <Toggle active={true} col="3" size="sm" />
            </Div>
            <Div mb="1" row>
                <Toggle active={true} col="3" size="xs" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)