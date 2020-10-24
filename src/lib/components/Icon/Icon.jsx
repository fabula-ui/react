import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import IconStyles from '@fabula/core/styles/components/icon/icon';

const Icon = props => {
    const { elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={IconStyles}
            wrapper="fab-icon">
            <i ref={elRef || ref} {...restProps} />
        </Component>
    )
}

export default Icon