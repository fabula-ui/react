import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import NavbarTabsStyles from '@fabula/core/styles/components/navbar-tabs/navbar-tabs';

const NavbarTabs = props => {
    const { children, className } = props;
    const classes = ['fab-navbar-tabs', css(NavbarTabsStyles({ framework: 'react', props })), className || ''];

    return <div className={classes.join(' ')}>{children}</div>
}

NavbarTabs.defaultProps = {
    alignment: '',
    expand: false
}

NavbarTabs.propTypes = {
    alignment: PropTypes.string,
    expand: PropTypes.bool
}

export default NavbarTabs;