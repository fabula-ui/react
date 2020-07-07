import React, { useState } from 'react';
import { css } from 'emotion';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

const Input = props => {
    const { children, className, disabled, icon, iconEnd, iconStart, message, onBlur, onFocus, placeholder, passwordToggle, textarea, type, ...rest } = props;
    const [focus, setFocus] = useState(false);
    const [inputType, setInputType] = useState(type || 'text');
    const classes = ['fab-input-wrapper', className || '', css(InputStyles({ framework: 'react', props }))];

    // Dynamic requires
    // const Icon = icon || iconEnd || iconStart || passwordToggle ? require('../Icon/Icon').default : null;
    const Text = message ? require('../Text/Text').default : null;

    const handleBlur = () => {
        setFocus(false);

        if (onBlur) { onBlur(); }
    }

    const handleFocus = () => {
        setFocus(true);

        if (onFocus) { onFocus(); }
    }

    const toggleType = () => {
        const type = inputType === 'password' ? 'text' : 'password';

        setInputType(type);
    }

    return (
        <div className={classes.join(' ')} data-fab-wrapper="input">
            <div className="fab-input" data-disabled={disabled} data-focus={focus}>
                {(!!icon || !!iconStart) && <div className="fab-input__icon" data-placement="start" />}

                {!textarea &&
                    <input className="fab-input__field"
                        data-fab-component="input"
                        disabled={disabled}
                        placeholder={placeholder}
                        type={inputType}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        {...rest} />
                }

                {textarea &&
                    <textarea className="fab-input__field"
                        data-fab-component="input"
                        disabled={disabled}
                        placeholder={placeholder}
                        type={inputType}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        {...rest}></textarea>
                }

                {(!!iconEnd && !passwordToggle) && <div className="fab-input__icon" data-placement="end" />}

                {passwordToggle &&
                    <button className="fab-input__password-toggle" onClick={toggleType}>
                        {/* <Icon name={inputType === 'password' ? 'eye' : 'eye-off'} /> */}
                    </button>
                }
            </div>

            {!!message &&
                <div className="fab-input__message">
                    {typeof message === 'object' && <Text size="sm" {...message}>{message.text}</Text>}
                    {typeof message === 'string' && <Text size="sm">{message}</Text>}
                </div>

            }

            <div className="fab-input__elements">
                {children}
            </div>
        </div>

    )
}

export default Input;