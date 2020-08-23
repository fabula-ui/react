import React, { Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import NavbarStyles from '@fabula/core/styles/components/navbar/navbar';

const Navbar = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={NavbarStyles}
            wrapper="fab-navbar">
            <div ref={elRef}>{children}</div>
        </Component>
    );
}

Navbar.defaultProps = {
    color: '',
    height: null
}

Navbar.propTypes = {
    color: PropTypes.string,
    height: PropTypes.any
}

export default Navbar;