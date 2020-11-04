import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

const Button = props => {
    const {
        border,
        children,
        circle,
        className,
        clear,
        color,
        compact,
        darken,
        disabled,
        elRef,
        expand,
        faded,
        glow,
        gradient,
        href,
        invert,
        label,
        lighten,
        outline,
        rel,
        rounded,
        size,
        target,
        wide,
        ...rest
    } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component elRef={elRef || ref} properties={props} styles={ButtonStyles} wrapper="fab-button">
            {
                !href && (
                    <button className="fab-button"
                        data-border={border}
                        data-circle={!!circle}
                        data-color={color}
                        data-expand={expand}
                        data-outline={outline}
                        data-rounded={rounded}
                        data-fab-component="button"
                        disabled={disabled}
                        {...restProps}
                        ref={elRef || ref}>
                        {label || children}
                    </button>
                )
            }
            {
                !!href && (
                    <a className="fab-button"
                        data-border={border}
                        data-circle={!!circle}
                        data-color={color}
                        data-disabled={disabled}
                        data-expand={expand}
                        data-outline={outline}
                        data-rounded={rounded}
                        data-fab-component="button"
                        href={href}
                        rel={rel}
                        target={target}
                        {...restProps}
                        ref={elRef || ref}>
                        {label || children}
                    </a>
                )
            }
        </Component>
    );
};

Button.defaultProps = {
    align: 'center',
    color: null,
    compact: false,
    darken: false,
    expand: false,
    faded: false,
    glow: false,
    gradient: false,
    inline: true,
    invert: false,
    lighten: false,
    outline: false,
    rounded: false,
    size: 'md',
    wide: false
};

Button.propTypes = {
    align: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    compact: PropTypes.bool,
    darken: PropTypes.bool,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    gradient: PropTypes.bool,
    invert: PropTypes.bool,
    lighten: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    wide: PropTypes.bool
};

export default Button;
