import React, {
    Children,
    cloneElement,
    useCallback,
    useContext,
    useEffect,
    useRef
} from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';

const Modal = props => {
    const { children, color, elRef, onClose, onOpen } = props;
    const { closeModal, modalIsClosing, modalIsOpen } = useContext(ModalController);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { closeModal, parentColor: color }));
    const ref = useRef(null);

    // Callbacks
    const handleModal = useCallback(open => {
        if (onClose && !open) { onClose() }
        if (onOpen && open) { onOpen() }
    }, [onClose, onOpen]);

    // Hooks
    useEffect(() => {
        handleModal(modalIsOpen)
    }, [handleModal, modalIsOpen]);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ModalStyles}
            wrapper="fab-modal-wrapper">
            <div data-closing={modalIsClosing} data-open={modalIsOpen} ref={elRef || ref}>
                <div className="fab-modal__dialog">
                    <div className="fab-modal">
                        {childrenWithProps}
                    </div>
                </div>
                <div className="fab-modal__backdrop" onClick={closeModal}></div>
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