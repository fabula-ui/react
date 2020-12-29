import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { DropdownHeaderStyles } from '@fabula/core/styles/components/dropdown-header/dropdown-header';

export const DropdownHeader = props => {
    const { children, elRef, label, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={DropdownHeaderStyles}
            wrapper="fab-dropdown-header">
            <div
                data-fab-component="dropdownHeader"
                ref={elRef || ref}>
                {label || children}
            </div>
        </Component>
    )
}

DropdownHeader.defaultProps = {
    label: '',
    textColor: ''
}

DropdownHeader.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string
}