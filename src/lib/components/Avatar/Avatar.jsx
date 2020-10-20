import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';

// Methods
import getInitials from '@fabula/core/styles/methods/misc/getInitials';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';

const Avatar = props => {
    const {
        badge,
        children,
        color,
        elRef,
        icon,
        image,
        rounded,
        showInitials,
        size,
        ...rest
    } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={AvatarStyles}
            wrapper="fab-avatar-wrapper">
            <div data-fab-wrapper="avatar" data-rounded={rounded} ref={elRef || ref} {...restProps}>
                <div className="fab-avatar" data-color={color} data-fab-component="avatar" data-rounded={rounded} data-size={size}>
                    {!showInitials && !!icon && <InnerIcon icon={icon} parentProps={props} />}
                    {showInitials && <span className="fab-avatar__initials">{getInitials(showInitials)}</span>}
                    {image && <div className="fab-avatar__image" style={{ backgroundImage: `url(${image})` }}></div>}
                </div>
                {children}
                {badge.label && <div className="fab-avatar__badge">{badge.label}</div>}
            </div>
        </Component>
    )
}

Avatar.defaultProps = {
    badge: {
        placement: {
            x: 'right',
            y: 'bottom'
        }
    },
    darken: false,
    icon: 'image',
    image: '',
    inline: true,
    lighten: false,
    rounded: false,
    showInitials: '',
    size: 'md'
}

Avatar.propTypes = {
    badge: PropTypes.any,
    darken: PropTypes.bool,
    icon: PropTypes.string,
    image: PropTypes.string,
    lighten: PropTypes.bool,
    rounded: PropTypes.bool,
    showInitials: PropTypes.string,
    size: PropTypes.string
}

export default Avatar;