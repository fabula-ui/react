import React, { useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import ModalBodyStyles from '@fabula/core/styles/components/modal-body/modal-body';
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

const ModalBody = props => {
    const { children, elRef, ...rest } = props;
    const sectionCss = css(ModalSectionStyles({ framework: 'react', props }));
    const ref = useRef(null);

    return (
        <Component
            classes={['fab-modal-section']}
            elRef={elRef || ref}
            otherStyles={[sectionCss]}
            properties={props}
            rest={rest}
            styles={ModalBodyStyles}
            wrapper="fab-modal-body">
            <div data-fab-component="modalBody" ref={elRef || ref}>
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