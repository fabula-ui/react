import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';

const Tab = props => {
    const { activeTab, children, elRef, handleActive, href, label, link, name, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    useEffect(() => {
        if (activeTab) {
            setActive(activeTab === name);
        }
    }, [activeTab, name]);

    const handleClick = () => {
        handleActive(name);
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={TabStyles}
            wrapper="fab-tab">
            <div data-active={active} ref={elRef || ref} data-fab-wrapper="tab">
                {!href && !link && <button onClick={handleClick} data-fab-component="tab">{label || children}</button>}
                {(!!href || !!link) && <a href={href || link} data-fab-component="tab" {...restProps}>{label || children}</a>}
            </div>
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
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
}

export default Tab;