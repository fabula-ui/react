import React from 'react';
import { css } from 'emotion';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

const DropdownHeader = props => {
    const {children, className, label} = props;
    const classes = ['fab-dropdown-header', className || '', css(DropdownHeaderStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            {label || children}
        </div>
    )
}

export default DropdownHeader;