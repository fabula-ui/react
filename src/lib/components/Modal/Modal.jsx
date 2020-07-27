import React, { Children, cloneElement, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';

const Modal = props => {
    const { children, color } = props;
    const { closeModal, modalIsClosing, modalIsOpen } = useContext(ModalController);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { closeModal, parentColor: color }));
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ModalStyles}
            wrapper="fab-modal-wrapper">
            <div data-closing={modalIsClosing} data-open={modalIsOpen} ref={elRef}>
                <div class="fab-modal">
                    {childrenWithProps}
                </div>
                <div class="fab-modal__backdrop" onClick={closeModal}></div>
            </div>
        </Component>
    )
}

Modal.defaultProps = {
    color: '',
    glow: true,
    open: true,
    size: 'lg'
}

Modal.propTypes = {
    color: PropTypes.string,
    glow: PropTypes.bool,
    open: PropTypes.bool,
    size: PropTypes.string
}

export default Modal