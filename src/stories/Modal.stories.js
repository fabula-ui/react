import React from 'react';

import {
    Modal,
    ModalProvider,
    UtilsProvider,
    FabulaProvider,
} from '../lib';

// Examples
import ModalExample from '../examples/Modal/Modal';
import ModalColorExample from '../examples/Modal/ModalColor';
import ModalSizeExample from '../examples/Modal/ModalSize';

export default {
    title: 'Modal',
    component: Modal,
};

export const Example = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <ModalProvider>
                    <ModalExample />
                </ModalProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
};

export const PropColor = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <ModalProvider>
                    <ModalColorExample />
                </ModalProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
};

export const PropSize = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <ModalProvider>
                    <ModalSizeExample />
                </ModalProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
};