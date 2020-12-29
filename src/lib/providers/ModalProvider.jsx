import React, { useCallback, useState } from 'react';

// Controller
import { ModalController } from '../controllers/ModalController';

// Portals
import { ModalPortal } from '../portals/ModalPortal';

export const ModalProvider = props => {
    const { children } = props;
    const [activeModal, setActiveModal] = useState(<></>);
    const [modalIsClosing, setModalIsClosing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = useCallback(() => {
        setModalIsClosing(true);

        setTimeout(() => {
            setModalIsClosing(false);
            setModalIsOpen(false);
        }, 300);
    }, []);

    const openModal = useCallback(component => {
        setActiveModal(component);
        setModalIsOpen(true);
    }, []);

    const initialState = {
        activeModal,
        closeModal,
        modalIsClosing,
        modalIsOpen,
        openModal
    };

    return (
        <ModalController.Provider value={initialState}>
            {children}
            <ModalPortal />
        </ModalController.Provider>
    )
}