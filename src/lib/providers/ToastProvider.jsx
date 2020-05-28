import React, { useState } from 'react';

// Service
import ToastService from '../services/ToastService';

// Portals
import ToastPortal from '../portals/ToastPortal';

const ToastProvider = props => {
    const { children } = props;
    const [stacks, setStacks] = useState({
        default: {
            elements: [],
            placement: {
                x: 'right',
                y: 'bottom'
            }
        }
    });

    const createStack = params => {
        const tempStacks = { ...stacks };
        const { name, placement } = params;

        tempStacks[name] = {
            elements: [],
            placement
        };

        setStacks(tempStacks);
    }

    const showToast = params => {
        const { stack, ...rest } = params;
        const tempStacks = { ...stacks };
        const targetStack = stacks[stack] || stacks.default;

        targetStack.elements.push({ ...rest });

        setStacks(tempStacks);
    }

    const initialState = {
        createStack,
        showToast,
        stacks
    };

    return (
        <ToastService.Provider value={initialState}>
            {children}
            <ToastPortal />
        </ToastService.Provider>
    )
}

export default ToastProvider;