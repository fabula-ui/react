import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

const Link = props => {
    const {
        aux,
        children,
        className,
        elRef,
        href,
        label,
        underline,
        url,
        target,
        ...rest
    } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={LinkStyles}
            wrapper="fab-link">
            <a href={href || url} target={target} ref={elRef || ref} {...restProps}>
                {label || children}
            </a>
        </Component>
    )
}

Link.defaultProps = {
    underline: true
}

export default Link;