import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

const DropdownItem = props => {
    const { button, children, className, clickToClose, label, onClick, parentOnClick, toggle } = props;
    const classes = ['fab-dropdown-item', css(DropdownItemStyles({ framework: 'react', props })), className || ''];

    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
        if ((button || onClick || parentOnClick) && clickToClose && toggle) { toggle(); }
    }

    if (!!button || !!onClick || !!parentOnClick) {
        return (
            <button className={classes.join(' ')} data-fab-component="dropdown-item" onClick={handleClick}>
                {label || children}
            </button>
        )
    } else {
        return (
            <div className={classes.join(' ')} data-fab-component="dropdown-item" onClick={handleClick}>
                {label || children}
            </div>
        )
    }
}

DropdownItem.defaultProps = {
    button: false,
    color: '',
    clickToClose: false,
    invert: false,
    item: null,
    label: '',
    parentColor: '',
    size: 'md'
}

DropdownItem.propTypes = {
    button: PropTypes.bool,
    color: PropTypes.string,
    clickToClose: PropTypes.bool,
    invert: PropTypes.bool,
    item: PropTypes.any,
    label: PropTypes.string,
    parentColor: PropTypes.string,
    size: PropTypes.string
}

export default DropdownItem;