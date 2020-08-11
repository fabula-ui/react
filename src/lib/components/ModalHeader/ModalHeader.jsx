import React, { useContext, useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import CloseButton from '../CloseButton/CloseButton';
import Component from '../Component/Component';

// Controller
import ModalController from '../../controllers/ModalController';

// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalHeader = props => {
    const { color, children, parentColor } = props;
    const { closeModal } = useContext(ModalController);
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const elRef = useRef(null);

    return (
        <Component
            classes={['fab-modal-section']}
            elRef={elRef}
            otherStyles={[sectionCss]}
            properties={props}
            styles={ModalHeaderStyles}
            wrapper="fab-modal-header">
            <div ref={elRef}>
                <div className="fab-modal-header__content">
                    {children}
                </div>
                <CloseButton onClick={closeModal} parentColor={color || parentColor} size="md" />
            </div>
        </Component>
    )
}

ModalHeader.defaultProps = {
    padding: true
}

ModalHeader.propTypes = {
    padding: PropTypes.bool
}

export default ModalHeader