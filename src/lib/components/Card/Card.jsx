import React from 'react';
import { css } from 'emotion';

// Styles
import CardStyles from '@fabula/core/theme/styles/Card';

const Card = props => {
    const { className, children, utils } = props;

    return (
        <div className={`${className} fab-card-wrapper ${css(CardStyles({ framework: 'react', props, utils }))}`}>
            <div className="fab-card">
                {children}
            </div>
        </div>
    )
}

export default Card;