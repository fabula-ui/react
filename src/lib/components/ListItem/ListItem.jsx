import React from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';

// Styles
import ListItemStyles from '@fabula/core/theme/styles/List';

const ListItem = props => {
    const { children, className, onClick, ...rest } = props;
    const styles = css(ListItemStyles({ framework: 'react', props }));

    return (
        <div className={`fab-list-item ${className} ${styles}`} data-button={!!onClick} data-fab-component="list-item" {...rest}>
            {!onClick && children}

            {!!onClick && <Button data-button={!!onClick} onClick={onClick} {...rest}>
                {children}
            </Button>}
        </div>
    )
}

export default ListItem;