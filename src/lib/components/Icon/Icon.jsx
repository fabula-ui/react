import React, { useContext } from 'react';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

const Icon = props => {
    const { children, name } = props;
    const { utils } = useContext(FabulaProviderContext);
    let svg;

    try {
        svg = require(`@fabula/core/icons/${name}.svg`);
    } catch (err) {
        svg = null;
    }

    if (svg) {
        return (
            <span className={`fab-icon ${css(IconStyles({ framework: 'react', props, utils }))}`}>
                <i className="fab-icon__svg" dangerouslySetInnerHTML={{ __html: atob(svg.substring(26)) }} />
                {children}
            </span>
        );
    } else {
        return <></>
    }
}

export default Icon;