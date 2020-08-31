import React, { useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';

const Toggle = props => {
    const { children, disabled, label, onToggle } = props;
    const [active, setActive] = useState(props.active);
    const elRef = useRef(null);

    const handleClick = () => {
        if (!disabled) { setActive(!active); }
        if (onToggle) { onToggle(!active); }
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ToggleStyles}
            wrapper="fab-toggle-wrapper">
            <div data-active={active} data-disabled={disabled} ref={elRef}>
                <button className="fab-toggle" onClick={handleClick}></button>
                <div className="fab-toggle__label" onClick={handleClick}>{label || children}</div>
            </div>
        </Component>
    )
}

Toggle.defaultProps = {
    rounded: true
};

export default Toggle;