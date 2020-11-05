import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import IconStyles from '@fabula/core/styles/components/icon/icon';

const Icon = props => {
    const { elRef } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={IconStyles}
            wrapper="fab-icon">
            <i ref={elRef || ref} />
        </Component>
    )
}

export default Icon