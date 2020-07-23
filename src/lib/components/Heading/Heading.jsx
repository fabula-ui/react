import React from 'react';
import { css } from 'emotion';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

const Heading = props => {
    const { children, className, level } = props;
    const classes = ['fab-heading', css(HeadingStyles({ framework: 'react', props })), className || ''];
    const HTag = `h${level}`;

    return (
        <HTag className={classes.join(' ')}>
            {children}
        </HTag>
    )
}

Heading.defaultProps = {
    level: 1
}

export default Heading;