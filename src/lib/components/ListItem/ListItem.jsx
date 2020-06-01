import React from 'react';
import { css } from 'emotion';

// Styles
import ListItemStyles from '@fabula/core/theme/styles/List';

const ListItem = props => {
    const { children, className, utils } = props;
    
    return (
        <div className={`${className} fab-list-item ${css(ListItemStyles({ framework: 'react', props, utils }))}`} data-fab-wrapper="list-item">
            {children}
        </div>
    )
}

export default ListItem;