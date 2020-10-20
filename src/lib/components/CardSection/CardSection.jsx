import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

const CardSection = props => {
    const { children, elRef, layout, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

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
                ref={elRef || ref}
                {...restProps}>
                {children}
            </div>
        </Component>
    )
}

export default CardSection;