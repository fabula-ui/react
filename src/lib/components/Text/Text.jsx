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
    const [finalWeight, setFinalWeight] = useState(null);
    const restProps = getComponentProps(rest);

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