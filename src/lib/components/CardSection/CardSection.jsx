import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

const CardSection = props => {
    const { children, layout } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={CardSectionStyles}
            wrapper="fab-card-section-wrapper">
            <div data-fab-wrapper="cardSection" data-layout={layout} ref={elRef}>
                <div className="fab-card-section" data-fab-component="cardSection">
                    {children}
                </div>
            </div>
        </Component>
    )
}

export default CardSection;