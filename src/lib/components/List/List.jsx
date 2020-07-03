import React from 'react';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

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

List.defaultProps = {
    divider: true
}

export default List;