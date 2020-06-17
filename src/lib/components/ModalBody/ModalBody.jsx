import React from 'react';
import { css } from 'emotion';

// Styles
import ModalSectionStyles from '@fabula/core/theme/styles/ModalSection';

const ModalBody = props => {
    const { children, className } = props;
    const classes = ['fab-modal-section', className || '', css(ModalSectionStyles({ framework: 'react', props }))];
    
    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default ModalBody