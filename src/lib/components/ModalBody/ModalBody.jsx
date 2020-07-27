import React, { useRef } from 'react';

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

export default ModalBody