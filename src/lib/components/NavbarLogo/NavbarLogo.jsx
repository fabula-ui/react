import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import NavbarLogoStyles from '@fabula/core/styles/components/navbar-logo/navbar-logo';

const NavbarLogo = props => {
    const {alt, children, className, src} = props;
    const classes = ['fab-navbar-logo', css(NavbarLogoStyles({ framework: 'react', props })), className || ''];

    return (
        <div className={classes.join(' ')}>
            {src && <img alt={alt} src={src} />}
            {children}
        </div>
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