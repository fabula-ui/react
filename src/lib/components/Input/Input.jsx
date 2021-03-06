import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

const Input = props => {
    const {
        children,
        disabled,
        elRef,
        icon,
        iconEnd,
        iconStart,
        message,
        onBlur,
        onChange,
        onFocus,
        placeholder,
        passwordToggle,
        textarea,
        type,
        value,
        variant,
        ...rest
    } = props;
    const [focus, setFocus] = useState(false);
    const [inputType, setInputType] = useState(type || 'text');
    const ref = useRef(null);

    const handleChange = e => {
        if (onChange) { onChange(e) }
    }

    const handleFocus = focus => {
        setFocus(focus);

        if (focus && onFocus) {
            onFocus();
        } else if (!focus && onBlur) {
            onBlur();
        }
    }

    const toggleType = () => {
        const type = inputType === 'password' ? 'text' : 'password';

        setInputType(type);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={InputStyles}
            wrapper="fab-input-wrapper">
            <div data-focus={focus} data-fab-wrapper="input" ref={elRef || ref}>
                <div className="fab-input"
                    data-disabled={disabled}
                    data-focus={focus}
                    data-textarea={textarea}
                    data-variant={variant}
                    data-fab-component="input">
                    {(!!icon || !!iconStart) &&
                        <div className="fab-input__icon" data-placement="start">
                            {!!icon && <Icon {...icon} />}
                            {!!iconStart && <Icon {...iconStart} />}
                        </div>
                    }

                    {!textarea &&
                        <input
                            className="fab-input__field"
                            disabled={disabled}
                            onBlur={() => handleFocus(false)}
                            onChange={e => handleChange(e)}
                            onFocus={() => handleFocus(true)}
                            placeholder={placeholder}
                            ref={elRef}
                            type={inputType}
                            value={value} />
                    }

                    {textarea &&
                        <textarea
                            className="fab-input__field"
                            disabled={disabled}
                            onBlur={() => handleFocus(false)}
                            onChange={e => handleChange(e)}
                            onFocus={() => handleFocus(true)}
                            placeholder={placeholder}
                            ref={elRef}
                            type={inputType}
                            value={value} />
                    }

                    {(!!iconEnd && !passwordToggle) &&
                        <div className="fab-input__icon" data-placement="end">
                            <Icon {...iconEnd} />
                        </div>
                    }

                    {passwordToggle &&
                        <button className="fab-input__password-toggle" onClick={toggleType} data-toggled={inputType === 'text'}>
                            <Icon name={inputType === 'text' ? 'eye-off' : 'eye'} />
                        </button>
                    }

                    <div className="fab-input__elements">
                        {children}
                    </div>
                </div>

                {!!message?.text &&
                    <div className="fab-input__message">
                        <span>{message.text}</span>
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
    message: {
        color: '',
        text: ''
    },
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
    message: PropTypes.any,
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