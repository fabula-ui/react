import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const { button, children, clickToClose, href, label, onClick, parentOnClick, toggle, ...rest } = props;
    const elRef = useRef(null);
    const restProps = getComponentProps(rest);

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if ((button || clickToClose || onClick || parentOnClick) && toggle) { toggle(); }
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DropdownItemStyles}
            wrapper="fab-dropdown-item">
            {(!!button || !!clickToClose || !!onClick || !!parentOnClick) && !href &&
                <button data-fab-component="dropdownItem" onClick={handleClick} ref={elRef}>
                    {label || children}
                </button>
            }
            {!button && !clickToClose && !href && !onClick && !parentOnClick &&
                <div data-fab-component="dropdownItem" onClick={handleClick} ref={elRef}>
                    {label || children}
                </div>
            }
            {href &&
                <a data-fab-component="dropdownItem" href={href} ref={elRef} {...restProps}>
                    {label || children}
                </a>
            }
        </Component>
    )
}

DropdownItem.defaultProps = {
    button: false,
    invert: false,
    label: '',
    parentColor: ''
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