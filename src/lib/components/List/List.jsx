import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

const List = props => {
    const { children, divider, color, padding, striped } = props;
    const elRef = useRef(null);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { divider, padding, parentColor: color, striped });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ListStyles}
            wrapper="fab-list-wrapper">
            <div ref={elRef}>
                <div className="fab-list" data-fab-component="list">
                    {childrenWithProps}
                </div>
            </div>
        </Component>
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