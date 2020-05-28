import React, { useCallback, useContext, useEffect, useState } from 'react';

// Components
import ToastStack from '../components/ToastStack/ToastStack';

// Services
import ToastService from '../services/ToastService';

const ToastPortal = props => {
    const { stacks } = useContext(ToastService);
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

// const ToastPortal = () => {
//     const toastService = useContext(ToastService);
//     const [stacks, setStacks] = useState(<></>);

//     // Callbacks
//     const stacksCallback = useCallback(() => {
//         const stacks = Object.keys(toastService.stacks).map((name, i) => {
//             const toastProps = toastService.stacks[name];

//             return <ToastStack key={i} name={name} {...toastProps} />;
//         });

//         setStacks(stacks);
//     }, [toastService.stacks]);

//     useEffect(() => {
//         stacksCallback();
//     }, [stacksCallback, toastService.stacks]);

//     useEffect(() => {
//         console.log('refresher...');
//     }, [toastService.refresher]);

//     return (
//         <div>
//             {stacks}
//         </div>
//     )
// }

export default ToastPortal;