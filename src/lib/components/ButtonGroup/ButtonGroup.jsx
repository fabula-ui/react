import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

const ButtonGroup = props => {
    const { children, className } = props;
    const classes = ['fab-button-group-wrapper', className || '', css(ButtonGroupStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="buttonGroup">
            <div className="fab-button-group" data-fab-component="buttonGroup">
                {children}
            </div>
        </div>
    )
}

ButtonGroup.defaultProps = {
    color: '',
    divider: true,
    dividerColor: '',
    flow: 'horizontal',
    glued: false,
    spacing: null,
    wrap: true
}

ButtonGroup.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    dividerColor: PropTypes.string,
    flow: PropTypes.string,
    glued: PropTypes.bool,
    spacing: PropTypes.any,
    wrap: PropTypes.bool
}

export default ButtonGroup;