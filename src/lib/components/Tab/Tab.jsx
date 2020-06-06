import React, { useEffect, useState } from 'react';
import { css } from 'emotion';

// Styles
import TabStyles from '@fabula/core/theme/styles/Tab';

const Tab = props => {
    const { activeTab, children, className, label, link, name, setActiveTab, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-tab', className || '', css(TabStyles({ framework: 'react', props }))];

    useEffect(() => {
        if (activeTab) { setActive(activeTab === name); }
    }, [activeTab]);

    const handleClick = () => {
        setActiveTab(name);
    }

    return (
        <div className={classes.join(' ')} data-active={active}>
            {!link && <button onClick={handleClick}>{label || children}</button>}
            {link && <a className="fab-tab" href={link} {...rest}>{label || children}</a>}
        </div>
    )
}

export default Tab;