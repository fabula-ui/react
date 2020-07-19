import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';

const Badge = props => {
    const {
        children,
        className,
        label,
        placement
    } = props;
    const classes = [className, 'fab-badge-wrapper', css(BadgeStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="badge">
            <div className="fab-badge" data-fab-component="badge" data-has-placement={!!placement}>
                {label}
                {children}
            </div>
        </div>
    )
}

Badge.defaultProps = {
    circle: false,
    clear: false,
    color: '',
    darken: false,
    faded: false,
    glow: false,
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