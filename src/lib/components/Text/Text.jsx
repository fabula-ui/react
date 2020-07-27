import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';

const Text = props => {
    const { aux, children, className, color, content } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={TextStyles}
            wrapper="fab-text">
            <div data-aux={!!aux} data-color={color} ref={elRef}>
                {!content && children}
                {!!content && content}
            </div>
        </Component>
    )
}

Text.defaultProps = {
    wrap: true
}

export default Text;