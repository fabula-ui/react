import React, { useState, useContext } from 'react';

import {
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    ModalProvider,
    Text,
    UtilsProvider,
    FabulaProvider,
    Button,
    ButtonGroup,
} from '../lib';

// Examples
import ModalExample from '../examples/Modal/Modal';
import ModalColorExample from '../examples/Modal/ModalColor';
import ModalSizeExample from '../examples/Modal/ModalSize';

export default {
    title: 'Modal',
    component: Modal,
};

export const Examples = () => {
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

export const Color = () => {
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

export const Size = () => {
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