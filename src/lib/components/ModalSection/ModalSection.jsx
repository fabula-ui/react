import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { ModalSectionStyles } from '@fabula/core/styles/components/modal-section/modal-section';

export const ModalSection = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div data-fab-component="modalSection" ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

ModalSection.defaultProps = {
    padding: true
}

ModalSection.propTypes = {
    padding: PropTypes.bool
}