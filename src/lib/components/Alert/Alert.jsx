import React, { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import CloseButton from '../CloseButton/CloseButton';
import InnerIcon from '../InnerIcon/InnerIcon';

// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

const Alert = props => {
    const { children, className, closeButton, color, icon, onClose, text, visible, title } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const classes = ['fab-alert-wrapper', className, css(AlertStyles({ framework: 'react', props }))];
    const ref = useRef(null);

    // Hooks
    useEffect(() => {
        if (typeof visible !== 'null' && typeof visible !== 'undefined') { setIsVisible(visible); }
    }, [visible]);

    const closeAlert = () => {
        const transitionDuration = getTransitionDuration(ref.current);

        setIsClosing(true);
        setTimeout(() => {
            if (onClose) { onClose() }

            setIsClosing(false);
            setIsVisible(false);
        }, transitionDuration + 1);
    }

    if (isVisible) {
        return (
            <div className={classes.join(' ')} data-fab-wrapper="alert">
                <div className="fab-alert" data-closing={isClosing} data-fab-component="alert" data-title={!!title} data-visible={isVisible} ref={ref}>
                    {!!icon && <InnerIcon icon={icon} parentProps={props} />}
                    <div className="fab-alert__stage">
                        {!!title &&
                            <div className="fab-alert__title">
                                {title}
                            </div>
                        }
                        {!!text &&
                            <div className="fab-alert__text">
                                {text}
                            </div>
                        }
                        {children}
                    </div>
    
                    {!!closeButton && <CloseButton circle={true} onClick={closeAlert} parentColor={color} size="sm" />}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

Alert.defaultProps = {
    border: '',
    clear: false,
    closeButton: false,
    color: '',
    faded: false,
    glow: false,
    icon: null,
    invert: false,
    marker: '',
    outline: false,
    text: '',
    textColor: '',
    title: '',
    titleColor: '',
    visible: true
}

Alert.propTypes = {
    border: PropTypes.string,
    clear: PropTypes.bool,
    closeButton: PropTypes.bool,
    color: PropTypes.string,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    icon: PropTypes.any,
    invert: PropTypes.bool,
    marker: PropTypes.string,
    outline: PropTypes.bool,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    visible: PropTypes.bool
}

export default Alert;