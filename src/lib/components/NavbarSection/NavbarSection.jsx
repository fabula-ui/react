import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

const NavbarSection = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={NavbarSectionStyles}
            wrapper="fab-navbar-section">
            <div ref={elRef}>{children}</div>
        </Component>
    )
}

NavbarSection.defaultProps = {
    alignment: '',
    expand: false
}

NavbarSection.propTypes = {
    alignment: PropTypes.string,
    expand: PropTypes.bool
}

export default NavbarSection;