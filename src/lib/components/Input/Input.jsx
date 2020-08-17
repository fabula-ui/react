import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

const Input = props => {
    const {
        children,
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
    const elRef = useRef(null);

    const handleBlur = (e) => {
        setFocus(false);

        if (onBlur) { onBlur(e); }
    }

    const handleChange = e => {
        if (onChange) { onChange(e); }
    }

    const handleFocus = e => {
        setFocus(true);

        if (onFocus) { onFocus(e); }
    }

    const handleKeyDown = e => {
        if (onKeyDown) { onKeyDown(e); }
    }

    const handleKeyUp = e => {
        if (onKeyUp) { onKeyUp(e); }
    }

    const toggleType = () => {
        const type = inputType === 'password' ? 'text' : 'password';

        setInputType(type);
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={InputStyles}
            wrapper="fab-input-wrapper">
            <div data-fab-wrapper="input" ref={elRef}>
                <div className="fab-input" data-disabled={disabled} data-focus={focus} data-textarea={textarea}>
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
        </Component>
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