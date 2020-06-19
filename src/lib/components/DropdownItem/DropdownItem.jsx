import React, { cloneElement } from 'react';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

const DropdownItem = props => {
    const { button, children, clickToClose, color, label, onClick, open, parentOnClick, toggle } = props;

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if (clickToClose && toggle) { toggle(); }
    }

    return (
        <ListItem data-dropdown-item>
            {(!!button || !!onClick || !!parentOnClick) &&
                <div className="fab-list-item__button">
                    <Button color={color} compact={true} onClick={handleClick} size="sm" disabled={!open} data-dropdown-item>
                        {label && <span className="fab-dropdown-item__label">{label}</span>}
                        {children}
                    </Button>
                </div>
            }
            {!button && !onClick && !parentOnClick && children}
        </ListItem>
    )
}

export default DropdownItem;