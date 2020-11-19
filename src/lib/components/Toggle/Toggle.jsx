import React, { useRef, useState } from 'react';

// Components
import Component from '../Component/Component';

// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';

const Toggle = props => {
    const { children, disabled, elRef, label, onToggle, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const ref = useRef(null);

    const handleClick = () => {
        if (!disabled) { setActive(!active); }
        if (onToggle) { onToggle(!active); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ToggleStyles}
            wrapper="fab-toggle-wrapper">
            <div data-active={active} data-disabled={disabled} data-fab-wrapper="toggle" ref={elRef || ref}>
                <div className="fab-toggle" data-fab-component="toggle">
                    <button className="fab-toggle__switch" onClick={handleClick}></button>
                    <div className="fab-toggle__label" onClick={handleClick}>{label || children}</div>
                </div>
            </div>
        </Component>
    )
}

Toggle.defaultProps = {
    rounded: true
};

export default Toggle;