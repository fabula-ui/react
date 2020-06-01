import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// Styles
import ButtonStyles from '@fabula/core/theme/styles/Button';

const Button = props => {
    const {
        border,
        children,
        className,
        clear,
        color,
        compact,
        disabled,
        expand,
        faded,
        glow,
        gradient,
        invert,
        outline,
        rounded,
        size,
        smashed,
        wide,
        ...rest
    } = props;
    const buttonProps = {
        border,
        clear,
        color,
        compact,
        disabled,
        expand,
        faded,
        glow,
        gradient,
        invert,
        outline,
        rounded,
        size,
        smashed,
        wide
    };

    return (
        <div className={`${className} fab-button-wrapper ${css(ButtonStyles({ framework: 'react', props: buttonProps }))}`} data-fab-wrapper="button" data-border={border} data-outline={outline}>
            <button className="fab-button" data-fab-component="button" disabled={disabled} {...rest}>
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = {
    compact: false,
    expand: false,
    faded: false,
    glow: true,
    gradient: false,
    invert: false,
    outline: false,
    rounded: false,
    wide: false,
}

Button.propTypes = {
    rounded: PropTypes.bool,
    wide: PropTypes.bool
}

export default Button;