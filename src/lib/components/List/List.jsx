import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

const List = props => {
    const { children, className, divider, color, padding, striped } = props;
    const classes = ['fab-list-wrapper', css(ListStyles({ framework: 'react', props })), className || ''];
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { color, divider, padding, striped });
        } else {
            return child;
        }
    });

    return (
        <div className={classes.join(' ')}>
            <div className="fab-list">
                {childrenWithProps}
            </div>
        </div>
    )
}

List.defaultProps = {
    color: '',
    divider: true,
    padding: false,
    striped: false
}

List.propTypes = {
    color: PropTypes.string,
    divider: PropTypes.bool,
    padding: PropTypes.bool,
    striped: PropTypes.bool
}

export default List;