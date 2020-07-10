import React from 'react';
import { css } from 'emotion';

// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';

const SegmentContent = props => {
    const { active, children, className, name, scope } = props;
    const classes = ['fab-segment-content', className || '', css(SegmentContentStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-active={!!active} data-name={name} data-scope={scope}>
            {children}
        </div>
    )
}

export default SegmentContent;