import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Component } from '../Component/Component';

// Styles
import { ListStyles } from '@fabula/core/styles/components/list/list';

export const List = props => {
    const { children, divider, color, elRef, onClickItem, padding, striped, ...rest } = props;
    const ref = useRef(null);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { divider, padding, parentColor: color, parentOnClick: onClickItem, striped });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={ListStyles}
            wrapper="fab-list-wrapper">
            <div
                ref={elRef || ref}
                data-fab-wrapper="list">
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