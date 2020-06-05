import React from 'react';
import { css } from 'emotion';

// Styles
import InputGroupStyles from '@fabula/core/theme/styles/InputGroup';

const InputGroup = props => {
    const { children, className } = props;
    const classes = ['fab-input-wrapper-wrapper', className || '', css(InputGroupStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="inputGroup">
            <div className="fab-input-group" data-fab-component="inputGroup">
                {children}
            </div>
        </div>
    )
}

InputGroup.defaultProps = {
    flow: 'horizontal'
}

export default InputGroup;