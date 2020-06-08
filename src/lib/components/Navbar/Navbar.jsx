import React from 'react';
import { css } from 'emotion';

// Styles
import NavbarStyles from '@fabula/core/theme/styles/Navbar';

const Navbar = props => {
    const { children, className } = props;
    const classes = ['fab-navbar', className || '', css(NavbarStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default Navbar;