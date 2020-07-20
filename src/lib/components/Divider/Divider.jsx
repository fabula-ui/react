import React from 'react';
import { css } from 'emotion';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

const Divider = props => {
    const {className} = props;
    const classes = ['fab-divider', className || '', css(DividerStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} />
    )
}

export default Divider;