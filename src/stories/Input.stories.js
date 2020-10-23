import React from 'react';

import {
    Column,
    FabulaProvider,
    Input,
    Row,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Input',
    component: Input,
};

// Example
export const Example = () => {
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
            <UtilsProvider>
                <Row>
                    <Column col={4}>
                        <Input
                            faded={true}
                            message={{ color: 'primary', text: 'This is a message...' }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onKeyDown={handleKeyDown}
                            onKeyUp={handleKeyUp}
                            placeholder="Type something..." />
                    </Column>
                    <Column col={4}>
                        <Input
                            iconEnd={{ color: 'success', name: 'check' }}
                            iconStart={{ color: 'primary', name: 'user' }}
                            placeholder="Enter your username" />
                    </Column>
                    <Column col={4}>
                        <Input icon={{ color: 'primary', name: 'search' }} placeholder="Search..." />
                    </Column>
                </Row>
            </UtilsProvider>
        </FabulaProvider>
    )
}

// Properties
export const PropDisabled = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." variant="clear" />
                </Column>

                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." variant="fill" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." status="danger" />
                </Column>

                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." status="info" />
                </Column>

                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." status="success" />
                </Column>
            </Row>
            <Row>
                <Column col={4}>
                    <Input disabled={true} icon={{ name: 'user' }} placeholder="Type something..." status="warning" />
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
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." variant="clear" />
                </Column>

                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." variant="fill" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." status="danger" />
                </Column>

                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." status="info" />
                </Column>

                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." status="success" />
                </Column>
            </Row>
            <Row>
                <Column col={4}>
                    <Input glow={true} icon={{ name: 'user' }} placeholder="Type something..." status="warning" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropMessage = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={6}>
                    <Input icon={{ name: 'user' }} message="This is an input message" placeholder="Type something..." />
                </Column>
                <Column col={6}>
                    <Input icon={{ name: 'user' }} message={{ text: 'This is an input message' }} placeholder="Type something..." variant="clear" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropMessageColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'user' }} message="This is an input message" messageColor="primary" placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message="This is an input message" messageColor="lavender" placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message="This is an input message" messageColor="hot" placeholder="Type something..." />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'user' }} message="This is an input message" messageColor="aux" placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message="This is an input message" messageColor="dark" placeholder="Type something..." />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'user' }} message={{ color: 'primary', text: 'This is an input message' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message={{ color: 'lavender', text: 'This is an input message' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message={{ color: 'hot', text: 'This is an input message' }} placeholder="Type something..." />
                </Column>
            </Row>
            <Row>
                <Column col={4}>
                    <Input icon={{ name: 'user' }} message={{ color: 'aux', text: 'This is an input message' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input icon={{ name: 'user' }} message={{ color: 'dark', text: 'This is an input message' }} placeholder="Type something..." />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropPassword = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" />
                </Column>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" variant="clear" />
                </Column>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" type="password" variant="fill" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" status="danger" type="password" />
                </Column>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" status="info" type="password" />
                </Column>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" status="success" type="password" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input icon={{ name: 'lock' }} iconEnd={{ name: 'x' }} passwordToggle={true} placeholder="Type your password" size="md" status="warning" type="password" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." variant="clear" />
                </Column>

                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." variant="fill" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." status="danger" />
                </Column>

                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." status="info" />
                </Column>

                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." status="success" />
                </Column>
            </Row>
            <Row>
                <Column col={4}>
                    <Input rounded={true} icon={{ name: 'user' }} placeholder="Type something..." status="warning" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is 2x extra large" placeholder="2x Extra-large input field" size="xxl" />
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is extra large" placeholder="Extra-large input field" size="xl" />
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is large" placeholder="Large input field" size="lg" />
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is medium" placeholder="Medium input field" size="md" />
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is small" placeholder="Medium input field" size="sm" />
            <Input icon={{ name: 'user' }} iconEnd={{ name: 'x' }} mb={1} message="This input field is extra small" placeholder="Medium input field" size="xs" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropStatus = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Input icon={{ name: 'user' }} mb={1} message="Danger status message" placeholder="Danger status" status="danger" />
            <Input icon={{ name: 'user' }} mb={1} message="Info status message" placeholder="Info status" status="info" />
            <Input icon={{ name: 'user' }} mb={1} message="Success status message" placeholder="Success status" status="success" />
            <Input icon={{ name: 'user' }} message="Warning status message" placeholder="Warning status" status="warning" />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropTextarea = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." />
                </Column>

                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." variant="clear" />
                </Column>

                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." variant="fill" />
                </Column>
            </Row>
            <Row mb={1}>
                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." status="danger" />
                </Column>

                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." status="info" />
                </Column>

                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." status="success" />
                </Column>
            </Row>
            <Row>
                <Column col={4}>
                    <Input textarea={true} icon={{ name: 'user' }} placeholder="Type something..." status="warning" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropVariant = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper bgColor="#EDEDED" p={1}>
                <Row>
                    <Column col={4}>
                        <Input icon={{ name: 'user' }} placeholder="Type something..." />
                    </Column>

                    <Column col={4}>
                        <Input icon={{ name: 'user' }} placeholder="Type something..." variant="clear" />
                    </Column>

                    <Column col={4}>
                        <Input icon={{ name: 'user' }} placeholder="Type something..." variant="fill" />
                    </Column>
                </Row>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = props => (
    <Input icon={{ name: 'user' }} iconEnd={{ name: 'check' }} placeholder="Type something..." variant="fill" {...props} />
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <UtilBaseComponent mr={.5} width={400} />
                <UtilBaseComponent mx={.5} width={400} />
                <UtilBaseComponent ml={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <UtilBaseComponent mb={.5} width={400} />
                <UtilBaseComponent my={.5} width={400} />
                <UtilBaseComponent mt={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <UtilBaseComponent width={400} />
                <Wrapper al="center" flex={true}>
                    <UtilBaseComponent width={400} />
                    <UtilBaseComponent m={1} width={400} />
                    <UtilBaseComponent width={400} />
                </Wrapper>
                <UtilBaseComponent width={400} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent mb={1} p={2} />
            <UtilBaseComponent mb={1} pb={2} />
            <UtilBaseComponent mb={1} pl={2} />
            <UtilBaseComponent mb={1} pr={2} />
            <UtilBaseComponent mb={1} pt={2} />
            <UtilBaseComponent mb={1} px={2} />
            <UtilBaseComponent mb={1} py={2} />
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent hidden={true} />
            <UtilBaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)