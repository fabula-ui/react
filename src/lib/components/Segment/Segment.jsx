import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { SegmentStyles } from '@fabula/core/styles/components/segment/segment';

export const Segment = props => {
    const {
        activeSegment,
        children,
        elRef,
        handleActive,
        href,
        name,
        onChange,
        onClick,
        rel,
        scope,
        target,
        ...rest
    } = props;
    const [active, setActive] = useState(props.active);
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (activeSegment) { setActive(activeSegment === name); }
    }, [activeSegment, name]);

    const handleClick = () => {
        if (handleActive) { handleActive(name); }
        if (onChange) {
            onChange({
                scope,
                segment: name
            });
        }
        if (onClick) { onClick(); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={SegmentStyles}
            wrapper="fab-segment">
            {!href && <button onClick={handleClick} data-active={!!active} data-name={name} data-fab-component="segment" ref={elRef || ref}>{children}</button>}
            {!!href && <a href={href} rel={rel} target={target} data-active={!!active} data-name={name} data-fab-component="segment" ref={elRef || ref}>{children}</a>}
        </Component>
    )
}

Segment.defaultProps = {
    active: false,
    activeColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    href: '',
    inactiveTextColor: '',
    invert: false,
    layout: '',
    name: '',
    outline: false,
    rel: '',
    rounded: false,
    scope: '',
    stacked: false,
    target: '',
    type: '',
}

Segment.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    activeFillColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    href: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    invert: PropTypes.bool,
    layout: PropTypes.string,
    name: PropTypes.string,
    outline: PropTypes.bool,
    rel: PropTypes.string,
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
}