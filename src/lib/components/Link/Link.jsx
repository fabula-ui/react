import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

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
        rel,
        underline,
        url,
        target,
        ...rest
    } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={LinkStyles}
            wrapper="fab-link">
            <a href={href || url} rel={rel} target={target} ref={elRef || ref} data-fab-component="link">
                {label || children}
            </a>
        </Component>
    )
}

Link.defaultProps = {
    inline: true,
    rel: '',
    size: 'md',
    underline: true
}

export default Link;