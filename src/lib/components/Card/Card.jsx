import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { CardStyles } from '@fabula/core/styles/components/card/card';

export const Card = props => {
    const { children, elRef, layout, ...rest } = props;
    const ref = useRef(null);

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child) && !child.props.layout) {
            return cloneElement(child, { layout });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={CardStyles}
            wrapper="fab-card">
            <div
                className="fab-card"
                data-fab-component="card"
                ref={elRef || ref}>
                {childrenWithProps}
            </div>
        </Component>
    )
}

Card.defaultProps = {
    border: true,
    color: '',
    glow: false,
    layout: 'v',
    padding: false
}

Card.propTypes = {
    border: PropTypes.bool,
    color: PropTypes.string,
    glow: PropTypes.bool,
    layout: PropTypes.string,
    padding: PropTypes.any
}