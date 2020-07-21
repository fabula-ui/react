import React, { Children, cloneElement, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

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
  const classes = ['fab-segments-wrapper', css(SegmentsStyles({ framework: 'react', props })), className || ''];

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
  const childrenWithProps = Children.map(children, child => cloneElement(child, {
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

Segments.defaultProps = {
  active: '',
  activeColor: '',
  activeFillColor: '',
  activeTextColor: '',
  clear: false,
  color: '',
  expand: false,
  faded: false,
  inactiveFillColor: '',
  inactiveTextColor: '',
  invert: false,
  layout: 'horizontal',
  outline: false,
  rounded: false,
  scope: '',
  stacked: false,
  type: ''
}

Segments.propTypes = {
  active: PropTypes.string,
  activeColor: PropTypes.string,
  activeFillColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  clear: PropTypes.bool,
  color: PropTypes.string,
  expand: PropTypes.bool,
  faded: PropTypes.bool,
  inactiveFillColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  invert: PropTypes.bool,
  layout: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  scope: PropTypes.string,
  stacked: PropTypes.bool,
  type: PropTypes.string,
}

export default Segments;