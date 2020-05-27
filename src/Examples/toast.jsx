import React, { useEffect, useContext } from 'react';

import { Button, Toast, ToastService } from '@fabula/react-dev';

const ToastExample = props => {
    const { test } = props;
    const toastService = useContext(ToastService);

    useEffect(() => {
        // toastService.createStack({ name: 'testStack' });
        // ToastService.createPortal();
        // ToastService.createStack('testStack');
    }, []);

    const addToast = () => {
        toastService.showToast({
            color: 'primary',
            closeButton: {
                color: 'primary',
                invert: true,
                label: 'Go there'
            },
            hide: false,
            hideDelay: 4000,
            message: 'Here is an example of a toast component working...',
            stack: 'testStack'
        });
    }

    return (
        <>
            <Toast closeButton={{color: 'danger', label: 'Go there'}} message="Here is an example of a toast component working..." />
            <Button color="primary" mb={8} onClick={addToast}>Add Toast</Button>
        </>
    )
}

export default ToastExample;