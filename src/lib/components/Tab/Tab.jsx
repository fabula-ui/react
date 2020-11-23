import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';

const Tab = props => {
    const {
        activeTab,
        children,
        elRef,
        handleActive,
        href,
        label,
        link,
        name,
        onChange,
        onClick,
        rel,
        scope,
        target,
        ...rest
    } = props;
    const [active, setActive] = useState(props.active);
    const ref = useRef(null);

    useEffect(() => {
        if (activeTab) {
            setActive(activeTab === name);
        }
    }, [activeTab, name]);

    const handleClick = () => {
        if (handleActive) { handleActive(name); }
        if (onChange) {
            onChange({
                scope,
                tab: name
            });
        }
        if (onClick) { onClick(); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            rest={rest}
            styles={TabStyles}
            wrapper="fab-tab">
            {!href && !link && <button onClick={handleClick} data-active={active} data-name={name} data-fab-component="tab" ref={elRef || ref}>{label || children}</button>}
            {(!!href || !!link) && <a href={href || link} rel={rel} target={target} data-active={active} data-name={name} data-fab-component="tab" ref={elRef || ref}>{label || children}</a>}
        </Component>
    )
}

Tab.defaultProps = {
    active: false,
    activeColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    hasProperty: {
        expand: true
    },
    href: '',
    inactiveTextColor: '',
    invert: false,
    layout: '',
    link: '',
    name: '',
    outline: false,
    rel: '',
    rounded: false,
    scope: '',
    stacked: false,
    target: '',
    type: '',
}

Tab.propTypes = {
    active: PropTypes.bool,
    activeColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    expand: PropTypes.any,
    faded: PropTypes.bool,
    href: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    invert: PropTypes.bool,
    layout: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    outline: PropTypes.bool,
    rel: PropTypes.string,
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
}

export default Tab;