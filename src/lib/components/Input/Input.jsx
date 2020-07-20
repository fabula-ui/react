import React, { useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

const Input = props => {
    const {
        children,
        className,
        disabled,
        icon,
        iconEnd,
        iconStart,
        message,
        onBlur,
        onChange,
        onFocus,
        onKeyDown,
        onKeyUp,
        placeholder,
        passwordToggle,
        textarea,
        type
    } = props;
    const [focus, setFocus] = useState(false);
    const [inputType, setInputType] = useState(type || 'text');
    const classes = ['fab-input-wrapper', className || '', css(InputStyles({ framework: 'react', props }))];

    const handleBlur = () => {
        setFocus(false);

        if (onBlur) { onBlur(); }
    }

    const handleChange = () => {
        if (onChange) { onChange(); }
    }

    const handleFocus = () => {
        setFocus(true);

        if (onFocus) { onFocus(); }
    }

    const handleKeyDown = () => {
        if (onKeyDown) { onKeyDown(); }
    }

    const handleKeyUp = () => {
        if (onKeyUp) { onKeyUp(); }
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
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        placeholder={placeholder}
                        type={inputType} />
                }

                {textarea &&
                    <textarea className="fab-input__field"
                        data-fab-component="input"
                        disabled={disabled}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        placeholder={placeholder}
                        type={inputType} />
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

Input.defaultProps = {
    color: '',
    disabled: false,
    expand: false,
    glow: false,
    has: '',
    icon: null,
    iconEnd: null,
    iconStart: null,
    message: '',
    messageColor: '',
    passwordToggle: false,
    placeholder: '',
    rounded: false,
    size: 'md',
    status: '',
    textarea: false,
    type: 'text'
};

Input.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    expand: PropTypes.bool,
    glow: PropTypes.bool,
    has: PropTypes.string,
    icon: PropTypes.any,
    iconEnd: PropTypes.any,
    iconStart: PropTypes.any,
    message: PropTypes.string,
    messageColor: PropTypes.string,
    passwordToggle: PropTypes.bool,
    placeholder: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    status: PropTypes.string,
    textarea: PropTypes.bool,
    type: PropTypes.string
};

export default Input;