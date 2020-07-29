import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Icons
import { ReactComponent as Activity } from '@fabula/icons/assets/activity.svg';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

const Icon = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={IconStyles}
            wrapper="fab-icon">
            <i ref={elRef}>{children}</i>
        </Component>
    )
}

const activity = props => <Icon {...props}><Activity /></Icon>;

export {
    activity
}