import React, { Children, cloneElement, useContext } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';

const Modal = props => {
    const { children, className, color } = props;
    const { closeModal, modalIsClosing, modalIsOpen } = useContext(ModalController);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { closeModal, parentColor: color }));
    const classes = ['fab-modal-wrapper', css(ModalStyles({ framework: 'react', props })), className || ''];
    
    return (
        <div className={classes.join(' ')} data-closing={modalIsClosing} data-open={modalIsOpen}>
            <div class="fab-modal">
                {childrenWithProps}
            </div>

            <div class="fab-modal__backdrop" onClick={closeModal}></div>
        </div>
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