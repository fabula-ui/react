import React, { Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';

const InputGroup = props => {
    const { children, elRef, size, ...rest } = props;
    const ref = useRef(null);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { size }));

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={InputGroupStyles}
            wrapper="fab-input-group-wrapper">
            <div data-fab-wrapper="inputGroup" ref={elRef || ref}>
                <div className="fab-input-group" data-fab-component="inputGroup">
                    {childrenWithProps}
                </div>
            </div>
        </Component>
    )
}

InputGroup.defaultProps = {
    layout: 'horizontal'
}

InputGroup.propTypes = {
    layout: PropTypes.string
}

export default InputGroup;