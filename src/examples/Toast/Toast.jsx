import React, { useEffect } from 'react';
import {
    Button,
    ToastController,
    ButtonGroup
} from '../../lib';
import { useContext } from 'react';

export const ToastExamples = props => {
    const toastCtrl = useContext(ToastController);

    useEffect(() => {
        createStacks();
    }, []);

    const addToast = stack => {
        toastCtrl.showToast({
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

    const createStacks = () => {
        toastCtrl.createStacks([
            {
                name: 'bottomCenter',
                placement: {
                    x: 'center',
                    y: 'bottom'
                }
            },
            {
                name: 'bottomLeft',
                placement: {
                    x: 'left',
                    y: 'bottom'
                }
            },
            {
                name: 'bottomRight',
                placement: {
                    x: 'right',
                    y: 'bottom'
                }
            },
            {
                name: 'topCenter',
                placement: {
                    x: 'center',
                    y: 'top'
                }
            },
            {
                name: 'topLeft',
                placement: {
                    x: 'left',
                    y: 'top'
                }
            },
            {
                name: 'topRight',
                placement: {
                    x: 'right',
                    y: 'top'
                }
            }
        ]);
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