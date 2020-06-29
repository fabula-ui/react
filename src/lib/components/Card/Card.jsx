import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from 'emotion';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

const Card = props => {
    const { className, children, layout, utils } = props;

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { layout });
        } else {
            return child;
        }
    });

    return (
        <div className={`${className} fab-card-wrapper ${css(CardStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="card">
            <div className="fab-card" data-fab-component="card">
                {childrenWithProps}
            </div>
        </div>
    )
}

export default Card;