import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ButtonGroupStyles}
            wrapper="fab-button-group">
            <div
                data-fab-component="buttonGroup"
                ref={elRef || ref}
                {...restProps}>
                {children}
            </div>
        </Component>
    )
}

ButtonGroup.defaultProps = {
    color: '',
    divider: true,
    dividerColor: '',
    layout: 'horizontal',
}

ButtonGroup.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    dividerColor: PropTypes.string,
    layout: PropTypes.string,
}

export default ButtonGroup;