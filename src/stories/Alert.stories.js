import React from 'react';

import {
    Alert,
    Avatar,
    Button,
    ButtonGroup,
    FabulaProvider,
    FabulaUtils,
    Text,
} from '../lib';

export default {
    title: 'Alert',
    component: Alert,
};

export const Examples = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" icon={{ color: 'danger', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" icon={{ color: 'warning', name: 'alert-circle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" icon={{ color: 'success', name: 'check' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div row>
                <Alert col="4" icon={{ color: 'danger', name: 'alert-triangle' }} text={{ aux: true, content: 'Hey! Just a reminder that this is an alert!' }} title={{ color: 'inherit', content: 'Alert Title', mb: 8, size: 'lg', weight: 700 }} />
                <Alert col="4" color="primary" icon={{ name: 'alert-triangle' }} text={{ aux: true, color: 'inherit', content: 'Hey! Just a reminder that this is an alert!' }} title={{ color: 'inherit', content: 'Alert Title', mb: 8, size: 'lg', weight: 700 }} />
                <Alert col="4" color="dark" icon={{ color: 'success', name: 'download-cloud' }} text={{ aux: true, color: 'inherit', content: 'Hey! Just a reminder that this is an alert!', size: 'sm' }} title={{ color: 'inherit', content: 'Alert Title', mb: 8, size: 'lg', weight: 700 }} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Border = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="primary" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="secondary" col="4" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert border="success" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="danger" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="warning" col="4" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert border="hot" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="cold" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="dark" col="4" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert border="light" col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert border="aux" col="4" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Clear = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" clear={true} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="secondary" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" clear={true} color="success" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="danger" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="warning" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" clear={true} color="hot" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="cold" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="dark" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" clear={true} color="light" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="aux" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const CloseButton = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" closeButton={true} onClose={() => alert('Closing alert')} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" closeButton={true} onClose={() => alert('Closing alert')} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" closeButton={true} onClose={() => alert('Closing alert')} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const CustomContent = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Alert glow={true}>
                <div alV="center" flex={true} flow="h">
                    <Avatar icon="coffee" mr=".75" />
                    <div grow={1} mr={1}>
                        <Text block mb=".5" size="md" weight={600}>Custom Alert Title</Text>
                        <Text aux block size="sm">Custom Alert Title</Text>
                    </div>

                    <ButtonGroup spacing={.75}>
                        <Button color="primary" size="sm">OK</Button>
                        <Button color="light" size="sm">Cancel</Button>
                    </ButtonGroup>
                </div>
            </Alert>
        </FabulaUtils>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" faded text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" faded text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" faded text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" faded text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" faded text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" glow text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="secondary" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow color="success" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="danger" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="warning" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow color="hot" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="cold" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="dark" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" glow color="light" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="aux" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)
export const Icons = () => (
    <FabulaProvider>
        <FabulaUtils>
        <div mb="1" row>
                <Alert col="4" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="primary" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="secondary" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="danger" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="warning" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="cold" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="dark" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div row>
                <Alert col="4" color="light" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" color="aux" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const IconColors = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'primary', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'secondary', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'success', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'danger', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'warning', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'hot', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'cold', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'dark', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>

            <div row>
                <Alert col="4" glow icon={{ color: 'light', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" glow icon={{ color: 'aux', name: 'database' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" invert text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Marker = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" marker="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="secondary" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" marker="success" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="danger" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="warning" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" marker="hot" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="cold" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="dark" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" marker="light" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" marker="aux" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" outline text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const TextColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="primary" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="secondary" />
            </div>

            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="success" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="danger" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="warning" />
            </div>

            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="hot" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="cold" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="dark" />
            </div>

            <div row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="light" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" textColor="aux" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const TitleColor = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="primary" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="secondary" />
            </div>

            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="success" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="danger" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="warning" />
            </div>

            <div mb="1" row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="hot" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="cold" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="dark" />
            </div>

            <div row>
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="light" />
                <Alert col="4" text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="aux" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)