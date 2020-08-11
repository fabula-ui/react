import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const ListItem = props => {
    const { button, children, divider, href, onClick, parentOnClick, striped, target } = props;
    const elRef = useRef(null);

    // Methods
    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ListItemStyles}
            wrapper="fab-list-item">
            {(!!button || !!onClick || !!parentOnClick && !href) &&
                <button data-divider={divider} data-fab-component="listItem" data-striped={striped} onClick={handleClick} ref={elRef}>
                    {children}
                </button>
            }

            {!!href &&
                <a data-divider={divider} data-fab-component="listItem" data-striped={striped} href={href} target={target} ref={elRef}>
                    {children}
                </a>
            }

            {(!button && !onClick && !parentOnClick && !href) &&
                <div data-divider={divider} data-fab-component="listItem" data-striped={striped} onClick={handleClick} ref={elRef}>
                    {children}
                </div>
            }
        </Component>
    )

}

ListItem.defaultProps = {
    button: false,
    color: '',
    divider: true,
    href: '',
    item: null,
    padding: false,
    striped: false,
    target: '_blank'
}

ListItem.propTypes = {
    button: PropTypes.bool,
    color: PropTypes.string,
    divider: PropTypes.bool,
    href: PropTypes.string,
    item: PropTypes.any,
    padding: PropTypes.bool,
    striped: PropTypes.bool,
    target: PropTypes.string,
}

export default ListItem;