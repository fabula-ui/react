import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

const List = props => {
    const { children, divider, color, elRef, padding, striped, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { divider, padding, parentColor: color, striped });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ListStyles}
            wrapper="fab-list-wrapper">
            <div ref={elRef || ref} data-fab-wrapper="list" {...restProps}>
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