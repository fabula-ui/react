import React, { useContext, useEffect } from 'react';

import { Avatar } from '@fabula/react-dev';
import { ToastService } from '@fabula/react-dev';

import Example from '../components/Example/Example';

const AvatarExample = () => {
    const toastService = useContext(ToastService);

    useEffect(() => {
        console.log('calling from avatar');
    }, [toastService]);

    const addToast = () => {
        toastService.showToast({
            message: 'Here is another example of a toast component working...',
            stack: 'testStack'
        });

        toastService.test = 'F**k';

        console.log(toastService.stacks);
    }

    return (
        <Example title="Avatar">
            <Avatar />
            <button onClick={addToast}>Add Toast</button>
        </Example>
    )
}

export default AvatarExample;