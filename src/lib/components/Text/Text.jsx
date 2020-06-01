import React, { createElement } from 'react';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';

const Text = props => {
    const { children, className, p, small, strong, utils } = props;

    return (
        <div className={`${className} fab-text ${css(TextStyles({ framework: 'react', props, utils }))}`}>
            {!p && !small && !strong && <span>{children}</span>}
            {!!p && <p>{children}</p>}
            {!!small && <small>{children}</small>}
            {!!strong && <strong>{children}</strong>}
        </div>
    )
}

// const BaseText = props => {
//     const { children, tag } = props;
//     const element = createElement(tag, {}, children);

//     return (
//         <div className={`fab-text ${css(TextStyles({ framework: 'react', props }))}`} data-multiple-children={true}>
//             {element}
//         </div>
//     )
// }

// const Text = {
//     p: props => <BaseText tag="p" {...props} />,
//     small: props => <BaseText tag="small" {...props} />,
//     span: props => <BaseText tag="span" {...props} />,
//     strong: props => <BaseText tag="strong" {...props} />,
// }

export default Text;