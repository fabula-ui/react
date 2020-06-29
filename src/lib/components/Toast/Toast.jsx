import React, { useContext, useEffect, useState, useRef } from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';

// Styles
import ToastStyles from '@fabula/core/theme/styles/Toast';

const Toast = props => {
    const { children, className, closeButton, hide, hideDelay, icon, link, message, stacked } = props;
    const [height, setHeight] = useState();
    const [hidden, setHidden] = useState(false);
    const [hiding, setHiding] = useState(false);
    const toastRef = useRef(null);

    // Dynamic requires
    const Icon = icon ? require('../Icon/Icon').default : null;
    const Link = link ? require('../Link/Link').default : null;

    useEffect(() => {
        if (stacked) { handleHide(); }
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
        if (!stacked) {
            setHidden(true);
        } else {
            setHiding(true);

            setTimeout(() => {
                setHidden(true);
            }, hideDelay + 400);
        }
    }

    if (!hidden) {
        return (
            <div className={`fab-toast-wrapper ${css(ToastStyles({ framework: 'react', props: { ...props, height, stacked } }))} ${className || ''}`} data-fab-wrapper="toast" data-hiding={hiding} ref={toastRef} style={{ height }}>
                <div className="fab-toast">
                    {!!Icon && <Icon {...icon} />}
                    {!!message && <span className="fab-toast__message">{message}</span>}
                    {children}
                    {!!closeButton && <Button size="sm" {...closeButton} data-close-button onClick={hideToast} />}
                    {!!link && <Link {...link} />}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

Toast.defaultProps = {
    glow: false,
    hide: true,
    hideDelay: 2000,
    stacked: false
}

export default Toast;