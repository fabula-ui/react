import React from 'react';
import { css } from 'emotion';

// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';

const InputGroup = props => {
    const { children, className } = props;
    const classes = ['fab-input-group-wrapper', className || '', css(InputGroupStyles({ framework: 'react', props }))];

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