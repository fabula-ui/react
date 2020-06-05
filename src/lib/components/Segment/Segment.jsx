import React, { useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import SegmentStyles from '@fabula/core/theme/styles/Segment';

const Segment = props => {
    const { activeSegment, children, className, link, name, setActiveSegment, target } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-segment', className || '', css(SegmentStyles({ framework: 'react', props }))];

    useEffect(() => {
        let active;

        if (activeSegment) {
            setActive(activeSegment === name);
        }
    }, [activeSegment]);

    const handleClick = () => {
        setActiveSegment(name);
    }

    return (
        <div className={classes.join(' ')} data-active={!!active}>
            {!link && <button onClick={handleClick}>{children}</button>}
            {!!link && <a href={link} target={target}>{children}</a>}
        </div>
    )
}

export default Segment;