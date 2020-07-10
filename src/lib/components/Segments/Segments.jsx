import React, { Children, cloneElement, useState } from 'react';
import { css } from 'emotion';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';

const Segments = props => {
    const { children, className, scope, ...rest } = props;
    const [activeSegment, setActiveSegment] = useState(props.activeSegment);
    const classes = ['fab-segments-wrapper', className || '', css(SegmentsStyles({ framework: 'react', props }))];
    let childrenWithProps;

    // Methods
    const handleActiveSegment = segment => {
        setActiveSegment(segment);
        if (segment && scope) { toggleContent(segment); }
    }

    const toggleContent = segment => {
        const allOtherContent = document.querySelectorAll(`.fab-segment-content[data-scope='${scope}']:not([data-name='${segment}'])`);
        const targetContent = document.querySelector(`.fab-segment-content[data-scope='${scope}'][data-name='${segment}']`);
    
        console.log(segment);

        if (allOtherContent.length) {
          allOtherContent.forEach(other => {
            other.setAttribute('data-active', 'false');
          });
        }
    
        if (targetContent) {
          targetContent.setAttribute('data-active', 'true');
        }
      }

    // Children with props
    childrenWithProps = Children.map(children, child => cloneElement(child, { ...rest, activeSegment, handleActiveSegment }));

    return (
        <div className={classes.join(' ')}>
            <div className="fab-segments">
                {childrenWithProps}
            </div>
        </div>
    )
}

export default Segments;