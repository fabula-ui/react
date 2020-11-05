import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

const Avatar = props => {
    const {
        children,
        color,
        elRef,
        icon,
        rounded,
        showInitials,
        src,
        size
    } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={AvatarStyles}
            wrapper="fab-avatar-wrapper">
            <div data-fab-wrapper="avatar" data-rounded={rounded} ref={elRef || ref}>
                <div className="fab-avatar" data-color={color} data-fab-component="avatar" data-rounded={rounded} data-size={size}>
                    {!showInitials && !!icon && <Icon {...icon} />}
                    {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                    {src && <div className="fab-avatar__image" style={{ backgroundImage: `url(${src})` }}></div>}
                </div>
                {children}
            </div>
        </Component>
    )
}

Avatar.defaultProps = {
    darken: false,
    icon: {
        name: 'image'
    },
    image: '',
    inline: true,
    lighten: false,
    rounded: false,
    showInitials: '',
    size: 'md',
    src: ''
}

Avatar.propTypes = {
    darken: PropTypes.bool,
    icon: PropTypes.any,
    image: PropTypes.string,
    lighten: PropTypes.bool,
    rounded: PropTypes.bool,
    showInitials: PropTypes.string,
    size: PropTypes.string,
    src: PropTypes.string
}

export default Avatar;