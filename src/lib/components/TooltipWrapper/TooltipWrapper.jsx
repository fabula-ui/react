import React, { useContext, useRef, useState } from 'react';
import { useEffect } from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';

const TooltipWrapper = props => {
    const { children, color, offset, placement } = props;
    const { setActiveTooltip } = useContext(TooltipController);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            getTarget();
        }
    }, [ref]);

    const getTarget = () => {
        const child = ref.current.children[0];
        const isWrapper = child.hasAttribute('data-fab-wrapper');
        const element = isWrapper ? child.children[0] : child;

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', () => { setActiveTooltip(null); });
    }

    const handleMouseOver = e => {
        setActiveTooltip({
            color,
            height: e.target.offsetHeight,
            offset,
            placement,
            x: e.target.offsetLeft,
            width: e.target.offsetWidth,
            y: e.target.offsetTop
        });
    }

    return (
        <div className="fab-tooltip-wrapper" ref={ref}>
            {children}
        </div>
    )
}

TooltipWrapper.defaultProps = {
    placement: 'top'
}

export default TooltipWrapper;