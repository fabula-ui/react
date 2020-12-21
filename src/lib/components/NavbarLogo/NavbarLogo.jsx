import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import NavbarLogoStyles from '@fabula/core/styles/components/navbar-logo/navbar-logo';

const NavbarLogo = props => {
    const { alt, elRef, children, src, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={NavbarLogoStyles}
            wrapper="fab-navbar-logo">
            <div ref={elRef || ref}>
                {!!src && <img className="fab-navbar-logo__image" alt={alt} src={src} />}
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