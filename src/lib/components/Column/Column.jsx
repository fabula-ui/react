import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ColumnStyles from '@fabula/core/styles/components/column/column';

const Column = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ColumnStyles}
            wrapper="fab-column">
            <div
                className="fab-column"
                ref={elRef || ref}
                {...restProps}>
                {children}
            </div>
        </Component>
    )
}

export default Column