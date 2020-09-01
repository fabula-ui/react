import React, { Children, cloneElement, useContext, isValidElement } from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';

const clonedElement = (children, element) => {
    return <span>
        {cloneElement(children, {

        })}
    </span>

}

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

    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                props: element.props,
                onMouseEnter: handleMouseOver,
                onMouseLeave: handleMouseOut
            });
        } else {
            return child
        }
    })

    return childrenWithProps;

    // return cloneElement(children, {
    //     props: element.props,
    //     onMouseEnter: handleMouseOver,
    //     onMouseLeave: handleMouseOut
    // });
}

TooltipWrapper.defaultProps = {
    label: '',
    placement: 'top'
}

export default TooltipWrapper;