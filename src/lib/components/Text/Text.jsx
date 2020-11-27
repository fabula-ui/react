import React, { useLayoutEffect, useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import TextStyles from '@fabula/core/styles/components/text/text';

const Text = props => {
    const { aux, bold, children, color, content, elRef, medium, semibold, size, strong, weight, ...rest } = props;
    const ref = useRef(null);
    const [fontWeight, setFontWeight] = useState(null);

    useLayoutEffect(() => {
        if (!weight) {
            if (bold || strong) { setFontWeight(700); }
            if (medium) { setFontWeight(500); }
            if (semibold) { setFontWeight(600); }
        } else {
            setFontWeight(weight);
        }
    }, [bold, medium, semibold, strong, weight]);

    return (
        <Component
            elRef={elRef || ref}
            properties={{...props, weight: fontWeight}}
            rest={rest}
            styles={TextStyles}
            wrapper="fab-text">
            <div data-aux={aux} data-color={color} data-size={size} ref={elRef || ref}>
                {content || children}
            </div>
        </Component>
    )
}

Text.defaultProps = {
    wrap: true
}

export default Text;