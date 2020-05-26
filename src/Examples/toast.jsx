import React, { useEffect, useContext } from 'react';

import { ToastService } from '@fabula/react-dev';

const ToastExample = props => {
    const { test } = props;
    const toastService = useContext(ToastService);

    useEffect(() => {
        // toastService.createStack({ name: 'testStack' });
        // ToastService.createPortal();
        // ToastService.createStack('testStack');
    }, []);

    const addToast = () => {
        // toastService.showToast({
        //     message: 'Here is an example of a toast component working...',
        //     stack: 'testStack'
        // });
    }

    return (
        <button onClick={addToast}>{toastService.test}</button>
    )
}

export default ToastExample;