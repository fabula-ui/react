import React, { useState } from 'react';

// Controller
import TooltipController from '../controllers/TooltipController';

// Portals
import TooltipPortal from '../portals/TooltipPortal';

const TooltipProvider = props => {
    const { children } = props;
    const [activeTooltip, setActiveTooltip] = useState(null);

    const initialState = {
        activeTooltip,
        setActiveTooltip
    };

    return (
        <TooltipController.Provider value={initialState}>
            {children}
            <TooltipPortal />
        </TooltipController.Provider>
    )
}

export default TooltipProvider