import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

const Divider = props => {
    const {className} = props;
    const classes = ['fab-divider', className || '', css(DividerStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} />
    )
}

Divider.defaultProps = {
    label: '',
    textColor: ''
}

Divider.propTypes = {
    label: PropTypes.string,
    textColor: PropTypes.string
}

export default Divider;