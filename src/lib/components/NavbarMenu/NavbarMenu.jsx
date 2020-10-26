import React, { useRef, useState } from 'react';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import Drawer from '../Drawer/Drawer';
import Icon from '../Icon/Icon';

// Styles
import NavbarMenuStyles from '@fabula/core/styles/components/navbar-menu/navbar-menu';

const NavbarMenu = props => {
    const { children, mobile } = props;

    if (mobile) {
        return <MobileMenu {...props} />
    } else {
        return <Menu {...props} />
    }
}

const Menu = props => {
    const { children, elRef } = props;
    const ref = useRef();

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={NavbarMenuStyles}
            wrapper="fab-navbar-menu">
            <div data-mobile={false} data-fab-component="navbarMenu" ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

const MobileMenu = props => {
    const { children, elRef } = props;
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={NavbarMenuStyles}
            wrapper="fab-navbar-menu">
            <div data-mobile={true} data-fab-component="navbarMenu" ref={elRef || ref}>
                <Button color="light" compact={true} onClick={handleDrawer}>
                    <Icon name="menu" />
                </Button>
            </div>
            <Drawer open={open}>{children}</Drawer>
        </Component>

    )
}

export default NavbarMenu