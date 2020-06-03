import React from 'react';
import { css } from 'emotion';

// Styles
import LinkStyles from '@fabula/core/theme/styles/Link';

const Link = props => {
    const { className, label, url, ...rest } = props;
    const styles = css(LinkStyles({ framework: 'react', props }));

    return (
        <a className={`fab-link ${styles} ${className}`} href={url} {...rest}>
            {label}
        </a>
    )
}

Link.defaultProps = {
    underline: true
}

export default Link;