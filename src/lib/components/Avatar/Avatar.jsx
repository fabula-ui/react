import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

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
    const classes = [className, 'fab-avatar-wrapper', css(AvatarStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')} data-fab-wrapper="avatar" data-rounded={rounded}>
            <div className="fab-avatar" data-color={color} data-fab-component="avatar" data-rounded={rounded} data-size={size}>
                {!showInitials && !!icon && <InnerIcon icon={icon} parentProps={props} />}
                {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                {image && <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>}
            </div>
            {children}
        </div>
    )
}

Avatar.defaultProps = {
    adaptColor: false,
    darken: false,
    icon: 'image',
    image: '',
    lighten: false,
    rounded: false,
    showInitials: '',
    size: 'md'
}

Avatar.propTypes = {
    adaptColor: PropTypes.bool,
    darken: PropTypes.bool,
    icon: PropTypes.string,
    image: PropTypes.string,
    lighten: PropTypes.bool,
    rounded: PropTypes.bool,
    showInitials: PropTypes.string,
    size: PropTypes.string
}

export default Avatar;