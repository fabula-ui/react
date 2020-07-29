import React, { cloneElement, useContext } from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';

const TooltipWrapper = props => {
    const { children, color, label, offset, placement } = props;
    const { setActiveTooltip } = useContext(TooltipController);
    const element = children?.props ? children : children[0].props;

    const handleMouseOut = () => {
        setActiveTooltip(null);
    }

    const handleMouseOver = e => {
        const element = e.target.getBoundingClientRect();

        setActiveTooltip({
            color,
            height: e.target.offsetHeight,
            label,
            offset,
            placement,
            x: element.left,
            width: e.target.offsetWidth,
            y: element.top
        });
    }

    return cloneElement(element, {
        props: element.props,
        onMouseEnter: handleMouseOver,
        onMouseLeave: handleMouseOut
    });
}

TooltipWrapper.defaultProps = {
    label: '',
    placement: 'top'
}

export default TooltipWrapper;