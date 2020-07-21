import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';

const InputGroup = props => {
    const { children, className } = props;
    const classes = ['fab-input-group-wrapper', css(InputGroupStyles({ framework: 'react', props })), className || ''];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="inputGroup">
            <div className="fab-input-group" data-fab-component="inputGroup">
                {children}
            </div>
        </div>
    )
}

InputGroup.defaultProps = {
    flow: 'horizontal',
    glued: false,
    spacing: null,
}

InputGroup.propTypes = {
    flow: PropTypes.string,
    glued: PropTypes.bool,
    spacing: PropTypes.any,
}

export default InputGroup;