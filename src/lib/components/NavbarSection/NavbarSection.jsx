import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

const NavbarSection = props => {
    const { children, elRef, mobile, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={NavbarSectionStyles}
            wrapper="fab-navbar-section">
            <div data-mobile={mobile} data-fab-component="navbarSection" ref={elRef || ref}>{children}</div>
        </Component>
    )
}

NavbarSection.defaultProps = {
    alignment: '',
    expand: false,
}

NavbarSection.propTypes = {
    alignment: PropTypes.string,
    expand: PropTypes.bool
}

export default NavbarSection;