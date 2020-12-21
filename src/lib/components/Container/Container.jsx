import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';

// Styles
import ContainerStyles from '@fabula/core/styles/components/container/container';

const Container = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ContainerStyles}
            wrapper="fab-container">
            <div
                className="fab-container"
                data-fab-component="container"
                ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

export default Container