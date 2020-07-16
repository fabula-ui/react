import React from 'react';
import { css } from 'emotion';

// Styles
import NavbarLogoStyles from '@fabula/core/styles/components/navbar-logo/navbar-logo';

const NavbarLogo = props => {
    const {alt, children, className, src} = props;
    const classes = ['fab-navbar-logo', className || '', css(NavbarLogoStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            {src && <img alt={alt} src={src} />}
            {children}
        </div>
    )
}

export default NavbarLogo