import React, { useState } from 'react';
import { css } from 'emotion';

// Styles
import InputStyles from '@fabula/core/theme/styles/Input';

const Input = props => {
    const { className, disabled, icon, iconEnd, iconStart, message, placeholder, passwordToggle, type, ...rest } = props;
    const [focus, setFocus] = useState(false);
    const [inputType, setInputType] = useState(type || 'text');
    const classes = ['fab-input-wrapper', className || '', css(InputStyles({ framework: 'react', props }))];

    // Dynamic requires
    const Icon = icon || iconEnd || iconStart || passwordToggle ? require('../Icon/Icon').default : null;
    const Text = message ? require('../Text/Text').default : null;

    const toggleType = () => {
        const type = inputType === 'password' ? 'text' : 'password';

        setInputType(type);
    }

    return (
        <div className={classes.join(' ')} data-fab-wrapper="input">
            <div className="fab-input" data-disabled={disabled} data-focus={focus}>
                {!!icon && <Icon {...icon} data-placement="start" />}
                {!!iconStart && <Icon {...iconStart} data-placement="start" />}

                <input class="fab-input__field"
                    data-fab-component="input"
                    disabled={disabled}
                    placeholder={placeholder}
                    type={inputType}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                    {...rest} />

                {!!iconEnd && !passwordToggle && <Icon {...iconEnd} data-placement="end" />}

                {passwordToggle &&
                    <button className="fab-input__password-toggle" onClick={toggleType}>
                        <Icon name={inputType === 'password' ? 'eye' : 'eye-off'} />
                    </button>
                }
            </div>

            {!!message && typeof message === 'object' && <Text size="sm" {...message}>{message.text}</Text>}
            {!!message && typeof message === 'string' && <Text size="sm">{message}</Text>}
        </div>

    )
}

export default Input;