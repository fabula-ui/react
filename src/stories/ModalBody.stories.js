import React, { useContext, useEffect } from 'react';

import {
    Modal,
    ModalBody,
    ModalController,
    ModalProvider,
    UtilsProvider,
    FabulaProvider,
} from '../lib';

// Examples
import ModalExample from '../examples/Modal/Modal';
import ModalColorExample from '../examples/Modal/ModalColor';
import ModalSizeExample from '../examples/Modal/ModalSize';

export default {
    title: 'Modal Body',
    component: ModalBody,
};

const BaseComponent = () => (
    <Modal>
        <ModalBody>Modal Body</ModalBody>
    </Modal>
)

const BaseWrapper = () => {
    const { openModal } = useContext(ModalController);

    useEffect(() => {
        openModal(<BaseComponent />)
    }, []);

    return <></>
}

export const Example = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <ModalProvider>
                    <BaseWrapper />
                </ModalProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
};