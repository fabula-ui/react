import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

const List = props => {
    const { children, className, color } = props;
    const listClass = className || '';
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { color });
        } else {
            return child;
        }
    });

    return (
        <div className={`fab-list-wrapper ${css(ListStyles({ framework: 'react', props }))} ${listClass}`}>
            <div className="fab-list">
                {childrenWithProps}
            </div>
        </div>
    )
}

List.defaultProps = {
    divider: true
}

export default List;