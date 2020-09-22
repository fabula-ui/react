import React, { useLayoutEffect, useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import TextStyles from '@fabula/core/styles/components/text/text';

const Text = props => {
    const { aux, bold, children, color, content, medium, semibold, strong, weight, ...rest } = props;
    const elRef = useRef(null);
    const [fontWeight, setFontWeight] = useState(null);
    const restProps = getComponentProps(rest);

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
            elRef={elRef}
            properties={{...props, weight: fontWeight}}
            styles={TextStyles}
            wrapper="fab-text">
            <div data-aux={!!aux} data-color={color} ref={elRef} {...restProps}>
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