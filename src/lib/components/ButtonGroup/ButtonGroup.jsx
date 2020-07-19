import React from 'react';
import { css } from 'emotion';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children, className } = props;
    const classes = ['fab-button-group-wrapper', className || '', css(ButtonGroupStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="buttonGroup">
            <div className="fab-button-group" data-fab-component="buttonGroup">
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