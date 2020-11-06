import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalFooter = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            classes={['fab-modal-footer']}
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div data-fab-component="modalFooter" ref={elRef || ref}>{children}</div>
        </Component>
    )
}

ModalFooter.defaultProps = {
    padding: true
}

ModalFooter.propTypes = {
    padding: PropTypes.bool
}

export default ModalFooter