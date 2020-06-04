import React from 'react';
import { css } from 'emotion';

// Styles
import CardStyles from '@fabula/core/theme/styles/Card';

const Card = props => {
    const { className, children, utils } = props;

    return (
        <div className={`${className} fab-card-wrapper ${css(CardStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="card">
            <div className="fab-card" data-fab-component="card">
                {children}
            </div>
        </div>
    )
}

export default Card;