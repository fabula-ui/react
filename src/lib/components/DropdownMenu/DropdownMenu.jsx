import React, { cloneElement } from 'react';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';
import { Children } from 'react';

const DropdownMenu = props => {
    const { children, clickToClose, color, items, list, onClick, open, toggle, ...rest } = props;
    const childrenWithProps = Children.map(children, child => cloneElement(child, { open, toggle }));

    const renderItems = () => {
        return items.map((item, i) => <DropdownItem clickToClose={clickToClose || item.clickToClose} color={color} key={i} open={open} parentOnClick={onClick} toggle={toggle} {...item} />);
    }

    return (
        <div className="fab-dropdown__menu">
            {items && <List color={color} {...rest}>{renderItems()}</List>}
            {list && <List color={color} {...rest}>{childrenWithProps}</List>}
            {!list && childrenWithProps}
        </div>
    )
}

export default DropdownMenu;