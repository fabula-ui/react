import React from 'react';
import { css } from 'emotion';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

const Link = props => {
    const { children, className, href, label, url, ...rest } = props;
    const styles = css(LinkStyles({ framework: 'react', props }));

    return (
        <a className={`fab-link ${styles} ${className}`} href={href || url} {...rest}>
            {label || children}
        </a>
    )
}

Link.defaultProps = {
    underline: true
}

export default Link;