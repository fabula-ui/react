import React, { Children, cloneElement, useContext, useEffect, useState } from 'react';
import { css } from 'emotion';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalStyles from '@fabula/core/theme/styles/Modal';

const Modal = props => {
    const { children, className, color } = props;
    const { closeModal, modalIsClosing, modalIsOpen } = useContext(ModalController);
    const classes = ['fab-modal-wrapper', className || '', css(ModalStyles({ framework: 'react', props }))];

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { closeModal, parentColor: color }));

    return (
        <div className={classes.join(' ')} data-closing={modalIsClosing} data-open={modalIsOpen}>
            <div class="fab-modal">
                {childrenWithProps}
            </div>

            <div class="fab-modal__backdrop" onClick={closeModal}></div>
        </div>
    )
}

export default Modal