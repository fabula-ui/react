import React, { useCallback, useContext, useEffect, useState } from 'react';
import { css } from 'emotion';

// Controllers
import ModalController from '../controllers/ModalController';
import { cloneElement } from 'react';

const ModalPortal = props => {
    const { activeModal, className, ...rest } = useContext(ModalController);
    const modalWithProps = cloneElement(activeModal, { ...rest });

    return (
        <div className={className}>{modalWithProps}</div>
    )
}

export default ModalPortal;