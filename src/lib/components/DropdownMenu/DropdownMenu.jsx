import React, { cloneElement, useEffect, useState } from 'react';
import { css } from 'emotion';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';
import { Children } from 'react';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

const DropdownMenu = props => {
    const { children, className, clickToClose, color, items, list, onChange, onClick, toggle, ...rest } = props;
    const [open, setOpen] = useState(false);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { open }));
    const classes = ['fab-dropdown-menu-wrapper', className || '', css(DropdownMenuStyles({ framework: 'react', props }))];

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
        return items.map((item, i) => <DropdownItem clickToClose={clickToClose || item.clickToClose} color={color} key={i} open={open} parentOnClick={onClick} toggle={handleToggle} {...item} />);
    }

    return (
        <div className={classes.join(' ')}>
            <div className="fab-dropdown-menu" data-open={open}>
                {items && <List color={color} {...rest}>{renderItems()}</List>}
                {list && <List color={color} {...rest}>{childrenWithProps}</List>}
                {!list && childrenWithProps}
            </div>
        </div>
    )
}

DropdownMenu.defaultProps = {
    direction: 'down'
}

export default DropdownMenu;