import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useCallback,
    useRef,
    useState
} from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import DropdownItem from '../DropdownItem/DropdownItem';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

const DropdownMenu = props => {
    const { children, clickToClose, color, direction, items, onChange, onClickItem, size, toggle } = props;
    const [open, setOpen] = useState(false);
    const elRef = useRef(null);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { color, clickToClose, open, parentOnClick: onClickItem, size, toggle, ...child.props })
        } else {
            return child;
        }
    });

    // Callbacks
    const handleChange = useCallback(open => {
        if (onChange) { onChange(open); }
    }, [onChange]);

    // Hooks
    useEffect(() => {
        handleChange(open);
    }, [handleChange, open]);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleToggle = open => {
        if (toggle) { toggle(open); }
        if (open) { setOpen(open); }
    }

    const renderItems = () => {
        return items.map((item, i) => {
            return <DropdownItem clickToClose={clickToClose} color={color} key={i} open={open} parentOnClick={onClickItem} size={size} toggle={handleToggle}  {...item} />
        });
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DropdownMenuStyles}
            wrapper="fab-dropdown-menu">
            <div data-direction={direction} data-open={open} ref={elRef}>
                {!!items && renderItems()}
                {!items && childrenWithProps}
            </div>
        </Component>
    )
}

DropdownMenu.defaultProps = {
    clickToClose: false,
    color: '',
    items: null,
    padding: true,
    size: 'md',
}

DropdownMenu.propTypes = {
    clickToClose: PropTypes.bool,
    color: PropTypes.string,
    items: PropTypes.any,
    padding: PropTypes.bool,
    size: PropTypes.string,
}

export default DropdownMenu;