import React, { useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ModalBodyStyles from '@fabula/core/styles/components/modal-body/modal-body';
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalBody = props => {
    const { children, elRef, ...rest } = props;
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            classes={['fab-modal-section']}
            elRef={elRef || ref}
            otherStyles={[sectionCss]}
            properties={props}
            styles={ModalBodyStyles}
            wrapper="fab-modal-body">
            <div data-fab-component="modalBody" ref={elRef || ref} {...restProps}>
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