import React, { useCallback, useContext, useEffect } from 'react';
import {
    Button,
    ToastController,
    ButtonGroup
} from '../../lib';

export const ToastExamples = props => {
    const { createStack, showToast } = useContext(ToastController);

    const handleStacks = useCallback(() => {
        createStack({
            name: 'bottomCenter',
            placement: {
                x: 'center',
                y: 'bottom'
            }
        });
        createStack({
            name: 'bottomLeft',
            placement: {
                x: 'left',
                y: 'bottom'
            }
        });
        createStack({
            name: 'bottomRight',
            placement: {
                x: 'right',
                y: 'bottom'
            }
        });
        createStack({
            name: 'topCenter',
            placement: {
                x: 'center',
                y: 'top'
            }
        });
        createStack({
            name: 'topLeft',
            placement: {
                x: 'left',
                y: 'top'
            }
        });
        createStack({
            name: 'topRight',
            placement: {
                x: 'right',
                y: 'top'
            }
        });
    }, [createStack]);

    // Hooks
    useEffect(() => {
        handleStacks();
    }, [handleStacks]);

    const addToast = stack => {
        showToast({
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

    return (
        <>
            <ButtonGroup>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topLeft')}>Top Left</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topCenter')}>Top Center</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topRight')}>Top Right</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomLeft')}>Bottom Left</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomCenter')}>Bottom Center</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomRight')}>Bottom Right</Button>
            </ButtonGroup>
        </>
    )
}