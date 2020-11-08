import React, { createElement, useRef } from 'react';
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
        onClick,
        placement,
        rel,
        target
    } = props;
    const ref = useRef(null);
    let Element;
    let tag;

    if (href || link) {
        tag = 'a';
    } else if (!!button || onClick) {
        tag = 'button';
    } else {
        tag = 'div';
    }

    Element = () => createElement(
        tag,
        {
            'data-fab-component': 'tag',
            'data-placement-x': placement && placement.x,
            'data-placement-y': placement && placement.y,
            onClick,
            ref: elRef || ref,
            rel,
            target
        },
        label || children
    );

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={TagStyles}
            wrapper="fab-tag">
            <Element />
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