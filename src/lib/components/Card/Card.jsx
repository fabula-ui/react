import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

const Card = props => {
    const { className, children, layout } = props;
    const classes = [className, 'fab-card-wrapper', css(CardStyles({ framework: 'react', props }))];

    // Children with props
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { layout });
        } else {
            return child;
        }
    });

    return (
        <div className={classes.join(' ')} data-fab-wrapper="card">
            <div className="fab-card" data-fab-component="card">
                {childrenWithProps}
            </div>
        </div>
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