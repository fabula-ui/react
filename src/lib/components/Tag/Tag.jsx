import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

const Tag = props => {
    const { children, className, label, placement } = props;
    const classes = ['fab-tag-wrapper', className || '', css(TagStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-placement-x={placement.x} data-placement-y={placement.y}>
            <div className="fab-tag">
                {label || children}
            </div>
        </div>
    )
}

Tag.defaultProps = {
    color: '',
    clear: false,
    faded: false,
    glow: false,
    invert: false,
    link: '',
    placement: {
        x: 'right',
        y: 'bottom'
    },
    rounded: false,
    size: 'md'
}

Tag.propTypes = {
    color: PropTypes.string,
    clear: PropTypes.bool,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    invert: PropTypes.bool,
    link: PropTypes.string,
    placement: {
        x: PropTypes.string,
        y: PropTypes.string
    },
    rounded: PropTypes.bool,
    size: PropTypes.string
}

export default Tag;