import React from 'react';
import { css } from 'emotion';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

const Content = props => {
    const { active, children, className, contentClassName, name, scope } = props;
    const classes = ['fab-content', contentClassName, className || '', css(ContentStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-active={!!active} data-name={name} data-scope={scope}>
            {children}
        </div>
    )
}

export default Content;