import React, { Children, cloneElement, isValidElement } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';

const TagGroup = props => {
    const { children, className, color } = props;
    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child) && !child.props.color) {
            return cloneElement(child, { color });
        } else {
            return child;
        }
    });

    return (
        <div className={`${className} fab-tag-group-wrapper ${css(TagGroupStyles({ framework: 'react', props }))}`}>
            <div className="fab-tag-group">
                {childrenWithProps}
            </div>
        </div>
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