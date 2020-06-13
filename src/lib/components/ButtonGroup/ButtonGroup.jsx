import React from 'react';
import { css } from 'emotion';

// Styles
import ButtonGroupStyles from '@fabula/core/theme/styles/ButtonGroup';

const ButtonGroup = props => {
    const { children, className } = props;
    const classes = ['fab-button-group-wrapper', className || '', css(ButtonGroupStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-button-group">
                {children}
            </div>
        </div>
    )
}

ButtonGroup.defaultProps = {
    divider: true,
    flow: 'horizontal',
    wrap: true
}

export default ButtonGroup;