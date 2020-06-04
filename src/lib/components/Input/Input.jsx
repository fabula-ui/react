import React, { useState } from 'react';
import { css } from 'emotion';

// Styles
import InputStyles from '@fabula/core/theme/styles/Input';

const Input = props => {
    const { className, disabled, icon, iconEnd, iconStart, message, placeholder, type } = props;
    const [focus, setFocus] = useState(false);
    const classes = ['fab-input-wrapper', className || '', css(InputStyles({ framework: 'react', props }))];

    // Dynamic requires
    const Icon = icon || iconEnd || iconStart ? require('../Icon/Icon').default : null;

    return (
        <div className={classes.join(' ')} data-fab-wrapper="input">
            <div className="fab-input" data-disabled={disabled} data-focus={focus}>
                {!!icon && <Icon {...icon} data-placement="start" />}
                {!!iconStart && <Icon {...iconStart} data-placement="start" />}

                <input class="fab-input__field"
                    data-fab-component="input"
                    disabled={disabled}
                    placeholder={placeholder}
                    type={type || 'text'}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)} />

                {!!iconEnd && <Icon {...iconEnd} data-placement="end" />}
            </div>

            {!!message && <span class="fab-input__message">{message}</span>}
        </div>

    )
}

export default Input;