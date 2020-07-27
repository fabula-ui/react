import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

const Content = props => {
    const { active, children, contentClassName, name, scope } = props;
    const elRef = useRef(null)

    return (
        <Component
            classes={[contentClassName]}
            elRef={elRef}
            properties={props}
            styles={ContentStyles}
            wrapper="fab-content">
            <div data-active={!!active} data-name={name} data-scope={scope} ref={elRef}>
                {children}
            </div>
        </Component>
    )
}

export default Content;