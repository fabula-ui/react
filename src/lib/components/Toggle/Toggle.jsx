import React, { useState } from 'react';
import { css } from 'emotion';

// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';

const Toggle = props => {
    const { className, disabled } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-toggle-wrapper', className || '', css(ToggleStyles({ framework: 'react', props }))];

    const handleClick = () => {
        if (!disabled) { setActive(!active); }
    }

    return (
        <div className={classes.join(' ')} data-active={active} data-disabled={disabled}>
            <label></label>
            <button className="fab-toggle" onClick={handleClick}></button>
            <div className="fab-toggle__label" onClick={handleClick}>Label</div>
        </div>
    )
}

Toggle.defaultProps = {
    rounded: true
};

export default Toggle;