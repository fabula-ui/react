import React, { useRef } from 'react';

// Components
import { Component } from '../Component/Component';

// Styles
import { ButtonStyles } from '@fabula/core/styles/components/button/button';

export const Button = props => {
    const {
        border,
        children,
        circle,
        color,
        disabled,
        elRef,
        expand,
        href,
        label,
        onClick,
        outline,
        rel,
        rounded,
        target,
        ...rest
    } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ButtonStyles}
            wrapper="fab-button">
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
                        onClick={onClick}
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
