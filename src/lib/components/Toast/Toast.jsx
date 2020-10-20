import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';

const Toast = props => {
    const {
        button,
        children,
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
    const ref = useRef(null);

    // Dynamic requires
    const Link = link ? require('../Link/Link').default : null;

    // Callbacks
    const handleHide = useCallback(() => {
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
    }, [hideDelay, onHide]);

    const handleShow = useCallback(() => {
        if (onShow) { onShow(); }
    }, [onShow]);

    // Hooks
    useEffect(() => {
        if (stacked && !inline) { handleHide(); }
        handleShow();
    }, [handleHide, handleShow, inline, stacked]);

    useEffect(() => {
        if (ref.current && !inline) {
            setHeight(ref.current.offsetHeight);
        }
    }, [inline, ref]);

    // Methods
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
                elRef={ref}
                properties={{ ...props, height, stacked }}
                styles={ToastStyles}
                wrapper="fab-toast-wrapper">
                <div data-fab-wrapper="toast" data-hiding={hiding} data-stacked={stacked} ref={ref} style={{ height }}>
                    <div className="fab-toast" data-fab-component="toast">
                        {!!icon && <Icon {...icon} />}
                        {!!message && <span className="fab-toast__message">{message}</span>}
                        {children}
                        {(!!button || !!hideButton || !!link) &&
                            <div className="fab-toast__close-button">
                                {!!hideButton && !link && !button && <Button size="sm" {...hideButton} data-close-button onClick={hideToast} />}
                                {!!button && <Button size="sm" {...button} />}
                                {!!link && !button && !link.button && <Link {...link} />}
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
    link: {},
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
    link: PropTypes.any,
    message: PropTypes.string,
    outline: PropTypes.bool,
    stacked: PropTypes.bool
}

export default Toast;