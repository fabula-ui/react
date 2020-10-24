import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const ListItem = props => {
    const { button, children, divider, elRef, href, onClick, parentOnClick, striped, target, ...rest } = props;
    const ref = useRef(null);
    const restProps = getComponentProps(rest);

    // Methods
    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={ListItemStyles}
            wrapper="fab-list-item">
            {((!!button || !!onClick || !!parentOnClick) && !href) &&
                <button data-divider={divider} data-striped={striped} onClick={handleClick} ref={elRef || ref} data-fab-component="listItem" {...restProps}>
                    {children}
                </button>
            }

            {!!href &&
                <a data-divider={divider} data-striped={striped} href={href} target={target} ref={elRef || ref} data-fab-component="listItem" {...restProps}>
                    {children}
                </a>
            }

            {(!button && !onClick && !parentOnClick && !href) &&
                <div data-divider={divider} data-striped={striped} onClick={handleClick} ref={elRef || ref} data-fab-component="listItem" {...restProps}>
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