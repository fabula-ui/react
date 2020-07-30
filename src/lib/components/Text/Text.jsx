import React, { useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';
import { useLayoutEffect } from 'react';

const Text = props => {
    const { aux, bold, children, color, content, medium, semibold, strong, weight } = props;
    const elRef = useRef(null);
    const [finalWeight, setFinalWeight] = useState(null);

    useLayoutEffect(() => {
        if (!props.weight) {
            if (bold || strong) { setFinalWeight(700); }
            if (medium) { setFinalWeight(500); }
            if (semibold) { setFinalWeight(600); }
        } else {
            setFinalWeight(weight);
        }
    }, [bold, medium, weight, semibold, strong]);

    return (
        <Component
            elRef={elRef}
            properties={{...props, weight: finalWeight}}
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