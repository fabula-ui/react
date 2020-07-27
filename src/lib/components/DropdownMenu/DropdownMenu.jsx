import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
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
    const { children, className, clickToClose, color, direction, items, onChange, onClickItem, size, toggle, ...rest } = props;
    const [open, setOpen] = useState(false);
    const elRef = useRef(null);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { clickToClose, open, parentColor: color, parentOnClick: onClickItem, size, toggle })
        } else {
            return child;
        }
    });

    // Hooks
    useEffect(() => {
        if (onChange) { onChange(open); }
    }, [open]);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleToggle = open => {
        if (clickToClose) {
            if (toggle) { toggle(open); }
            if (clickToClose) { setOpen(open); }
        }
    }

    const renderItems = () => {
        return items.map((item, i) => {
            return <DropdownItem clickToClose={clickToClose || item.clickToClose} item={item} key={i} open={open} parentColor={color} parentOnClick={onClickItem} size={size} toggle={handleToggle} {...item} />
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
    alignment: '',
    clickToClose: false,
    color: '',
    direction: '',
    items: null,
    divider: true,
    padding: true,
    size: '',
}

DropdownMenu.propTypes = {
    alignment: PropTypes.string,
    clickToClose: PropTypes.bool,
    color: PropTypes.string,
    direction: PropTypes.string,
    items: PropTypes.any,
    divider: PropTypes.bool,
    padding: PropTypes.bool,
    size: PropTypes.string,
}

export default DropdownMenu;