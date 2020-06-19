import React, { cloneElement, useEffect, useState } from 'react';
import { css } from 'emotion';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';
import { Children } from 'react';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';
import ListStyles from '@fabula/core/theme/styles/List';

const DropdownMenu = props => {
    const { children, className, clickToClose, color, items, list, onChange, onClick, toggle, ...rest } = props;
    const [open, setOpen] = useState(false);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { open }));
    // CSS
    const dropdownMenuCss = css(DropdownMenuStyles({ framework: 'react', props }));
    const listCss = css(ListStyles({ framework: 'react', props: {...props, padding: true} }));
    // Classes
    const classes = ['fab-dropdown-menu-wrapper', className || '', listCss, dropdownMenuCss];

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
            <div className="fab-dropdown-menu fab-list" data-open={open}>
                {items && renderItems()}
                {list && childrenWithProps}
                {!list && childrenWithProps}
            </div>
        </div>
    )
}

DropdownMenu.defaultProps = {
    direction: 'down'
}

export default DropdownMenu;