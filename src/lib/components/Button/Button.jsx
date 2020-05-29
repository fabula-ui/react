import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ButtonStyles from '@fabula/core/theme/styles/Button';

const Button = props => {
    const {
        border,
        children,
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
    const { utils } = useContext(FabulaProviderContext);

    return (
        <div className={`fab-button-wrapper ${css(ButtonStyles({ framework: 'react', props: buttonProps, utils }))}`} data-fab-wrapper="button">
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