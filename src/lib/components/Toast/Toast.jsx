import React, { useEffect, useState, useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

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
    const classes = ['fab-toast-wrapper', css(ToastStyles({ framework: 'react', props: { ...props, height, stacked } })), className || ''];

    // Dynamic requires
    const Link = link ? require('../Link/Link').default : null;

    // Hooks
    useEffect(() => {
        if (stacked) { handleHide(); }
    }, []);

    useEffect(() => {
        if (toastRef.current) {
            setHeight(toastRef.current.offsetHeight);
        }
    }, [toastRef]);

    // Methods
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
    clear: false,
    closeButton: null,
    color: '',
    faded: false,
    glow: false,
    hideDelay: 2000,
    link: '',
    message: '',
    outline: false,
    stacked: false
}

Toast.propTypes = {
    clear: PropTypes.bool,
    closeButton: PropTypes.any,
    color: PropTypes.string,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    hideDelay: PropTypes.any,
    link: PropTypes.string,
    message: PropTypes.string,
    outline: PropTypes.bool,
    stacked: PropTypes.bool
}

export default Toast;