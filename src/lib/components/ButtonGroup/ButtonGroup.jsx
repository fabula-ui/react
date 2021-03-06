import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ButtonGroupStyles}
            wrapper="fab-button-group">
            <div className="fab-button-group" data-fab-component="buttonGroup" ref={elRef || ref}>
                {children}
            </div>
        </Component>
    )
}

ButtonGroup.defaultProps = {
    color: '',
    divider: true,
    dividerColor: '',
    inline: true,
    layout: 'horizontal',
}

ButtonGroup.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    dividerColor: PropTypes.string,
    layout: PropTypes.string,
}

export default ButtonGroup;