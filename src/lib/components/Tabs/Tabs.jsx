import React, {Children, cloneElement, useState} from 'react';
import { css } from 'emotion';

// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';

const Tabs = props => {
    const { children, className, ...rest } = props;
    const [activeTab, setActiveTab] = useState(props.activeTab);
    const childrenWithProps = Children.map(children, child => cloneElement(child, { ...rest, activeTab, setActiveTab }));
    const classes = ['fab-tabs-wrapper', className || '', css(TabsStyles({ framework: 'react', props }))];

    return (
        <div className={classes.join(' ')}>
            <div className="fab-tabs">
                {childrenWithProps}
            </div>
        </div>
    )
}

export default Tabs;