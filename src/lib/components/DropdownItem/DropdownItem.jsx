import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const { button, children, clickToClose, label, onClick, parentOnClick, toggle } = props;
    const elRef = useRef(null);

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if ((button || onClick || parentOnClick) && clickToClose && toggle) { toggle(); }
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DropdownItemStyles}
            wrapper="fab-dropdown-item">
            {(!!button || !!onClick || !!parentOnClick) &&
                <button data-fab-component="dropdownItem" onClick={handleClick} ref={elRef}>
                    {label || children}
                </button>
            }
            {!button && !onClick && !parentOnClick &&
                <div data-fab-component="dropdownItem" onClick={handleClick} ref={elRef}>
                    {label || children}
                </div>
            }
        </Component>
    )
}

DropdownItem.defaultProps = {
    button: false,
    color: '',
    clickToClose: false,
    invert: false,
    label: '',
    parentColor: '',
    size: 'md'
}

DropdownItem.propTypes = {
    button: PropTypes.bool,
    color: PropTypes.string,
    clickToClose: PropTypes.bool,
    invert: PropTypes.bool,
    label: PropTypes.string,
    parentColor: PropTypes.string,
    size: PropTypes.string
}

export default DropdownItem;