import React, { useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';

const Checkbox = props => {
    const { children, className, disabled, onChange, onCheck, onUncheck, indeterminate, label } = props;
    const [checked, setChecked] = useState(props.checked || false);
    const [focus, setFocus] = useState(false);
    const [isIndeterminate, setIndeterminate] = useState(props.indeterminate || false);
    const classes = ['fab-checkbox-wrapper', className || '', css(CheckboxStyles({ framework: 'react', props }))];

    const handleChange = e => {
        if (!disabled) {
            setChecked(e.target.checked);
            setIndeterminate(e.target.indeterminate);
        }
    }

    const handleClick = () => {
        if (!disabled) {
            setChecked(!checked);
            setIndeterminate(false);
        }

        if (onChange) {
            onChange();
        }

        if (!checked && onCheck) {
            onCheck();
        }

        if (checked && onUncheck) {
            onUncheck();
        }
    }

    return (
        <div className={classes.join(' ')} data-checked={checked} data-disabled={disabled} data-focus={focus} data-indeterminate={isIndeterminate}>
            <div className="fab-checkbox" onClick={handleClick} />
            <label className="fab-checkbox__label">
                <input
                    checked={checked}
                    disabled={disabled}
                    indeterminate={indeterminate}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                    onChange={handleChange}
                    type="checkbox" />
                {label}
                {children}
            </label>
        </div>
    )
}

export default Checkbox;