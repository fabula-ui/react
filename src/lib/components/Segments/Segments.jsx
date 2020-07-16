import React, { Children, cloneElement, useState } from 'react';
import { css } from 'emotion';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';

const Segments = props => {
  const {
    activeFillColor,
    activeTextColor,
    children,
    className,
    clear,
    color,
    faded,
    inactiveFillColor,
    inactiveTextColor,
    invert,
    outline,
    rounded,
    scope
  } = props;
  const [active, setActive] = useState(props.active);
  const classes = ['fab-segments-wrapper', className || '', css(SegmentsStyles({ framework: 'react', props }))];
  let childrenWithProps;

  // Methods
  const handleActive = segment => {
    setActive(segment);
    if (segment && scope) { toggleContent(segment); }
  }

  const toggleContent = segment => {
    const allOtherContent = document.querySelectorAll(`.fab-segment-content[data-scope='${scope}']:not([data-name='${segment}'])`);
    const targetContent = document.querySelector(`.fab-segment-content[data-scope='${scope}'][data-name='${segment}']`);

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
  childrenWithProps = Children.map(children, child => cloneElement(child, {
    activeFillColor,
    activeTextColor,
    activeSegment: active,
    clear,
    color,
    faded,
    handleActive,
    inactiveFillColor,
    inactiveTextColor,
    invert,
    outline,
    rounded
  }));

  return (
    <div className={classes.join(' ')}>
      <div className="fab-segments">
        {childrenWithProps}
      </div>
    </div>
  )
}

export default Segments;