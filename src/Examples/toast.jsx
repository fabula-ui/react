import React, { useEffect, useContext } from 'react';

import { Button, ButtonGroup, Toast, ToastService } from '@fabula/react-dev';

const ToastExample = props => {
    const { test } = props;
    const toastService = useContext(ToastService);

    useEffect(() => {
        // toastService.createStack({ name: 'testStack' });
        // ToastService.createPortal();
        // ToastService.createStack('testStack');
    }, []);

    const addToast = stack => {
        toastService.showToast({
            color: 'primary',
            closeButton: {
                color: 'primary',
                invert: true,
                label: 'Go there'
            },
            hideDelay: 4000,
            message: 'Here is an example of a toast component working...',
            stack
        });
    }

    const handleStack = name => {
        const placements = {
            topCenter: {
                x: 'center',
                y: 'top'
            },
            topLeft: {
                x: 'left',
                y: 'top'
            },
            topRight: {
                x: 'right',
                y: 'top'
            },
        };

        console.log(placements[name]);

        toastService.createStack({
            name,
            placement: placements[name]
        });
    }

    return (
        <>
            <div>
                <h2>Toast placement</h2>
                <ButtonGroup>
                    <Button color="primary" onClick={() => handleStack('topCenter')}>Create Top-Center Stack</Button>
                    <Button border={true} clear={true} color="primary" onClick={() => addToast('topCenter')}>Add Toast</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="primary" onClick={() => handleStack('topLeft')}>Create Top-Left Stack</Button>
                    <Button border={true} clear={true} color="primary" onClick={() => addToast('topLeft')}>Add Toast</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="primary" onClick={() => handleStack('topRight')}>Create Top-Right Stack</Button>
                    <Button border={true} clear={true} color="primary" onClick={() => addToast('topRight')}>Add Toast</Button>
                </ButtonGroup>
            </div>
            <Toast closeButton={{ color: 'danger', label: 'Go there' }} hide={false} message="Here is an example of a toast component working..." />
            {/* <Button color="primary" mb={8} onClick={addToast}>Add Toast</Button> */}
        </>
    )
}

export default ToastExample;