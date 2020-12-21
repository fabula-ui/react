import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';
import { Icon } from '../Icon/Icon';

// Styles
import { CloseButtonStyles } from '@fabula/core/styles/components/close-button/close-button';

export const CloseButton = props => {
    const { elRef, onClick, ...rest } = props;
    const ref = useRef();

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={CloseButtonStyles}
            wrapper="fab-close-button">
            <button onClick={onClick} ref={elRef || ref}>
                <Icon name="x" />
            </button>
        </Component>
    )
}