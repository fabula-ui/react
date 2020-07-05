import React from 'react';
import { css } from 'emotion';

import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const DropdownItem = props => {
    const { button, color, children, className, clickToClose, item, label, list, onClick, open, parentOnClick, size, toggle, ...rest } = props;
    // CSS
    const dropdownItemCss = css(DropdownItemStyles({ framework: 'react', props }));
    const listItemCss = css(ListItemStyles({
        framework: 'react', props: {
            ...props,
            ...item
        }
    }));
    const classes = ['fab-dropdown-item', 'fab-list-item', className || '', listItemCss, dropdownItemCss];

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if (button && clickToClose && toggle) { toggle(); }
    }

    return (
        <div className={classes.join(' ')} data-button={!!button || !!onClick || !!parentOnClick} onClick={handleClick} data-dropdown-item>
            {(!!button || !!onClick || !!parentOnClick) &&
                <Button color={item?.color || color} compact={true} expand={true} size={size}>
                    {label && <span className="fab-dropdown-item__label">{label}</span>}
                    {children}
                </Button>
            }
            {!button && !onClick && !parentOnClick && !!label && <span className="fab-dropdown-item__label">{label}</span>}
            {!button && !onClick && !parentOnClick && children}
        </div>
    )
}

DropdownItem.defaultProps = {
    size: 'sm'
}

export default DropdownItem;