import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import HTMLElementsStyles from '@fabula/core/styles/components/html-elements/html-elements';

const Div = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={HTMLElementsStyles}
            wrapper="fab-div">
            <div ref={elRef || ref} {...rest}>{children}</div>
        </Component>
    )
}

const Span = props => {
    const { children, ...rest } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            wrapper="fab-span">
            <span ref={elRef} {...rest}>{children}</span>
        </Component>
    )
}

const Strong = props => {
    const { children, ...rest } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            wrapper="fab-strong">
            <strong ref={elRef} {...rest}>{children}</strong>
        </Component>
    )
}

export {
    Div,
    Span,
    Strong
}