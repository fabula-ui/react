import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import CloseButton from '../CloseButton/CloseButton';
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

const Alert = props => {
    const {
        children,
        closeButton,
        color,
        elRef,
        icon,
        onClose,
        text,
        visible,
        title,
        type,
        ...rest
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [typeIcon, setTypeIcon] = useState(null);
    const ref = useRef(null);

    // Callbacks
    const handleType = useCallback((type) => {
        let typeIcon;

        switch (type) {
            case 'danger':
                typeIcon = {
                    color: 'danger',
                    name: 'alert-triangle'
                };
                break;
            case 'success':
                typeIcon = {
                    color: 'success',
                    name: 'check'
                };
                break;
            case 'warning':
                typeIcon = {
                    color: 'warning',
                    name: 'alert-circle'
                };
                break;
            default:
                typeIcon = {
                    color: 'cold',
                    name: 'info'
                };
        }

        setTypeIcon(typeIcon);
    }, []);

    // Hooks
    useEffect(() => {
        if (type) { handleType(type); }
    }, [handleType, type]);

    useEffect(() => {
        if (visible != null) { setIsVisible(visible); }
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
            <Component
                elRef={elRef || ref}
                properties={props}
                rest={rest}
                styles={AlertStyles}
                wrapper="fab-alert">
                <div
                    className="fab-alert"
                    data-closing={isClosing}
                    data-title={!!title}
                    data-fab-component="alert"
                    ref={elRef || ref}>
                    {!!icon && !typeIcon && <Icon {...icon} />}
                    {!!typeIcon && <Icon {...typeIcon} />}
                    <div className="fab-alert__stage">
                        {!!title && <div className="fab-alert__title">{title}</div>}
                        {!!text && <div className="fab-alert__text">{text}</div>}
                        {children}
                    </div>
                    {!!closeButton && <CloseButton onClick={closeAlert} parentColor={color} size="sm" />}
                </div>
            </Component>
        )
    } else {
        return <></>
    }
}

Alert.defaultProps = {
    border: true,
    borderColor: '',
    clear: false,
    closeButton: false,
    color: '',
    faded: false,
    glow: false,
    hasProperty: {
        visible: true
    },
    icon: null,
    invert: false,
    marker: '',
    outline: false,
    text: '',
    textColor: '',
    title: '',
    titleColor: '',
    type: '',
    visible: true
}

Alert.propTypes = {
    border: PropTypes.bool,
    borderColor: PropTypes.string,
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
    type: PropTypes.string,
    visible: PropTypes.bool
}

export default Alert;