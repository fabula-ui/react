import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

const Button = (props) => {
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
        expand,
        faded,
        glow,
        gradient,
        href,
        invert,
        label,
        lighten,
        outline,
        rounded,
        size,
        wide,
        ...rest
    } = props;
    const elRef = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component elRef={elRef} properties={props} styles={ButtonStyles} wrapper="fab-button-wrapper">
            <div
                data-fab-wrapper="button"
                data-border={border}
                data-circle={!!circle}
                data-color={color}
                data-expand={expand}
                data-outline={outline}
                data-rounded={rounded}
                ref={elRef}
            >
                {
                    !href && (
                        <button className="fab-button" data-fab-component="button" disabled={disabled} {...restProps}>
                            {!!label && <span>{label}</span>}
                            {children}
                        </button>
                    )
                }
                {
                    !!href && (
                        <a className="fab-button" data-fab-component="button" disabled={disabled} href={href} {...restProps}>
                            {!!label && <span>{label}</span>}
                            {children}
                        </a>
                    )
                }
            </div>
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
