import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

const NavbarSection = props => {
    const { children, elRef, mobile, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={NavbarSectionStyles}
            wrapper="fab-navbar-section">
            <div ref={elRef || ref} data-mobile={mobile} data-fab-component="navbarSection" {...restProps}>{children}</div>
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