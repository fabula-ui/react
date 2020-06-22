import React from 'react';
import { css } from 'emotion';

// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';

const CloseButton = props => {
    const { className, onClick } = props;
    const classes = ['fab-close-button', className || '', css(CloseButtonStyles({ framework: 'react', props }))];

    return (
        <button className={classes.join(' ')} onClick={onClick} />
    )
}

export default CloseButton;