import React, { useContext, useEffect, useState, useRef } from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ToastStyles from '@fabula/core/theme/styles/Toast';

const Toast = props => {
    const { closeButton, hide, hideDelay, message, stacked } = props;
    const { utils } = useContext(FabulaProviderContext);
    const [height, setHeight] = useState();
    const [hidden, setHidden] = useState(false);
    const [hiding, setHiding] = useState(false);
    const toastRef = useRef(null);

    useEffect(() => {
        if (hide) { handleHide(); }
    }, []);

    useEffect(() => {
        if (toastRef.current) {
            setHeight(toastRef.current.offsetHeight);
        }
    }, [toastRef]);

    const handleHide = () => {
        setTimeout(() => {
            setHiding(true);
        }, hideDelay);

        setTimeout(() => {
            setHidden(true);
        }, hideDelay + 400);
    }
    
    const hideToast = () => {
        setHiding(true);

        setTimeout(() => {
            setHidden(true);
        }, hideDelay + 400);
    }

    if (!hidden) {
        return (
            <div className={`fab-toast-wrapper ${css(ToastStyles({ framework: 'react', props: { ...props, height, stacked }, utils }))}`} data-fab-wrapper="toast" data-hiding={hiding} ref={toastRef} style={{ height }}>
                <div className="fab-toast">
                    <span className="fab-toast__message">
                        {message}
                    </span>
                    {!!closeButton && <Button size="sm" {...closeButton} data-close-button onClick={hideToast}>{closeButton.label}</Button>}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

Toast.defaultProps = {
    glow: true,
    hide: true,
    hideDelay: 2000,
    stacked: false
}

export default Toast;