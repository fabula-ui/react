import React, { useRef } from 'react';
import { css } from 'emotion';

// Components
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';

const CloseButton = props => {
    const { className, elRef, onClick } = props;
    const ref = useRef();
    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={CloseButtonStyles}
            wrapper="fab-close-button">
            <button onClick={onClick} ref={elRef || ref}>
                <Icon name="x" />
            </button>
        </Component>

    )
}

export default CloseButton;