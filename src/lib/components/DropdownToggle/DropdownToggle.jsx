import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const DropdownToggle = props => {
    const { children, icon, label, onClick, toggle, ...rest } = props;

    const handleClick = () => {
        if (onClick) { onClick(); }
        
        toggle();
    }

    return (
        <>
            {label &&
                <Button onClick={handleClick} {...rest}>
                    {!!icon && typeof icon === 'object' && <Icon {...icon} />}
                    {!!icon && typeof icon === 'string' && <Icon name={icon} />}
                    <span className="fab-dropdown-toggle__label">{label}</span>
                    <Icon data-toggle-icon name="chevron-down" />
                </Button>}
            {children}
        </>
    )
}

export default DropdownToggle;