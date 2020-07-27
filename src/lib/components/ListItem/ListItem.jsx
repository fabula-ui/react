import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const ListItem = props => {
    const { button, children, divider, link, onClick, parentColor, parentOnClick, striped, target } = props;
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
            {(!!button || !!onClick || !!parentOnClick && !link) &&
                <button data-divider={divider} data-fab-component="listItem" data-striped={striped} onClick={handleClick} ref={elRef}>
                    {children}
                </button>
            }

            {!!link &&
                <a data-divider={divider} data-fab-component="listItem" data-striped={striped} href={link} target={target} ref={elRef}>
                    {children}
                </a>
            }

            {(!button && !onClick && !parentOnClick && !link) &&
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
    item: null,
    link: '',
    padding: false,
    striped: false,
    target: '_blank'
}

ListItem.propTypes = {
    button: PropTypes.bool,
    color: PropTypes.string,
    divider: PropTypes.bool,
    item: PropTypes.any,
    link: PropTypes.string,
    padding: PropTypes.bool,
    striped: PropTypes.bool,
    target: PropTypes.string,
}

export default ListItem;