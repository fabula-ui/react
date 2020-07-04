import React from 'react';
import { css } from 'emotion';

import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const { button, children, className, clickToClose, color, label, list, onClick, open, parentOnClick, toggle, ...rest } = props;
    // CSS
    const dropdownItemCss = css(DropdownItemStyles({ framework: 'react', props }));
    const classes = ['fab-dropdown-item', className || '', dropdownItemCss];

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if (clickToClose && toggle) { toggle(); }
    }

    return (
        <ListItem data-button={!!button || !!onClick || !!parentOnClick} data-dropdown-item>
            <div className={classes.join(' ')} data-button={!!button} onClick={handleClick}>
                {(!!button) &&
                    <Button color={color} compact={true} size="sm" data-dropdown-item {...rest}>
                        {label && <span className="fab-dropdown-item__label">{label}</span>}
                        {children}
                    </Button>
                }
                {!button && !onClick && !parentOnClick && !!label && <span className="fab-dropdown-item__label">{label}</span>}
                {!button && !onClick && !parentOnClick && children}
            </div>
        </ListItem>
    )
}

export default DropdownItem;