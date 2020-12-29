import React, { useContext, useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import { CloseButton } from '../CloseButton/CloseButton';
import { Component } from '../Component/Component';

// Controller
import { ModalController } from '../../controllers/ModalController';

// Styles
import { ModalHeaderStyles } from '@fabula/core/styles/components/modal-header/modal-header';
import { ModalSectionStyles } from '@fabula/core/styles/components/modal-section/modal-section';

export const ModalHeader = props => {
    const { color, children, elRef, parentColor, ...rest } = props;
    const { closeModal } = useContext(ModalController);
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const ref = useRef(null);

    return (
        <Component
            classes={['fab-modal-section']}
            elRef={elRef || ref}
            otherStyles={[sectionCss]}
            properties={props}
            rest={rest}
            styles={ModalHeaderStyles}
            wrapper="fab-modal-header">
            <div data-fab-component="modalHeader" ref={elRef || ref}>
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