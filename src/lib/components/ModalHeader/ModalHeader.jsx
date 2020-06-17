import React from 'react';
import { css } from 'emotion';

// Styles
import ModalHeaderStyles from '@fabula/core/theme/styles/ModalHeader';
import ModalSectionStyles from '@fabula/core/theme/styles/ModalSection';

const ModalHeader = props => {
    const { children, className, closeModal } = props;
    const headerCss = css(ModalHeaderStyles({ framework: 'react', props }));
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const classes = ['fab-modal-header', 'fab-modal-section', className || '', sectionCss, headerCss];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-modal-header__content">
                {children}
            </div>
            <button class="fab-modal-header__close" onClick={closeModal}></button>
        </div>
    )
}

export default ModalHeader