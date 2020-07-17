import React from 'react';
import { css } from 'emotion';

// Styles
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';

const InnerIcon = props => {
    const { className, icon, parentProps } = props;
    const iconProps = typeof icon === 'object' ? icon : { name: icon };
    const classes = ['fab-inner-icon', className || '', css(InnerIconStyles({ framework: 'react', props: { parentProps: parentProps, ...iconProps } }))];

    return (
        <span className={classes.join(' ')}></span>
    );
}

export default InnerIcon;