import React, { useCallback, useContext, useEffect } from 'react';
import {
    Button,
    ToastController,
    Wrapper
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
            icon: {
                name: 'compass'
            },
            hideDelay: 4000,
            message: 'Here is an example of a toast component working...',
            stack
        });
    }

    return (
        <Wrapper al="center" direction="column" flex={true}>
            <Wrapper mb={1}>
                <Button border={true} clear={true} color="primary" mr={1} onClick={() => addToast('topLeft')}>Top Left</Button>
                <Button border={true} clear={true} color="primary" mr={1} onClick={() => addToast('topCenter')}>Top Center</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topRight')}>Top Right</Button>
            </Wrapper>

            <Wrapper>
                <Button border={true} clear={true} color="primary" mr={1} onClick={() => addToast('bottomLeft')}>Bottom Left</Button>
                <Button border={true} clear={true} color="primary" mr={1} onClick={() => addToast('bottomCenter')}>Bottom Center</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomRight')}>Bottom Right</Button>
            </Wrapper>
        </Wrapper>
    )
}