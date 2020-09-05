import React, { createElement, useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

const Heading = props => {
    const { children, level, ...rest } = props;
    const elRef = useRef(null);
    const restProps = getComponentProps(rest);
    const HTag = () => createElement(`h${level}`, { ...restProps, ref: elRef }, children);

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