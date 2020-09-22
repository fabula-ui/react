import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';

const Tabs = props => {
    const {
        active,
        activeColor,
        activeBorderColor,
        activeFillColor,
        activeTextColor,
        children,
        clear,
        color,
        expand,
        faded,
        inactiveFillColor,
        inactiveTextColor,
        invert,
        layout,
        onChange,
        outline,
        rounded,
        scope,
        stacked,
        type
    } = props;
    const [activeTab, setActiveTab] = useState(active);
    const elRef = useRef(null);

    // Callbacks
    const toggleContent = useCallback(segment => {
        const allOtherContent = document.querySelectorAll(`.fab-content[data-scope='${scope}']:not([data-name='${segment}'])`);
        const targetContent = document.querySelectorAll(`.fab-content[data-scope='${scope}'][data-name='${segment}']`);

        if (allOtherContent.length) {
            for (let i = 0; i < allOtherContent.length; i++) {
                const other = allOtherContent[i];

                other.setAttribute('data-active', 'false');
            }
        }

        if (targetContent.length) {
            for (let i = 0; i < targetContent.length; i++) {
                const target = targetContent[i];

                target.setAttribute('data-active', 'true');
            }
        }
    }, [scope]);

    const handleActive = useCallback(tab => {
        setActiveTab(tab);
        if (tab && scope) { toggleContent(tab); }
        if (onChange) {
            onChange({
                scope,
                tab
            });
        }
    }, [onChange, scope, toggleContent]);

    // Hooks
    useEffect(() => {
        handleActive(active);
    }, [active, handleActive]);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, {
        activeBorderColor,
        activeColor,
        activeFillColor,
        activeTextColor,
        activeTab,
        clear,
        color,
        expand,
        faded,
        handleActive,
        inactiveFillColor,
        inactiveTextColor,
        invert,
        layout,
        onChange,
        outline,
        rounded,
        scope,
        stacked,
        type
    }));

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={TabsStyles}
            wrapper="fab-tabs-wrapper">
            <div ref={elRef}>
                <div className="fab-tabs">
                    {childrenWithProps}
                </div>
            </div>
        </Component>
    )
}

Tabs.defaultProps = {
    activeColor: '',
    activeFillColor: '',
    activeTextColor: '',
    clear: false,
    color: '',
    expand: false,
    faded: false,
    inactiveFillColor: '',
    inactiveTextColor: '',
    invert: false,
    layout: 'horizontal',
    outline: false,
    rounded: false,
    scope: '',
    stacked: false,
    type: ''
}

Tabs.propTypes = {
    activeColor: PropTypes.string,
    activeFillColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    inactiveFillColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    invert: PropTypes.bool,
    layout: PropTypes.string,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    scope: PropTypes.string,
    stacked: PropTypes.bool,
    type: PropTypes.string,
}

export default Tabs;