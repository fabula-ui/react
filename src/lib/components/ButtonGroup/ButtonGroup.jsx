import React, { useContext } from 'react';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import ButtonGroupStyles from '@fabula/core/theme/styles/ButtonGroup';

const ButtonGroup = props => {
    const {
        children,
        divider,
        glued
    } = props;
    const { utils } = useContext(FabulaProviderContext);
    
    return (
        <div className={`${css(ButtonGroupStyles({ framework: 'react', props, utils }))}`} data-divider={divider} data-glued={glued}>
            {children}
        </div>
    )
}

ButtonGroup.defaultProps = {
    divider: true,
    flow: 'horizontal',
}

export default ButtonGroup;