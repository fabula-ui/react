import React, { createElement } from 'react';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';

const Text = props => {
    const { children, className, color, content, p, small, strong } = props;

    return (
        <div className={`${className} fab-text ${css(TextStyles({ framework: 'react', props }))}`} data-color={color}>
            {!content && !p && !small && !strong && <span>{children}</span>}
            {!!content && <span>{content}</span>}
            {!!p && <p>{children}</p>}
            {!!small && <small>{children}</small>}
            {!!strong && <strong>{children}</strong>}
        </div>
    )
}

export default Text;