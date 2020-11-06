import React, { createElement, useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

const Heading = props => {
    const { children, elRef, level, ...rest } = props;
    const ref = useRef(null);
    const HTag = () => createElement(`h${level}`, { ref: (elRef || ref), 'data-fab-component': 'heading' }, children);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={HeadingStyles}
            wrapper="fab-heading">
            <HTag>
                {children}
            </HTag>
        </Component>
    )
}

Heading.defaultProps = {
    level: 1
}

export default Heading;