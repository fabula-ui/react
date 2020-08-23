import React, { Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

const NavbarTabs = props => {
    const { children, color } = props;
    const elRef = useRef(null);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { color }));

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={NavbarTabsStyles}
            wrapper="fab-navbar-tabs">
            <div ref={elRef}>{childrenWithProps}</div>
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