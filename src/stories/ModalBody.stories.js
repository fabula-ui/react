import React, { useContext, useEffect } from 'react';

import {
    Modal,
    ModalBody,
    ModalController,
    ModalProvider,
    UtilsProvider,
    FabulaProvider,
} from '../lib';

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
    }, [openModal]);

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