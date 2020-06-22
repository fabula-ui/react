import React, { useContext } from 'react';

// Components
import Tooltip from '../components/Tooltip/Tooltip';

// Controllers
import TooltipController from '../controllers/TooltipController';

const TooltipPortal = () => {
    const { activeTooltip } = useContext(TooltipController);

    return (
        <div className="fab-tooltip-portal">
            {!!activeTooltip && <Tooltip {...activeTooltip} />}
        </div>
    )
}

export default TooltipPortal;