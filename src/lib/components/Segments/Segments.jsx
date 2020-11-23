import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';

const Segments = props => {
  const {
    active,
    activeColor,
    activeTextColor,
    children,
    clear,
    color,
    elRef,
    faded,
    inactiveColor,
    inactiveTextColor,
    invert,
    onChange,
    outline,
    rounded,
    scope,
    ...rest
  } = props;
  const [activeSegment, setActiveSegment] = useState(active);
  const ref = useRef(null);

  // Callbacks
  const toggleContent = useCallback(segment => {
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
  }, [scope]);

  const handleActive = useCallback(segment => {
    setActiveSegment(segment);
    if (segment && scope) { toggleContent(segment); }
  }, [scope, toggleContent]);

  // Hooks
  useEffect(() => {
    if (active) { handleActive(active); }
  }, [active, handleActive]);

  // Children with props
  const childrenWithProps = Children.map(children, child => cloneElement(child, {
    activeColor,
    activeTextColor,
    activeSegment,
    clear,
    color,
    faded,
    handleActive,
    inactiveColor,
    inactiveTextColor,
    invert,
    onChange,
    outline,
    rounded,
    scope
  }));

  return (
    <Component
      elRef={elRef || ref}
      properties={props}
      rest={rest}
      styles={SegmentsStyles}
      wrapper="fab-segments-wrapper">
      <div data-fab-wrapper="segments" ref={elRef || ref}>
        <div className="fab-segments" data-fab-component="segments">
          {childrenWithProps}
        </div>
      </div>
    </Component>
  )
}

Segments.defaultProps = {
  active: '',
  activeColor: '',
  activeTextColor: '',
  border: true,
  clear: false,
  color: '',
  expand: false,
  faded: false,
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
  activeTextColor: PropTypes.string,
  border: PropTypes.bool,
  clear: PropTypes.bool,
  color: PropTypes.string,
  expand: PropTypes.bool,
  faded: PropTypes.bool,
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