import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

const Card = props => {
    const { children, layout } = props;
    const elRef = useRef(null);

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { layout });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={CardStyles}
            wrapper="fab-card-wrapper">
            <div data-fab-wrapper="card" ref={elRef}>
                <div className="fab-card" data-fab-component="card">
                    {childrenWithProps}
                </div>
            </div>
        </Component>
    )
}

Card.defaultProps = {
    color: '',
    glow: false,
    layout: 'v',
    padding: false
}

Card.propTypes = {
    color: PropTypes.string,
    glow: PropTypes.bool,
    layout: PropTypes.string,
    padding: PropTypes.bool
}

export default Card;