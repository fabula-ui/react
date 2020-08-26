import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';

const Segments = props => {
  const {
    activeColor,
    activeFillColor,
    activeTextColor,
    children,
    clear,
    color,
    faded,
    inactiveColor,
    inactiveFillColor,
    inactiveTextColor,
    invert,
    onChange,
    outline,
    rounded,
    scope
  } = props;
  const [active, setActive] = useState(props.active);
  const elRef = useRef(null);

  // Hooks
  useEffect(() => {
    if (props.active) { handleActive(props.active); }
  }, [props.active]);

  // Methods
  const handleActive = segment => {
    setActive(segment);
    if (segment && scope) { toggleContent(segment); }
    if (onChange) {
      onChange({
        scope,
        segment
      });
    }
  }

  const toggleContent = segment => {
    const allOtherContent = document.querySelectorAll(`.fab-content[data-scope='${scope}']:not([data-name='${segment}'])`);
    const targetContent = document.querySelectorAll(`.fab-content[data-scope='${scope}'][data-name='${segment}']`);

    if (allOtherContent.length) {
      for (let i = 0; i < allOtherContent.length; i++) {
        const other = allOtherContent[i];

        other.setAttribute('data-active', 'false');
      }
    }

    if (targetContent.length) {
      for (let i = 0; i < targetContent.length; i++) {
        const target = targetContent[i];

        target.setAttribute('data-active', 'true');
      }
    }
  }

  // Children with props
  const childrenWithProps = Children.map(children, child => cloneElement(child, {
    activeColor,
    activeFillColor,
    activeTextColor,
    activeSegment: active,
    clear,
    color,
    faded,
    handleActive,
    inactiveColor,
    inactiveFillColor,
    inactiveTextColor,
    invert,
    outline,
    rounded
  }));

  return (
    <Component
      elRef={elRef}
      properties={props}
      styles={SegmentsStyles}
      wrapper="fab-segments-wrapper">
      <div ref={elRef}>
        <div className="fab-segments">
          {childrenWithProps}
        </div>
      </div>
    </Component>
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