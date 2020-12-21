import React, { Children, cloneElement, isValidElement, useRef, useState } from 'react';

// Components
import Button from '../Button/Button';
import { Component } from '../Component/Component';
import Drawer from '../Drawer/Drawer';
import { Icon } from '../Icon/Icon';
import List from '../List/List';
import Tabs from '../Tabs/Tabs';

// Styles
import NavbarMenuStyles from '@fabula/core/styles/components/navbar-menu/navbar-menu';

const NavbarMenu = props => {
    const { mobile } = props;

    if (mobile) {
        return <MobileMenu {...props} />
    } else {
        return <Menu {...props} />
    }
}

const Menu = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef();

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { mobile: false });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={NavbarMenuStyles}
            wrapper="fab-navbar-menu">
            <div data-mobile={false} data-fab-wrapper="navbarMenu" ref={elRef || ref}>
                <Tabs {...rest}>
                    {childrenWithProps}
                </Tabs>
            </div>
        </Component>
    )
}

const MobileMenu = props => {
    const { children, elRef, ...rest } = props;
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { mobile: true, setOpen });
        } else {
            return child;
        }
    });

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={NavbarMenuStyles}
            wrapper="fab-navbar-menu">
            <div data-mobile={true} data-fab-component="navbarMenu" ref={elRef || ref}>
                <Button color="light" compact={true} onClick={handleDrawer}>
                    <Icon name="menu" />
                </Button>
            </div>
            <Drawer onChange={setOpen} open={open} {...rest}>
                <List padding={true} {...rest}>
                    {childrenWithProps}
                </List>
            </Drawer>
        </Component>
    )
}

export default NavbarMenu