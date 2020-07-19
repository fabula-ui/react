import React, { createElement } from 'react';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';

const Text = props => {
    const { aux, children, className, color, content, p, small, strong, ...rest } = props;
    const classes = ['fab-text', className || '', css(TextStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-aux={!!aux} data-color={color} {...rest}>
            {!content && children}
            {!!content && content}
        </div>
    )
}

export default Text;