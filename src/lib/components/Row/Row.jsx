import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import RowStyles from '@fabula/core/styles/components/row/row';

const Row = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={RowStyles}
            wrapper="fab-row">
            <div className="fab-row" data-fab-component="row" ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

export default Row