import React from 'react';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';

const DropdownMenu = props => {
    const { children, clickToClose, color, items, onClick, toggle, ...rest } = props;
    
    const renderItems = () => {
        return items.map((item, i) => <DropdownItem clickToClose={clickToClose || item.clickToClose} color={color} key={i} parentOnClick={onClick} toggle={toggle} {...item}/>);
    }

    return (
        <div className="fab-dropdown__menu">
            {
                items && 
                <List color={color} {...rest}>{renderItems()}</List>
            }
            {children}
        </div>
    )
}

export default DropdownMenu;