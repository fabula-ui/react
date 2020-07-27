import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';
import { useEffect } from 'react';

const ModalFooter = props => {
    const { children, color } = props;
    const elRef = useRef(null);

    useEffect(() => {
        console.log('modal footer color', color);
    }, [color]);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div ref={elRef}>{children}</div>
        </Component>
    )
}

export default ModalFooter