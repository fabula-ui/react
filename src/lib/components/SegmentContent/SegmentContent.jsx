import React from 'react';
import PropTypes from 'prop-types';

// Components
import Content from '../Content/Content';

const SegmentContent = props => {
    const { children } = props;

    return (
        <Content contentClassName="fab-segment-content" {...props}>
            {children}
        </Content>
    )
}

SegmentContent.defaultProps = {
    active: false,
    name: '',
    scope: ''
}

SegmentContent.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    scope: PropTypes.string
}

export default SegmentContent;