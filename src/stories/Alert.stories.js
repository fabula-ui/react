import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Alert,
    Avatar,
    Button,
    ButtonGroup,
    FabulaProvider,
    FabulaUtils,
    Icon,
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

export const Clear = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" clear={true} icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="primary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="secondary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" clear={true} color="success" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="danger" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="warning" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" clear={true} color="hot" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="cold" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="dark" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" clear={true} color="light" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" clear={true} color="aux" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const CustomContent = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="6" glow={true}>
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
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" faded icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="primary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="secondary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow color="success" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="danger" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="warning" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow color="hot" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="cold" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="dark" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" glow color="light" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow color="aux" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)
export const Icons = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'success', name: 'activity' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'warning', name: 'bell' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'dark', name: 'cloud-drizzle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" glow icon={{ color: 'primary', name: 'download' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const IconColors = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" glow icon={{ name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'primary', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'secondary', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'success', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'danger', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'warning', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" glow icon={{ color: 'hot', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'cold', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'dark', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" glow icon={{ color: 'light', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" glow icon={{ color: 'aux', name: 'database' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" icon={{ name: 'alert-triangle' }} invert text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Marker = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" icon={{ color: 'primary', name: 'alert-triangle' }} marker="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" faded={true} icon={{ name: 'alert-triangle' }} marker="primary" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" icon={{ name: 'alert-triangle' }} marker="secondary" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" icon={{ name: 'alert-triangle' }} marker="success" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" icon={{ name: 'alert-triangle' }} marker="danger" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" icon={{ name: 'alert-triangle' }} marker="warning" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" icon={{ name: 'alert-triangle' }} marker="hot" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" icon={{ name: 'alert-triangle' }} marker="cold" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" icon={{ name: 'alert-triangle' }} marker="dark" text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" icon={{ name: 'alert-triangle' }} marker="light" text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" icon={{ name: 'alert-triangle' }} marker="aux" text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Alert col="4" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="primary" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="secondary" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="success" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="danger" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="warning" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="4" color="hot" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="cold" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="dark" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div row>
                <Alert col="4" color="light" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" color="aux" icon={{ name: 'alert-triangle' }} outline text="Hey! Just a reminder that this is an alert!" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const TextColor = () => (
    <FabulaProvider>
        <FabulaUtils>
        <div mb="1" row>
                <Alert col="4" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="4" icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="primary" />
                <Alert col="4" icon={{ color: 'secondary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="secondary" />
            </div>

            <div mb="1" row>
                <Alert col="4" icon={{ color: 'success', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="success" />
                <Alert col="4" icon={{ color: 'danger', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="danger" />
                <Alert col="4" icon={{ color: 'warning', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="warning" />
            </div>

            <div mb="1" row>
                <Alert col="4" icon={{ color: 'hot', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="hot" />
                <Alert col="4" icon={{ color: 'cold', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="cold" />
                <Alert col="4" icon={{ color: 'dark', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="dark" />
            </div>

            <div row>
                <Alert col="4" icon={{ color: 'light', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="light" />
                <Alert col="4" icon={{ color: 'aux', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" textColor="aux" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const TitleColor = () => (
    <FabulaProvider>
        <FabulaUtils>
        <div mb="1" row>
                <Alert col="4" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title"  />
                <Alert col="4" icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="primary" />
                <Alert col="4" icon={{ color: 'secondary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="secondary" />
            </div>

            <div mb="1" row>
                <Alert col="4" icon={{ color: 'success', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="success" />
                <Alert col="4" icon={{ color: 'danger', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="danger" />
                <Alert col="4" icon={{ color: 'warning', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="warning" />
            </div>

            <div mb="1" row>
                <Alert col="4" icon={{ color: 'hot', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="hot" />
                <Alert col="4" icon={{ color: 'cold', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="cold" />
                <Alert col="4" icon={{ color: 'dark', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="dark" />
            </div>

            <div row>
                <Alert col="4" icon={{ color: 'light', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="light" />
                <Alert col="4" icon={{ color: 'aux', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" title="Alert Title" titleColor="aux" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)