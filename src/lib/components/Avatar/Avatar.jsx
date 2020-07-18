import React from 'react';
import { css } from 'emotion';

// Components
import InnerIcon from '../InnerIcon/InnerIcon';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

const Avatar = props => {
    const {
        children,
        className,
        color,
        icon,
        image,
        rounded,
        showInitials,
        size
    } = props;

    return (
        <div className={`${className} fab-avatar-wrapper ${css(AvatarStyles({ framework: 'react', props }))}`} data-fab-wrapper="avatar" data-rounded={rounded}>
            <div className="fab-avatar" data-color={color} data-rounded={rounded} data-size={size}>
                {!showInitials && !!icon && <InnerIcon icon={icon} parentProps={props} />}
                {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                {image && <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>}
            </div>
            {children}
        </div>
    )
}

Avatar.defaultProps = {
    icon: 'image',
    rounded: false,
    size: 'md'
}

export default Avatar;