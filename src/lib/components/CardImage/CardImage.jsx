import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';
import { Icon } from '../Icon/Icon';

// Styles
import { CardImageStyles } from '@fabula/core/styles/components/card-image/card-image';

export const CardImage = props => {
    const { alt, children, elRef, icon, src, layout, ...rest } = props;
    const ref = useRef(null);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={CardImageStyles}
            wrapper="fab-card-image">
            <div data-layout={layout} data-fab-component="cardImage" ref={elRef || ref}>
                <Icon {...icon} />
                {!!src && <img alt={alt} src={src} />}
                {children}
            </div>
        </Component>
    )
}

CardImage.defaultProps = {
    color: '',
    cover: false,
    height: null,
    icon: {
        name: 'image'
    },
    layout: '',
    src: '',
    width: null
}

CardImage.propTypes = {
    color: PropTypes.string,
    cover: PropTypes.bool,
    height: PropTypes.any,
    icon: PropTypes.any,
    layout: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.any
}