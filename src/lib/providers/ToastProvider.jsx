import React, { useState } from 'react';

// Controller
import ToastController from '../controllers/ToastController';

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

    const createStacks = newStacks => {
        const tempStacks = { ...stacks };

        for (let i = 0; i < newStacks.length; i++) {
            const newStack = newStacks[i];
            const { name, placement } = newStack;

            tempStacks[name] = {
                elements: [],
                placement
            };
        }

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
        createStacks,
        showToast,
        stacks
    };

    return (
        <ToastController.Provider value={initialState}>
            {children}
            <ToastPortal />
        </ToastController.Provider>
    )
}

export default ToastProvider;