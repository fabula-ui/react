import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

const DropdownHeader = props => {
    const { children, elRef, label, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={DropdownHeaderStyles}
            wrapper="fab-dropdown-header">
            <div
                data-fab-component="dropdownHeader"
                ref={elRef || ref}
                {...restProps}>
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