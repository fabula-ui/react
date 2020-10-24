import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';

const Badge = props => {
    const {
        children,
        elRef,
        label,
        placement,
        ...rest
    } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={ref || elRef}
            properties={props}
            styles={BadgeStyles}
            wrapper="fab-badge-wrapper">
            <div data-fab-wrapper="badge" ref={ref || elRef} {...restProps}>
                <div className="fab-badge" data-has-placement={!!placement} data-fab-component="badge">
                    {label}
                    {children}
                </div>
            </div>
        </Component>
    )
}

Badge.defaultProps = {
    circle: false,
    clear: false,
    color: '',
    darken: false,
    faded: false,
    glow: false,
    inline: true,
    invert: false,
    label: '',
    lighten: false,
    outline: false,
    placement: null,
    placementX: '',
    placementY: '',
    rounded: false,
    size: 'md'
}

Badge.propTypes = {
    circle: PropTypes.bool,
    clear: PropTypes.bool,
    color: PropTypes.string,
    darken: PropTypes.bool,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    invert: PropTypes.bool,
    label: PropTypes.string,
    lighten: PropTypes.bool,
    outline: PropTypes.bool,
    placement: PropTypes.any,
    placementX: PropTypes.string,
    placementY: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.string
}

export default Badge;