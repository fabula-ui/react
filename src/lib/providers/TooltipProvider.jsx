import React, { useReducer } from 'react';

// Controller
import { TooltipController } from '../controllers/TooltipController';

// Portals
import { TooltipPortal } from '../portals/TooltipPortal';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_TOOLTIP':
            return action.tooltip;
        default:
            return state;
    }
}

export const TooltipProvider = props => {
    const { children } = props;
    const [activeTooltip, dispatch] = useReducer(reducer, null);

    const handleTooltip = tooltip => {
        dispatch({
            type: 'SET_ACTIVE_TOOLTIP',
            tooltip
        })
    }

    const initialState = {
        activeTooltip,
        handleTooltip
    };

    return (
        <TooltipController.Provider value={initialState}>
            {children}
            <TooltipPortal />
        </TooltipController.Provider>
    )
}