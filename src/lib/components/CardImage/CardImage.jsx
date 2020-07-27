import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';

const CardImage = props => {
    const { children, className, src, layout } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={CardImageStyles}
            wrapper="fab-card-image">
            <div data-layout={layout} ref={elRef}>
                {!!src && <img src={src} />}
                {children}
            </div>
        </Component>
    )
}

CardImage.defaultProps = {
    adaptColor: false,
    color: '',
    cover: false,
    height: null,
    icon: '',
    layout: '',
    src: '',
    width: null
}

CardImage.propTypes = {
    adaptColor: PropTypes.bool,
    color: PropTypes.string,
    cover: PropTypes.bool,
    height: PropTypes.any,
    icon: PropTypes.string,
    layout: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.any
}

export default CardImage;