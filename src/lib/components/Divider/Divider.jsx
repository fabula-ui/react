import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { DividerStyles } from '@fabula/core/styles/components/divider/divider';

export const Divider = props => {
    const { elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={DividerStyles}
            wrapper="fab-divider">
            <div ref={elRef || ref} />
        </Component>
    )
}

Divider.defaultProps = {
    label: '',
    textColor: ''
}

Divider.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string
}