import React, { useRef } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ListHeaderStyles from '@fabula/core/styles/components/list-header/list-header';

const ListHeader = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ListHeaderStyles}
            wrapper="fab-list-header">
            <div data-fab-component="listHeader" ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )

}

export default ListHeader;