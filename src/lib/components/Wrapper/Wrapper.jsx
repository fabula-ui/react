import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';

const Wrapper = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={WrapperStyles}
            wrapper="fab-wrapper">
            <div data-fab-component="wrapper" ref={elRef || ref} {...restProps}>{children}</div>
        </Component>
    )
}

export default Wrapper