import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    ToastProvider,
    Toast,
} from '../lib';

import { ToastExamples } from '../examples/Toast/Toast';

export default {
    title: 'Toast',
    component: Toast,
};

export const Examples = props => {
    return (
        <FabulaProvider>
            <ToastProvider>
                <ToastExamples />
            </ToastProvider>
        </FabulaProvider>
    )
}