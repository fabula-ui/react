import React, { useCallback, useContext, useEffect, useState } from 'react';

// Controller
import { ToastController } from '../controllers/ToastController';

// Components
import { ToastStack } from '../components/ToastStack/ToastStack';

export const ToastPortal = () => {
    const { stacks } = useContext(ToastController);
    const [stacksEl, setStacksEl] = useState(<></>);

    // Callbacks
    const handleStacks = useCallback(() => {
        const stacksEl = Object.keys(stacks).map((name, i) => {
            const stack = stacks[name];
            const { placement } = stack;

            return <ToastStack key={i} name={name} placement={placement} />
        });

        setStacksEl(stacksEl);
    }, [stacks]);

    // Hooks
    useEffect(() => {
        handleStacks();
    }, [handleStacks]);

    return stacksEl;
}