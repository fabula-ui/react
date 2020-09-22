import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children, elRef } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
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
    glued: false,
    layout: 'horizontal',
    spacing: null
}

ButtonGroup.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    dividerColor: PropTypes.string,
    glued: PropTypes.bool,
    layout: PropTypes.string,
    spacing: PropTypes.any
}

export default ButtonGroup;