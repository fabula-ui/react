import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';

const Segment = props => {
    const { activeSegment, children, className, handleActive, link, name, target } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-segment', css(SegmentStyles({ framework: 'react', props })), className || ''];

    useEffect(() => {
        if (activeSegment) { setActive(activeSegment === name); }
    }, [activeSegment]);

    const handleClick = () => {
        handleActive(name);
    }

    return (
        <div className={classes.join(' ')} data-active={!!active}>
            {!link && <button onClick={handleClick}>{children}</button>}
            {!!link && <a href={link} target={target}>{children}</a>}
        </div>
    )
}

Segment.defaultProps = {
    active: false,
    activeColor: '',
    activeFillColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    href: '',
    inactiveFillColor: '',
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
    inactiveFillColor: PropTypes.string,
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