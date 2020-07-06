import React from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

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
            {label &&
                <Button onClick={handleClick} {...rest}>
                    {!!icon && <span className="fab-dropdown-toggle__icon" />}
                    <span className="fab-dropdown-toggle__label">{label}</span>
                    <span className="fab-dropdown-toggle__chevron" />
                </Button>
            }
            {children}
        </div>
    )
}

export default DropdownToggle;