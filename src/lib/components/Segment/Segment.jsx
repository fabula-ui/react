import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';

const Segment = props => {
    const { activeSegment, children, elRef, handleActive, link, name, target, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    useLayoutEffect(() => {
        if (activeSegment) { setActive(activeSegment === name); }
    }, [activeSegment, name]);

    const handleClick = () => {
        handleActive(name);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={SegmentStyles}
            wrapper="fab-segment">
            <div data-active={!!active} ref={elRef || ref} {...restProps}>
                {!link && <button onClick={handleClick}>{children}</button>}
                {!!link && <a href={link} target={target}>{children}</a>}
            </div>
        </Component>
    )
}

Segment.defaultProps = {
    active: false,
    activeColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    href: '',
    inactiveTextColor: '',
    invert: false,
    layout: '',
    link: '',
    name: '',
    outline: false,
    rounded: false,
    scope: '',
    stacked: false,
    target: '',
    type: '',
}

Segment.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    activeFillColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    href: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    invert: PropTypes.bool,
    layout: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
}

export default Segment;