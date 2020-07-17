import React, { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';

// Components
import CloseButton from '../CloseButton/CloseButton';
import InnerIcon from '../InnerIcon/InnerIcon';
import Text from '../Text/Text';

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
            <div className={classes.join(' ')}>
                <div className="fab-alert" data-closing={isClosing} data-title={!!title} data-visible={isVisible} ref={ref}>
                    {!!icon && <InnerIcon icon={icon} parentProps={props} />}
                    <div className="fab-alert__stage">
                        {!!title &&
                            <div className="fab-alert__title">
                                {typeof title === 'object' && <Text color="inherit" {...title} />}
                                {typeof title === 'string' && <Text color="inherit">{title}</Text>}
                            </div>
                        }
                        {!!text &&
                            <div className="fab-alert__text">
                                {typeof text === 'object' && <Text color="inherit" {...text} />}
                                {typeof text === 'string' && <Text color="inherit">{text}</Text>}
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

export default Alert;