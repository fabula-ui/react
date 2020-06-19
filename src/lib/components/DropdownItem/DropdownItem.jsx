import React from 'react';
import { css } from 'emotion';

import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';
import ListItemStyles from '@fabula/core/theme/styles/List';

const DropdownItem = props => {
    const { button, children, className, clickToClose, color, label, onClick, open, parentOnClick, toggle } = props;
    // CSS
    const dropdownItemCss = css(DropdownItemStyles({ framework: 'react', props }));
    const listItemCss = css(ListItemStyles({ framework: 'react', props }));
    const classes = ['fab-dropdown-item', 'fab-list-item', className || '', listItemCss, dropdownItemCss];

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if (clickToClose && toggle) { toggle(); }
    }

    return (
        // <div>{label}</div>
        <div className={classes.join(' ')}>
            {(!!button || !!onClick || !!parentOnClick) &&
                <div className="fab-dropdown-item__button">
                    <Button color={color} compact={true} onClick={handleClick} size="sm" disabled={!open} data-dropdown-item>
                        {label && <span className="fab-dropdown-item__label">{label}</span>}
                        {children}
                    </Button>
                </div>
            }
            {!button && !onClick && !parentOnClick && children}
        </div>
        // <ListItem data-dropdown-item>
        //     {(!!button || !!onClick || !!parentOnClick) &&
        //         <div className="fab-list-item__button">
        //             <Button color={color} compact={true} onClick={handleClick} size="sm" disabled={!open} data-dropdown-item>
        //                 {label && <span className="fab-dropdown-item__label">{label}</span>}
        //                 {children}
        //             </Button>
        //         </div>
        //     }
        //     {!button && !onClick && !parentOnClick && children}
        // </ListItem>
    )
}

export default DropdownItem;