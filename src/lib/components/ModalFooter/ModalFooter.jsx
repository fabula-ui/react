import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Components
import Component from '../Component/Component';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalFooter = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            classes={['fab-modal-footer']}
            elRef={elRef}
            properties={props}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div data-fab-component="modalFooter" ref={elRef}>{children}</div>
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