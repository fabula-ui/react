import React, { Children, cloneElement, useEffect, useState, isValidElement } from 'react';
import { css } from 'emotion';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

const DropdownMenu = props => {
    const { children, className, clickToClose, color, items, list, onChange, onClickItem, size, toggle, ...rest } = props;
    const [open, setOpen] = useState(false);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { color, open, parentOnClick: onClickItem, size })
        } else {
            return child;
        }
    });
    // CSS
    const dropdownMenuCss = css(DropdownMenuStyles({ framework: 'react', props }));
    // Classes
    const classes = ['fab-dropdown-menu-wrapper', className || '', dropdownMenuCss];

    useEffect(() => {
        if (onChange) { onChange(open); }
    }, [open]);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleToggle = open => {
        if (clickToClose) {
            if (toggle) { toggle(open); }
            if (clickToClose) { setOpen(open); }
        }
    }

    const renderItems = () => {
        return items.map((item, i) => {
            return <DropdownItem clickToClose={clickToClose || item.clickToClose} item={item} key={i} open={open} parentOnClick={onClickItem} size={size} toggle={handleToggle} {...item} />
        });
    }

    return (
        <div className={classes.join(' ')}>
            <div className="fab-dropdown-menu" data-open={open}>
                {items && !list &&
                    <List color={color} padding={true} {...rest}>
                        {renderItems()}
                    </List>
                }
                {!items && list &&
                    <List color={color} {...rest}>
                        {childrenWithProps}
                    </List>
                }
                {!items && !list && childrenWithProps}
            </div>
        </div>
    )
}

DropdownMenu.defaultProps = {
    direction: 'down',
    divider: true
}

export default DropdownMenu;