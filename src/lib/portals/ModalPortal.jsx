import React, { cloneElement, useContext } from 'react';

// Controllers
import ModalController from '../controllers/ModalController';

const ModalPortal = props => {
    const { activeModal, className, ...rest } = useContext(ModalController);
    const modalWithProps = cloneElement(activeModal, { ...rest });

    return (
        <div className={className}>{modalWithProps}</div>
    )
}

export default ModalPortal;