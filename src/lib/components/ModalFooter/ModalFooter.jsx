import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalFooter = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            classes={['fab-modal-footer']}
            elRef={elRef || ref}
            properties={props}
            styles={ModalSectionStyles}
            wrapper="fab-modal-section">
            <div data-fab-component="modalFooter" ref={elRef || ref} {...restProps}>{children}</div>
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