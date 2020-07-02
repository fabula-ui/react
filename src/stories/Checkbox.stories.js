import React from 'react';

import {
    Checkbox,
    FabulaProvider,
    FabulaUtils
} from '../lib';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Test = () => (
    <FabulaProvider>
        <Checkbox onChange={() => alert('Changed')} />
    </FabulaProvider>
)

export const ActiveColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox label="Label" mr={1} />
                <Checkbox activeColor="primary" label="Label" mr={1} />
                <Checkbox activeColor="secondary" label="Label" mr={1} />
                <Checkbox activeColor="success" label="Label" mr={1} />
                <Checkbox activeColor="danger" label="Label" mr={1} />
                <Checkbox activeColor="warning" label="Label" mr={1} />
                <Checkbox activeColor="hot" label="Label" mr={1} />
                <Checkbox activeColor="cold" label="Label" mr={1} />
                <Checkbox activeColor="dark" label="Label" mr={1} />
                <Checkbox activeColor="light" label="Label" mr={1} />
                <Checkbox activeColor="aux" label="Label" mr={1} />
            </div>

            <div flex>
                <Checkbox checked={true} label="Label" mr={1} />
                <Checkbox checked={true} activeColor="primary" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="secondary" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="success" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="danger" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="warning" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="hot" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="cold" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="dark" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="light" label="Label" mr={1} />
                <Checkbox checked={true} activeColor="aux" label="Label" mr={1} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox label="Label" mr={1} />
                <Checkbox color="primary" label="Label" mr={1} />
                <Checkbox color="secondary" label="Label" mr={1} />
                <Checkbox color="success" label="Label" mr={1} />
                <Checkbox color="danger" label="Label" mr={1} />
                <Checkbox color="warning" label="Label" mr={1} />
                <Checkbox color="hot" label="Label" mr={1} />
                <Checkbox color="cold" label="Label" mr={1} />
                <Checkbox color="dark" label="Label" mr={1} />
                <Checkbox color="light" label="Label" mr={1} />
                <Checkbox color="aux" label="Label" mr={1} />
            </div>

            <div mb={1} flex>
                <Checkbox checked={true} label="Label" mr={1} />
                <Checkbox checked={true} color="primary" label="Label" mr={1} />
                <Checkbox checked={true} color="secondary" label="Label" mr={1} />
                <Checkbox checked={true} color="success" label="Label" mr={1} />
                <Checkbox checked={true} color="danger" label="Label" mr={1} />
                <Checkbox checked={true} color="warning" label="Label" mr={1} />
                <Checkbox checked={true} color="hot" label="Label" mr={1} />
                <Checkbox checked={true} color="cold" label="Label" mr={1} />
                <Checkbox checked={true} color="dark" label="Label" mr={1} />
                <Checkbox checked={true} color="light" label="Label" mr={1} />
                <Checkbox checked={true} color="aux" label="Label" mr={1} />
            </div>

            <div mb={1} flex>
                <Checkbox indeterminate={true} label="Label" mr={1} />
                <Checkbox color="primary" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="secondary" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="success" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="danger" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="warning" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="hot" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="cold" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="dark" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="light" indeterminate={true} label="Label" mr={1} />
                <Checkbox color="aux" indeterminate={true} label="Label" mr={1} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Disabled = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox disabled={true} label="Label" mr={1} />
                <Checkbox color="primary" disabled={true} label="Label" mr={1} />
                <Checkbox color="secondary" disabled={true} label="Label" mr={1} />
                <Checkbox color="success" disabled={true} label="Label" mr={1} />
                <Checkbox color="danger" disabled={true} label="Label" mr={1} />
                <Checkbox color="warning" disabled={true} label="Label" mr={1} />
                <Checkbox color="hot" disabled={true} label="Label" mr={1} />
                <Checkbox color="cold" disabled={true} label="Label" mr={1} />
                <Checkbox color="dark" disabled={true} label="Label" mr={1} />
                <Checkbox color="light" disabled={true} label="Label" mr={1} />
                <Checkbox color="aux" disabled={true} label="Label" mr={1} />
            </div>

            <div mb={1} flex>
                <Checkbox checked={true} disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="primary" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="secondary" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="success" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="danger" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="warning" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="hot" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="cold" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="dark" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="light" disabled={true} label="Label" mr={1} />
                <Checkbox checked={true} color="aux" disabled={true} label="Label" mr={1} />
            </div>

            <div mb={1} flex>
                <Checkbox disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="primary" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="secondary" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="success" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="danger" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="warning" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="hot" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="cold" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="dark" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="light" disabled={true} indeterminate={true} label="Label" mr={1} />
                <Checkbox color="aux" disabled={true} indeterminate={true} label="Label" mr={1} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const InactiveColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox label="Label" mr={1} />
                <Checkbox inactiveColor="primary" label="Label" mr={1} />
                <Checkbox inactiveColor="secondary" label="Label" mr={1} />
                <Checkbox inactiveColor="success" label="Label" mr={1} />
                <Checkbox inactiveColor="danger" label="Label" mr={1} />
                <Checkbox inactiveColor="warning" label="Label" mr={1} />
                <Checkbox inactiveColor="hot" label="Label" mr={1} />
                <Checkbox inactiveColor="cold" label="Label" mr={1} />
                <Checkbox inactiveColor="dark" label="Label" mr={1} />
                <Checkbox inactiveColor="light" label="Label" mr={1} />
                <Checkbox inactiveColor="aux" label="Label" mr={1} />
            </div>

            <div flex>
                <Checkbox checked={true} label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="primary" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="secondary" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="success" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="danger" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="warning" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="hot" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="cold" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="dark" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="light" label="Label" mr={1} />
                <Checkbox checked={true} inactiveColor="aux" label="Label" mr={1} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox label="Label" mr={1} rounded={true} />
                <Checkbox color="primary" label="Label" mr={1} rounded={true} />
                <Checkbox color="secondary" label="Label" mr={1} rounded={true} />
                <Checkbox color="success" label="Label" mr={1} rounded={true} />
                <Checkbox color="danger" label="Label" mr={1} rounded={true} />
                <Checkbox color="warning" label="Label" mr={1} rounded={true} />
                <Checkbox color="hot" label="Label" mr={1} rounded={true} />
                <Checkbox color="cold" label="Label" mr={1} rounded={true} />
                <Checkbox color="dark" label="Label" mr={1} rounded={true} />
                <Checkbox color="light" label="Label" mr={1} rounded={true} />
                <Checkbox color="aux" label="Label" mr={1} rounded={true} />
            </div>

            <div mb={1} flex>
                <Checkbox checked={true} label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="primary" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="secondary" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="success" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="danger" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="warning" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="hot" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="cold" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="dark" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="light" label="Label" mr={1} rounded={true} />
                <Checkbox checked={true} color="aux" label="Label" mr={1} rounded={true} />
            </div>

            <div mb={1} flex>
                <Checkbox indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="primary" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="secondary" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="success" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="danger" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="warning" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="hot" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="cold" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="dark" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="light" indeterminate={true} label="Label" mr={1} rounded={true} />
                <Checkbox color="aux" indeterminate={true} label="Label" mr={1} rounded={true} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb={1} flex>
                <Checkbox checked={true} color="primary" label="Extra-Large Checkbox" mr={1} size="xl" />
                <Checkbox checked={true} color="primary" label="Large Checkbox" mr={1} size="lg" />
                <Checkbox checked={true} color="primary" label="Medium Checkbox" mr={1} size="md" />
                <Checkbox checked={true} color="primary" label="Small Checkbox" mr={1} size="sm" />
                <Checkbox checked={true} color="primary" label="Extra-small Checkbox" mr={1} size="xs" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)