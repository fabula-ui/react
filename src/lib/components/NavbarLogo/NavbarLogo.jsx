import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import NavbarLogoStyles from '@fabula/core/styles/components/navbar-logo/navbar-logo';

const NavbarLogo = props => {
    const { alt, elRef, children, src, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={NavbarLogoStyles}
            wrapper="fab-navbar-logo">
            <div ref={elRef || ref} {...restProps}>
                {src && <img alt={alt} src={src} />}
                {children}
            </div>
        </Component>
    )
}

NavbarLogo.defaultProps = {
    alt: '',
    src: ''
}

NavbarLogo.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
}

export default NavbarLogo