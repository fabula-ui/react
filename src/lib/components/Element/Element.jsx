import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ElementStyles from '@fabula/core/styles/components/element/element';

const Element = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ElementStyles}
            wrapper="fab-element">
            <span ref={elRef || ref}>{children}</span>
        </Component>
    )
}

export default Element