import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const ListItem = props => {
    const { button, children, className, divider, link, onClick, parentOnClick, striped, target } = props;
    const classes = ['fab-list-item', css(ListItemStyles({ framework: 'react', props })), className || ''];

    // Methods
    const handleClick = () => {
        if (onClick) { onClick(); }
        if (parentOnClick) { parentOnClick(); }
    }

    if (!!button || !!onClick || !!parentOnClick) {
        return (
            <button className={classes.join(' ')} data-divider={divider} data-fab-component="listItem" data-striped={striped} onClick={handleClick}>
                {children}
            </button>
        )
    } else if (!!link) {
        return (
            <a className={classes.join(' ')} data-divider={divider} data-fab-component="listItem" data-striped={striped} href={link} target={target}>
                {children}
            </a>
        )
    } else {
        return (
            <div className={classes.join(' ')} data-divider={divider} data-fab-component="listItem" data-striped={striped} onClick={handleClick}>
                {children}
            </div>
        )
    }
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