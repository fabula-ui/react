import React, { Children, cloneElement, useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';

const Tabs = props => {
    const { children, className, scope, ...rest } = props;
    const [active, setActive] = useState(props.active);
    const classes = ['fab-tabs-wrapper', className || '', css(TabsStyles({ framework: 'react', props }))];

    // Methods
    const handleActive = tab => {
        setActive(tab);
        if (tab && scope) { toggleContent(tab); }
    }

    const toggleContent = segment => {
        const allOtherContent = document.querySelectorAll(`.fab-content[data-scope='${scope}']:not([data-name='${segment}'])`);
        const targetContent = document.querySelector(`.fab-content[data-scope='${scope}'][data-name='${segment}']`);

        if (allOtherContent.length) {
            allOtherContent.forEach(other => {
                other.setAttribute('data-active', 'false');
            });
        }

        if (targetContent) {
            targetContent.setAttribute('data-active', 'true');
        }
    }

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { ...rest, activeTab: active, handleActive }));

    return (
        <div className={classes.join(' ')}>
            <div className="fab-tabs">
                {childrenWithProps}
            </div>
        </div>
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