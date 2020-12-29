import React from 'react';

// Components
import { Content } from '../Content/Content';

export const TabContent = props => {
    const { children } = props;

    return (
        <Content contentClassName="fab-tab-content" {...props}>
            {children}
        </Content>
    )
}