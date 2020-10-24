import {
    Children,
    cloneElement,
    isValidElement,
    useContext
} from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';

const TooltipWrapper = props => {
    const { children, color, label, offset, placement } = props;
    const { handleTooltip } = useContext(TooltipController);
    const element = children?.props ? children : children[0].props;

    const handleMouseOut = e => {
        handleTooltip(null);
    }

    const handleMouseOver = e => {
        const element = e.target.getBoundingClientRect();

        handleTooltip({
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
}

TooltipWrapper.defaultProps = {
    label: '',
    placement: 'top'
}

export default TooltipWrapper;