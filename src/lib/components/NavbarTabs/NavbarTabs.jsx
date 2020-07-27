import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

const NavbarTabs = props => {
    const { children } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={NavbarTabsStyles}
            wrapper="fab-navbar-tabs">
            <div ref={elRef}>{children}</div>
        </Component>
    )
}

NavbarTabs.defaultProps = {
    alignment: '',
    expand: false
}

NavbarTabs.propTypes = {
    alignment: PropTypes.string,
    expand: PropTypes.bool
}

export default NavbarTabs;