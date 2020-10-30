import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import Icon from '../Icon/Icon';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';

const CardImage = props => {
    const { alt, children, elRef, icon, src, layout, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={CardImageStyles}
            wrapper="fab-card-image">
            <div data-layout={layout} data-fab-component="cardImage" ref={elRef || ref} {...restProps}>
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
    icon: PropTypes.string,
    layout: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.any
}

export default CardImage;