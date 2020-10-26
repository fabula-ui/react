import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import DrawerStyles from '@fabula/core/styles/components/drawer/drawer';

const Drawer = props => {
    const { children, elRef, open } = props;
    const ref = useRef();

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={DrawerStyles}
            wrapper="fab-drawer">
            <div data-open={open} ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

export default Drawer