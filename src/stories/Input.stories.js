import React from 'react';

import {
    FabulaProvider,
    Input,
    FabulaUtils
} from '../lib';

export default {
    title: 'Input',
    component: Input,
};

export const Examples = () => {
    const handleBlur = () => {
        console.log('Blur');
    }

    const handleChange = () => {
        console.log('Change');
    }

    const handleFocus = () => {
        console.log('Focus');
    }

    const handleKeyDown = () => {
        console.log('Key down');
    }

    const handleKeyUp = () => {
        console.log('Key up');
    }

    return (
        <FabulaProvider>
            <FabulaUtils>
                <div row>
                    <Input faded={true}
                        col="4"
                        message={{ color: 'primary', text: 'This is a message...' }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        placeholder="Type something..." />
                    <Input iconEnd={{ color: 'success', name: 'check' }} iconStart={{ color: 'primary', name: 'user' }} col="4" placeholder="Enter your username" />
                    <Input col="4" icon={{ color: 'primary', name: 'search' }} placeholder="Search..." />
                </div>
            </FabulaUtils>
        </FabulaProvider>
    )
}

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Disabled = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const MessageColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'primary', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'secondary', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'success', 'text': 'This is a message...' }} placeholder="Type something..." />
            </div>

            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'danger', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'warning', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'hot', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'cold', 'text': 'This is a message...' }} placeholder="Type something..." />
            </div>

            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'dark', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'light', 'text': 'This is a message...' }} placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'color': 'aux', 'text': 'This is a message...' }} placeholder="Type something..." />
            </div>

            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="primary" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="secondary" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="success" placeholder="Type something..." />
            </div>

            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="danger" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="warning" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="hot" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="cold" placeholder="Type something..." />
            </div>

            <div mb="1" row>
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="dark" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="light" placeholder="Type something..." />
                <Input col="3" icon={{ name: 'user' }} message={{ 'text': 'This is a message...' }} messageColor="aux" placeholder="Type something..." />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Password = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra large" placeholder="Extra-large input field" size="xl" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is large" placeholder="Large input field" size="lg" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is medium" placeholder="Medium input field" size="md" />
            </div>
            <div row>
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is small" placeholder="Medium input field" size="sm" />
                <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra small" placeholder="Medium input field" size="xs" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Status = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div row>
                <Input col="4" status="error" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field has error" placeholder="Has error" />
                <Input col="4" status="success" icon={{ name: 'user' }} iconEnd={{ name: 'check' }} message="This input field has success" placeholder="Has success" />
                <Input col="4" status="warning" icon={{ name: 'user' }} iconEnd={{ name: 'alert-triangle' }} message="This input field has warning" placeholder="Has warning" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Textarea = () => (
    <FabulaProvider>
        <FabulaUtils>
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
        </FabulaUtils>
    </FabulaProvider>
)
