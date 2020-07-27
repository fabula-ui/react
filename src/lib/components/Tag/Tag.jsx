import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

const Tag = props => {
    const { children, label, placement } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={TagStyles}
            wrapper="fab-tag-wrapper">
            <div data-placement-x={placement.x} data-placement-y={placement.y} ref={elRef}>
                <div className="fab-tag">
                    {label || children}
                </div>
            </div>
        </Component>
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