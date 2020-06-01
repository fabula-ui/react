import React from 'react';
import { css } from 'emotion';

// Styles
import CardImageStyles from '@fabula/core/theme/styles/CardImage';

const CardImage = props => {
    const { src, utils } = props;
    
    return (
        <div className={`fab-card-image ${css(CardImageStyles({ framework: 'react', props, utils }))}`}>
            {!!src && <img src={src} />}
        </div>
    )
}

export default CardImage;