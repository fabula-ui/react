import React, { useRef } from 'react';
import { css } from 'emotion';

// Components
import Component from '../Component/Component';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

const Heading = props => {
    const { children, className, level } = props;
    const HTag = `h${level}`;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={HeadingStyles}
            wrapper="fab-heading">
            <div ref={elRef}>
                <HTag>
                    {children}
                </HTag>
            </div>
        </Component>
    )
}

Heading.defaultProps = {
    level: 1
}

export default Heading;