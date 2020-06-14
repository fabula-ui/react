import React from 'react';
import { css } from 'emotion';

// Styles
import CardSectionStyles from '@fabula/core/theme/styles/CardSection';

const CardSection = props => {
    const { className, children, utils } = props;
    
    return (
        <div className={`${className} fab-card-section ${css(CardSectionStyles({ framework: 'react', props, utils }))}`} data-fab-component="card-section">
            {children}
        </div>
    )
}

export default CardSection;