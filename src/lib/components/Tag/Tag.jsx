import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

const Tag = props => {
    const {
        button,
        children,
        elRef,
        href,
        label,
        link,
        placement,
        rel,
        target
    } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={TagStyles}
            wrapper="fab-tag-wrapper">
            <div data-placement-x={placement && placement.x} data-placement-y={placement && placement.y} ref={elRef || ref} data-fab-wrapper="tag">
                {!button && !href && !link &&
                    <div className="fab-tag" data-fab-component="component">
                        {label || children}
                    </div>
                }
                {!!button &&
                    <button className="fab-tag" data-fab-component="component">
                        {label || children}
                    </button>
                }
                {(!!href || !!link) &&
                    <a className="fab-tag" href={href} rel={rel} target={target} data-fab-component="component">
                        {label || children}
                    </a>
                }
            </div>
        </Component>
    )
}

Tag.defaultProps = {
    color: '',
    clear: false,
    faded: false,
    glow: false,
    href: '',
    inline: true,
    invert: false,
    link: '',
    placement: {
        x: 'right',
        y: 'bottom'
    },
    rel: '',
    rounded: false,
    size: 'md',
    target: '_blank'
}

Tag.propTypes = {
    color: PropTypes.string,
    clear: PropTypes.bool,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    invert: PropTypes.bool,
    href: PropTypes.string,
    link: PropTypes.string,
    placement: PropTypes.any,
    rel: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    target: PropTypes.string
}

export default Tag;