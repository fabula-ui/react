import React, { useContext } from 'react';

// Components
import Tooltip from '../components/Tooltip/Tooltip';

// Controllers
import TooltipController from '../controllers/TooltipController';

const TooltipPortal = props => {
    const { activeTooltip } = useContext(TooltipController);
    // const modalWithProps = cloneElement(activeModal, { ...rest });

    return (
        <div className="fab-tooltip-portal">
            <div>Height: {activeTooltip?.height}</div>
            <div>Width: {activeTooltip?.width}</div>
            <div>X: {activeTooltip?.x}</div>
            <div>Y: {activeTooltip?.y}</div>
            <Tooltip />
        </div>
    )
}

export default TooltipPortal;