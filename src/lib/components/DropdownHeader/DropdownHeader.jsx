import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

const DropdownHeader = props => {
    const { children, label } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DropdownHeaderStyles}
            wrapper="fab-dropdown-header">
            <div ref={elRef}>
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

export default DropdownHeader;