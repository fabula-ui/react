import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ElementStyles from '@fabula/core/styles/components/element/element';

const Element = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ElementStyles}
            wrapper="fab-element">
            <span ref={elRef || ref} {...restProps}>{children}</span>
        </Component>
    )
}

export default Element