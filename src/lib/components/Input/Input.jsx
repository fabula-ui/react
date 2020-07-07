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
                {(!!icon || !!iconStart) && <span className="fab-input__icon" data-placement="start" />}

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

                {(!!iconEnd && !passwordToggle) && <span className="fab-input__icon" data-placement="end" />}

                {passwordToggle &&
                    <button className="fab-input__password-toggle" onClick={toggleType} data-toggled={inputType === 'text'}>
                        <span className="fab-input__icon" />
                    </button>
                }

                <div className="fab-input__elements">
                    {children}
                </div>
            </div>

            {!!message &&
                <div className="fab-input__message">
                    {typeof message === 'object' && <span>{message.text}</span>}
                    {typeof message === 'string' && <span>{message}</span>}
                </div>

            }
        </div>

    )
}

export default Input;