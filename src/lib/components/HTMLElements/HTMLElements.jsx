import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

const Div = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            wrapper="fab-div">
            <div ref={elRef}>{children}</div>
        </Component>
    )
}

export {
    Div
}