import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { css } from 'emotion';

// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';

const Dropdown = props => {
    const { children, className, direction, expand } = props;
    const [open, setOpen] = useState(props.open);
    const dropdownClass = className || '';
    const styles = css(DropdownStyles({ framework: 'react', props }));
    const ref = useRef(null);

    // Methods
    const toggle = () => {
        setOpen(!open);
    }

    // Callbacks
    const handleClick = useCallback(e => {
        if (ref.current && !ref.current.contains(e.target) && open) {
            toggle();
        }
    }, [toggle, ref]);

    // Hooks
    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { direction, expand, open, toggle }));

    return (
        <div className={`fab-dropdown-wrapper ${styles} ${dropdownClass}`} ref={ref}>
            <div className="fab-dropdown" data-open={open}>{childrenWithProps}</div>
        </div>
    )
}

Dropdown.defaultProps = {
    direction: 'down'
}

export default Dropdown;