import React, { useCallback, useContext, useEffect, useState } from 'react';
import { css } from 'emotion';

// Components
import Toast from '../Toast/Toast';

import ToastController from '../../controllers/ToastController';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ToastStackStyles from '@fabula/core/theme/styles/ToastStack';

const ToastStack = props => {
    const { name, placement } = props;
    const { utils } = useContext(FabulaProviderContext);
    const { stacks } = useContext(ToastController);
    const [toasts, setToasts] = useState(<></>);

    const toastsCallback = useCallback(() => {
        let toasts;

        if (stacks[name]?.elements) {
            toasts = stacks[name].elements.map((toast, i) => <Toast key={i} stacked={true} {...toast} />);

            setToasts(toasts);
        }
    }, [stacks, stacks[name]]);

    useEffect(() => {
        toastsCallback();
    }, [stacks, stacks[name]]);

    return (
        <div className={`fab-toast-stack ${css(ToastStackStyles({ framework: 'react', props, utils }))}`} data-placement-x={placement.x} data-placement-y={placement.y}>
            {toasts}
        </div>
    )
}

ToastStack.defaultProps = {
    placement: {
        x: 'left',
        y: 'bottom'
    }
};

export default ToastStack;