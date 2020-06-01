import React, { useContext } from 'react';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import BadgeStyles from '@fabula/core/theme/styles/Badge';

const Badge = props => {
    const { children, className, label, placement } = props;

    return (
        <div className={`${className} fab-badge-wrapper ${css(BadgeStyles({ framework: 'react', props }))}`} data-fab-wrapper="badge">
            <div className="fab-badge" data-fab-component="badge" data-has-placement={!!placement}>
                {label}
                {children}
            </div>
        </div>
    )
}

Badge.defaultProps = {
    glow: false
}

export default Badge;