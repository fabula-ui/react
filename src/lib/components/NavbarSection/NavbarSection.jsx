import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import NavbarSectionStyles from '@fabula/core/styles/components/navbar-section/navbar-section';

const NavbarSection = props => {
    const { children, className } = props;
    const classes = ['fab-navbar-section', css(NavbarSectionStyles({ framework: 'react', props })), className || ''];

    return <div className={classes.join(' ')}>{children}</div>
}

NavbarSection.defaultProps = {
    alignment: '',
    expand: false
}

NavbarSection.propTypes = {
    alignment: PropTypes.string,
    expand: PropTypes.bool
}

export default NavbarSection;