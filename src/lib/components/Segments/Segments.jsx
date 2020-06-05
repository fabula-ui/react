import React, { Children, cloneElement, useState } from 'react';
import { css } from 'emotion';

// Styles
import SegmentsStyles from '@fabula/core/theme/styles/Segments';

const Segments = props => {
    const { children, className, ...rest } = props;
    const [activeSegment, setActiveSegment] = useState(props.activeSegment);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { ...rest, activeSegment, setActiveSegment }));
    const classes = ['fab-segments-wrapper', className || '', css(SegmentsStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-segments">
                {childrenWithProps}
            </div>
        </div>
    )
}

export default Segments;