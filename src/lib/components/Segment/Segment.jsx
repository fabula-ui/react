import React, { useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';

const Segment = props => {
    const { activeSegment, children, className, handleActive, link, name, target } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-segment', className || '', css(SegmentStyles({ framework: 'react', props }))];

    useEffect(() => {
        if (activeSegment) {
            setActive(activeSegment === name);
        }
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
    active: false
}

export default Segment;