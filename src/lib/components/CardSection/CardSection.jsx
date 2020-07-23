import React from 'react';
import { css } from 'emotion';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

const CardSection = props => {
    const { className, children, layout } = props;
    const classes = ['fab-card-section-wrapper', css(CardSectionStyles({ framework: 'react', props })), className || ''];
    return (
        <div className={classes.join(' ')} data-fab-wrapper="cardSection" data-layout={layout}>
            <div className="fab-card-section" data-fab-component="cardSection">
                {children}
            </div>
        </div>

    )
}

export default CardSection;