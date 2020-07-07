import React from 'react';
import { css } from 'emotion';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

const Tag = props => {
    const { children, className, label, placement } = props;
    const classes = ['fab-tag-wrapper', className || '', css(TagStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-placement-x={placement.x} data-placement-y={placement.y}>
            <div className="fab-tag">
                {label || children}
            </div>
        </div>
    )
}

Tag.defaultProps = {
    placement: {
        x: 'right',
        y: 'bottom'
    }
}

export default Tag;