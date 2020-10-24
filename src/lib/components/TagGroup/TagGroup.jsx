import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';

const TagGroup = props => {
    const { children, color, elRef, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child) && !child.props.color) {
            return cloneElement(child, { color });
        } else {
            return child;
        }
    });

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={TagGroupStyles}
            wrapper="fab-tag-group-wrapper">
            <div ref={elRef || ref} {...restProps}>
                <div className="fab-tag-group">
                    {childrenWithProps}
                </div>
            </div>
        </Component>
    )
}

TagGroup.defaultProps = {
    color: '',
    spacing: null
}

TagGroup.propTypes = {
    color: PropTypes.string,
    spacing: PropTypes.any
}

export default TagGroup;