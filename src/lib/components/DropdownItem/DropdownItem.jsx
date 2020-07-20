import React from 'react';
import { css } from 'emotion';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const { button, color, children, className, clickToClose, item, label, list, onClick, open, parentOnClick, size, toggle, ...rest } = props;
    const classes = ['fab-dropdown-item', css(DropdownItemStyles({ framework: 'react', props })), className || ''];

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if ((button || onClick || parentOnClick) && clickToClose && toggle) { toggle(); }
    }

    return (
        <div className={classes.join(' ')} data-button={!!button || !!onClick || !!parentOnClick} onClick={handleClick}>
            {(!!button || !!onClick || !!parentOnClick) &&
                <button class="fab-dropdown-item__button">
                    {label || children}
                </button>
            }
            {!button && !onClick && !parentOnClick && (label || children)}
        </div>
    )
}

DropdownItem.defaultProps = {
    size: 'md'
}

export default DropdownItem;