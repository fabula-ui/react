import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ButtonGroupStyles}
            wrapper="fab-button-group-wrapper">
            <div data-fab-wrapper="buttonGroup" ref={elRef}>
                <div className="fab-button-group" data-fab-component="buttonGroup">
                    {children}
                </div>
            </div>
        </Component>
    )
}

ButtonGroup.defaultProps = {
    color: '',
    divider: true,
    dividerColor: '',
    flow: 'horizontal',
    glued: false,
    spacing: null,
    wrap: true
}

ButtonGroup.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    dividerColor: PropTypes.string,
    flow: PropTypes.string,
    glued: PropTypes.bool,
    spacing: PropTypes.any,
    wrap: PropTypes.bool
}

export default ButtonGroup;