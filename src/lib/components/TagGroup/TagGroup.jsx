import React from 'react';
import { css } from 'emotion';

// Styles
import TagGroupStyles from '@fabula/core/theme/styles/TagGroup';

const TagGroup = props => {
    const { children, className } = props;

    return (
        <div className={`${className} fab-tag-group-wrapper ${css(TagGroupStyles({ framework: 'react', props }))}`}>
            <div className="fab-tag-group">
                {children}
            </div>
        </div>
    )
}

export default TagGroup;