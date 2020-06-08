import React from 'react';
import { css } from 'emotion';

// Styles
import ButtonGroupStyles from '@fabula/core/theme/styles/ButtonGroup';

const ButtonGroup = props => {
    const {
        children,
        className,
        divider,
        glued
    } = props;

    return (
        <div className={`${className} fab-button-group-wrapper ${css(ButtonGroupStyles({ framework: 'react', props }))}`}>
            <div className="fab-button-group">
                {children}
            </div>
        </div>
    )
}

ButtonGroup.defaultProps = {
    divider: true,
    flow: 'horizontal',
}

export default ButtonGroup;