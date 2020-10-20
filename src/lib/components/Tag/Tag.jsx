import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

const Tag = props => {
    const { children, elRef, label, placement, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={TagStyles}
            wrapper="fab-tag-wrapper">
            <div data-placement-x={placement && placement.x} data-placement-y={placement && placement.y} ref={elRef || ref} {...restProps}>
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
    placement: PropTypes.any,
    rounded: PropTypes.bool,
    size: PropTypes.string
}

export default Tag;