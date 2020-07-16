import React from 'react';
import { css } from 'emotion';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

const NavbarSection = props => {
    const { children, className } = props;
    const classes = ['fab-navbar-section', className || '', css(NavbarSectionStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default NavbarSection;