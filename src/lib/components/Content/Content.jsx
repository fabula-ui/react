import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

const Content = props => {
    const { active, children, contentClassName, elRef, name, scope, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            classes={[contentClassName]}
            elRef={elRef || ref}
            properties={props}
            styles={ContentStyles}
            wrapper="fab-content">
            <div
                data-active={!!active}
                data-name={name}
                data-scope={scope}
                ref={elRef || ref}
                {...restProps}>
                {children}
            </div>
        </Component>
    )
}

export default Content;