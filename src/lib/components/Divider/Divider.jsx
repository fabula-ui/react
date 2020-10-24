import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

const Divider = props => {
    const { elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={DividerStyles}
            wrapper="fab-divider">
            <div ref={elRef || ref} {...restProps} />
        </Component>
    )
}

Divider.defaultProps = {
    label: '',
    textColor: ''
}

Divider.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string
}

export default Divider;