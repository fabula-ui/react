import React from 'react';
import {
    Button,
    ToastController
} from '../../lib';
import { useContext } from 'react';

export const ToastExamples = props => {
    const toastCtrl = useContext(ToastController)
    // const toastService = useContext(ToastService);

    const handleToast = () => {
        toastCtrl.showToast({
            message: 'Testing!'
        });
    }

    return <Button color="primary" onClick={handleToast}>Open Toast</Button>
}