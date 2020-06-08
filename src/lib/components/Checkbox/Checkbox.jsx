import React, { useState } from 'react';
import { css } from 'emotion';

// Components
import Icon from '../Icon/Icon';

// Styles
import CheckboxStyles from '@fabula/core/theme/styles/Checkbox';

const Checkbox = props => {
    const { children, className, disabled, label } = props;
    const [checked, setChecked] = useState(props.checked || false);
    const [focus, setFocus] = useState(false);
    const [indeterminate, setIndeterminate] = useState(props.indeterminate || false);
    const classes = ['fab-checkbox-wrapper', className || '', css(CheckboxStyles({ framework: 'react', props }))];
    const icon = indeterminate ? 'minus' : 'check';

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
    }

    return (
        <div className={classes.join(' ')} data-checked={checked} data-disabled={disabled} data-focus={focus} data-indeterminate={indeterminate}>
            <div className="fab-checkbox" onClick={handleClick}><Icon name={icon} /></div>
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
            </label>
        </div>
    )
}

export default Checkbox;