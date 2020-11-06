import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';

const Dropdown = props => {
    const { alignment, children, direction, elRef, expand, onClose, onOpen, onToggle, ...rest } = props;
    const [open, setOpen] = useState(props.open);
    const ref = useRef(null);

    // Methods
    const toggle = useCallback(() => {
        setOpen(!open);

        if (onClose && open) { onClose() }
        if (onOpen && !open) { onOpen() }
        if (onToggle) { onToggle(!open) }
    }, [onClose, onOpen, onToggle, open, setOpen]);

    // Callbacks
    const handleClick = useCallback(e => {
        if ((elRef || ref).current && !(elRef || ref).current.contains(e.target) && open) {
            toggle();
        }
    }, [toggle, elRef, ref, open]);

    // Hooks
    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { alignment, direction, expand, open, toggle }));

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={DropdownStyles}
            wrapper="fab-dropdown">
            <div
                className="fab-dropdown"
                data-open={open}
                data-fab-component="dropdown"
                ref={elRef || ref}>
                {childrenWithProps}
            </div>
        </Component>
    )
}

Dropdown.defaultProps = {
    alignment: 'left',
    direction: 'down',
    expand: false,
    inline: true,
    open: false
}

Dropdown.propTypes = {
    alignment: PropTypes.string,
    direction: PropTypes.string,
    expand: PropTypes.bool,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onToggle: PropTypes.func
}

export default Dropdown;