import React, { createElement, useRef } from 'react';
import { css } from 'emotion';

// Components
import Component from '../Component/Component';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

const Heading = props => {
    const { children, level } = props;
    const elRef = useRef(null);
    const HTag = () => createElement(`h${level}`, { ref: elRef }, children);

    return (
        <Component
            elRef={elRef}
            properties={props}
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