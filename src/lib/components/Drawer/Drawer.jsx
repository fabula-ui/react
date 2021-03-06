import React, { useLayoutEffect, useRef, useState } from 'react';

// Components
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Styles
import DrawerStyles from '@fabula/core/styles/components/drawer/drawer';

const Drawer = props => {
    const { children, elRef, onChange, ...rest } = props;
    const [open, setOpen] = useState(props.open);
    const ref = useRef();

    useLayoutEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleClose = () => {
        if (onChange) { onChange(!open); }
        setOpen(!open);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={DrawerStyles}
            wrapper="fab-drawer-wrapper">
            <div data-open={open} ref={elRef || ref}>
                <div className="fab-drawer">
                    {children}
                </div>
                <button className="fab-drawer__close-button" onClick={handleClose}>
                    <Icon name="x" />
                </button>
            </div>
        </Component>
    )
}

export default Drawer