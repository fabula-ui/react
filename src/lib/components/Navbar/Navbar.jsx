import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import NavbarStyles from '@fabula/core/styles/components/navbar/navbar';

const Navbar = props => {
    const { children, className } = props;
    const classes = ['fab-navbar', css(NavbarStyles({ framework: 'react', props })), className || ''];

    return <div className={classes.join(' ')}>{children}</div>
}

Navbar.defaultProps = {
    color: '',
    height: null
}

Navbar.propTypes = {
    color: PropTypes.string,
    height: PropTypes.any
}

export default Navbar;