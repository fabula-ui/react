import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';

const Tab = props => {
    const { activeTab, children, className, handleActive, label, link, name, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-tab', className || '', css(TabStyles({ framework: 'react', props }))];

    useEffect(() => {
        if (activeTab) {
            setActive(activeTab === name);
        }
    }, [activeTab]);

    const handleClick = () => {
        handleActive(name);
    }

    return (
        <div className={classes.join(' ')} data-active={active}>
            {!link && <button onClick={handleClick}>{label || children}</button>}
            {link && <a className="fab-tab" href={link} {...rest}>{label || children}</a>}
        </div>
    )
}

Tab.defaultProps = {
    active: false,
    activeColor: '',
    activeFillColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    href: '',
    inactiveFillColor: '',
    inactiveTextColor: '',
    invert: false,
    layout: '',
    link: '',
    name: '',
    outline: false,
    rounded: false,
    scope: '',
    stacked: false,
    target: '',
    type: '',
}

Tab.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    activeFillColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    href: PropTypes.string,
    inactiveFillColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    invert: PropTypes.bool,
    layout: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
}

export default Tab;