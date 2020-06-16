import React from 'react';

import {
    FabulaProvider,
    Input,
    UtilsProvider
} from '../lib';

export default {
    title: 'Input',
    component: Input,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <Input col="4" placeholder="Type something..." />
                <Input iconEnd={{ color: 'success', name: 'check' }} iconStart={{ color: 'primary', name: 'user' }} col="4" placeholder="Enter your username" />
                <Input col="4" icon={{ color: 'primary', name: 'search' }} placeholder="Search..." />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Input col="3" icon={{ name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="primary" icon={{ color: 'primary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="secondary" icon={{ color: 'secondary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="success" icon={{ color: 'success', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="danger" icon={{ color: 'danger', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="warning" icon={{ color: 'warning', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="hot" icon={{ color: 'hot', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="cold" icon={{ color: 'cold', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="dark" icon={{ color: 'dark', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="light" icon={{ color: 'light', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="aux" icon={{ color: 'aux', name: 'user' }} placeholder="Type something..." />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Disabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Input col="3" disabled={true} icon={{ name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="primary" disabled={true} icon={{ color: 'primary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="secondary" disabled={true} icon={{ color: 'secondary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="success" disabled={true} icon={{ color: 'success', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="danger" disabled={true} icon={{ color: 'danger', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="warning" disabled={true} icon={{ color: 'warning', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="hot" disabled={true} icon={{ color: 'hot', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="cold" disabled={true} icon={{ color: 'cold', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="dark" disabled={true} icon={{ color: 'dark', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="light" disabled={true} icon={{ color: 'light', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="aux" disabled={true} icon={{ color: 'aux', name: 'user' }} placeholder="Type something..." />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Input col="3" glow={true} icon={{ name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="primary" glow={true} icon={{ color: 'primary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="secondary" glow={true} icon={{ color: 'secondary', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="success" glow={true} icon={{ color: 'success', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="danger" glow={true} icon={{ color: 'danger', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="warning" glow={true} icon={{ color: 'warning', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="hot" glow={true} icon={{ color: 'hot', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="cold" glow={true} icon={{ color: 'cold', name: 'user' }} placeholder="Type something..." />
            </div>

            <div mb={1} row>
                <Input col="3" color="dark" glow={true} icon={{ color: 'dark', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="light" glow={true} icon={{ color: 'light', name: 'user' }} placeholder="Type something..." />
                <Input col="3" color="aux" glow={true} icon={{ color: 'aux', name: 'user' }} placeholder="Type something..." />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Has = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <Input col="4" has="error" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field has error" placeholder="Has error" />
                <Input col="4" has="success" icon={{ name: 'user' }} iconEnd={{ name: 'check' }} message="This input field has success" placeholder="Has success" />
                <Input col="4" has="warning" icon={{ name: 'user' }} iconEnd={{ name: 'alert-triangle' }} message="This input field has warning" placeholder="Has warning" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Password = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Input col="4" icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="primary" icon={{ color: 'primary', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="secondary" icon={{ color: 'secondary', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
            </div>
            <div mb="1" row>
                <Input col="4" color="success" icon={{ color: 'success', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="danger" icon={{ color: 'danger', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="warning" icon={{ color: 'warning', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
            </div>
            <div mb="1" row>
                <Input col="4" color="hot" icon={{ color: 'hot', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="cold" icon={{ color: 'cold', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="dark" icon={{ color: 'dark', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
            </div>
            <div row>
                <Input col="4" color="light" icon={{ color: 'light', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                <Input col="4" color="aux" icon={{ color: 'aux', name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra large" placeholder="Extra-large input field" size="xl" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is large" placeholder="Large input field" size="lg" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is medium" placeholder="Medium input field" size="md" />
            </div>
            <div row>
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is small" placeholder="Medium input field" size="sm" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra small" placeholder="Medium input field" size="xs" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Textarea = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb={1} row>
                <Input col="3" icon={{ name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="primary" icon={{ color: 'primary', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="secondary" icon={{ color: 'secondary', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="success" icon={{ color: 'success', name: 'user' }} placeholder="Type something..." textarea={true} />
            </div>

            <div mb={1} row>
                <Input col="3" color="danger" icon={{ color: 'danger', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="warning" icon={{ color: 'warning', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="hot" icon={{ color: 'hot', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="cold" icon={{ color: 'cold', name: 'user' }} placeholder="Type something..." textarea={true} />
            </div>

            <div mb={1} row>
                <Input col="3" color="dark" icon={{ color: 'dark', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="light" icon={{ color: 'light', name: 'user' }} placeholder="Type something..." textarea={true} />
                <Input col="3" color="aux" icon={{ color: 'aux', name: 'user' }} placeholder="Type something..." textarea={true} />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)