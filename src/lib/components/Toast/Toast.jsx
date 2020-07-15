import React, { useContext, useEffect, useState, useRef } from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';
import InnerIcon from '../InnerIcon/InnerIcon';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';

const Toast = props => {
    const { children, className, closeButton, color, hideDelay, icon, link, message, stacked, ...rest } = props;
    const [height, setHeight] = useState();
    const [hidden, setHidden] = useState(false);
    const [hiding, setHiding] = useState(false);
    const toastRef = useRef(null);

    // Classes
    const classes = ['fab-toast-wrapper', className || '', css(ToastStyles({ framework: 'react', props: { ...props, height, stacked } }))];


    // Dynamic requires
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
        const toastEl = document.querySelector('.fab-toast-wrapper');
        const duration = window.getComputedStyle(toastEl).transitionDuration;
        const transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

        setTimeout(() => {
            setHiding(true);
        }, hideDelay);

        setTimeout(() => {
            setHidden(true);
        }, hideDelay + transitionDuration + 1);
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
            <div className={classes.join(' ')} data-fab-wrapper="toast" data-hiding={hiding} data-stacked={stacked} ref={toastRef} style={{ height }}>
                <div className="fab-toast">
                    {!!icon && <InnerIcon color={color} icon={icon} parentProps={props} />}
                    {!!message && <span className="fab-toast__message">{message}</span>}
                    {children}
                    {!!closeButton &&
                        <div className="fab-toast__close-button">
                            <Button size="sm" {...closeButton} data-close-button onClick={hideToast} />
                        </div>
                    }
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