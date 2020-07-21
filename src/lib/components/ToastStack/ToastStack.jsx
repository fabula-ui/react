import React, { useCallback, useContext, useEffect, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import Toast from '../Toast/Toast';

import ToastController from '../../controllers/ToastController';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ToastStackStyles from '@fabula/core/styles/components/toast-stack/toast-stack';

const ToastStack = props => {
    const { name, placement } = props;
    const { utils } = useContext(FabulaProviderContext);
    const { stacks } = useContext(ToastController);
    const [toasts, setToasts] = useState(<></>);

    // Callbacks
    const toastsCallback = useCallback(() => {
        let toasts;

        if (stacks[name]?.elements) {
            toasts = stacks[name].elements.map((toast, i) => <Toast key={i} stacked={true} {...toast} />);

            setToasts(toasts);
        }
    }, [stacks, stacks[name]]);

    // Hooks
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
    name: '',
    placement: {
        x: 'left',
        y: 'bottom'
    }
};

ToastStack.propTypes = {
    name: PropTypes.string,
    placement: {
        x: PropTypes.string,
        y: PropTypes.string
    }
}

export default ToastStack;