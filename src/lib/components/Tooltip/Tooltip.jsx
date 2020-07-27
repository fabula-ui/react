import React, { useEffect, useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';

const Tooltip = props => {
    const { height, label, placement, x, width, y } = props;
    const [ready, setReady] = useState(false);
    const [style, setStyle] = useState(null);
    const elRef = useRef(null);

    // Hooks
    useEffect(() => {
        handleTooltip();
    }, []);

    // Methods
    const handleTooltip = () => {
        let left;
        let top;

        if (placement === 'bottom') {
            left = x + width / 2;
            top = y + height;
        } else if (placement === 'left') {
            left = x;
            top = y + height / 2;
        } else if (placement === 'right') {
            left = x + width;
            top = y + height / 2;
        } else {
            left = x + width / 2;
            top = y;
        }

        setStyle({
            left,
            top
        });
        setReady(true);
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={TooltipStyles}
            wrapper="fab-tooltip">
            <div data-placement={placement} data-ready={ready} style={style} ref={elRef}>
                <span className="fab-tooltip__label">{label}</span>
            </div>
        </Component>
    )
}

export default Tooltip;