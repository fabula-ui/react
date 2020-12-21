import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';

// Styles
import { IconStyles } from '@fabula/core/styles/components/icon/icon';

export const Icon = props => {
    const { elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={IconStyles}
            wrapper="fab-icon">
            <i ref={elRef || ref} />
        </Component>
    )
}