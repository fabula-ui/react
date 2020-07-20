import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

const DropdownHeader = props => {
    const { children, className, label } = props;
    const classes = ['fab-dropdown-header', css(DropdownHeaderStyles({ framework: 'react', props })), className || ''];

    return (
        <div className={classes.join(' ')}>
            {label || children}
        </div>
    )
}

DropdownHeader.defaultProps = {
    label: '',
    textColor: ''
}

DropdownHeader.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string
}

export default DropdownHeader;