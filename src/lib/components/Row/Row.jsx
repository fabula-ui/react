import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import RowStyles from '@fabula/core/styles/components/row/row';

const Row = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={RowStyles}
            wrapper="fab-row">
            <div className="fab-row" ref={elRef || ref} {...restProps}>
                {children}
            </div>
        </Component>
    )
}

export default Row