import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ButtonStyles from '@fabula/core/theme/styles/Button';

const Button = props => {
    const {
        children,
        disabled,
        ...rest
    } = props;
    const { utils } = useContext(FabulaProviderContext);

    return (
        <div className={`fab-button-wrapper ${css(ButtonStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="button">
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