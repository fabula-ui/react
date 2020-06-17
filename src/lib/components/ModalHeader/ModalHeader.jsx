import React, { useContext } from 'react';
import { css } from 'emotion';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalHeaderStyles from '@fabula/core/theme/styles/ModalHeader';
import ModalSectionStyles from '@fabula/core/theme/styles/ModalSection';

const ModalHeader = props => {
    const { children, className } = props;
    const { closeModal } = useContext(ModalController);
    const headerCss = css(ModalHeaderStyles({ framework: 'react', props }));
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const classes = ['fab-modal-header', 'fab-modal-section', className || '', sectionCss, headerCss];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-modal-header__content">
                {children}
            </div>
            <button className="fab-modal-header__close" onClick={closeModal}></button>
        </div>
    )
}

export default ModalHeader