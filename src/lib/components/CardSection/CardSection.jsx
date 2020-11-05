import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

const CardSection = props => {
    const { children, elRef, layout } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={CardSectionStyles}
            wrapper="fab-card-section">
            <div
                className="fab-card-section"
                data-layout={layout}
                data-fab-component="cardSection"
                ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

export default CardSection;