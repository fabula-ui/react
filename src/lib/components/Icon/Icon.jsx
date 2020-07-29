import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import IconStyles from '@fabula/core/styles/components/icon/icon';

const Icon = props => {
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={IconStyles}
            wrapper="fab-icon">
            <i ref={elRef} />
        </Component>
    )
}

export default Icon