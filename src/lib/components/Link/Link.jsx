import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

const Link = props => {
    const { children, className, href, label, url, ...rest } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={LinkStyles}
            wrapper="fab-link">
            <a href={href || url} {...rest} ref={elRef}>
                {label || children}
            </a>
        </Component>
    )
}

Link.defaultProps = {
    underline: true
}

export default Link;