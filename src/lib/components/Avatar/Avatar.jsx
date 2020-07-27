import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

const Avatar = props => {
    const {
        children,
        color,
        icon,
        image,
        rounded,
        showInitials,
        size
    } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={AvatarStyles}
            wrapper="fab-avatar-wrapper">
            <div data-fab-wrapper="avatar" data-rounded={rounded} ref={elRef}>
                <div className="fab-avatar" data-color={color} data-fab-component="avatar" data-rounded={rounded} data-size={size}>
                    {!showInitials && !!icon && <InnerIcon icon={icon} parentProps={props} />}
                    {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                    {image && <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>}
                </div>
                {children}
            </div>
        </Component>
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