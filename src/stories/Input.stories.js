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

// export const Size = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <div mb="1" row>
//                 <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra large" placeholder="Extra-large input field" size="xl" />
//                 <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is large" placeholder="Large input field" size="lg" />
//                 <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is medium" placeholder="Medium input field" size="md" />
//             </div>
//             <div row>
//                 <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is small" placeholder="Medium input field" size="sm" />
//                 <Input col="4" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field is extra small" placeholder="Medium input field" size="xs" />
//             </div>
//         </FabulaUtils>
//     </FabulaProvider>
// )

// export const Status = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <div row>
//                 <Input col="4" status="error" icon={{ name: 'user' }} iconEnd={{ name: 'x' }} message="This input field has error" placeholder="Has error" />
//                 <Input col="4" status="success" icon={{ name: 'user' }} iconEnd={{ name: 'check' }} message="This input field has success" placeholder="Has success" />
//                 <Input col="4" status="warning" icon={{ name: 'user' }} iconEnd={{ name: 'alert-triangle' }} message="This input field has warning" placeholder="Has warning" />
//             </div>
//         </FabulaUtils>
//     </FabulaProvider>
// )

// export const Textarea = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <div mb={1} row>
//                 <Input col="3" icon={{ name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="primary" icon={{ color: 'primary', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="secondary" icon={{ color: 'secondary', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="success" icon={{ color: 'success', name: 'user' }} placeholder="Type something..." textarea={true} />
//             </div>

//             <div mb={1} row>
//                 <Input col="3" color="danger" icon={{ color: 'danger', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="warning" icon={{ color: 'warning', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="hot" icon={{ color: 'hot', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="cold" icon={{ color: 'cold', name: 'user' }} placeholder="Type something..." textarea={true} />
//             </div>

//             <div mb={1} row>
//                 <Input col="3" color="dark" icon={{ color: 'dark', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="light" icon={{ color: 'light', name: 'user' }} placeholder="Type something..." textarea={true} />
//                 <Input col="3" color="aux" icon={{ color: 'aux', name: 'user' }} placeholder="Type something..." textarea={true} />
//             </div>
//         </FabulaUtils>
//     </FabulaProvider>
// )
