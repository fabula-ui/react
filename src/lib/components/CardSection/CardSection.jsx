import React from 'react';
import { css } from 'emotion';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

const CardSection = props => {
    const { className, children, layout, utils } = props;
    const classes = ['fab-card-section', css(CardSectionStyles({ framework: 'react', props })), className || ''];
    return (
        <div className={classes.join(' ')} data-fab-component="card-section" data-layout={layout}>
            {children}
        </div>
    )
}

export default CardSection;