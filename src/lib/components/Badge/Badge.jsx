import React, { useContext } from 'react';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import BadgeStyles from '@fabula/core/theme/styles/Badge';

const Badge = props => {
    const { children } = props;
    const { utils } = useContext(FabulaProviderContext);

    return (
        <div className={`fab-badge-wrapper ${css(BadgeStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="badge">
            <div className="fab-badge" data-fab-component="badge">
                {children}
            </div>
        </div>
    )
}

export default Badge;