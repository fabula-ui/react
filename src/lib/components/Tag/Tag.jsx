import React, { useContext } from 'react';
import { css } from 'emotion';

// Styles
import TagStyles from '@fabula/core/theme/styles/Tag';

const Tag = props => {
    const { children, link, placement, target, title, utils } = props;

    return (
        <div className={`fab-tag-wrapper ${css(TagStyles({ framework: 'react', props, utils }))}`} data-placement-x={placement.x} data-placement-y={placement.y}>
            {link && <a className="fab-tag" href={link} target={target} title={title}>{children}</a>}
            {!link && <div className="fab-tag">{children}</div>}
        </div>
    )
}

Tag.defaultProps = {
    placement: {
        x: 'right',
        y: 'bottom'
    }
}

export default Tag;