import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';

// Styles
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';

const Wrapper = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={WrapperStyles}
            wrapper="fab-wrapper">
            <div data-fab-component="wrapper" ref={elRef || ref}>{children}</div>
        </Component>
    )
}

export default Wrapper