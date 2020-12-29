import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import { Toast } from '../Toast/Toast';

import { ToastController } from '../../controllers/ToastController';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import { ToastStackStyles } from '@fabula/core/styles/components/toast-stack/toast-stack';

export const ToastStack = props => {
    const { name, placement } = props;
    const { utils } = useContext(FabulaProviderContext);
    const { stacks } = useContext(ToastController);
    const [toasts, setToasts] = useState(<></>);

    // Callbacks
    const handleToasts = useCallback(() => {
        let toasts;

        if (stacks && stacks[name]?.elements) {
            toasts = stacks[name].elements.map((toast, i) => <Toast key={i} stacked={true} {...toast} />);

            setToasts(toasts);
        }
    }, [name, stacks]);

    // Hooks
    useLayoutEffect(() => {
        handleToasts();
    }, [handleToasts, name, stacks]);

    return (
        <div className={`fab-toast-stack ${css(ToastStackStyles({ framework: 'react', props, utils }))}`} data-placement-x={placement.x} data-placement-y={placement.y}>
            {toasts}
        </div>
    )
}

ToastStack.defaultProps = {
    name: '',
    placement: {
        x: 'left',
        y: 'bottom'
    }
};

ToastStack.propTypes = {
    name: PropTypes.string,
    placement: PropTypes.any
}