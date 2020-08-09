import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';

const Checkbox = props => {
    const { children, disabled, label, onChange, onCheck, onUncheck, readOnly } = props;
    const [checked, setChecked] = useState(props.checked || false);
    const [focus, setFocus] = useState(false);
    const [isIndeterminate, setIndeterminate] = useState(props.indeterminate || false);
    const elRef = useRef(null);

    const handleChange = e => {
        const tempChecked = e ? e.target.checked : !checked;
        const indeterminate = e ? e.target.indeterminate : false;

        if (!disabled && !readOnly) {
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
        <Component
            elRef={elRef}
            properties={props}
            styles={CheckboxStyles}
            wrapper="fab-checkbox-wrapper">
            <div data-checked={checked} data-disabled={disabled} data-focus={focus} data-indeterminate={isIndeterminate} data-read-only={readOnly} ref={elRef}>
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
        </Component>
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
    readOnly: false,
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
    readOnly: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string
}

export default Checkbox;