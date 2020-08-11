import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalBody = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div ref={elRef}>
                {children}
            </div>
        </Component>
    )
}

ModalBody.defaultProps = {
    padding: true
}

ModalBody.propTypes = {
    padding: PropTypes.bool
}

export default ModalBody