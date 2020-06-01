import React, { useContext } from 'react';
import { css } from 'emotion';

// Components
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Methods
import getInitials from '@fabula/core/theme/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/theme/styles/Avatar';

const Avatar = props => {
    const {
        badge,
        children,
        color,
        icon,
        image,
        rounded,
        showInitials,
        size
    } = props;
    const { utils } = useContext(FabulaProviderContext);
    const avatarIcon = typeof icon === 'string' ? icon : 'image';

    return (
        <div className={`fab-avatar-wrapper ${css(AvatarStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="avatar" data-rounded={rounded}>
            <div className="fab-avatar" data-color={color} data-rounded={rounded} data-size={size}>
                {!showInitials && icon !== false && <Icon name={avatarIcon} />}
                {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                {image && <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>}
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