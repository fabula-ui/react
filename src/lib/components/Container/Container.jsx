import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ContainerStyles from '@fabula/core/styles/components/container/container';

const Container = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ContainerStyles}
            wrapper="fab-container">
            <div
                className="fab-container"
                ref={elRef || ref}
                {...restProps}>
                {children}
            </div>
        </Component>
    )
}

export default Container