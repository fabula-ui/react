import React, { Children, cloneElement, useState, useEffect } from 'react';
import { css } from 'emotion';

// Styles
import ModalStyles from '@fabula/core/theme/styles/Modal';

const Modal = props => {
    const { children, className, color, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [open, setOpen] = useState(false);
    const classes = ['fab-modal-wrapper', className || '', css(ModalStyles({ framework: 'react', props }))];

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const closeModal = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(false);
            setOpen(false);

            if (onClose) { onClose(false); }
        }, 300);
    }

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { closeModal, parentColor: color }));

    return (
        <div className={classes.join(' ')} data-closing={isClosing} data-open={open}>
            <div class="fab-modal">
                {childrenWithProps}
            </div>

            <div class="fab-modal__backdrop"></div>
        </div>
    )
}

export default Modal