import React from 'react';

const NavbarLogo = props => {
    const {alt, children, src} = props;

    return (
        <div className="fab-navbar-logo">
            {src && <img alt={alt} src={src} />}
            {children}
        </div>
    )
}

export default NavbarLogo