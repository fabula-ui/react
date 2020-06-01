import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Alert,
    FabulaProvider,
    Text,
    UtilsProvider,
} from '../lib';

export default {
    title: 'Alert',
    component: Alert,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
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
        </UtilsProvider>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Alert col="3" icon={{ color: 'primary', name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="primary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="secondary" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="success" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="3" color="danger" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="warning" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="hot" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="cold" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>

            <div mb="1" row>
                <Alert col="3" color="dark" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="light" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
                <Alert col="3" color="aux" icon={{ name: 'alert-triangle' }} text="Hey! Just a reminder that this is an alert!" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <UtilsProvider>

        </UtilsProvider>
    </FabulaProvider>
)

export const Icon = () => (
    <FabulaProvider>
        <UtilsProvider>

        </UtilsProvider>
    </FabulaProvider>
)

export const IconColor = () => (
    <FabulaProvider>
        <UtilsProvider>

        </UtilsProvider>
    </FabulaProvider>
)

export const TextAndTitle = () => (
    <FabulaProvider>
        <UtilsProvider>

        </UtilsProvider>
    </FabulaProvider>
)