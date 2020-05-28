import React from 'react';
import { css } from 'emotion';

import AvatarStyles from '@fabula/core/theme/styles/Avatar';

const Avatar = props => {
    const {
        children,
        color,
        image,
        initials,
        rounded,
        showInitials,
        size
    } = props;

    return (
        <div className={`fab-avatar-wrapper ${css(AvatarStyles({ framework: 'react', props }))}`} data-fab-wrapper="avatar" data-rounded={rounded}>
            <div className="fab-avatar" data-color={color} data-rounded={rounded} data-size={size}>
                <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>
                {showInitials && <span className="fab-avatar__initials">{initials}</span>}
            </div>
            {children}
        </div>
    )
}

Avatar.defaultProps = {
    rounded: false,
    size: 'md'
}

export default Avatar;