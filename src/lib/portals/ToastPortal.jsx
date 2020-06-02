import React, { useCallback, useContext, useEffect, useState } from 'react';

// Controller
import ToastController from '../controllers/ToastController';

// Components
import ToastStack from '../components/ToastStack/ToastStack';

// Services
import ToastService from '../services/ToastService';

const ToastPortal = props => {
    const { stacks } = useContext(ToastController);
    const [stacksEl, setStacksEl] = useState(<></>);

    const stacksCallback = useCallback(() => {
        const stacksEl = Object.keys(stacks).map((name, i) => {
            const stack = stacks[name];
            const { placement } = stack;

            return <ToastStack key={i} name={name} placement={placement} />
        });

        setStacksEl(stacksEl);
    }, [stacks]);

    useEffect(() => {
        stacksCallback();
    }, [stacks]);

    return stacksEl;
}

export default ToastPortal;