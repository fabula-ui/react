import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';

// Styles
import ColumnStyles from '@fabula/core/styles/components/column/column';

const Column = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ColumnStyles}
            wrapper="fab-column">
            <div
                className="fab-column"
                data-fab-component="column"
                ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

export default Column