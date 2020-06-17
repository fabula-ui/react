import React, { useState, useContext } from 'react';

import {
    Modal,
    ModalBody,
    ModalController,
    ModalFooter,
    ModalHeader,
    ModalProvider,
    Text,
    FabulaUtils,
    FabulaProvider,
    Button,
    ButtonGroup,
} from '../lib';

// Examples
import ModalExample from '../examples/Modal/Modal';
import ModalColorExample from '../examples/Modal/ModalColor';

export default {
    title: 'Modal',
    component: Modal,
};

export const Examples = () => {
    return (
        <FabulaProvider>
            <FabulaUtils>
                <ModalProvider>
                    <ModalExample />
                </ModalProvider>
            </FabulaUtils>
        </FabulaProvider>
    )
};

export const Color = () => {
    return (
        <FabulaProvider>
            <ModalProvider>
                <ModalColorExample />
            </ModalProvider>
        </FabulaProvider>
    )
};