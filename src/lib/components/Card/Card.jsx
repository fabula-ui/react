import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

const Card = props => {
    const { children, elRef, layout, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

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
            styles={CardStyles}
            wrapper="fab-card">
            <div
                className="fab-card"
                data-fab-component="card"
                ref={elRef || ref}
                {...restProps}>
                {childrenWithProps}
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
    padding: PropTypes.any
}

export default Card;