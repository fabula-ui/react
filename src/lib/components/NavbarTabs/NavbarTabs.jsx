import React, { Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

const NavbarTabs = props => {
    const { children, color, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { color }));

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={NavbarTabsStyles}
            wrapper="fab-navbar-tabs">
            <div ref={elRef || ref} {...restProps}>{childrenWithProps}</div>
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