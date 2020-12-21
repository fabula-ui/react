import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import NavbarStyles from '@fabula/core/styles/components/navbar/navbar';

const Navbar = props => {
    const { children, elRef, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={NavbarStyles}
            wrapper="fab-navbar">
            <div data-fab-component="navbar" ref={elRef || ref}>{children}</div>
        </Component>
    );
}

Navbar.defaultProps = {
    color: '',
    hasProperty: {
        expand: true
    },
    height: null
}

Navbar.propTypes = {
    color: PropTypes.string,
    height: PropTypes.any
}

export default Navbar;