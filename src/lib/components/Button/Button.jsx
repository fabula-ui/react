import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// Styles
import ButtonStyles from '@fabula/core/theme/styles/Button';

const Button = props => {
    const {
        align,
        border,
        children,
        circle,
        className,
        clear,
        color,
        compact,
        disabled,
        expand,
        faded,
        glow,
        gradient,
        icon,
        invert,
        outline,
        rounded,
        size,
        smashed,
        wide,
        ...rest
    } = props;
    const buttonProps = {
        align,
        border,
        circle,
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
    const classes = ['fab-button-wrapper', className || '', css(ButtonStyles({ framework: 'react', props }))];
    // Dynamic requires
    const Icon = icon ? require('../Icon/Icon').default : null;

    return (
        <div
            className={classes.join(' ')}
            data-fab-wrapper="button"
            data-border={border}
            data-circle={circle}
            data-color={color}
            data-outline={outline}
            data-rounded={rounded}>
            <button className="fab-button" data-fab-component="button" disabled={disabled} {...rest}>
                {!!Icon && <Icon {...icon} />}
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = {
    align: 'center',
    color: null,
    compact: false,
    expand: false,
    faded: false,
    glow: false,
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