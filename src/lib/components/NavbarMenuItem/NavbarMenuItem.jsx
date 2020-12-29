import React from 'react';

// Components
import { ListItem } from '../ListItem/ListItem';
import { Tab } from '../Tab/Tab';

export const NavbarMenuItem = props => {
    const { button, onClick, mobile, setOpen } = props;

    const handleClick = e => {
        if (onClick) { onClick(e); }
        if (setOpen) { setOpen(false); }
    }

    if (mobile) {
        return <ListItem onClick={(!!button || !!onClick) && handleClick} {...props} />
    } else {
        return <Tab {...props} />
    }
}