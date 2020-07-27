import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

const Divider = props => {
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DividerStyles}
            wrapper="fab-divider">
            <div ref={elRef} />
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