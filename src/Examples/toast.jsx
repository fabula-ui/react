import React, { useEffect, useContext } from 'react';

import { Button, ToastService } from '@fabula/react-dev';

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
        <>
            <Button color="primary" mb={8} onClick={addToast}>Add Toast</Button>
            <div>Teste...</div>
        </>
    )
}

export default ToastExample;