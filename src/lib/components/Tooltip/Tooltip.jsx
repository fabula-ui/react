import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Controllers
import TooltipController from '../../controllers/TooltipController';

// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';

const Tooltip = props => {
    const { activeTooltip } = useContext(TooltipController);
    const componentProps = { ...props, height: null, width: null };
    const [ready, setReady] = useState(false);
    const [style, setStyle] = useState(null);
    const elRef = useRef(null);

    // Callbacks
    const handleTooltip = useCallback(tooltip => {
        let left;
        let top;

        if (tooltip.placement === 'bottom') {
            left = tooltip.x + tooltip.width / 2;
            top = tooltip.y + tooltip.height;
        } else if (tooltip.placement === 'left') {
            left = tooltip.x;
            top = tooltip.y + tooltip.height / 2;
        } else if (tooltip.placement === 'right') {
            left = tooltip.x + tooltip.width;
            top = tooltip.y + tooltip.height / 2;
        } else {
            left = tooltip.x + tooltip.width / 2;
            top = tooltip.y;
        }

        setStyle({
            left,
            top
        });
        setReady(true);
    }, []);

    // Hooks
    useLayoutEffect(() => {
        if (activeTooltip) { handleTooltip(activeTooltip); }
    }, [activeTooltip, handleTooltip]);

    return (
        <Component
            elRef={elRef}
            properties={componentProps}
            styles={TooltipStyles}
            wrapper="fab-tooltip">
            <div data-placement={activeTooltip?.placement} data-ready={ready} style={style} ref={elRef}>
                <span className="fab-tooltip__label">{activeTooltip?.label}</span>
            </div>
        </Component>
    )
}

export default Tooltip;