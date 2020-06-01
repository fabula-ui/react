import React from 'react';
import { css } from 'emotion';

// Components
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

// Styles
import AlertStyles from '@fabula/core/theme/styles/Alert';

const Alert = props => {
    const { children, className, icon, text, title } = props;

    return (
        <div className={`${className} fab-alert-wrapper ${css(AlertStyles({ framework: 'react', props }))}`}>
            <div className="fab-alert">
                {!!icon && typeof icon === 'object' && <Icon {...icon} />}
                {!!icon && typeof icon === 'string' && <Icon name={icon} />}
                <div className="fab-alert__stage">
                    {!!title && typeof title === 'object' && <Text {...title} />}
                    {!!title && typeof title === 'string' && <strong className="fab-alert__title">{title}</strong>}
                    {!!text && typeof text === 'object' && <Text {...text} />}
                    {!!text && typeof text === 'string' && <span className="fab-alert__text">{text}</span>}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Alert;