import React, { useContext } from 'react';
import { css } from 'emotion';

// Components
import CloseButton from '../CloseButton/CloseButton';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalHeader = props => {
    const { color, children, className, parentColor } = props;
    const { closeModal } = useContext(ModalController);
    const headerCss = css(ModalHeaderStyles({ framework: 'react', props }));
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const classes = ['fab-modal-header', 'fab-modal-section', className || '', sectionCss, headerCss];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-modal-header__content">
                {children}
            </div>
            <CloseButton onClick={closeModal} parentColor={color || parentColor} size="md" />
        </div>
    )
}

export default ModalHeader