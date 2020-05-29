import React, { useContext } from 'react';
import { css } from 'emotion';

// Context
import { FabulaProviderContext } from '../../providers/FabulaProvider';

// Styles
import TagStyles from '@fabula/core/theme/styles/Tag';

const Tag = props => {
    const { children, link, target, title } = props;
    const { utils } = useContext(FabulaProviderContext);

    return (
        <div className={`fab-tag-wrapper ${css(TagStyles({ framework: 'react', props, utils }))}`}>
            {link && <a className="fab-tag" href={link} target={target} title={title}>{children}</a>}
            {!link && <div className="fab-tag">{children}</div>}
        </div>
    )
}

export default Tag;