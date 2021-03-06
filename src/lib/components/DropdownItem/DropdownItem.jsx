import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const {
        button,
        children,
        clickToClose,
        elRef,
        href,
        invert,
        label,
        onClick,
        parentColor,
        parentOnClick,
        rel,
        target,
        toggle,
        ...rest
    } = props;
    const ref = useRef(null);

    const handleClick = () => {
        if ((button || clickToClose || onClick || parentOnClick) && toggle) { toggle(); }
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={DropdownItemStyles}
            wrapper="fab-dropdown-item">
            {(!!button || !!clickToClose || !!onClick || !!parentOnClick) && !href &&
                <button data-fab-component="dropdownItem" onClick={handleClick} ref={elRef || ref}>
                    {label || children}
                </button>
            }
            {!button && !clickToClose && !href && !onClick && !parentOnClick &&
                <div data-fab-component="dropdownItem" onClick={handleClick} ref={elRef || ref}>
                    {label || children}
                </div>
            }
            {href &&
                <a data-fab-component="dropdownItem" href={href} rel={rel} ref={elRef || ref} target={target}>
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