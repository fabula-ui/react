import React, { useState } from 'react';
import { css } from 'emotion';

// Components
import CloseButton from '../CloseButton/CloseButton';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

const Alert = props => {
    const { children, className, closeButton, color, icon, onClose, text, title } = props;
    const [test, setTest] = useState(2);
    const handleClose = () => {
        console.log('Handle Close');
        if (onClose) { onClose() }
    }

    return (
        <div className={`${className} fab-alert-wrapper ${css(AlertStyles({ framework: 'react', props }))}`}>
            <div className="fab-alert">
                {!!icon && typeof icon === 'object' && <Icon {...icon} />}
                {!!icon && typeof icon === 'string' && <Icon name={icon} />}
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

                {!!closeButton && typeof closeButton === 'object' && <CloseButton circle={true} onClick={handleClose} parentColor={color} size="sm" {...closeButton} />}
                {!!closeButton && typeof closeButton === 'string' && <CloseButton circle={true} onClick={handleClose} parentColor={color} size="sm">{closeButton}</CloseButton>}
            </div>
        </div>
    )
}

export default Alert;