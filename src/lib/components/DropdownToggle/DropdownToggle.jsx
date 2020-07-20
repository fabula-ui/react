import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import InnerIcon from '../InnerIcon/InnerIcon';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

const DropdownToggle = props => {
    const { align, children, className, direction, icon, label, onClick, open, toggle, ...rest } = props;
    // CSS
    const buttonCss = css(ButtonStyles({ framework: 'react', props }));
    const toggleCss = css(DropdownToggleStyles({ framework: 'react', props: { icon, ...rest } }));
    // Classes
    const classes = ['fab-dropdown-toggle', className || '', buttonCss, toggleCss];

    const handleClick = () => {
        if (onClick) { onClick(); }

        toggle();
    }

    return (
        <div className={classes.join(' ')} data-direction={direction} data-open={open}>
            <Button onClick={handleClick} {...rest}>
                {!!icon && <InnerIcon icon={icon} parentProps={props} />}
                <span className="fab-dropdown-toggle__label">{label || children}</span>
                <span className="fab-dropdown-toggle__chevron" />
            </Button>
        </div>
    )
}

DropdownToggle.defaultProps = {
    direction: '',
    icon: '',
    label: '',
    open: false
}

DropdownToggle.propTypes = {
    direction: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    open: PropTypes.bool 
}

export default DropdownToggle;