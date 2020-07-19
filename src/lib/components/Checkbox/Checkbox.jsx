import React, { useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';

const Checkbox = props => {
    const { children, className, disabled, onChange, onCheck, onUncheck, label } = props;
    const [checked, setChecked] = useState(props.checked || false);
    const [focus, setFocus] = useState(false);
    const [isIndeterminate, setIndeterminate] = useState(props.indeterminate || false);
    const classes = ['fab-checkbox-wrapper', className || '', css(CheckboxStyles({ framework: 'react', props }))];

    const handleChange = e => {
        const tempChecked = e ? e.target.checked : !checked;
        const indeterminate = e ? e.target.indeterminate : false;

        if (!disabled) {
            setChecked(tempChecked);
            setIndeterminate(indeterminate);

            handleEvents(tempChecked);
        }
    }

    const handleEvents = checked => {
        if (onChange) { onChange(); }
        if (!!checked && onCheck) { onCheck(); }
        if (!checked && onUncheck) { onUncheck(); }
    }

    return (
        <div className={classes.join(' ')} data-checked={checked} data-disabled={disabled} data-focus={focus} data-indeterminate={isIndeterminate}>
            <div className="fab-checkbox" onClick={() => handleChange()} />
            <label className="fab-checkbox__label">
                <input
                    checked={checked}
                    disabled={disabled}
                    onBlur={() => setFocus(false)}
                    onFocus={() => setFocus(true)}
                    onChange={handleChange}
                    type="checkbox" />
                {label || children}
            </label>
        </div>
    )
}

Checkbox.defaultProps = {
    activeColor: '',
    checked: false,
    color: '',
    disabled: false,
    inactiveColor: '',
    indeterminate: false,
    label: '',
    rounded: false,
    size: 'md'
}

Checkbox.propTypes = {
    activeColor: PropTypes.string,
    checked: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    inactiveColor: PropTypes.string,
    indeterminate: PropTypes.bool,
    label: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.string
}

export default Checkbox;