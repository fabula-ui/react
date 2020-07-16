import React from 'react';
import { css } from 'emotion';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

const NavbarTabs = props => {
    const { children, className } = props;
    const classes = ['fab-navbar-tabs', className || '', css(NavbarTabsStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default NavbarTabs;