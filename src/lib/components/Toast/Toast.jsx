import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';

const Toast = props => {
    const {
        button,
        children,
        color,
        hideButton,
        hideDelay,
        icon,
        inline,
        link,
        onHide,
        onShow,
        message,
        stacked
    } = props;
    const [height, setHeight] = useState();
    const [hidden, setHidden] = useState(false);
    const [hiding, setHiding] = useState(false);
    const toastRef = useRef(null);

    // Dynamic requires
    const Link = link ? require('../Link/Link').default : null;

    // Hooks
    useEffect(() => {
        if (onShow) { onShow(); }
        if (stacked && !inline) { handleHide(); }
    }, []);

    useEffect(() => {
        if (toastRef.current && !inline) {
            setHeight(toastRef.current.offsetHeight);
        }
    }, [toastRef]);

    // Methods
    const handleHide = () => {
        const toastEl = document.querySelector('.fab-toast-stack .fab-toast-wrapper');
        const duration = window.getComputedStyle(toastEl).transitionDuration;
        const transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

        setTimeout(() => {
            setHiding(true);
        }, hideDelay);

        setTimeout(() => {
            if (onHide) { onHide(); }
            setHidden(true);
        }, hideDelay + transitionDuration + 1);
    }

    const hideToast = () => {
        if (!stacked) {
            if (onHide) { onHide(); }
            setHidden(true);
        } else {
            setHiding(true);

            setTimeout(() => {
                if (onHide) { onHide(); }
                setHidden(true);
            }, hideDelay + 400);
        }
    }

    if (!hidden) {
        return (
            <Component
                elRef={toastRef}
                properties={{ ...props, height, stacked }}
                styles={ToastStyles}
                wrapper="fab-toast-wrapper">
                <div data-fab-wrapper="toast" data-hiding={hiding} data-stacked={stacked} ref={toastRef} style={{ height }}>
                    <div className="fab-toast">
                        {!!icon && <InnerIcon color={color} icon={icon} parentProps={props} />}
                        {!!message && <span className="fab-toast__message">{message}</span>}
                        {children}
                        {(!!button || !!hideButton || !!link) &&
                            <div className="fab-toast__close-button">
                                {!!hideButton && <Button size="sm" {...hideButton} data-close-button onClick={hideToast} />}
                                {!!button && <Button size="sm" {...button} />}
                                {!!link && !link.button && <Link {...link} />}
                            </div>
                        }
                    </div>
                </div>
            </Component>
        )
    } else {
        return <></>
    }
}

Toast.defaultProps = {
    clear: false,
    color: '',
    faded: false,
    glow: false,
    hideButton: null,
    hideDelay: 2000,
    link: '',
    message: '',
    outline: false,
    stacked: false
}

Toast.propTypes = {
    clear: PropTypes.bool,
    color: PropTypes.string,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    hideButton: PropTypes.any,
    hideDelay: PropTypes.any,
    link: PropTypes.string,
    message: PropTypes.string,
    outline: PropTypes.bool,
    stacked: PropTypes.bool
}

export default Toast;