import React, { useContext, useRef, useState, isValidElement, createRef, Children, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';
import { cloneElement } from 'react';

const TooltipWrapper = props => {
    const { children, color, label, offset, placement } = props;
    const { setActiveTooltip } = useContext(TooltipController);

    const handleMouseOut = () => {
        setActiveTooltip(null);
    }

    const handleMouseOver = e => {
        setActiveTooltip({
            color,
            height: e.target.offsetHeight,
            label,
            offset,
            placement,
            x: e.target.offsetLeft,
            width: e.target.offsetWidth,
            y: e.target.offsetTop
        });
    }

    return cloneElement(children[0], {
        props: children[0].props,
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut
    });
}

TooltipWrapper.defaultProps = {
    label: '',
    placement: 'top'
}

export default TooltipWrapper;