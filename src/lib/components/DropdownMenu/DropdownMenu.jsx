import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useState
} from 'react';
import { css } from 'emotion';

// Components
import DropdownItem from '../DropdownItem/DropdownItem';
import List from '../List/List';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

const DropdownMenu = props => {
    const { children, className, clickToClose, color, direction, items, onChange, onClickItem, size, toggle, ...rest } = props;
    const [height, setHeight] = useState(false);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { clickToClose, color, open, parentOnClick: onClickItem, size, toggle })
        } else {
            return child;
        }
    });
    const classes = ['fab-dropdown-menu', className || '', css(DropdownMenuStyles({ framework: 'react', props: { ...props, height } }))];

    // Hooks
    useEffect(() => {
        if (ref.current) { setHeight(ref.current.offsetHeight); }
    }, [ref]);

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
            return <DropdownItem clickToClose={clickToClose || item.clickToClose} item={item} key={i} open={open} parentOnClick={onClickItem} size={size} toggle={handleToggle} {...item} />
        });
    }

    return (
        <div className={classes.join(' ')} data-direction={direction} data-open={open} ref={ref}>
            {items && renderItems()}
            {/* {items && !list &&
                    <List color={color} padding={true} {...rest}>
                        {renderItems()}
                    </List>
                }
                {!items && list &&
                    <List color={color} {...rest}>
                        {childrenWithProps}
                    </List>
                } */}
            {!items && childrenWithProps}
        </div>
    )
}

DropdownMenu.defaultProps = {
    direction: 'down',
    divider: true
}

export default DropdownMenu;