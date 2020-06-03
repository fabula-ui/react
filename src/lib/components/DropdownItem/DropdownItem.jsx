import React from 'react';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import Text from '../Text/Text';

const DropdownItem = props => {
    const { clickToClose, color, label, onClick, parentOnClick, toggle } = props;

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if (clickToClose) { toggle(); }
    }

    return (
        <ListItem>
            {!!onClick || !!parentOnClick && <Button color={color} compact={true} onClick={handleClick} size="sm">{label}</Button>}
            {/* <button className="fab-dropdown__item">
                <Text color="inherit">{label}</Text>
            </button> */}
        </ListItem>
    )
}

export default DropdownItem;