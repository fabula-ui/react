import React from 'react';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/theme/styles/List';

const List = props => {
    const { children, className } = props;
    const listClass = className || '';

    return (
        <div className={`fab-list-wrapper ${css(ListStyles({ framework: 'react', props }))} ${listClass}`}>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default List;